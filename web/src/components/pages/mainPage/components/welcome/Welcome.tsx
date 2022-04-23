import React from 'react';
import './style.css';
import Typing from '../../../../shared/typing/Typing';

export const Welcome = () => {
    return (
        <div className={'welcome'}>
            <Typing className={'welcome-text'} typedWords={['Hello!', 'Welcome to Sport Gen!']} />
        </div>
    );
};
