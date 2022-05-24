import { combineReducers } from 'redux';
import { cartReducer as cart } from './cart.reducer';
import { pageResourceReducer as pageResource } from './page-resource.reducer';
import { userReducer as user } from './user.reducer';

export default combineReducers({
    cart,
    pageResource,
    user,
});