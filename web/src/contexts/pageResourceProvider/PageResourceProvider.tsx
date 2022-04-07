import React, { createContext } from 'react';

export interface pageResourceContextData {
}

interface providerProps {
    children: Required<React.ReactChild>;
}

export const PageResourceContext = createContext<pageResourceContextData | null>(null);

export const PageResourceProvider = ({ children }: providerProps) => {
    return <PageResourceContext.Provider value={{}}>{children}</PageResourceContext.Provider>;
};
