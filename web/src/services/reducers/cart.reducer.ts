import { Product } from '../../models';
import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    REMOVE_ALL_PRODUCTS_FROM_CART,
} from '../actions/cart.actions';

export interface cartItem {
    quantity: number;
    product: Product;
    size: string;
}

export interface cartState {
    cart: cartItem[];
}

const initCartState: cartState = {
    cart: [],
};

const addProductToCart = (value: cartItem, state: cartState) => {
    const updatedCart = [...state.cart];

    const updatedItemIndex = updatedCart.findIndex(
        (item) => item.product['_id'] === value.product['_id'] && item.size === value.size
    );

    if (updatedItemIndex < 0) {
        updatedCart.push({ product: value.product, size: value.size, quantity: 1 });
    } else {
        const updatedItem = {
            ...updatedCart[updatedItemIndex],
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
    }

    return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId: Product['_id'], state: cartState) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex((item) => item.product['_id'] === productId);

    const updatedItem = {
        ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
    } else {
        updatedCart[updatedItemIndex] = updatedItem;
    }

    return { ...state, cart: updatedCart };
};

const removeAllProductsFromCart = (payload: cartItem[], state: cartState) => {
    return { ...state, cart: payload };
};

export function cartReducer(state = initCartState, action: any): cartState {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return addProductToCart(action.payload, state);
        case REMOVE_PRODUCT_FROM_CART:
            return removeProductFromCart(action.payload, state);
        case REMOVE_ALL_PRODUCTS_FROM_CART:
            return removeAllProductsFromCart(action.payload, state);
        default:
            return state;
    }
}
