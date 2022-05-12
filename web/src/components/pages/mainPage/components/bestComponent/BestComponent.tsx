import store from '../../../../../services/store';
import { BestItem } from '../bestItem/BestItem';
import { RoutePaths } from '../../../../../models';
import { Link } from 'react-router-dom';
import './style.css';

const BEST_LIMIT = 6;
export const BestComponent = (): JSX.Element => {
    const products = store.getState().pageResource.products;

    return (
        <div className="best">
            <Link className="product-link" to={RoutePaths.Bestsellers}>
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
