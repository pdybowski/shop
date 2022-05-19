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

    const setSizesToSearch = (sizes: any) => {
        const x = sizes.map((size: any) => {
            return size.label
        } )
        setSizeSearchArr(x);
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

    const MultiselectCheckbox = ({ options, onChange }: { options: any, onChange: any }) => {
        const [data, setData] = useState(options);

        const toggle = (index: number) => {
            const newData = [...data];
            newData.splice(index, 1, {
                label: data[index].label,
                checked: !data[index].checked,
            });

            setData(newData);
            onChange(newData.filter(x => x.checked));
        };

        return (
            <>
                {data.map((item: any, index: number) => (
                    <li className={item.checked ? 'checked size__checkbox' : 'size__checkbox'} key={item.label}>
                        <input readOnly className={'cursor--pointer'} type='checkbox'
                               checked={item.checked || false}
                               onClick={() => toggle(index)}
                        />
                        <div>
                            <span>{item.label}</span>
                        </div>
                    </li>
                ))}
            </>
        );
    };

    const optionsShirt = [{ label: 'XXS' }, { label: 'XS' }, { label: 'S' }, { label: 'M' }, { label: 'L' }, { label: 'XL' }, { label: 'XXL' }];

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
                                    <MultiselectCheckbox
                                        options={optionsShirt}
                                        onChange={(data: any) => {
                                            // setSizesToSearch(data) // Fixme breaking sizes selection
                                        }}
                                    />
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
