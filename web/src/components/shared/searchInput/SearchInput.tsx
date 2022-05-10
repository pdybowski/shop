import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import '../searchInput/style.css';

interface props {
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClear: () => void;
}

export const SearchInput = ({onSearch, onClear}: props): JSX.Element => {

    const [inputValue, setInputValue] = useState("");

    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        onSearch(e);
    }

    const resetInputField = () => {
        setInputValue("");
        onClear();
    };

    const x: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> = <input
        type='text'
        onChange={handleUserInput}
        className='products__search__input'
        placeholder='Search...'
        value={inputValue}
    ></input>;

    return (
        <div className='products__search'>
            <AiOutlineSearch className='products__search-icon' />
            {x}
            <button className='products__close-icon' onClick={resetInputField}><AiOutlineClose /></button>
        </div>
    );
};
