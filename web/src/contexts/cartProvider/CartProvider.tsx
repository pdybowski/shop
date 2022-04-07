import React, { createContext, useState } from 'react';

export type Item = {
    id: number;
    name: string;
};

export interface cartContextData {
    cart: Item[];
    addItem: (value: Item) => void;
}

const contextDefaultValues: cartContextData = {
    cart: [],
    addItem: () => {},
};

interface providerProps {
    children: Required<React.ReactChild>;
}

export const CartContext = createContext<cartContextData>(contextDefaultValues);

const CartProvider = ({ children }: providerProps) => {
    const [cart, setCart] = useState<Item[]>(contextDefaultValues.cart);

    const addItem = (newItem: Item) => {
        setCart((cart) => [...cart, newItem]);
    };

    return <CartContext.Provider value={{ cart, addItem }}>{children}</CartContext.Provider>;
};

export default CartProvider;
