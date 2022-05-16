<<<<<<< HEAD
import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
=======
import { configureStore } from '@reduxjs/toolkit';
>>>>>>> master
import rootReducer from './reducers/combineReducers';

const rootReducers = combineReducers({});
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
