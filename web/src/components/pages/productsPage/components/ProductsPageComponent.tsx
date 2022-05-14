import React, { useEffect, useMemo, useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { Product, ProductCategory } from '../../../../models';
import { ProductItem, SearchInput, Pagination } from '../../../shared';
import { DownArrow, UpArrow } from '../../../navigation/components';
import './style.css';

interface Props {
    productsToDisplay: Product[];
    itemsOnPage: number;
}

export const ProductsPageComponent = ({ productsToDisplay, itemsOnPage }: Props): JSX.Element => {
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

    useEffect(() => {
        let results: Product[] = productsToDisplay;

        const filterProductsByName = () => {
            results = results.filter(
                (product) =>
                    product.name.toLowerCase().includes(nameSearch.toLowerCase()) ||
                    product.description.toLowerCase().includes(nameSearch.toLowerCase())
            );
        };

        const filterProductsByMinPrice = () => {
            results = results.filter((product) => product.price >= parseInt(minPriceSearch));
        };

        const filterProductsByMaxPrice = () => {
            results = results.filter((product) => product.price <= parseInt(maxPriceSearch));
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

        setFilteredProducts(results);

        let pageProducts = results.slice((page - 1) * itemsOnPage, page * itemsOnPage);
        setTotalPages(Math.ceil(results.length / itemsOnPage));
        setProductsForPage(pageProducts);
        setPage(1);
    }, [nameSearch, minPriceSearch, maxPriceSearch]);

    useMemo(() => {
        if (!productCategory) return <Navigate replace to="/" />;
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

    function clearSearch() {
        setNameSearch('');
    }

    return (
        <div className="products__page-container">
            <div className="products__page-container-left">
                <div className="products__page__search">
                    <SearchInput onSearch={searchProductByName} onClear={clearSearch} />
                </div>
                <div className="products-page__filter">
                    <button
                        type="button"
                        className="products-page__filter-button"
                        onClick={toggleSizeDropdown}
                    >
                        {sizeDropdown ? (
                            <div className="products-page__filter-name-dropdown">
                                <p>Size</p>
                                <p className="products-page__filter-arrow">
                                    <UpArrow />
                                </p>
                            </div>
                        ) : (
                            <div className="products-page__filter-name">
                                <p>Size</p>
                                <p className="products-page__filter-arrow">
                                    <DownArrow />
                                </p>
                            </div>
                        )}
                    </button>
                    {sizeDropdown && (
                        <div className="products-page__filter-dropdown">
                            <ul className="products-page__filter-dropdown-list">
                                <li className="size-checkbox">
                                    <input type="checkbox" id="sizeS" />
                                    <label htmlFor="sizeS">S</label>
                                </li>
                                <li className="size-checkbox">
                                    <input type="checkbox" id="sizeM" />
                                    <label htmlFor="sizeM">M</label>
                                </li>
                                <li className="size-checkbox">
                                    <input type="checkbox" id="sizeL" />
                                    <label htmlFor="sizeL">L</label>
                                </li>
                                <li className="size-checkbox">
                                    <input type="checkbox" id="sizeXL" />
                                    <label htmlFor="sizeXL">XL</label>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="products-page__filter">
                    <button
                        type="button"
                        className="products-page__filter-button"
                        onClick={togglePriceDropdown}
                    >
                        {priceDropdown ? (
                            <div className="products-page__filter-name-dropdown">
                                <p>Price</p>
                                <p className="products-page__filter-arrow">
                                    <UpArrow />
                                </p>
                            </div>
                        ) : (
                            <div className="products-page__filter-name">
                                <p>Price</p>
                                <p className="products-page__filter-arrow">
                                    <DownArrow />
                                </p>
                            </div>
                        )}
                    </button>
                    {priceDropdown && (
                        <div className="products-page__filter-dropdown">
                            <ul className="products-page__filter-dropdown-list">
                                <li>
                                    <input
                                        type="number"
                                        onChange={searchProductByMinPrice}
                                        placeholder="Min price..."
                                        className="search-price-button"
                                        min="0"
                                    />
                                    -
                                    <input
                                        type="number"
                                        onChange={searchProductByMaxPrice}
                                        placeholder="Max price..."
                                        className="search-price-button"
                                        min="0"
                                    />
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="products__page-container-right">
                <div className="products__page__items">
                    {productsForPage.map((item) => {
                        return <ProductItem key={`page-product-${item._id}`} {...item} />;
                    })}
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
