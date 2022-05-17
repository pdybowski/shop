import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';
import { randomId } from '../../../utils';

import './style.css';

export const ProductStars = ({ count }: { count: number }) => {
    const stars = [];

    for (let i = 0; i < Math.floor(count); i++) {
        const id = randomId();
        stars.push(<BsStarFill key={id} />);
    }
    for (let i = 0; i <= 4 - count; i++) {
        const id = randomId();
        stars.push(<BsStar key={id} />);
    }
    if (!Number.isInteger(count)) {
        const id = randomId();
        stars.push(<BsStarHalf key={id} />);
    }

    return <p className="product__star">{stars}</p>;
};
