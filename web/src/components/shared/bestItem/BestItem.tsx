import React, { useState } from 'react';
import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';
import './style.css';
import { Product } from '../../../interfaces';
import { CURRENCY_TYPE } from '../../../constants';

function showStars(star: number) {
    const stars = [];

    for (let i = 0; i < Math.floor(star); i++) {
        stars.push(<BsStarFill />);
    }
    if (Number(star) % 1 < 1) {
        stars.push(<BsStarHalf />);
    }

    for (let i = 0; i < 4 - star; i++) {
        stars.push(<BsStar />);
    }

    return <p>{stars}</p>;
}

export const BestItem = ({ img, name, price, stars }: Product) => {
    return (
        <div>
            <a className="item" href={''}>
                <img className="item__image" src={img} alt={name} />
                <div className="item__price">
                    <p>
                        {CURRENCY_TYPE}
                        {price}
                    </p>
                </div>
                <div className="item__title">
                    <p>{name}</p>
                </div>
                {stars && <div className="item__stars">{showStars(Number(stars))}</div>}
            </a>
        </div>
    );
};