import React, { useContext, useState } from 'react';
import { PageResourceContext } from '../../../contexts';
import { SaleItem } from '../saleItem/SaleItem';
import './style.css';

const BestComponent = (): JSX.Element => {
    const {
        pageResource: { products },
    } = useContext(PageResourceContext);
    const [limit, setLimit] = useState(6);

    return (
        <div className="best__container">
            <img
                className="best__image"
                src="https://d-art.ppstatic.pl/kadry/k/r/1/9d/0a/6234b5b877108_o_full.jpg"
                alt="photo"
            ></img>

            <div className="best__items">
                {products
                    .slice(0, limit ? limit : products.length)
                    .filter((p) => Number(p.stars) && Number(p.stars) > 2)
                    .map((item) => (
                        <SaleItem {...item} {...setLimit} />
                    ))}
            </div>
        </div>
    );
};

export default BestComponent;
