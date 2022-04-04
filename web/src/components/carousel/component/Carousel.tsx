import { useEffect, useState } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import './style.css';

interface Props {
    children: Required<{ item: string }[]>;
    interval?: number;
}

const Carousel = (props: Props) => {
    const { children, interval } = props;
    const [count, setCount] = useState(0);
    const length = children.length;

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

    const items = children.map((child, index) => {
        return (
            <div key={child.item}>
                {index === count && <img src={child.item} alt="slide" className="tile fade" />}
            </div>
        );
    });

    return (
        <div className="container">
            <IoIosArrowDropleftCircle className="leftArrow" onClick={previous} />
            {items}
            <IoIosArrowDroprightCircle className="rightArrow" onClick={next} />
        </div>
    );
};

export default Carousel;
