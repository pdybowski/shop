import React from 'react';
import './productItem.css';

export type ProductItemType = {
    title: string;
    url?: string;
    description?: string;
    price?: number;
    id?: string;
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
            <div className="item_element">
                <img className="item_element_image" src={url} alt={title}></img>
            </div>
            <div className="item_footer">
                <div className="item_footer_title">
                    <h4>{title}</h4>
                </div>
                <div className="item_footer_description">
                    <p className="">{description}</p>
                </div>
                <div className="item_footer_price">
                    <h6>{price}$</h6>
                </div>
            </div>
            <hr />
            <div className="item_buttons">
                {/* <Link to={`/products/${id}`}> */}
                <button className="item_button" type="button">
                    VIEW
                </button>
                {/* </Link> */}
                <button className="item_button" type="button">
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};
