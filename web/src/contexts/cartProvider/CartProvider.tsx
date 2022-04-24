import React, { createContext, useReducer } from 'react';
import { Product } from '../../models';
import { ADD_PRODUCT, REMOVE_PRODUCT, cartReducer } from './CartReducer';

export interface cartItem {
    product: Product;
    quantity: number;
}

export interface cartContextData {
    cart: cartItem[];
    addProductToCart: (value: Product) => void;
    removeProductFromCart: (value: Product['_id']) => void;
}

const contextDefaultValues: cartContextData = {
    cart: [],
    addProductToCart: (product) => {},
    removeProductFromCart: (productId) => {},
};

interface providerProps {
    children: Required<React.ReactChild>;
}

export const CartContext = createContext<cartContextData>(contextDefaultValues);

export const CartProvider = ({ children }: providerProps) => {
    const [cartState, dispatch] = useReducer(cartReducer, {
        cart: [],
    });

    const addProductToCart = (product: Product) => {
        dispatch({ type: ADD_PRODUCT, product: product });
    };

    const removeProductFromCart = (productId: Product['_id']) => {
        // @ts-ignore
        dispatch({ type: REMOVE_PRODUCT, productId: productId });
    };

    return (
        <CartContext.Provider
            value={{
                cart: cartState.cart,
                addProductToCart: addProductToCart,
                removeProductFromCart: removeProductFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
