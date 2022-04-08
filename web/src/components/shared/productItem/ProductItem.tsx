import React from 'react';
import './style.css';

export type ProductItemType = {
    title: string;
    url?: string;
    description?: string;
    price?: number;
    id?: string;
    stars?: number;
};

export const ProductItem = ({
    url,
    title,
    description,
    price,
    id,
}: ProductItemType): JSX.Element => {
    return (
        <div className="item">
            <div className="item__header">
                <img className="item__header__image" src={url} alt={title} />
            </div>
            <div className="item__body">
                <div className="item__body__title">
                    <h4>{title}</h4>
                </div>
                <div className="item__body__description">
                    <p className="">{description}</p>
                </div>
                <div className="item__body__price">
                    <h6>${price}</h6>
                </div>
            </div>
            <hr />
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
