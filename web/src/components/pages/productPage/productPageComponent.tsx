import './style.css';
import { Product } from '../../../interfaces/product';
import { BiCube, BiRevision } from 'react-icons/bi';
import { FiPercent } from 'react-icons/fi';
const img_fallback = require('./img/photo.jpg');

export const ProductPageComponent = ({
    img = img_fallback,
    brand,
    name,
    price,
}: Product): JSX.Element => {
    return (
        <div className="product__page">
            <div className="product__info--general">
                <div className="product__name">{name}</div>
                <div>
                    <img src={img} alt="" className="product__image--img"></img>
                </div>
            </div>
            <div className="product__info--specific">
                <div className="product__brand">{brand}</div>
                <div className="product__price--large">{price}$</div>
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
                    <button className="product__button product__button--add">ADD TO CART</button>
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
