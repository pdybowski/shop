import React, { useState } from 'react';
import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';
import './style.css';
import { Product } from '../../../../../models';
import { CURRENCY_TYPE } from '../../../../../constants';
import { EllipsisWrapper } from '../../../../shared';

function showStars(star: number) {
    const stars = [];

    for (let i = 0; i < Math.floor(star); i++) {
        stars.push(<BsStarFill />);
    }
    for (let i = 0; i <= 4 - star; i++) {
        stars.push(<BsStar />);
    }
    if (Number.isInteger(star)) {
    } else stars.push(<BsStarHalf />);

    return <p>{stars}</p>;
}

export const BestItem = ({ img, name, price, stars }: Product) => {
    return (
        <div>
            <a className="item" href={''}>
                <img className="item__image" src={img} alt="image" />
                <div className="item__price">
                    <p>
                        {CURRENCY_TYPE}
                        {price}
                    </p>
                </div>
                <div className="item__title">
                    <EllipsisWrapper tooltip={name} textLength={1}>
                        {name}
                    </EllipsisWrapper>
                </div>
                {stars && <div className="item__stars">{showStars(Number(stars))}</div>}
            </a>
        </div>
    );
};
