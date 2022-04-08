import React, { createContext, useState } from 'react';
import { Product } from '../../interfaces';

export interface cartContextData {
    cart: Product[];
    addItem: (value: Product) => void;
}

const contextDefaultValues: cartContextData = {
    cart: [],
    addItem: () => {},
};

interface providerProps {
    children: Required<React.ReactChild>;
}

export const CartContext = createContext<cartContextData>(contextDefaultValues);

export const CartProvider = ({ children }: providerProps) => {
    const [cart, setCart] = useState<Product[]>(contextDefaultValues.cart);

    const addItem = (newItem: Product) => {
        setCart((cart) => [...cart, newItem]);
    };

    return <CartContext.Provider value={{ cart, addItem }}>{children}</CartContext.Provider>;
};
