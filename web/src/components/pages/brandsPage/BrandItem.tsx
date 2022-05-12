import { Link } from 'react-router-dom';
import { RoutePaths } from '../../../models';
import store from '../../../services/store';

import './style.css';

const defaultImage = require('../../../assets/images/placeholder.jpg');

interface BrandItemProps {
    brandName: string;
    brandLogo?: string;
}

export const BrandItem = ({ brandName, brandLogo = defaultImage }: BrandItemProps) => {
    const products = store.getState().pageResource.products;

    const brandsArray = products.filter((element) => {
        return element.brand === brandName;
    });

    const numberOfElements = brandsArray.length;

    return (
        <div className="brandItem__container">
            <Link
                className={'brandItem__link'}
                to={`${RoutePaths.Products}?brandType=${brandName}`}
            >
                <div className="brandItem__element">
                    <div className="brandItem__logo__container">
                        <img className="brandItem__logo" src={`${brandLogo}`} alt="brand logo" />
                    </div>
                    <div className="brandItem__name">{brandName}</div>
                    <div className="brandItem__number">
                        Products in category: {numberOfElements}
                    </div>
                </div>
            </Link>
        </div>
    );
};
