import { Link } from 'react-router-dom';

import { Product, RoutePaths } from '../../../../../models';
import { CURRENCY_TYPE } from '../../../../../constants';
import placeholder from '../../../../../assets/images/placeholder.jpg';

import { Ellipsis, ProductStars } from '../../../../shared';

import './style.css';

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
                    <Ellipsis tooltip={name} textLength={1}>
                        {name}
                    </Ellipsis>
                </div>
                {stars && <ProductStars count={Number(stars)} />}
            </div>
        </Link>
    );
};
