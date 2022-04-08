import React, { createContext, useState } from 'react';
import { ProductItemType } from '../../components';

export interface cartContextData {
    cart: ProductItemType[];
    addItem: (value: ProductItemType) => void;
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
    const [cart, setCart] = useState<ProductItemType[]>(contextDefaultValues.cart);

    const addItem = (newItem: ProductItemType) => {
        setCart((cart) => [...cart, newItem]);
    };

    return <CartContext.Provider value={{ cart, addItem }}>{children}</CartContext.Provider>;
};
