import React, { useEffect, useState } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import './style.css';

interface CarouselProps {
    children: Required<React.ReactChild[]>;
    intervalTime?: number;
}

const Carousel = ({ children, intervalTime = 5000 }: CarouselProps) => {
    const [count, setCount] = useState(0);
    let interval: NodeJS.Timer;

    const next = () => {
        setCount(count === children.length - 1 ? 0 : count + 1);
    };

    const previous = () => {
        setCount(count === 0 ? children.length - 1 : count - 1);
    };

    const onArrowClick = (dir: 'next' | 'prev') => {
        clearInterval(interval);
        dir === 'next' ? next() : previous();
    };

    useEffect(() => {
        interval = setInterval(next, intervalTime);
        return () => clearInterval(interval);
    }, [count]);

    return (
        <div className="carousel">
            <span className="arrow__left" onClick={() => onArrowClick('prev')}>
                <IoIosArrowDropleftCircle />
            </span>
            {children.map((child, index) => (
                <div
                    key={index}
                    className={`carousel__item ${index === count ? 'carousel__item--active' : ''}`}
                >
                    {child}
                </div>
            ))}
            <span className="arrow__right" onClick={() => onArrowClick('next')}>
                <IoIosArrowDroprightCircle />
            </span>
        </div>
    );
};

export default Carousel;
