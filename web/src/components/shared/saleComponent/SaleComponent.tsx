import React, { useContext } from 'react';
import { PageResourceContext } from '../../../contexts';
import { SaleItem } from '../saleItem/SaleItem';
import './style.css';

const SaleComponent = (): JSX.Element => {
    const {
        pageResource: { products },
    } = useContext(PageResourceContext);

    return (
        <div className="sale__container">
            <img
                className="sale__image"
                src="https://d-art.ppstatic.pl/kadry/k/r/1/9d/0a/6234b5b877108_o_full.jpg"
                alt="photo"
            ></img>

            <div className="sale__items">
                {products
                    .filter((p) => p.stars && p.stars > 2)
                    .map((item) => (
                        <SaleItem {...item} />
                    ))}
            </div>
        </div>
    );
};

export default SaleComponent;
