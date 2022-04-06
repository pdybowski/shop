import React, { useState } from 'react';
import { ProductItem } from '../../components/shared/productItem/ProductItem';
// import BiSearchAlt from 'react-icons/all';
import './style.css';

const products: string[] = ['Nike Sportswear', 'Adidas'];

type ProductsPageType = {
    header: string;
};

export const ProductsPage = ({ header }: ProductsPageType): JSX.Element => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLButtonElement;
        if (target.value.length <= 1) {
            setSearchTerm(target.value);
            setSearchResults([]);
            return;
        }
        const results: any = products.filter((productsSearch) =>
            productsSearch.toLowerCase().includes(target.value)
        );
        setSearchResults(results);
    };
    const clearInput = () => {
        setSearchResults([]);
        setSearchTerm('');
    };

    return (
        <div className="products__page">
            <h2 className="products__page__title">{header}</h2>
            <div className="products__page__search">
                {/* <BiSearchAlt className="search_icon" /> */}
                <input
                    type="text"
                    // value={searchTerm}
                    onChange={handleChange}
                    className="products__page__search__input"
                    placeholder="Search.."
                ></input>
                <button type="button" onClick={clearInput}>
                    X
                </button>
                <div className="products__page__search__results">
                    {searchResults.map((items) => {
                        return <p className="products__page__search__results__item">{items}</p>;
                    })}
                </div>
            </div>
            <div className="products__page__items">
                <ProductItem
                    title="Nike Sportswear"
                    description="Jordan 1"
                    url="https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/0/0000300020753_01_st.jpg"
                    price={25}
                />
                <ProductItem
                    title="Adidas"
                    description="Turbo"
                    url="https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/0/0000209034363_01_rz.jpg"
                    price={34}
                />
                <ProductItem
                    title="Nike Sportswear"
                    description="Jordan 1"
                    url="https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/0/0000300020753_01_st.jpg"
                    price={25}
                />
                <ProductItem
                    title="Nike Sportswear"
                    description="Jordan 1"
                    url="https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/0/0000300020753_01_st.jpg"
                    price={25}
                />
                <ProductItem
                    title="Nike Sportswear"
                    description="Jordan 1"
                    url="https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/0/0000300020753_01_st.jpg"
                    price={25}
                />
                <ProductItem
                    title="Nike Sportswear"
                    description="Jordan 1"
                    url="https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/0/0000300020753_01_st.jpg"
                    price={25}
                />
            </div>
        </div>
    );
};
