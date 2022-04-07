import React from 'react';

interface props {
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ onSearch }: props): JSX.Element => {
    return (
        <div className="products__search">
            <input
                type="text"
                onChange={onSearch}
                className="products__search__input"
                placeholder="Search..."
            ></input>
        </div>
    );
};
