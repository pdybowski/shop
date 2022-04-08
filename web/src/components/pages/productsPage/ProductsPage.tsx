import React, { useState } from 'react';
import { Product } from '../../../interfaces';
import { ProductItem, SearchInput } from '../../shared';
import './style.css';

const products: Product[] = [
    {
        _id: 'test',
        name: 'Adidas 2000',
        description: 'Some description',
        price: 100,
        size: 'x1',
        img: 'https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/0/0000201282847_01_fp.jpg',
        productType: '',
        productCategory: '',
        brand: '',
    },
    {
        _id: 'test2',
        name: 'Adidas',
        description: 'Some description 5e00',
        price: 125,
        size: 'l',
        img: 'https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/0/0000206708137_1__1.jpg',
        productType: '',
        productCategory: '',
        brand: '',
    },
    {
        _id: 'test3',
        name: 'Adidas Turbo',
        description: 'Some description 777',
        price: 185,
        size: 'l',
        img: 'https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/0/0000209204049_01_rz.jpg',
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
                    return <ProductItem key={item._id} {...item} />;
                })}
            </div>
        </div>
    );
};