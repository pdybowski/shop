import React, { createContext, useState } from 'react';
import { Cart, cartProps } from './notification/Notification';
import { randomId } from '../../utils';

interface cartContextData {
    addItem: (value: cartProps) => void;
}

interface providerProps {
    children: Required<React.ReactChild>;
}

export const CartContext = createContext<cartContextData>({ addItem: () => {} });

export const CartProvider = ({ children }: providerProps) => {
    const [item, setItem] = useState<cartProps[]>([]);

    const addItem = (value: cartProps) => {
        setItem([...item, { ...value, key: randomId() }]);
    };

    return (
        <CartContext.Provider value={{ addItem: addItem }}>
            {children}
        </CartContext.Provider>
    );
};
