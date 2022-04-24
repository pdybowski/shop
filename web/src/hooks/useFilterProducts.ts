import { useEffect, useState } from 'react';
import { Product, ProductCategory, ProductType, SportType } from '../models';
import { filterArrayByType } from '../utils';

interface props {
    products: Product[];
    productCategory: ProductCategory;
    sportType?: SportType;
    productType?: ProductType;
}
export const useFilterProducts = ({ products, productCategory, sportType, productType }: props) => {
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

        setProductsFilteredByType(array);
    }, [sportType, productCategory, productType]);

    return { productsFilteredByType };
};
