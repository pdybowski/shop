import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../../../services/actions/cartActions';
import { BiCube, BiRevision } from 'react-icons/bi';
import { FiPercent } from 'react-icons/fi';
import { Product } from '../../../../../models';
import { Button } from '../../../../shared';
import { ButtonMode } from '../../../../shared/button/interfaces';
import { CURRENCY_TYPE } from '../../../../../constants';
import './style.css';
const placeholder = require('../../../../../assets/images/placeholder.jpg');

export const SingleProductComponent = (item: Product): JSX.Element => {
    const { img, brand, name, price } = item;

    const dispatch = useDispatch();

    return (
        <div className="product__page">
            <div className="product__info--general">
                <div className="product__name">{name}</div>
                <div className="product__image--container">
                    <img
                        src={img && true ? img : placeholder}
                        alt="Product"
                        className="product__image--img"
                    ></img>
                </div>
            </div>
            <div className="product__info--specific">
                <div className="product__brand">{brand}</div>
                <div className="product__price--large">
                    {CURRENCY_TYPE}
                    {price}
                </div>
                <form className="product__size--form">
                    <label htmlFor="size" className="product__size--label">
                        Choose size:
                    </label>
                    <select name="size" className="product__size--select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </form>
                <div className="product__buttons product__button--container">
                    <Button
                        type="button"
                        mode={ButtonMode.SECONDARYBIG}
                        onClick={() => dispatch(addProduct(item))}
                    >
                        Add to cart
                    </Button>
                </div>
                <div className="product__info--additional">
                    <span>
                        <BiCube className="product__icon" />
                        Free shipment in 1-2 working days
                    </span>
                    <span>
                        <BiRevision className="product__icon" />
                        180 days for free return
                    </span>
                    <span>
                        <FiPercent className="product__icon" />
                        Discounts for club members
                    </span>
                </div>
            </div>
        </div>
    );
};
