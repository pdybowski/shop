import React, { useContext } from 'react';
import { CartContext } from '../../contexts';
import './style.css';
import { Product } from '../../interfaces';

export const Cart = () => {
    const cartContext = useContext(CartContext);

    return (
        <div>
            <div className="cart">
                {cartContext.cart.length <= 0 && <p>No Item in the Cart!</p>}
                <ul>
                    {cartContext.cart.map((cartItem: { product: Product; quantity: number }) => (
                        <li key={cartItem.product['_id']}>
                            <div>
                                <strong>{cartItem.product.name}</strong> - ${cartItem.product.price}{' '}
                                ({cartItem.quantity})
                            </div>
                            <div>
                                <button
                                    onClick={() => cartContext.addProductToCart(cartItem.product)}
                                >
                                    +
                                </button>
                                <button
                                    onClick={() =>
                                        cartContext.removeProductFromCart(cartItem.product['_id'])
                                    }
                                >
                                    -
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
