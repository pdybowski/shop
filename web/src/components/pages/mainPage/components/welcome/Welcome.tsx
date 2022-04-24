import React from 'react';

import Typing from '../../../../shared/typing/Typing';

import './style.css';

export const Welcome = () => {
    return (
        <div className={'welcome'}>
            <Typing className={'welcome-text'} typedWords={['Hello!', 'Welcome to Sport Gen!']} />
        </div>
    );
};
