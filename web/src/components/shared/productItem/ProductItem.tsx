import React, { useContext, useEffect } from 'react';
import { Product } from '../../../interfaces';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../contexts';
import { CURRENCY_TYPE } from '../../../constants';

import './style.css';
import { EllipsisWrapper } from '../ellipsisWrapper/EllipsisWrapper';

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
                    {name.length > 30 ? (
                        <EllipsisWrapper tooltip={name}>
                            <h4>{name}</h4>
                        </EllipsisWrapper>
                    ) : (
                        <h4>{name}</h4>
                    )}
                </div>
                <div className="product__description">
                    {description.length > 200 ? (
                        <EllipsisWrapper tooltip={description}>{description}</EllipsisWrapper>
                    ) : (
                        description
                    )}
                </div>
                <div className="product__price">
                    <h4>
                        {CURRENCY_TYPE}
                        {price}
                    </h4>
                </div>
            </div>
            <div className="product__buttons">
                <button className="product__button product__button--view" type="button">
                    <Link className="product__button-link" to={`/products/${_id}`}>
                        VIEW
                    </Link>
                </button>
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
