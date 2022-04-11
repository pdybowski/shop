import React from 'react';
import { Product } from '../../../interfaces';
import './style.css';

export const ProductItem = ({ img, name, description, price, _id }: Product): JSX.Element => {
    return (
        <div className="product__item">
            <div className="product__header">
                <img className='product__image' src={img} alt={name}/>
            </div>
            <div className="product__body">
                <div className="product__title">
                    <h4>{name}</h4>
                </div>
                <div className="product__description">
                    <p className="">{description}</p>
                </div>
                <div className="product__price">
                    <h4>${price}</h4>
                </div>
            </div>
            <div className="product__buttons">
                {/* <Link to={`/products/${id}`}> */}
                <button className="product__button product__button--view" type="button">
                    VIEW
                </button>
                {/* </Link> */}
                <button className="product__button product__button--cart" type="button">
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};
