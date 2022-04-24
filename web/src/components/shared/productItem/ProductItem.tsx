import React, { useContext, useEffect } from 'react';
import { Product, RoutePaths } from '../../../models';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../contexts';
import { CURRENCY_TYPE } from '../../../constants';

import { EllipsisWrapper } from '../ellipsisWrapper/EllipsisWrapper';

import './style.css';

export const ProductItem = (item: Product): JSX.Element => {
    const { img, name, description, price, _id } = item;

    const cartContext = useContext(CartContext);

    useEffect(() => {
        console.log('Please wait...');
    }, [cartContext]);

    return (
        <div className="product__item">
            <div className="product__header">
                <img className="product__image" src={img} alt="image" />
            </div>
            <div>
                <div className="product__body">
                    <div className="product__title">
                        <EllipsisWrapper tooltip={name} textLength={1}>
                            <h4>{name}</h4>
                        </EllipsisWrapper>
                    </div>
                    <div className="product__description">
                        <EllipsisWrapper tooltip={description} textLength={1}>
                            {description}
                        </EllipsisWrapper>
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
                        <Link className="product__button-link" to={`${RoutePaths.Product}/${_id}`}>
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
        </div>
    );
};
