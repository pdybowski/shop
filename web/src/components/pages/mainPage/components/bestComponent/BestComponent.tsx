import React, { useContext, useState } from 'react';
import { PageResourceContext } from '../../../../../contexts';
import { BestItem } from '../bestItem/BestItem';
import { FaVolleyballBall } from 'react-icons/fa';

import './style.css';

const BEST_LIMIT = 6;
export const BestComponent = (): JSX.Element => {
    const {
        pageResource: { products },
    } = useContext(PageResourceContext);
    const [limit, setLimit] = useState(BEST_LIMIT);

    return (
        <div className="best__container">
            <img
                className="best__image"
                src="https://d-art.ppstatic.pl/kadry/k/r/1/9d/0a/6234b5b877108_o_full.jpg"
                alt="photo"
            />

            <div className="best__items">
                {products
                    .filter((p) => Number(p.stars) && Number(p.stars) > 2)
                    .sort((a: any, b: any) => {
                        return b.stars - a.stars;
                    })
                    .slice(0, products.length)
                    .map((item) => (
                        <BestItem key={item._id} {...item} {...setLimit} />
                    ))}
            </div>

            <div className="best__icon">
                <FaVolleyballBall></FaVolleyballBall>
            </div>
        </div>
    );
};
