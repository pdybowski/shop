import React, { Children, useContext, useEffect } from 'react';
import { Product, RoutePaths } from '../../../models';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../contexts';
import { CURRENCY_TYPE } from '../../../constants';
import placeholder from '../../../assets/images/placeholder.jpg';

import { EllipsisWrapper } from '../ellipsisWrapper/EllipsisWrapper';

import './style.css';
import { Button } from '../button/Button';
import { ButtonMode } from '../button/interfaces';
import { showStars } from '../../pages/mainPage/components/bestItem/BestItem';

export const ProductItem = (item: Product): JSX.Element => {
    const { img, name, description, price, _id, stars } = item;

    const cartContext = useContext(CartContext);

    useEffect(() => {
        console.log('Please wait...');
    }, [cartContext]);

    return (
        <div className='product__item'>
            <Link className='product-link' to={`${RoutePaths.Product}/${_id}`}>
                <div className='product__header'>
                    <img className='product__image' src={img && true ? img : placeholder} alt='image' />
                </div>
                <div className='product__body'>
                    <div className='product__title'>
                        <EllipsisWrapper tooltip={name} textLength={1}>
                            <p>{name}</p>
                        </EllipsisWrapper>
                    </div>
                    <div className='product__price'>
                        <p>
                            {CURRENCY_TYPE}
                            {price}
                        </p>
                    </div>
                    <div className='product__description'>
                        <EllipsisWrapper tooltip={description} textLength={1}>
                            {description}
                        </EllipsisWrapper>
                    </div>
                </div>
            </Link>
            <div className='product__buttons'>
                <Button
                    label='Add to cart'
                    mode={ButtonMode.SECONDARY}
                    type='button'
                    onClick={() => cartContext.addProductToCart(item)}
                ></Button>
                {stars && <div className='item__stars'>{showStars(Number(stars))}</div>}
            </div>

        </div>
    );
};
