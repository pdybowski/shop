import { Link } from 'react-router-dom';

import { RoutePaths } from '../../../../models';
import store from '../../../../services/store';

import { BestItem } from './BestItem/component';

import './style.css';

const BEST_LIMIT = 6;
export const Bests = () => {
    const products = store.getState().pageResource.products;

    return (
        <div className="best">
            <Link className="product-link" to={`${RoutePaths.Products}?bestsellers=true`}>
                <div className="best__header">Bestsellers</div>
            </Link>
            <div className="best__container">
                <div className="best__items">
                    {products
                        .filter((p) => Number(p.stars) && Number(p.stars) > 2)
                        .sort((a: any, b: any) => {
                            return b.stars - a.stars;
                        })
                        .slice(0, BEST_LIMIT)
                        .map((item) => (
                            <BestItem key={item._id} {...item} />
                        ))}
                </div>
            </div>
        </div>
    );
};
