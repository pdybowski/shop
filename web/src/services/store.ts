<<<<<<< HEAD
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './reducers/cartReducer';
=======
import { configureStore, createStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/combineReducers';
>>>>>>> master

const rootReducers = combineReducers({});
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
