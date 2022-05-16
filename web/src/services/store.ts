import { combineReducers, configureStore } from '@reduxjs/toolkit';
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
