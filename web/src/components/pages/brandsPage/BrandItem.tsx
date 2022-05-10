import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PageResourceContext } from '../../../contexts';
import './style.css';
import { Button } from '../../shared';
import { ButtonMode } from '../../shared/button/interfaces';
import { RoutePaths } from '../../../models';
const defaultImage = require('../../../assets/images/placeholder.jpg');

interface BrandItemProps {
    brandName: string;
    brandLogo?: string;
}

export const BrandItem = ({ brandName, brandLogo = defaultImage }: BrandItemProps) => {
    const {
        pageResource: { products },
    } = useContext(PageResourceContext);

    const brandsArray = products.filter((element) => {
        return element.brand === brandName;
    });

    const numberOfElements = brandsArray.length;

    return (
        <div className="brandItem__container">
            <div className="brandItem__element">
                <div className="brandItem__logo__container">
                    <img className="brandItem__logo" src={`${brandLogo}`} alt="brand logo" />
                </div>
                <div className="brandItem__name">{brandName}</div>
                <div className="brandItem__number">Products in category: {numberOfElements}</div>
                <Link to={`${RoutePaths.Products}?brandType=${brandName}`}>
                    <Button type="button" mode={ButtonMode.SECONDARY}>
                        View
                    </Button>
                </Link>
            </div>
        </div>
    );
};
