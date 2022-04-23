import React, { useContext } from 'react';
import { CartContext } from '../../contexts';
import './style.css';
import { Product } from '../../interfaces';
import { CURRENCY_TYPE } from '../../constants';

export const Cart = () => {
    const cartContext = useContext(CartContext);

    let cartItemNumber = 0;
    cartContext.cart.reduce((count, curItem) => {
        cartItemNumber = count + curItem.quantity;
        return cartItemNumber;
    }, 0);

    let subTotal = 0;
    cartContext.cart.reduce((cost, curItem) => {
        subTotal = cost + curItem.product.price * curItem.quantity;
        return subTotal;
    }, 0);

    return (
        <div className='cart'>
            <div className='cart__list'>
                {cartContext.cart.length <= 0 && <div>No Item in the Cart!</div>}
                <ul>
                    {cartContext.cart.map((cartItem: { product: Product; quantity: number }) => (
                        <li key={cartItem.product['_id']}>
                            <div className='cart__item'>
                                <div className='cart__item-image'>
                                    <img
                                        src={cartItem.product.img}
                                        style={{ height: '120px' }}
                                        alt={cartItem.product.name}
                                    />
                                </div>
                                <div className='cart__item-about'>
                                    <h1 className='cart__item-title'>{cartItem.product.name}</h1>
                                    <h3 className='cart__item-brand'>{cartItem.product.brand}</h3>
                                </div>
                                <div className='cart__item-prices'>
                                    <div className='amount'>{cartItem.product.price} {CURRENCY_TYPE}/pcs</div>
                                </div>
                                <div className='cart__item-prices-total'>
                                    <div
                                        className='amount'>{CURRENCY_TYPE}{cartItem.product.price * cartItem.quantity}</div>
                                </div>
                                <div className='cart__item-counter'>
                                    <div>
                                        <button
                                            className='btn'
                                            onClick={() =>
                                                cartContext.addProductToCart(cartItem.product)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className='count'>{cartItem.quantity}</div>
                                    <div>
                                        <button
                                            className='btn'
                                            onClick={() =>
                                                cartContext.removeProductFromCart(
                                                    cartItem.product['_id'],
                                                )
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
            {cartContext.cart.length > 0 && (
                <div className='cart__checkout'>
                    <div className='cart__checkout-total'>
                        <div>
                            <div className='cart__checkout-total-subtotal'>Sub-Total</div>
                            <div className='cart__checkout-total-items'>{cartItemNumber} items</div>
                        </div>
                        <div className='cart__checkout-total-amount'>{CURRENCY_TYPE}{subTotal}</div>
                    </div>
                    <div>
                        <button className='cart__checkout-button'>Go to payment</button>
                    </div>
                </div>
            )}
        </div>
    );
};
