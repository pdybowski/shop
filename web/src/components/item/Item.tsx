import React from 'react';
import './item.css';
// import { Link } from 'react-router-dom';

export type ItemType = {
    title: string;
    imageUrl?: string;
    price?: number;
    id?: string;
};

const Item = ({ imageUrl, title, price, id }: ItemType): JSX.Element => {
    return (
        <div className="block">
            <div className="block_element">
                <img className="block_element_image" src={imageUrl} alt={title}></img>
            </div>
            <div className="block_element_footer">
                <div className="block_element_title">
                    <h5>{title}</h5>
                </div>
                <div className="block_element_price">
                    <h6>{price}$</h6>
                </div>
            </div>
            <hr />
            <div className="block_buttons">
                {/* <Link to={`/products/${id}`}> */}
                <button type="button">VIEW</button>
                {/* </Link> */}
                <button type="button">ADD TO CART</button>
            </div>
        </div>
    );
};

export default Item;
