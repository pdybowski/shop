import { useEffect, useState } from 'react';
import { Product, ProductCategory, ProductType, SportType, BrandType } from '../models';
import { filterArrayByType, filterArrayBySellCount } from '../utils';

interface props {
    products: Product[];
    productCategory: ProductCategory;
    sportType?: SportType;
    productType?: ProductType;
    brandType?: BrandType;
    bestsellers?: string;
}
export const useFilterProducts = ({
    products,
    productCategory,
    sportType,
    productType,
    brandType,
    bestsellers,
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
        if (bestsellers) {
            array = filterArrayBySellCount<Product>(array, 'sellCount', 20);
        }
        setProductsFilteredByType(array);
    }, [bestsellers, products, sportType, productCategory, productType, brandType]);

    return { productsFilteredByType };
};
