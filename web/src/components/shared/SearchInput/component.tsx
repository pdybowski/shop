import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';

import './style.css';

interface Props {
    inputValue: any;
    setInputValue: any;
}

export const SearchInput = ({inputValue, setInputValue }: Props): JSX.Element => {

    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const resetInputField = () => {
        setInputValue('');
    };

    return (
        <div className="products__search">
            <AiOutlineSearch className="products__search-icon" />
            <input
                type="text"
                onChange={handleUserInput}
                className="products__search__input"
                placeholder="Search..."
                value={inputValue}
            ></input>
            <button className="products__close-icon" onClick={resetInputField}>
                <AiOutlineClose />
            </button>
        </div>
    );
};
