import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { CartContext, PageResourceContext } from '../../../contexts';
import { useFilterProducts } from '../../../hooks';
import { Product, ProductCategory, ProductType, SportType } from '../../../interfaces';
import { ProductItem, SearchInput } from '../../shared';
import { SportItem } from './SportItem';
import './style.css';

export const SportsPage = () => {
    const sports: string[] = Object.values(SportType);

    return (
        <div className="sportItems__container">
            {sports.map((sport) => {
                return <SportItem sportType={sport} />;
            })}
        </div>
    );
};

// import { SportType } from '../../../interfaces';
// import { SportItem } from './SportItem';

// import './style.css';

// export const SportsPage = () => {
//     const sports: string[] = Object.values(SportType);

//     return (
//         <div className="sportItems__container">
//             {sports.map((sport) => {
//                 return <SportItem sportType={sport} />;
//             })}
//         </div>
//     );
// };
