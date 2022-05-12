import { createSelector } from 'reselect';
import { cartState } from '../reducers/cart.reducer';

export const selectItems = (state: cartState) => state.cart;

export const selectSubtotalAmount = createSelector([selectItems], (items) => {
    return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
});

export const selectItemsNumber = createSelector([selectItems], (items) => {
    return items.reduce((count, item) => count + item.quantity, 0);
});
