import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './reducers/cartReducer';

const store = configureStore({
    reducer: {
        shoppingCart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
