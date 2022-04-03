import Carousel from '../component';
import './style.css';
const tshirt = require('../images/tshirt1.jpg');
const shoe = require('../images/shoe1.jpg');
const hat = require('../images/hat1.jpg');

export const CarouselContainer = () => {
    const imageData = [{ image: tshirt }, { image: shoe }, { image: hat }];

    return (
        <div className="container">
            <Carousel images={imageData} />
        </div>
    );
};
