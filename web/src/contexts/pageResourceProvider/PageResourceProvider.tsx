import React, { createContext, useState } from 'react';
import { ProductItemType } from '../../components/shared/productItem/ProductItem';

export interface pageResourceContextData {
    pageResource: ProductItemType[];
    addPageResource: (value: ProductItemType[]) => void;
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
    const [pageResource, setPageResource] = useState<ProductItemType[]>(contextDefaultValues.pageResource);

    const addPageResource = (data: ProductItemType[]) => {
        setPageResource(data);
    };

    return (
        <PageResourceContext.Provider value={{ pageResource, addPageResource }}>
            {children}
        </PageResourceContext.Provider>
    );
};
