import { useDispatch, useSelector } from 'react-redux';
import store from '../../../../../services/store';
import {
    selectSubtotalAmount,
    selectItemsNumber,
} from '../../../../../services/selectors/cartSelectors';
import { addProduct, removeProduct } from '../../../../../services/actions/cartActions';
import { Product } from '../../../../../models';
import { CURRENCY_TYPE } from '../../../../../constants';
import { Button } from '../../../../shared';
import { ButtonMode } from '../../../../shared/button/interfaces';
import './style.css';

export const Cart = () => {
    const cartState = store.getState().shoppingCart;
    const subtotalAmount = selectSubtotalAmount(cartState);
    const itemsNumber = selectItemsNumber(cartState);

    useSelector(() => cartState.cart.map((item) => item));

    const dispatch = useDispatch();

    return (
        <div className="cart">
            <div className="cart__list">
                {cartState.cart.length <= 0 && <div>No Item in the Cart!</div>}
                <ul>
                    {cartState.cart.map((cartItem: { product: Product; quantity: number }) => (
                        <li key={cartItem.product['_id']}>
                            <div className="cart__item">
                                <div className="cart__item-image">
                                    <img
                                        src={cartItem.product.img}
                                        style={{ height: '120px' }}
                                        alt={cartItem.product.name}
                                    />
                                </div>
                                <div className="cart__item-about">
                                    <h1 className="cart__item-title">{cartItem.product.name}</h1>
                                    <h3 className="cart__item-brand">{cartItem.product.brand}</h3>
                                </div>
                                <div className="cart__item-prices">
                                    <div className="amount">
                                        {cartItem.product.price} {CURRENCY_TYPE}/pcs
                                    </div>
                                </div>
                                <div className="cart__item-prices-total">
                                    <div className="amount">
                                        {CURRENCY_TYPE}
                                        {cartItem.product.price * cartItem.quantity}
                                    </div>
                                </div>
                                <div className="cart__item-counter">
                                    <div>
                                        <button
                                            className="btn"
                                            onClick={() => dispatch(addProduct(cartItem.product))}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="count">{cartItem.quantity}</div>
                                    <div>
                                        <button
                                            className="btn"
                                            onClick={() =>
                                                dispatch(removeProduct(cartItem.product['_id']))
                                            }
                                        >
                                            -
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {cartState.cart.length > 0 && (
                <div className="cart__checkout">
                    <div className="cart__checkout-total">
                        <div>
                            <div className="cart__checkout-total-subtotal">Sub-Total</div>
                            <div className="cart__checkout-total-items">{itemsNumber} items</div>
                        </div>
                        <div className="cart__checkout-total-amount">
                            {CURRENCY_TYPE}
                            {subtotalAmount}
                        </div>
                    </div>
                    <div>
                        <Button type="button" mode={ButtonMode.PRIMARYBIG}>
                            Go to payment
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};
