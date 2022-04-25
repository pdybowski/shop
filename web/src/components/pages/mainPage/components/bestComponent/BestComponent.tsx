import React, { useContext, useState } from 'react';
import { PageResourceContext } from '../../../../../contexts';
import { BestItem } from '../bestItem/BestItem';

import './style.css';

const BEST_LIMIT = 6;
export const BestComponent = (): JSX.Element => {
    const {
        pageResource: { products },
    } = useContext(PageResourceContext);
    const [limit, setLimit] = useState(BEST_LIMIT);

    return (
        <div className="best__container">
            <div className="best__header">Bestsellers</div>
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
        </div>
    );
};
