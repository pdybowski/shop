import React, { createContext, useState } from 'react';
import { Product } from '../../interfaces/product';

export interface pageResourceContextData {
    pageResource: Product[];
    addPageResource: (value: Product[]) => void;
}

const contextDefaultValues: pageResourceContextData = {
    pageResource: [],
    addPageResource: () => {},
};

interface providerProps {
    children: Required<React.ReactChild>;
}

export const PageResourceContext = createContext<pageResourceContextData>(contextDefaultValues);

export const PageResourceProvider = ({ children }: providerProps) => {
    const [pageResource, setPageResource] = useState<Product[]>(contextDefaultValues.pageResource);

    const addPageResource = (data: Product[]) => {
        setPageResource(data);
    };

    return (
        <PageResourceContext.Provider value={{ pageResource, addPageResource }}>
            {children}
        </PageResourceContext.Provider>
    );
};
