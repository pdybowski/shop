import React, { useContext, useState } from 'react';
import './style.css';

import buy from '../../../../../assets/images/buy.png';
import days from '../../../../../assets/images/days.png';
import delivery from '../../../../../assets/images/delivery.png';
import shipping from '../../../../../assets/images/shipping.png';

export const Info = (): JSX.Element => {
    return (
        <div className='info'>
            <div className='info__item'>
                <img alt='buy' src={shipping} />
                <div>Free shipping from 100$</div>
            </div>
            <div className='info__item'>
                <img alt='buy' src={buy} />
                <div>Shopping without registration</div>
            </div>
            <div className='info__item'>
                <img alt='buy' src={days} />
                <div>180 days for free return</div>
            </div>
            <div className='info__item'>
                <img alt='buy' src={delivery} />
                <div>Shipping within 24h</div>
            </div>
        </div>
    );
};
