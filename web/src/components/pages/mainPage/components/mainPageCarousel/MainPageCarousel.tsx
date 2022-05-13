import Carousel from '../../../../shared/carousel/Carousel';
import { CURRENCY_TYPE } from '../../../../../constants';
import placeholder from '../../../../../assets/images/placeholder.jpg';
import store from '../../../../../services/store';

import './style.css';
import { RoutePaths } from '../../../../../models';
import { Link } from 'react-router-dom';

export const MainPageCarousel = () => {
    const products = store.getState().pageResource.products.slice(0, 3);

    const items = products.map((product) => {
        return (
            <Link className="product-link" to={`${RoutePaths.Product}/${product._id}`}>
                <div
                    className="mainPageCarouselItem__container"
                    key={`carousel-product-${product._id}`}
                >
                    <img
                        className="mainPageCarouselItem__img"
                        alt="Product"
                        src={product.img && true ? product.img : placeholder}
                    />

                    <div className="mainPageCarouselItem__txt__container">
                        <div className="mainPageCarouselItem__txt">{product.name}</div>
                        <div className="mainPageCarouselItem__txt">
                            {CURRENCY_TYPE}
                            {product.price}
                        </div>
                    </div>
                </div>
            </Link>
        );
    });

    return <Carousel>{items}</Carousel>;
};
