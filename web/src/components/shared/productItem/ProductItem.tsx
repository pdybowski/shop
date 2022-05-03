import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../services/actions/cartActions';
import { Product, RoutePaths } from '../../../models';
import { Link } from 'react-router-dom';
import { EllipsisWrapper } from '../ellipsisWrapper/EllipsisWrapper';
import { Button } from '../button/Button';
import { ButtonMode } from '../button/interfaces';
import { CURRENCY_TYPE } from '../../../constants';
import './style.css';
const placeholder = require('../../../assets/images/placeholder.jpg');

export const ProductItem = (item: Product): JSX.Element => {
    const { img, name, description, price, _id } = item;

    const dispatch = useDispatch();

    return (
        <div className="product__item">
            <div className="product__header">
                <img
                    className="product__image"
                    src={img && true ? img : placeholder}
                    alt="product__image"
                />
            </div>
            <div>
                <div className="product__body">
                    <div className="product__title">
                        <EllipsisWrapper tooltip={name} textLength={1}>
                            <h4>{name}</h4>
                        </EllipsisWrapper>
                    </div>
                    <div className="product__description">
                        <EllipsisWrapper tooltip={description} textLength={1}>
                            {description}
                        </EllipsisWrapper>
                    </div>
                    <div className="product__price">
                        <h4>
                            {CURRENCY_TYPE}
                            {price}
                        </h4>
                    </div>
                </div>
                <div className="product__buttons">
                    <Link to={`${RoutePaths.Product}/${_id}`}>
                        <Button label="VIEW" mode={ButtonMode.SECONDARY} type="button"></Button>
                    </Link>
                    <Button
                        label="ADD TO CART"
                        mode={ButtonMode.SECONDARY}
                        type="button"
                        onClick={() => dispatch(addProduct(item))}
                    ></Button>
                </div>
            </div>
        </div>
    );
};
