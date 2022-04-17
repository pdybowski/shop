import Carousel from '../shared/carousel/Carousel';
import { useContext } from 'react';
import { PageResourceContext } from '../../contexts';
import './style.css';

export const MainPageCarousel = () => {
    const {
        pageResource: { products },
    } = useContext(PageResourceContext);

    const productsArr = products.slice(0, 3);

    const items = productsArr.map((product) => {
        return (
            <div className="item__container" key={product._id}>
                <img className="item__img" alt="Product" src={product.img} />
                <div className="item__txt__container">
                    <div className="item__txt">{product.name}</div>
                    <div className="item__txt">${product.price}</div>
                </div>
            </div>
        );
    });

    return <Carousel>{items}</Carousel>;
};
