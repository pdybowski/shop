import React, { useContext, useEffect, useState } from 'react';
import { PageResourceContext } from '../../../contexts';
import { useFilterProducts } from '../../../hooks';
import { Product, ProductCategory, ProductType, SportType } from '../../../interfaces';
import { ProductItem, SearchInput } from '../../shared';
import './style.css';

interface productsPageProps {
    header: string;
    sportType?: SportType
    productCategory?: ProductCategory
    productType?: ProductType
}

export const ProductsPage = ({ header, sportType, productCategory, productType }: productsPageProps): JSX.Element => {
    const { pageResource: { products } } = useContext(PageResourceContext);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
    const { productsFilteredByType } = useFilterProducts({ products, sportType, productCategory, productType })

    const searchProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        const results: Product[] = products.filter(
            (product) =>
                product.name.toLowerCase().includes(value.toLowerCase()) ||
                product.description.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredProducts(results);
    };

    useEffect(() => {
        setFilteredProducts(productsFilteredByType);
    }, [productsFilteredByType])

    return (
        <div className="products__page">
            <h2 className="products__page__title">{header}</h2>
            <SearchInput onSearch={searchProduct} />
            <div className="products__page__items">
                {filteredProducts.map((item) => {
                    return <ProductItem key={item._id} {...item} />;
                })}
            </div>
        </div>
    );
};
