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

    const [checkedSizeXXS, setCheckedSizeXXS] = useState(false);
    const [checkedSizeXS, setCheckedSizeXS] = useState(false);
    const [checkedSizeS, setCheckedSizeS] = useState(false);
    const [checkedSizeM, setCheckedSizeM] = useState(false);
    const [checkedSizeL, setCheckedSizeL] = useState(false);
    const [checkedSizeXL, setCheckedSizeXL] = useState(false);
    const [checkedSizeXXL, setCheckedSizeXXL] = useState(false);

    const [checkedSize28, setCheckedSize28] = useState(false);
    const [checkedSize29, setCheckedSize29] = useState(false);
    const [checkedSize30, setCheckedSize30] = useState(false);
    const [checkedSize31, setCheckedSize31] = useState(false);
    const [checkedSize32, setCheckedSize32] = useState(false);
    const [checkedSize33, setCheckedSize33] = useState(false);
    const [checkedSize34, setCheckedSize34] = useState(false);
    const [checkedSize35, setCheckedSize35] = useState(false);
    const [checkedSize36, setCheckedSize36] = useState(false);
    const [checkedSize37, setCheckedSize37] = useState(false);
    const [checkedSize38, setCheckedSize38] = useState(false);
    const [checkedSize39, setCheckedSize39] = useState(false);
    const [checkedSize40, setCheckedSize40] = useState(false);
    const [checkedSize41, setCheckedSize41] = useState(false);
    const [checkedSize42, setCheckedSize42] = useState(false);
    const [checkedSize43, setCheckedSize43] = useState(false);
    const [checkedSize44, setCheckedSize44] = useState(false);
    const [checkedSize45, setCheckedSize45] = useState(false);
    const [checkedSize46, setCheckedSize46] = useState(false);
    const [checkedSize47, setCheckedSize47] = useState(false);
    const [checkedSize48, setCheckedSize48] = useState(false);

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

    const handleChangeSize28 = () => {
        setCheckedSize28(!checkedSize28);
    };

    const handleChangeSize29 = () => {
        setCheckedSize29(!checkedSize29);
    };

    const handleChangeSize30 = () => {
        setCheckedSize30(!checkedSize30);
    };

    const handleChangeSize31 = () => {
        setCheckedSize31(!checkedSize31);
    };

    const handleChangeSize32 = () => {
        setCheckedSize32(!checkedSize32);
    };

    const handleChangeSize33 = () => {
        setCheckedSize33(!checkedSize33);
    };

    const handleChangeSize34 = () => {
        setCheckedSize34(!checkedSize34);
    };

    const handleChangeSize35 = () => {
        setCheckedSize35(!checkedSize35);
    };

    const handleChangeSize36 = () => {
        setCheckedSize36(!checkedSize36);
    };

    const handleChangeSize37 = () => {
        setCheckedSize37(!checkedSize37);
    };

    const handleChangeSize38 = () => {
        setCheckedSize38(!checkedSize38);
    };

    const handleChangeSize39 = () => {
        setCheckedSize39(!checkedSize39);
    };

    const handleChangeSize40 = () => {
        setCheckedSize40(!checkedSize40);
    };

    const handleChangeSize41 = () => {
        setCheckedSize41(!checkedSize41);
    };

    const handleChangeSize42 = () => {
        setCheckedSize42(!checkedSize42);
    };

    const handleChangeSize43 = () => {
        setCheckedSize43(!checkedSize43);
    };

    const handleChangeSize44 = () => {
        setCheckedSize44(!checkedSize44);
    };

    const handleChangeSize45 = () => {
        setCheckedSize45(!checkedSize45);
    };

    const handleChangeSize46 = () => {
        setCheckedSize46(!checkedSize46);
    };

    const handleChangeSize47 = () => {
        setCheckedSize47(!checkedSize47);
    };

    const handleChangeSize48 = () => {
        setCheckedSize48(!checkedSize48);
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

    const SizeCheckbox = ({
                              size,
                              value,
                              onChange,
                          }: { size: tSizes | tShirtSizes, value: boolean, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
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
                                {(productType === 'Shirt' || productType === null) && <div>
                                    <SizeCheckbox size='XXS' value={checkedSizeXXS} onChange={handleChangeSizeXXS} />
                                    <SizeCheckbox size='XS' value={checkedSizeXS} onChange={handleChangeSizeXS} />
                                    <SizeCheckbox size='S' value={checkedSizeS} onChange={handleChangeSizeS} />
                                    <SizeCheckbox size='M' value={checkedSizeM} onChange={handleChangeSizeM} />
                                    <SizeCheckbox size='L' value={checkedSizeL} onChange={handleChangeSizeL} />
                                    <SizeCheckbox size='XL' value={checkedSizeXL} onChange={handleChangeSizeXL} />
                                    <SizeCheckbox size='XXL' value={checkedSizeXXL} onChange={handleChangeSizeXXL} />
                                </div>}
                                {(productType === 'Shoe' || productType === null) && <div>
                                    <SizeCheckbox size='28' value={checkedSize28} onChange={handleChangeSize28} />
                                    <SizeCheckbox size='29' value={checkedSize29} onChange={handleChangeSize29} />
                                    <SizeCheckbox size='30' value={checkedSize30} onChange={handleChangeSize30} />
                                    <SizeCheckbox size='31' value={checkedSize31} onChange={handleChangeSize31} />
                                    <SizeCheckbox size='32' value={checkedSize32} onChange={handleChangeSize32} />
                                    <SizeCheckbox size='33' value={checkedSize33} onChange={handleChangeSize33} />
                                    <SizeCheckbox size='34' value={checkedSize34} onChange={handleChangeSize34} />
                                    <SizeCheckbox size='35' value={checkedSize35} onChange={handleChangeSize35} />
                                    <SizeCheckbox size='36' value={checkedSize36} onChange={handleChangeSize36} />
                                    <SizeCheckbox size='37' value={checkedSize37} onChange={handleChangeSize37} />
                                    <SizeCheckbox size='38' value={checkedSize38} onChange={handleChangeSize38} />
                                    <SizeCheckbox size='39' value={checkedSize39} onChange={handleChangeSize39} />
                                    <SizeCheckbox size='40' value={checkedSize40} onChange={handleChangeSize40} />
                                    <SizeCheckbox size='41' value={checkedSize41} onChange={handleChangeSize41} />
                                    <SizeCheckbox size='42' value={checkedSize42} onChange={handleChangeSize42} />
                                    <SizeCheckbox size='43' value={checkedSize43} onChange={handleChangeSize43} />
                                    <SizeCheckbox size='44' value={checkedSize44} onChange={handleChangeSize44} />
                                    <SizeCheckbox size='45' value={checkedSize45} onChange={handleChangeSize45} />
                                    <SizeCheckbox size='46' value={checkedSize46} onChange={handleChangeSize46} />
                                    <SizeCheckbox size='47' value={checkedSize47} onChange={handleChangeSize47} />
                                    <SizeCheckbox size='48' value={checkedSize48} onChange={handleChangeSize48} />
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
