import React, { useEffect, useMemo, useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

import { DownArrow, Pagination, ProductItem, SearchInput, UpArrow } from '../../../shared';

import { Product, ProductCategory, tShirtSizes, tSizes } from '../../../../models';

import './style.css';

interface Props {
    productsToDisplay: Product[];
    itemsOnPage: number;
}

export const ProductsComponent = ({ productsToDisplay, itemsOnPage }: Props): JSX.Element => {
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

    const [checkedSizeXXS, setCheckedSizeXXS] = useState(false);
    const [checkedSizeXS, setCheckedSizeXS] = useState(false);
    const [checkedSizeS, setCheckedSizeS] = useState(false);
    const [checkedSizeM, setCheckedSizeM] = useState(false);
    const [checkedSizeL, setCheckedSizeL] = useState(false);
    const [checkedSizeXL, setCheckedSizeXL] = useState(false);
    const [checkedSizeXXL, setCheckedSizeXXL] = useState(false);

    const handleChangeSizeXXS = () => {
        setCheckedSizeXXS(!checkedSizeXXS);
    };

    const handleChangeSizeXS = () => {
        setCheckedSizeXS(!checkedSizeXS);
    };

    const handleChangeSizeS = () => {
        setCheckedSizeS(!checkedSizeS);
    };

    const handleChangeSizeM = () => {
        setCheckedSizeM(!checkedSizeM);
    };

    const handleChangeSizeL = () => {
        setCheckedSizeL(!checkedSizeL);
    };

    const handleChangeSizeXL = () => {
        setCheckedSizeXL(!checkedSizeXL);
    };

    const handleChangeSizeXXL = () => {
        setCheckedSizeXXL(!checkedSizeXXL);
    };

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
        setSizeSearchArr([...sizeSearchArr, size])
    }

    const removeSizeFromSearch = (size: tSizes | tShirtSizes) => {
        setSizeSearchArr(sizeSearchArr.filter(item => item !== size));
    }

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
                !!sizeSearchArr.find(item2 => item1.size === item2)
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

    const SizeCheckbox = ( { size, value, onChange }: { size: tSizes | tShirtSizes, value: boolean, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void },  ) => {
        return (
            <li className='size__checkbox'>
                <label className='size__label cursor--pointer'>
                    <input type='checkbox' checked={value} onChange={(e) => {
                        searchProductBySize(e);
                        onChange(e);
                    }} style={{ marginRight: '7px' }} value={size} />
                    {size}
                </label>
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
                                <SizeCheckbox size='XXS' value={checkedSizeXXS} onChange={handleChangeSizeXXS}/>
                                <SizeCheckbox size='XS' value={checkedSizeXS} onChange={handleChangeSizeXS}/>
                                <SizeCheckbox size='S' value={checkedSizeS} onChange={handleChangeSizeS}/>
                                <SizeCheckbox size='M' value={checkedSizeM} onChange={handleChangeSizeM}/>
                                <SizeCheckbox size='L' value={checkedSizeL} onChange={handleChangeSizeL}/>
                                <SizeCheckbox size='XL' value={checkedSizeXL} onChange={handleChangeSizeXL}/>
                                <SizeCheckbox size='XXL' value={checkedSizeXXL} onChange={handleChangeSizeXXL}/>
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
