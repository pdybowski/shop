import { Product } from '../../interfaces';
import { cartContextData } from './CartProvider';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

const addProductToCart = (product: Product, state: cartContextData) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
        (item) => item.product['_id'] === product['_id']
    );

    if (updatedItemIndex < 0) {
        updatedCart.push({ product: product, quantity: 1 });
    } else {
        const updatedItem = {
            ...updatedCart[updatedItemIndex],
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
    }

    return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId: Product['_id'], state: cartContextData) => {
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

export const shopReducer = (
    state: any,
    action: { type: string; product: Product; productId?: Product['_id'] }
) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return addProductToCart(action.product, state);

        case REMOVE_PRODUCT:
            return removeProductFromCart(action.productId, state);

        default:
            return state;
    }
};
