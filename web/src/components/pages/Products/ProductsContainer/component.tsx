import React, { useEffect, useMemo, useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

import { DownArrow, Pagination, ProductItem, SearchInput, UpArrow } from '../../../shared';

import { Product, ProductCategory, ProductType, tShirtSizes, tSizes } from '../../../../models';

import './style.css';

interface Props {
    productsToDisplay: Product[];
    itemsOnPage: number;
    productType: ProductType;
    resetFilters: boolean;
}

export const ProductsComponent = ({
                                      productsToDisplay,
                                      itemsOnPage,
                                      productType,
                                      resetFilters,
                                  }: Props): JSX.Element => {
    const optionsShirt = [{ label: 'XXS', checked: false }, { label: 'XS', checked: false }, {
        label: 'S',
        checked: false,
    }, { label: 'M', checked: false }, { label: 'L', checked: false }, { label: 'XL', checked: false }, {
        label: 'XXL',
        checked: false,
    }];

    const optionsShoe = [{ label: '28', checked: false }, { label: '29', checked: false }, {
        label: '30',
        checked: false,
    }, { label: '31', checked: false }, { label: '32', checked: false }, { label: '33', checked: false }, {
        label: '34',
        checked: false,
    }, { label: '35', checked: false }, { label: '36', checked: false }, { label: '37', checked: false }, {
        label: '38',
        checked: false,
    }, { label: '39', checked: false }, { label: '40', checked: false }, { label: '41', checked: false }, {
        label: '42',
        checked: false,
    }, { label: '43', checked: false }, { label: '44', checked: false }, { label: '45', checked: false }, {
        label: '46',
        checked: false,
    }, { label: '47', checked: false }, { label: '48', checked: false }];

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
    const [sizeShirtSearchArr, setSizeShirtSearchArr] = useState<tShirtSizes[]>([]);
    const [sizeShoeSearchArr, setSizeShoeSearchArr] = useState<tSizes[]>([]);

    const [sizeShirt, setSizeShirt] = useState(optionsShirt);
    const [sizeShoe, setSizeShoe] = useState(optionsShoe);

    const productCategory = searchParams.get('productCategory') as ProductCategory;

    const searchProductByMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setMinPriceSearch(value);
    };

    const searchProductByMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setMaxPriceSearch(value);
    };

    const setShirtSizesToSearch = (sizes: any) => {
        const x = sizes.map((size: any) => {
            return size.label;
        });
        setSizeShirtSearchArr(x);
    };

    const setShoeSizesToSearch = (sizes: any) => {
        const x = sizes.map((size: any) => {
            return size.label;
        });
        setSizeShoeSearchArr(x);
    };

    useEffect(() => {
        if (resetFilters) {
            setNameSearch('');
            setMinPriceSearch('');
            setMaxPriceSearch('');
            setSizeShirtSearchArr([]);
            setSizeShoeSearchArr([]);
            setSizeShirt(optionsShirt);
            setSizeShoe(optionsShoe);
        }
    }, [productsToDisplay]);

    useEffect(() => {
        let results: Product[] = productsToDisplay;

        const filterProductsByName = () => {
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

        const filterProductsByShirtSize = () => {
            results = results.filter(item1 =>
                !!sizeShirtSearchArr.find(item2 => item1.size === item2),
            );
        };

        const filterProductsByShoeSize = () => {
            results = results.filter(item1 =>
                !!sizeShoeSearchArr.find(item2 => item1.size === item2),
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

        if (sizeShirtSearchArr.length !== 0) {
            filterProductsByShirtSize();
        }

        if (sizeShoeSearchArr.length !== 0) {
            filterProductsByShoeSize();
        }

        setFilteredProducts(results);

        let pageProducts = results.slice((page - 1) * itemsOnPage, page * itemsOnPage);
        setTotalPages(Math.ceil(results.length / itemsOnPage));
        setProductsForPage(pageProducts);
        setPage(1);
    }, [nameSearch, minPriceSearch, maxPriceSearch, sizeShirtSearchArr, sizeShoeSearchArr]);

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

    const MultiselectCheckbox = ({
                                     data,
                                     setData,
                                     onChange,
                                 }: { data: any, setData: any, onChange: any }) => {

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

    return (
        <div className='products__container'>
            <div className='products__container--left'>
                <div className='products__search'>
                    <SearchInput inputValue={nameSearch} setInputValue={setNameSearch} />
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
                                {(productType === 'Shirt' || !productType) && <div>
                                    <MultiselectCheckbox
                                        onChange={(data: any) => {
                                            setShirtSizesToSearch(data);
                                        }}
                                        data={sizeShirt} setData={setSizeShirt} />
                                </div>}
                                {(productType === 'Shoe' || !productType) && <div>
                                    <MultiselectCheckbox
                                        onChange={(data: any) => {
                                            setShoeSizesToSearch(data);
                                        }}
                                        data={sizeShoe} setData={setSizeShoe} />
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
                                        value={minPriceSearch}
                                        type='number'
                                        onChange={searchProductByMinPrice}
                                        placeholder='Min price...'
                                        className='search__price__button'
                                        min='0'
                                    />
                                    -
                                    <input
                                        value={maxPriceSearch}
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
