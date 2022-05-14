import React, { useEffect, useState } from 'react';
import store from '../../../services/store';
import { useSearchParams } from 'react-router-dom';
import { useFilterProducts } from '../../../hooks';
import { ProductsPageComponent } from './components/ProductsPageComponent';
import { ProductCategory, ProductType, SportType, BrandType } from '../../../models';
import { ITEMS_ON_PAGE } from '../../../constants/index';
import './style.css';

export const ProductsPage = (): JSX.Element => {
    const [header, setHeader] = useState<string>('');
    const [searchParams] = useSearchParams();

    const products = store.getState().pageResource.products;
    const sportType = searchParams.get('sportType') as SportType;
    const productType = searchParams.get('productType') as ProductType;
    const productCategory = searchParams.get('productCategory') as ProductCategory;
    const brandType = searchParams.get('brandType') as BrandType;
    const { productsFilteredByType } = useFilterProducts({
        products,
        productCategory,
        sportType,
        productType,
        brandType,
    });

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
        if (brandType) {
            text = brandType;
        }
        if (!text.length) {
            text = 'Sport Shop Products';
        }
        setHeader(text);
    }, [productCategory, sportType, productType]);

    return (
        <div>
            <div className="products__page">
                <h2 className="products__page__title">{header}</h2>
            </div>
            <ProductsPageComponent
                productsToDisplay={productsFilteredByType}
                itemsOnPage={ITEMS_ON_PAGE}
            />
        </div>
    );
};
