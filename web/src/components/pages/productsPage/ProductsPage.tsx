import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

import { useFilterProducts } from '../../../hooks';
import { Product, ProductCategory, ProductType, SportType, BrandType } from '../../../models';
import { ProductItem, SearchInput } from '../../shared';
import './style.css';
import { Pagination } from '../../shared/pagination/Pagination';
import { DownArrow, UpArrow } from '../../navigation/components';
import store from '../../../services/store';

export const ProductsPage = (): JSX.Element => {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 12;
    const handlePages = (updatePage: number) => setPage(updatePage);

    const pageResourceState = store.getState().pageResourceReducer;

    const products = pageResourceState.products;

    const [header, setHeader] = useState<string>('');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchParams] = useSearchParams();
    const [productsForPage, setProductsForPage] = useState<Product[]>([]);

    const [priceDropdown, setPriceDropdown] = useState(false);
    const [sizeDropdown, setSizeDropdown] = useState(false);

    const [nameSearch, setNameSearch] = useState('');
    const [minPriceSearch, setMinPriceSearch] = useState('');
    const [maxPriceSearch, setMaxPriceSearch] = useState('');

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

    const searchProductByName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setNameSearch(value);
    };

    const searchProductByMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setMinPriceSearch(value);
    };

    const searchProductByMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setMaxPriceSearch(value);
    };

    useEffect(() => {
        let results: Product[] = productsFilteredByType;

        const filterProductsByName = () => {
            results = results.filter(
                (product) =>
                    product.name.toLowerCase().includes(nameSearch.toLowerCase()) ||
                    product.description.toLowerCase().includes(nameSearch.toLowerCase()),
            );
        };

        const filterProductsByMinPrice = () => {
            results = results.filter((product) => product.price >= parseInt(minPriceSearch));
        };

        const filterProductsByMaxPrice = () => {
            results = results.filter((product) => product.price <= parseInt(maxPriceSearch));
        };

        if (nameSearch != '') {
            filterProductsByName();
        }

        if (minPriceSearch != '') {
            filterProductsByMinPrice();
        }

        if (maxPriceSearch != '') {
            filterProductsByMaxPrice();
        }

        setFilteredProducts(results);

        let pageProducts = results.slice((page - 1) * itemsPerPage, page * itemsPerPage);
        setTotalPages(Math.ceil(results.length / itemsPerPage));
        setProductsForPage(pageProducts);
        setPage(1);
    }, [nameSearch, minPriceSearch, maxPriceSearch]);

    useMemo(() => {
        if (!productCategory) return <Navigate replace to='/' />;
    }, []);

    useEffect(() => {
        let pageProducts = productsFilteredByType.slice(
            (page - 1) * itemsPerPage,
            page * itemsPerPage,
        );
        setTotalPages(Math.ceil(productsFilteredByType.length / itemsPerPage));
        setProductsForPage(pageProducts);
    }, [productsFilteredByType]);

    useEffect(() => {
        let pageProducts = filteredProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage);
        setProductsForPage(pageProducts);
    }, [page]);

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

    function togglePriceDropdown() {
        setPriceDropdown(!priceDropdown);
    }

    function toggleSizeDropdown() {
        setSizeDropdown(!sizeDropdown);
    }

    function clearSearch() {
        setNameSearch('');
    }

    return (
        <div className='products__page'>
            <h2 className='products__page__title'>{header}</h2>
            <div className='products__page-container'>
                <div className='products__page-container-left'>
                    <div className='products__page__search'>
                        <SearchInput onSearch={searchProductByName} onClear={clearSearch} />
                    </div>
                    <div className='products-page__filter'>
                        <button type='button' className='products-page__filter-button' onClick={toggleSizeDropdown}>
                            {sizeDropdown ?
                                <div className='products-page__filter-name-dropdown'>
                                    <p>Size</p>
                                    <p className='products-page__filter-arrow'><UpArrow /></p>
                                </div> :
                                <div className='products-page__filter-name'>
                                    <p>Size</p>
                                    <p className='products-page__filter-arrow'><DownArrow /></p>
                                </div>
                            }
                        </button>
                        {sizeDropdown &&
                            <div className='products-page__filter-dropdown'>
                                <ul className='products-page__filter-dropdown-list'>
                                    <li className='size-checkbox'>
                                        <input type='checkbox' id='sizeS' />
                                        <label htmlFor='sizeS'>S</label>
                                    </li>
                                    <li className='size-checkbox'>
                                        <input type='checkbox' id='sizeS' />
                                        <label htmlFor='sizeM'>M</label>
                                    </li>
                                    <li className='size-checkbox'>
                                        <input type='checkbox' id='sizeS' />
                                        <label htmlFor='sizeL'>L</label>
                                    </li>
                                    <li className='size-checkbox'>
                                        <input type='checkbox' id='sizeS' />
                                        <label htmlFor='sizeXL'>XL</label>
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                    <div className='products-page__filter'>
                        <button type='button' className='products-page__filter-button' onClick={togglePriceDropdown}>
                            {priceDropdown ?
                                <div className='products-page__filter-name-dropdown'>
                                    <p>Price</p>
                                    <p className='products-page__filter-arrow'><UpArrow /></p>
                                </div> :
                                <div className='products-page__filter-name'>
                                    <p>Price</p>
                                    <p className='products-page__filter-arrow'><DownArrow /></p>
                                </div>
                            }
                        </button>
                        {priceDropdown &&
                            <div className='products-page__filter-dropdown'>
                                <ul className='products-page__filter-dropdown-list'>
                                    <li>
                                        <input
                                            type='number'
                                            onChange={searchProductByMinPrice}
                                            placeholder='Min price...'
                                            className='search-price-button'
                                            min='0'
                                        />
                                        -
                                        <input
                                            type='number'
                                            onChange={searchProductByMaxPrice}
                                            placeholder='Max price...'
                                            className='search-price-button'
                                            min='0'
                                        />
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                <div className='products__page-container-right'>
                    <div className='products__page__items'>
                        {productsForPage.map((item) => {
                            return <ProductItem key={`page-product-${item._id}`} {...item} />;
                        })}
                    </div>
                    {productsForPage.length < 1 ? null :
                        <div>
                            <Pagination page={page} totalPages={totalPages} handlePagination={handlePages} />
                        </div>}
                </div>
            </div>
        </div>
    );
};
