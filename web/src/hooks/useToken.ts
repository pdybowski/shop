import React, { useState } from 'react';

const UseToken: any = () => {
    const getToken = () => {
        const tokenString: any = localStorage.getItem('token');
        const userToken: any = JSON.parse(tokenString);
        return userToken?.token;
    };
    const [token, setToken] = useState(getToken);

    const saveToken = (userToken: { token: any }) => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    };
    return {
        setToken: saveToken,
        token,
    };
};

export default UseToken;
