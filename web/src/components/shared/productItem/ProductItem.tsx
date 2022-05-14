import { useDispatch } from 'react-redux';
import { Product, RoutePaths } from '../../../models';
import { Link } from 'react-router-dom';
import { EllipsisWrapper } from '../ellipsisWrapper/EllipsisWrapper';
import { Button } from '../button/Button';
import { ButtonMode } from '../button/interfaces';
import { showStars } from '../../pages/mainPage/components/bestItem/BestItem';
import { Tooltip } from '../tooltip/Tooltip';
import { addProductToCartAction } from '../../../services/actions';
import placeholder from '../../../assets/images/placeholder.jpg';
import { CURRENCY_TYPE } from '../../../constants/index';
import './style.css';

export const ProductItem = (item: Product): JSX.Element => {
    const { img, name, description, price, _id, stars } = item;

    const dispatch = useDispatch();

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
                            <EllipsisWrapper textLength={1}>
                                <h4>{name}</h4>
                            </EllipsisWrapper>
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
                            <EllipsisWrapper textLength={1}>{description}</EllipsisWrapper>
                        </Tooltip>
                    </div>
                </div>
            </Link>
            <div className="product__buttons">
                <Button
                    mode={ButtonMode.SECONDARY}
                    type="button"
                    onClick={() => dispatch(addProductToCartAction(item))}
                >
                    Add to cart
                </Button>
                {stars && <div className="item__stars">{showStars(Number(stars))}</div>}
            </div>
        </div>
    );
};
