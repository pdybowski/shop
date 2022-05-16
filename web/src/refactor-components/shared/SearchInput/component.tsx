import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import '../searchInput/style.css';

interface Props {
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClear: () => void;
}

export const SearchInput = ({ onSearch, onClear }: Props): JSX.Element => {
    const [inputValue, setInputValue] = useState('');

    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        onSearch(e);
    };

    const resetInputField = () => {
        setInputValue('');
        onClear();
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
