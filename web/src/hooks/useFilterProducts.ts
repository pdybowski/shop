import { useEffect, useState } from "react"
import { Product, ProductCategory, ProductType, SportType } from "../interfaces"
import { filterArrayByType } from "../utils";

interface props {
    products: Product[],
    sportType?: SportType, 
    productCategory?: ProductCategory, 
    productType?: ProductType
}
export const useFilterProducts = ({ products, sportType, productCategory, productType }: props) => {
    const [productsFilteredByType, setProductsFilteredByType] = useState(products);

    useEffect(() => {
        let array = products;

        if(sportType) {
            array = filterArrayByType<Product>(array, 'sportType', sportType);
        } 
        if(productCategory) {
            array = filterArrayByType<Product>(array, 'productCategory', productCategory);
        }
        if(productType) {
            array = filterArrayByType<Product>(array, 'productType', productType);
        }

        setProductsFilteredByType(array)
    }, [sportType, productCategory, productType])

    return { productsFilteredByType }
}