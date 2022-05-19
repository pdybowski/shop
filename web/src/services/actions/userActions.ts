import { User } from '../../models/user';

export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const addUser = (value: User) => {
    return {
        type: ADD_USER,
        payload: value,
    };
};

export const removeUser = (value: User) => {
    return {
        type: REMOVE_USER,
        payload: value,
    };
};
