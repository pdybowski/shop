import { User } from '../../models/user';

export const SAVE_USER_DATA = 'SAVE_USER_DATA';

export const saveUserDataAction = (user: User) => {
    return {
        type: SAVE_USER_DATA,
        payload: user,
    };
};


