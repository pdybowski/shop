import React, { useContext, useEffect } from 'react';
import { Product } from '../../../interfaces';
import './style.css';
import { CartContext } from '../../../contexts';
import { CURRENCY_TYPE } from '../../../constants';

export const ProductItem = (item: Product): JSX.Element => {
    const { img, name, description, price, _id } = item;

    const cartContext = useContext(CartContext);

    useEffect(() => {
        console.log('Please wait...');
    }, [cartContext]);

    return (
        <div className="product__item">
            <div className="product__header">
                <img className="product__image" src={img} alt={name} />
            </div>
            <div className="product__body">
                <div className="product__title">
                    <h4>{name}</h4>
                </div>
                <div className="product__description">
                    <p className="">{description}</p>
                </div>
                <div className="product__price">
                    <h4>{CURRENCY_TYPE}{price}</h4>
                </div>
            </div>
            <div className="product__buttons">
                {/* <Link to={`/products/${id}`}> */}
                <button className="product__button product__button--view" type="button">
                    VIEW
                </button>
                {/* </Link> */}
                <button
                    className="product__button product__button--cart"
                    type="button"
                    onClick={() => cartContext.addProductToCart(item)}
                >
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};
