import { Product } from '../../models';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export function addProduct(value: Product) {
    return {
        type: ADD_PRODUCT,
        payload: value,
    };
}

export function removeProduct(value: Product['_id']) {
    return {
        type: REMOVE_PRODUCT,
        payload: value,
    };
}
