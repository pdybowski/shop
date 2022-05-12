import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { pageResourceReducer } from './pageResourceReducer';

export default combineReducers({
    cartReducer,
    pageResourceReducer
});