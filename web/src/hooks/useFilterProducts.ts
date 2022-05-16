import { useEffect, useState } from 'react';
import { BESTSELLER_SELL_COUNT } from '../constants';
import { Product, ProductCategory, ProductType, SportType, BrandType } from '../models';
import { filterArrayByType } from '../utils';

interface props {
    products: Product[];
    productCategory: ProductCategory;
    sportType?: SportType;
    productType?: ProductType;
    brandType?: BrandType;
    bestseller?: string;
}
export const useFilterProducts = ({
    products,
    productCategory,
    sportType,
    productType,
    brandType,
    bestseller,
}: props) => {
    const [productsFilteredByType, setProductsFilteredByType] = useState(products);

    useEffect(() => {
        let array = products;

        if (productCategory) {
            array = filterArrayByType<Product>(array, 'productCategory', productCategory);
        }
        if (sportType) {
            array = filterArrayByType<Product>(array, 'sportType', sportType);
        }
        if (productType) {
            array = filterArrayByType<Product>(array, 'productType', productType);
        }
        if (brandType) {
            array = filterArrayByType<Product>(array, 'brand', brandType);
        }
        if (bestseller) {
            array = array.filter(el => el.sellCount && el.sellCount > BESTSELLER_SELL_COUNT)
        }
        setProductsFilteredByType(array);
    }, [products, sportType, productCategory, productType, brandType]);

    return { productsFilteredByType };
};
