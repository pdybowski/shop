import React, { useState } from 'react';
import { Product } from '../../../interfaces';
import { ProductItem, SearchInput } from '../../shared';
import './style.css';

const products: Product[] = [
    {
        id: 'test',
        name: 'Adidas 2000',
        description: 'Some description',
        price: 100,
        size: 'x1',
        img: 'https://w.eobuwie.com.pl/media/citalog/product/cache/image/650x650/0/e/0900300028753_01_st.jpg',
        productType: '',
        productCategory: '',
        brand: '',
    },
    {
        id: 'test2',
        name: 'Adidas',
        description: 'Some description 5e00',
        price: 125,
        size: 'l',
        img: 'https://w.eobuwie.com.pl/media/citalog/product/cache/image/650x650/0/e/0900300028753_01_st.jpg',
        productType: '',
        productCategory: '',
        brand: '',
    },
];

interface productsPageProps {
    header: string;
}

export const ProductsPage = ({ header }: productsPageProps): JSX.Element => {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

    const searchProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        const results: Product[] = products.filter(
            (product) =>
                product.name.toLowerCase().includes(value.toLowerCase()) ||
                product.description.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredProducts(results);
    };

    return (
        <div className="products__page">
            <h2 className="products__page__title">{header}</h2>
            <SearchInput onSearch={searchProduct} />
            <div className="products__page__items">
                {filteredProducts.map((item) => {
                    return <ProductItem key={item.id} {...item} />;
                })}
            </div>
        </div>
    );
};
