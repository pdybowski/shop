import React, { useEffect, useMemo, useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

import { DownArrow, Pagination, ProductItem, SearchInput, UpArrow } from '../../../shared';

import { Product, ProductCategory, ProductType, tShirtSizes, tSizes } from '../../../../models';

import './style.css';

interface Props {
    productsToDisplay: Product[];
    itemsOnPage: number;
    productType: ProductType;
}

export const ProductsComponent = ({ productsToDisplay, itemsOnPage, productType }: Props): JSX.Element => {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const handlePages = (updatePage: number) => setPage(updatePage);

    const [searchParams] = useSearchParams();
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [productsForPage, setProductsForPage] = useState<Product[]>([]);

    const [priceDropdown, setPriceDropdown] = useState(false);
    const [sizeDropdown, setSizeDropdown] = useState(false);

    const [nameSearch, setNameSearch] = useState('');
    const [minPriceSearch, setMinPriceSearch] = useState('');
    const [maxPriceSearch, setMaxPriceSearch] = useState('');
    const [sizeSearchArr, setSizeSearchArr] = useState<(tSizes | tShirtSizes)[]>([]);

    const productCategory = searchParams.get('productCategory') as ProductCategory;

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

    const addSizeToSearch = (size: tSizes | tShirtSizes) => {
        setSizeSearchArr([...sizeSearchArr, size]);
    };

    const removeSizeFromSearch = (size: tSizes | tShirtSizes) => {
        setSizeSearchArr(sizeSearchArr.filter(item => item !== size));
    };

    const searchProductBySize = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, value } = e.target;
        if (checked) {
            // @ts-ignore
            addSizeToSearch(value);
        } else {
            // @ts-ignore
            removeSizeFromSearch(value);
        }
    };

    useEffect(() => {
        let results: Product[] = productsToDisplay;

        const filterProductsByName = () => {
            console.log(results);
            results = results.filter(
                (product) =>
                    product.name.toLowerCase().includes(nameSearch.toLowerCase()) ||
                    product.description?.toLowerCase().includes(nameSearch.toLowerCase()),
            );
        };

        const filterProductsByMinPrice = () => {
            results = results.filter((product) => product.price >= parseInt(minPriceSearch));
        };

        const filterProductsByMaxPrice = () => {
            results = results.filter((product) => product.price <= parseInt(maxPriceSearch));
        };

        const filterProductsBySize = () => {
            results = results.filter(item1 =>
                !!sizeSearchArr.find(item2 => item1.size === item2),
            );
        };

        if (nameSearch !== '') {
            filterProductsByName();
        }

        if (minPriceSearch !== '') {
            filterProductsByMinPrice();
        }

        if (maxPriceSearch !== '') {
            filterProductsByMaxPrice();
        }

        if (sizeSearchArr.length !== 0) {
            filterProductsBySize();
        }

        setFilteredProducts(results);

        let pageProducts = results.slice((page - 1) * itemsOnPage, page * itemsOnPage);
        setTotalPages(Math.ceil(results.length / itemsOnPage));
        setProductsForPage(pageProducts);
        setPage(1);
    }, [nameSearch, minPriceSearch, maxPriceSearch, sizeSearchArr]);

    useMemo(() => {
        if (!productCategory) return <Navigate replace to='/' />;
    }, []);

    useEffect(() => {
        let pageProducts = productsToDisplay.slice((page - 1) * itemsOnPage, page * itemsOnPage);
        setTotalPages(Math.ceil(productsToDisplay.length / itemsOnPage));
        setProductsForPage(pageProducts);
    }, [productsToDisplay]);

    useEffect(() => {
        let pageProducts = filteredProducts.slice((page - 1) * itemsOnPage, page * itemsOnPage);
        setProductsForPage(pageProducts);
    }, [page]);

    function togglePriceDropdown() {
        setPriceDropdown(!priceDropdown);
    }

    function toggleSizeDropdown() {
        setSizeDropdown(!sizeDropdown);
    }

    function clearSearchByName() {
        setNameSearch('');
    }

    const SizeCheckbox = ({ size }: { size: tSizes | tShirtSizes }) => {
        return (
            <li className='size__checkbox'>
                <input className= {'cursor--pointer'} type='checkbox' onChange={(e) => {
                    searchProductBySize(e);
                }} value={size} />
                <div>
                    <span>{size}</span>
                </div>
            </li>
        );
    };

    return (
        <div className='products__container'>
            <div className='products__container--left'>
                <div className='products__search'>
                    <SearchInput onSearch={searchProductByName} onClear={clearSearchByName} />
                </div>
                <div className='products__filter'>
                    <button
                        type='button'
                        className='products__filter__btn'
                        onClick={toggleSizeDropdown}
                    >
                        {sizeDropdown ? (
                            <div className='products__filter__dropdown__name'>
                                <p>Size</p>
                                <p className='products__filter__arrow'>
                                    <UpArrow />
                                </p>
                            </div>
                        ) : (
                            <div className='products__filter__name'>
                                <p>Size</p>
                                <p className='products__filter__arrow'>
                                    <DownArrow />
                                </p>
                            </div>
                        )}
                    </button>
                    {sizeDropdown && (
                        <div className='products__filter__dropdown'>
                            <ul className='products__filter__dropdown__list'>
                                {(productType === 'Shirt' || productType === null) && <div>
                                    <SizeCheckbox size='XXS' />
                                    <SizeCheckbox size='XS' />
                                    <SizeCheckbox size='S' />
                                    <SizeCheckbox size='M' />
                                    <SizeCheckbox size='L' />
                                    <SizeCheckbox size='XL' />
                                    <SizeCheckbox size='XXL' />
                                </div>}
                                {(productType === 'Shoe' || productType === null) && <div>
                                    <SizeCheckbox size='28' />
                                    <SizeCheckbox size='29' />
                                    <SizeCheckbox size='30' />
                                    <SizeCheckbox size='31' />
                                    <SizeCheckbox size='32' />
                                    <SizeCheckbox size='33' />
                                    <SizeCheckbox size='34' />
                                    <SizeCheckbox size='35' />
                                    <SizeCheckbox size='36' />
                                    <SizeCheckbox size='37' />
                                    <SizeCheckbox size='38' />
                                    <SizeCheckbox size='39' />
                                    <SizeCheckbox size='40' />
                                    <SizeCheckbox size='41' />
                                    <SizeCheckbox size='42' />
                                    <SizeCheckbox size='43' />
                                    <SizeCheckbox size='44' />
                                    <SizeCheckbox size='45' />
                                    <SizeCheckbox size='46' />
                                    <SizeCheckbox size='47' />
                                    <SizeCheckbox size='48' />
                                </div>}
                            </ul>
                        </div>
                    )}
                </div>
                <div className='products__filter'>
                    <button
                        type='button'
                        className='products__filter__btn'
                        onClick={togglePriceDropdown}
                    >
                        {priceDropdown ? (
                            <div className='products__filter__dropdown__name'>
                                <p>Price</p>
                                <p className='products__filter__arrow'>
                                    <UpArrow />
                                </p>
                            </div>
                        ) : (
                            <div className='products__filter__name'>
                                <p>Price</p>
                                <p className='products__filter__arrow'>
                                    <DownArrow />
                                </p>
                            </div>
                        )}
                    </button>
                    {priceDropdown && (
                        <div className='products__filter__dropdown'>
                            <ul className='products__filter__dropdown__list'>
                                <li>
                                    <input
                                        type='number'
                                        onChange={searchProductByMinPrice}
                                        placeholder='Min price...'
                                        className='search__price__button'
                                        min='0'
                                    />
                                    -
                                    <input
                                        type='number'
                                        onChange={searchProductByMaxPrice}
                                        placeholder='Max price...'
                                        className='search__price__button'
                                        min='0'
                                    />
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className='products__container--right'>
                <div className='products__items'>
                    {productsForPage.length > 0 ? (
                        productsForPage.map((item) => {
                            return <ProductItem key={`page-product-${item._id}`} {...item} />;
                        })
                    ) : (
                        <h4>No products for the current filter</h4>
                    )}
                </div>
                {productsForPage.length < 1 ? null : (
                    <div>
                        <Pagination
                            page={page}
                            totalPages={totalPages}
                            handlePagination={handlePages}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
