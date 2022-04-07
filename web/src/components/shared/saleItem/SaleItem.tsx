import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import './style.css';
import { RoutePaths } from '../../../routes';

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

interface saleItemProps {
    url?: string;
    title: string;
    price: number;
    id?: number;
    stars?: number;
    link?: RoutePaths;
}

export const SaleItem = ({ url, title, price, id, stars, link }: saleItemProps) => {
    return (
        <div>
            <a className="item" href={link}>
                <img className="item__image" src={url} alt={title} />
                <div className="item__price">
                    <p>{price} zł</p>
                </div>
                <div className="item__title">
                    <p>{title}</p>
                </div>
                {stars && <div className="item__stars">{showStars(stars)}</div>}
            </a>
        </div>
    );
};
