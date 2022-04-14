import React from 'react';
import { SaleItem } from '../saleItem/SaleItem';
import './style.css';

const SaleComponent = () => {
    return (
        <div className="sale__container">
            {/* <div className="sale__container__photo">
                <img
                    className="sale__container__image"
                    src="https://cdn.galleries.smcloud.net/t/galleries/gf-JT6f-zfyj-6Qhi_15-wynalazkow-ktore-zmienily-sport-1920x1080-nocrop.png"
                    alt="photo"
                ></img>
            </div> */}
            <div className="container__items">
                <div className="div2">
                    <SaleItem
                        title="Buty"
                        url="https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/1/01_0000300270608_is.jpg"
                        price={25}
                    />
                </div>
                <div className="div3">
                    <SaleItem
                        title="Buty"
                        url="https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/1/01_0000300270608_is.jpg"
                        price={25}
                    />
                </div>
                <div className="div4">
                    <SaleItem
                        title="Buty"
                        url="https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/1/01_0000300270608_is.jpg"
                        price={25}
                    />
                </div>
                <div className="div5">
                    <SaleItem
                        title="Buty"
                        url="https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/1/01_0000300270608_is.jpg"
                        price={25}
                    />
                </div>
                <div className="div6">
                    <SaleItem
                        title="Buty"
                        url="https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/1/01_0000300270608_is.jpg"
                        price={25}
                    />
                </div>
                <div className="div7">
                    <SaleItem
                        title="Buty"
                        url="https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/1/01_0000300270608_is.jpg"
                        price={25}
                    />
                </div>
            </div>
        </div>
    );
};

export default SaleComponent;
