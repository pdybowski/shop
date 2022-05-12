import { combineReducers } from 'redux';
import { cartReducer as cart } from './cart.reducer';
import { pageResourceReducer as pageResource } from './page-resource.reducer';

export default combineReducers({
    cart,
    pageResource
});