import React, { createContext, useState } from 'react';
import { PageResource, PageResourceEditType } from '../../models';

interface contextData {
    pageResource: PageResource;
    addPageResource: (value: PageResourceEditType) => void;
}

interface providerProps {
    children: Required<React.ReactChild>;
}

const contextDefaultValues: PageResource = new PageResource();

export const PageResourceContext = createContext<contextData>({
    pageResource: new PageResource(),
    addPageResource: () => {},
});

export const PageResourceProvider = ({ children }: providerProps) => {
    const [pageResource, setPageResource] = useState<PageResource>(contextDefaultValues);

    const addPageResource = (data: PageResourceEditType) => {
        setPageResource({ ...pageResource, ...data });
    };

    return (
        <PageResourceContext.Provider value={{ pageResource, addPageResource }}>
            {children}
        </PageResourceContext.Provider>
    );
};
