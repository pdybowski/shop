import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import '../searchInput/style.css';

interface props {
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ onSearch }: props): JSX.Element => {
    return (
        <div className="products__search">
            <AiOutlineSearch className="products__search-icon" />
            <input
                type="text"
                onChange={onSearch}
                className="products__search__input"
                placeholder="Search..."
            ></input>
        </div>
    );
};
