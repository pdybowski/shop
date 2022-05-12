import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';
import { Product } from '../../../../../models';
import { CURRENCY_TYPE } from '../../../../../constants';
import { EllipsisWrapper } from '../../../../shared';
import placeholder from '../../../../../assets/images/placeholder.jpg';

import './style.css';
import { randomId } from '../../../../../utils';

export function showStars(star: number) {
    const stars = [];

    for (let i = 0; i < Math.floor(star); i++) {
        const id = randomId();
        stars.push(<BsStarFill key={id} />);
    }
    for (let i = 0; i <= 4 - star; i++) {
        const id = randomId();
        stars.push(<BsStar key={id} />);
    }
    if (!Number.isInteger(star)) {
        const id = randomId();
        stars.push(<BsStarHalf key={id} />);
    }

    return <p>{stars}</p>;
}

export const BestItem = ({ img, name, price, stars }: Product) => {
    return (
        <div>
            <a className="item" href={''}>
                <img className="item__image" src={img && true ? img : placeholder} alt="image" />
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
