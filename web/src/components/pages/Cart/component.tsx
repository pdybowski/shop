import { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import store from '../../../services/store';
import { Product } from '../../../models';
import { selectSubtotalAmount, selectItemsNumber } from '../../../services/selectors/cartSelectors';
import { NotificationContext } from '../../../contexts';
import { NotificationMode } from '../../../models';
import { Button, BtnMode } from '../../shared';
import { CURRENCY_TYPE } from '../../../constants';
import { removeAllProductsAction } from '../../../services/actions';

import { Api } from '../../../Api';
import { Popup } from '../../shared';
import { Spinner } from '../../shared';

import { CartItem } from './CartItem';

export const CartPage = () => {
    const cartStore = store.getState().cart;
    const subtotalAmount = selectSubtotalAmount(cartStore);
    const itemsNumber = selectItemsNumber(cartStore);
    useSelector(() => cartStore.cart.map((cartItem) => cartItem));
    const dispatch = useDispatch();

    const [showPopup, setShowPopup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { addNotification } = useContext(NotificationContext);

    const api = new Api();

    interface Props {
        _id: string;
        count: number;
    }

    const handlePayment = async () => {
        setIsLoading(true);

        try {
            const products = cartStore.cart.map((item) => ({
                _id: item.product._id,
                count: item.quantity,
            }));
            const response = await api.put('product/buy', products);
            if (response === 'OK') {
                setShowPopup(true);
                dispatch(removeAllProductsAction());
            }
        } catch (err: any) {
            addNotification({
                mode: NotificationMode.DANGER,
                title: 'Payment',
                message: err.message,
            });
        } finally {
            setIsLoading(false);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <main>
            <div className="cart">
                <div className="cart__list">
                    {itemsNumber <= 0 && <div>Cart is empty!</div>}
                    <ul>
                        {cartStore.cart.map((cartItem: { product: Product; quantity: number }) => (
                            <CartItem key={cartItem.product['_id']} cartItem={cartItem} />
                        ))}
                    </ul>
                </div>
                {cartStore.cart.length > 0 && (
                    <div className="cart__checkout">
                        <div className="cart__checkout-total">
                            <div>
                                <div className="cart__checkout-total-subtotal">Sub-Total</div>
                                <div className="cart__checkout-total-items">
                                    {itemsNumber} items
                                </div>
                            </div>
                            <div className="cart__checkout-total-amount">
                                {CURRENCY_TYPE}
                                {subtotalAmount}
                            </div>
                        </div>
                        <div>
                            <Button type="button" mode={BtnMode.PRIMARYBIG} onClick={handlePayment}>
                                {isLoading ? (
                                    <Spinner style={{ width: 30, height: 30 }} />
                                ) : (
                                    `Go to payment`
                                )}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
            <Popup
                headerText="Payment succeeded!"
                isDisplayed={showPopup}
                children={
                    <p>
                        We have already sent the confirmation on your e-mail. Thank you for your
                        purchase!
                    </p>
                }
                handleClose={closePopup}
            ></Popup>
        </main>
    );
};
