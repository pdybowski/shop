import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useFilterProducts } from '../../../hooks';
import store from '../../../services/store';
import { ProductCategory, ProductType, SportType, BrandType } from '../../../models';

import { ProductsComponent } from './ProductsContainer';

import './style.css';

const ITEMS_ON_PAGE = 12;
export const ProductsPage = (): JSX.Element => {
    const [header, setHeader] = useState<string>('');

    const [searchParams] = useSearchParams();

    const products = store.getState().pageResource.products;
    const sportType = searchParams.get('sportType') as SportType;
    const productType = searchParams.get('productType') as ProductType;
    const productCategory = searchParams.get('productCategory') as ProductCategory;
    const brandType = searchParams.get('brandType') as BrandType;
    const bestseller = searchParams.get('bestsellers') as string;
    const { productsFilteredByType } = useFilterProducts({
        products,
        productCategory,
        sportType,
        productType,
        brandType,
        bestseller,
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
        if (bestseller) {
            text = 'Bestsellers';
        }
        if (!text.length) {
            text = 'Sport Shop Products';
        }
        setHeader(text);
    }, [productCategory, sportType, productType]);

    return (
        <div>
            <div className="products">
                <h2 className="products__title">{header}</h2>
            </div>
            <ProductsComponent
                productsToDisplay={productsFilteredByType}
                itemsOnPage={ITEMS_ON_PAGE}
            />
        </div>
    );
};
