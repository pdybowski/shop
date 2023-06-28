import { Link } from 'react-router-dom';

import { Button, BtnMode } from '../Button';
import { Tooltip } from '../Tooltip';
import { Ellipsis } from '../Ellipsis';
import { ProductStars } from '../ProductStars';

import { CURRENCY_TYPE } from '../../../constants';

import { Product, RoutePaths } from '../../../models';

import placeholder from '../../../assets/images/placeholder.jpg';

import './style.css';

export const ProductItem = (item: Product): JSX.Element => {
    const { img, name, description, price, _id, stars } = item;

    return (
        <div className="product__item">
            <Link className="product-link" to={`${RoutePaths.Product}/${_id}`}>
                <div className="product__header">
                    <img
                        className="product__image"
                        src={img && true ? img : placeholder}
                        alt="product__image"
                    />
                </div>
                <div className="product__body">
                    <div className="product__title">
                        <Tooltip content={name}>
                            <Ellipsis textLength={1}>
                                <h4>{name}</h4>
                            </Ellipsis>
                        </Tooltip>
                    </div>
                    <div className="product__price">
                        <p>
                            {CURRENCY_TYPE}
                            {price}
                        </p>
                    </div>
                    <div className="product__description">
                        <Tooltip content={description}>
                            <Ellipsis textLength={1}>{description}</Ellipsis>
                        </Tooltip>
                    </div>
                </div>

                <div className="product__buttons">
                    <Button mode={BtnMode.SECONDARY} type="button">
                        SEE MORE
                    </Button>
                    {stars && <ProductStars count={Number(stars)} />}
                </div>
            </Link>
        </div>
    );
};
