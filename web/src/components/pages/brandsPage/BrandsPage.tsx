import { useContext } from 'react';
import { PageResourceContext } from '../../../contexts';
import { BrandItem } from './BrandItem';
import './style.css';

export const BrandsPage = () => {
    const {
        pageResource: { brands },
    } = useContext(PageResourceContext);

    return (
        <div className="brands__container">
            {brands.map((brand) => {
                return <BrandItem key={brand.name} brandName={brand.name} brandLogo={brand.logo} />;
            })}
        </div>
    );
};
