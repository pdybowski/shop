import React, { createContext } from 'react';

export interface apiContextData {
}

interface providerProps {
    children: Required<React.ReactChild>;
}

export const ApiContext = createContext<apiContextData | null>(null);

export const ApiProvider = ({ children }: providerProps) => {
    return <ApiContext.Provider value={{}}>{children}</ApiContext.Provider>;
};
