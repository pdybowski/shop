import { User } from '../../models/user';
import { SAVE_USER_DATA } from '../actions/userActions';

const initUserState: User = new User();

export function userReducer(state = initUserState, action: any): User {
    switch (action.type) {
        case SAVE_USER_DATA:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
