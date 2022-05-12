import React from 'react';
import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';
import { EllipsisWrapper } from '../../../../shared';
import { Link } from 'react-router-dom';
import { Product, RoutePaths } from '../../../../../models';
import { CURRENCY_TYPE } from '../../../../../constants';
import placeholder from '../../../../../assets/images/placeholder.jpg';
import './style.css';

export function showStars(star: number) {
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

export const BestItem = ({ img, name, price, stars, _id }: Product) => {
    return (
        <Link className="product-link" to={`${RoutePaths.Product}/${_id}`}>
            <div className="item">
                <img
                    className="item__image"
                    src={img && true ? img : placeholder}
                    alt="Bestseller"
                />
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
            </div>
        </Link>
    );
};
