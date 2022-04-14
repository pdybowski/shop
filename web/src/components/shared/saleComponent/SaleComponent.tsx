import React from 'react';
import { SaleItem } from '../saleItem/SaleItem';
import './style.css';

const SaleComponent = () => {
    return (
        <div className="sale__container">
            <img
                className="sale__container__image"
                src="https://d-art.ppstatic.pl/kadry/k/r/1/9d/0a/6234b5b877108_o_full.jpg"
                alt="photo"
            ></img>

            <div className="sale__container__items">
                <SaleItem
                    title="Buty"
                    url="https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/1/01_0000300270608_is.jpg"
                    price={25}
                />
                <SaleItem
                    title="Buty"
                    url="https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/1/01_0000300270608_is.jpg"
                    price={25}
                />
                <SaleItem
                    title="Buty"
                    url="https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/1/01_0000300270608_is.jpg"
                    price={25}
                />

                <SaleItem
                    title="Buty"
                    url="https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/1/01_0000300270608_is.jpg"
                    price={25}
                />

                <SaleItem
                    title="Buty"
                    url="https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/1/01_0000300270608_is.jpg"
                    price={25}
                />

                <SaleItem
                    title="Buty"
                    url="https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/1/01_0000300270608_is.jpg"
                    price={25}
                />
            </div>
        </div>
    );
};

export default SaleComponent;
