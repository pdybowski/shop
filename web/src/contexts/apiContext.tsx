import React, { createContext } from 'react';

let ApiContext: React.Context<any> = createContext('');

const AppProvider = ({ children: {} }) => {
    return <ApiContext.Provider value={{}}>{children}</ApiContext.Provider>;
};

const withApp = (Child) => (props) =>
    <ApiContext.Consumer>{(context) => <Child {...props} {...context} />}</ApiContext.Consumer>;

export { ApiContext, AppProvider, withApp };
