import { useDispatch } from 'react-redux';
import { CURRENCY_TYPE } from '../../../../constants';
import { removeProductAction, addProductToCartAction } from '../../../../services/actions';

import './style.css';

interface Props {
    cartItem: any;
}
export const CartItem = ({ cartItem }: Props) => {
    const dispatch = useDispatch();

    return (
        <li>
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
                            className="btn-left"
                            onClick={() => dispatch(removeProductAction(cartItem.product['_id']))}
                        >
                            -
                        </button>
                    </div>
                    <div className="count">{cartItem.quantity}</div>
                    <div>
                        <button
                            className="btn-right"
                            onClick={() => dispatch(addProductToCartAction(cartItem.product))}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};
