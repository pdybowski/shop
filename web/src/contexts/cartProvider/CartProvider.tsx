import React, { createContext, useReducer } from 'react';
import { Brand, Product, ProductCategory, ProductType, SportType } from '../../interfaces';
import { ADD_PRODUCT, REMOVE_PRODUCT, shopReducer } from './CartReducer';

export interface cartItem {
    product: Product;
    quantity: number;
}

export interface cartContextData {
    products: Product[];
    cart: cartItem[];
    addProductToCart: (value: Product) => void;
    removeProductFromCart: (value: Product['_id']) => void;
}

const sampleProduct: Product = {
    _id: '1',
    name: 'cos',
    description: 'ble vle',
    price: 345,
    size: '42',
    sportType: SportType.basketball,
    productCategory: ProductCategory.man,
    productType: ProductType.shoe,
    brand: Brand.adidas,
};

const sampleProduct2: Product = {
    _id: '27',
    name: 'cos innego',
    description: 'ble vle',
    price: 345,
    size: '44',
    sportType: SportType.basketball,
    productCategory: ProductCategory.man,
    productType: ProductType.shoe,
    brand: Brand.adidas,
};

const contextDefaultValues: cartContextData = {
    products: [],
    cart: [],
    addProductToCart: (product) => {
    },
    removeProductFromCart: (productId) => {
    },
};

interface providerProps {
    children: Required<React.ReactChild>;
}

export const CartContext = createContext<cartContextData>(contextDefaultValues);

export const CartProvider = ({ children }: providerProps) => {
    const [cartState, dispatch] = useReducer(shopReducer, {
        cart: [
            { product: sampleProduct, quantity: 1 },
            {
                product: sampleProduct2,
                quantity: 1,
            },
        ],
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
                products: [],
                cart: cartState.cart,
                addProductToCart: addProductToCart,
                removeProductFromCart: removeProductFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
