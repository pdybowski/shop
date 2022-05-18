import { User } from '../../models/user';
import { ADD_USER, REMOVE_USER } from '../actions/userActions';

export type UserData = {
    user: User[];
};

const initUserState: UserData = {
    user: [],
};

const addUserData = (user: User, state: UserData) => {
    // const newUser = [...state.user];
    // const newUserEmail = newUser.filter((email)=>email.user['email'])
    // }
    // if(newUser)
};

const removeUserData = (user: User, state: UserData) => {};

export function userReducer(state = initUserState, action: any) {
    switch (action.type) {
        case ADD_USER:
            return addUserData(action.payload, state);
        case REMOVE_USER:
            return removeUserData(action.payload, state);
        default:
            return state;
    }
}
