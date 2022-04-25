import Carousel from '../../../../shared/carousel/Carousel';
import { useContext } from 'react';
import { PageResourceContext } from '../../../../../contexts';
import { CURRENCY_TYPE } from '../../../../../constants';
import './style.css';
import placeholder from '../../../../../assets/images/placeholder.jpg';

export const MainPageCarousel = () => {
    const {
        pageResource: { products },
    } = useContext(PageResourceContext);

    const productsArr = products.slice(0, 3);

    const items = productsArr.map((product) => {
        return (
            <div
                className="mainPageCarouselItem__container"
                key={`carousel-product-${product._id}`}
            >
                <img className="mainPageCarouselItem__img" alt="Product" src={product.img && true ? product.img : placeholder} />
                <div className="mainPageCarouselItem__txt__container">
                    <div className="mainPageCarouselItem__txt">{product.name}</div>
                    <div className="mainPageCarouselItem__txt">
                        {CURRENCY_TYPE}
                        {product.price}
                    </div>
                </div>
            </div>
        );
    });

    return <Carousel>{items}</Carousel>;
};