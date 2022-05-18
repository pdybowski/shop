import { Product } from '../../models';

export const ADD_PRODUCT_TO_CART = 'CART/ADD_PRODUCT';
export const REMOVE_PRODUCT_FROM_CART = 'CART/REMOVE_PRODUCT';
export const REMOVE_ALL_PRODUCTS_FROM_CART = 'CART/REMOVE_ALL_PRODUCTS';

export function addProductToCartAction(value: Product) {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: value,
    };
}

export function removeProductAction(value: Product['_id']) {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: value,
    };
}

export function removeAllProductsAction() {
    return {
        type: REMOVE_ALL_PRODUCTS_FROM_CART,
        payload: [],
    };
}
