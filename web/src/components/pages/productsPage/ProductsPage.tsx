import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

import { CartContext, PageResourceContext } from '../../../contexts';
import { useFilterProducts } from '../../../hooks';
import { Product, ProductCategory, ProductType, SportType } from '../../../interfaces';
import { ProductItem, SearchInput } from '../../shared';
import './style.css';

export const ProductsPage = (): JSX.Element => {
    const {
        pageResource: { products },
    } = useContext(PageResourceContext);
    const [header, setHeader] = useState<string>('');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchParams] = useSearchParams();

    const sportType = searchParams.get('sportType') as SportType;
    const productType = searchParams.get('productType') as ProductType;
    const productCategory = searchParams.get('productCategory') as ProductCategory;
    const { productsFilteredByType } = useFilterProducts({
        products,
        productCategory,
        sportType,
        productType,
    });

    const searchProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        const results: Product[] = products.filter(
            (product) =>
                product.name.toLowerCase().includes(value.toLowerCase()) ||
                product.description.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredProducts(results);
    };

    useMemo(() => {
        if (!productCategory) return <Navigate replace to="/" />;
    }, []);

    useEffect(() => {
        setFilteredProducts(productsFilteredByType);
    }, [productsFilteredByType]);

    useEffect(() => {
        let text = '';
        if (productCategory) {
            text += productCategory;
        }
        if (!productCategory) {
            text += 'Sport';
        }
        if (sportType) {
            text += ` - ${sportType}`;
        }
        if (productType) {
            text += ` (${productType})`;
        }
        if (!text.length) {
            text = 'Sport Shop Products';
        }
        setHeader(text);
    }, [productCategory, sportType, productType]);

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
