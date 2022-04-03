import { useEffect, useState } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import './style.css';

interface Props {
    images: Required<{ image: string }[]>;
    interval?: number;
}

const Carousel = ({ images, interval }: Props) => {
    const [count, setCount] = useState(0);
    const length = images.length;

    const next = () => {
        setCount(count === length - 1 ? 0 : count + 1);
    };

    const previous = () => {
        setCount(count === 0 ? length - 1 : count - 1);
    };

    useEffect(() => {
        const setImage = setInterval(next, interval ? interval : 5000);
        return () => clearInterval(setImage);
    });

    return (
        <div>
            <IoIosArrowDropleftCircle className="leftArrow" onClick={previous} />
            {images.map((slide: any, index: any) => {
                return (
                    <div key={index}>
                        {index === count && (
                            <img src={slide.image} alt="slide" className="tile fade" />
                        )}
                    </div>
                );
            })}
            <IoIosArrowDroprightCircle className="rightArrow" onClick={next} />
        </div>
    );
};

export default Carousel;
