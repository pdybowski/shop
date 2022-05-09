import { useEffect, useState } from 'react';
import { Product, ProductCategory, ProductType, SportType, BrandType } from '../models';
import { filterArrayByType } from '../utils';

interface props {
    products: Product[];
    productCategory: ProductCategory;
    sportType?: SportType;
    productType?: ProductType;
    brandType?: BrandType;
}
export const useFilterProducts = ({
    products,
    productCategory,
    sportType,
    productType,
    brandType,
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
        setProductsFilteredByType(array);
    }, [products, sportType, productCategory, productType, brandType]);

    return { productsFilteredByType };
};
