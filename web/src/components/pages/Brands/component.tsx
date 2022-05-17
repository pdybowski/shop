import store from '../../../services/store';
import { BrandItem } from './BrandItem';

import './style.css';

export const BrandsPage = () => {
    const brands = store.getState().pageResource.brands;

    return (
        <div className="brands__container">
            {brands.map((brand) => {
                return <BrandItem key={brand.name} brandName={brand.name} brandLogo={brand.logo} />;
            })}
        </div>
    );
};
