import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BiCube, BiRevision } from 'react-icons/bi';
import { FiPercent } from 'react-icons/fi';
import { CURRENCY_TYPE } from '../../../../constants';
import { Product } from '../../../../models';
import { ADD_PRODUCT_TO_CART } from '../../../../services/actions';
import { Button, BtnMode, ProductStars } from '../../../shared';
import { aSizes, aShirtSizes } from '../../../../models';
import placeholder from '../../../../assets/images/placeholder.jpg';

export const SingleProductItem = (item: Product): JSX.Element => {
    const { img, brand, name, price, stars, productType } = item;

    const dispatch = useDispatch();

    let productSizes: readonly string[];
    productType === 'Shoe' || productType === undefined
        ? (productSizes = aSizes)
        : (productSizes = aShirtSizes);

    const [value, setValue] = useState(productSizes ? productSizes[0] : aSizes[0]);

    const newItem = {
        product: item,
        size: value,
    };

    const handleChange = (e: any) => {
        setValue(e.target.value);
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch({
            type: ADD_PRODUCT_TO_CART,
            payload: newItem,
        });
    };

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
                    {stars && <ProductStars count={Number(stars)} />}
                </div>
            </div>
            <div className="product__info--specific">
                <div className="product__brand">{brand}</div>
                <div className="product__price--large">
                    {CURRENCY_TYPE}
                    {price}
                </div>
                <form className="product__size--form" onSubmit={handleSubmit}>
                    <label htmlFor="size" className="product__size--label">
                        Choose size:
                    </label>
                    <select
                        name="size"
                        value={value}
                        className="product__size--select"
                        onChange={handleChange}
                    >
                        {productSizes
                            ? productSizes.map((item: string) => {
                                  return (
                                      <option value={item} key={item}>
                                          {item}
                                      </option>
                                  );
                              })
                            : aSizes}
                    </select>
                </form>
                <div className="product__buttons product__button--container">
                    <Button type="button" mode={BtnMode.SECONDARYBIG} onClick={handleSubmit}>
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
