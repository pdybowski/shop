import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import './style.css';
import { Product } from '../../../interfaces';
import { CURRENCY_TYPE } from '../../../constants';

function showStars(star: number) {
    const stars = [];

    for (let i = 0; i < Math.floor(star); i++) {
        stars.push(<AiFillStar />);
    }
    for (let i = 0; i < 5 - star; i++) {
        stars.push(<AiOutlineStar />);
    }

    return <p>{stars}</p>;
}

export const SaleItem = ({ img, name, price, stars }: Product) => {
    return (
        <div>
            <a className="item" href={''}>
                <img className="item__image" src={img} alt={name} />
                <div className="item__price">
                    <p>{CURRENCY_TYPE}{price}</p>
                </div>
                <div className="item__title">
                    <p>{name}</p>
                </div>
                {stars && <div className="item__stars">{showStars(stars)}</div>}
            </a>
        </div>
    );
};
