import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import '../searchInput/style.css';

interface props {
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
}

export const SearchInput = ({ onSearch, onClick }: props): JSX.Element => {

    const x: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> = <input
        type='text'
        onChange={onSearch}
        className='products__search__input'
        placeholder='Search...'
    ></input>;

    return (
        <div className='products__search'>
            <AiOutlineSearch className='products__search-icon' />
            {x}
            {x && <button className='products__close-icon' onClick={clear}><AiOutlineClose /></button>}
        </div>
    );

    function clear() {
        x.value = '';
        if (onClick) {
            onClick();
        }
    }
};
