import React from 'react';
import { ReadonlyProductArray } from '../../../interfaces/product';
import './style.css';

export const ProductItem = ({ img, name, description, price, id }: ReadonlyProductArray): JSX.Element => {
    return (
        <div className="item">
            <div className="item__header">
                <img className="item__header__image" src={img} alt={name}></img>

            </div>
            <div className="item__body">
                <div className="item__body__title">
                    <h4>{name}</h4>
                </div>
                <div className="item__body__description">
                    <p className="">{description}</p>
                </div>
                <div className="item__body__price">
                    <h4>${price}</h4>
                </div>
            </div>
            <div className="item__buttons">
                {/* <Link to={`/products/${id}`}> */}
                <button className="item__button" type="button">
                    VIEW
                </button>
                {/* </Link> */}
                <button className="item__button" type="button">
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};
