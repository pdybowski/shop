import { useState, useContext } from 'react';
import store from '../../../services/store';
import { Product } from '../../../models';
import { selectSubtotalAmount, selectItemsNumber } from '../../../services/selectors/cartSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { CartItem } from './CartItem';
import { Api } from '../../../Api';
import { Popup } from '../../shared';
import { Spinner } from '../../shared';
import { NotificationContext } from '../../../contexts';
import { NotificationMode } from '../../../models';
import { Button, BtnMode } from '../../shared';
import { CURRENCY_TYPE } from '../../../constants';
import { removeAllProductsAction } from '../../../services/actions';

export const CartPage = () => {
    const cartStore = store.getState().cart;
    const subtotalAmount = selectSubtotalAmount(cartStore);
    const itemsNumber = selectItemsNumber(cartStore);
    useSelector(() => cartStore.cart.map((cartItem) => cartItem));
    const dispatch = useDispatch();

    const [showPopup, setShowPopup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { addNotification } = useContext(NotificationContext);

    interface Props {
        _id?: string;
        count: number;
    }

    const makePayment = async (url: string, body: any) => {
        const api = new Api();

        try {
            const response = await api.put(url, body);
            if (response) {
                setShowPopup(true);
                dispatch(removeAllProductsAction());
            }
        } catch (err: any) {
            addNotification({
                mode: NotificationMode.DANGER,
                title: 'Sorry!',
                message: err.message,
            });
        } finally {
            setIsLoading(false);
        }
    };
    const handlePayment = () => {
        setIsLoading(true);
        let products: Props[] = [];
        cartStore.cart.map((item) =>
            item.product._id
                ? products.push({ _id: item.product._id, count: item.quantity })
                : addNotification({
                      mode: NotificationMode.DANGER,
                      title: 'Sorry!',
                      message: 'Some of the products in cart are not available',
                  })
        );
        setTimeout(() => {
            makePayment('/product/buy', products);
        }, 2000);
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
                    <div>
                        We have already sent the confirmation on your e-mail. Thank you for your
                        purchase!
                    </div>
                }
                handleClose={closePopup}
            ></Popup>
        </main>
    );
};
