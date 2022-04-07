import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './components';
import { NotificationProvider } from './contexts';
import Views from './Views';
import { Spinner } from './components/shared';
import CartProvider from './contexts/cartProvider/CartProvider';
import {
    PageResourceContext,
    PageResourceProvider,
} from './contexts/pageResourceProvider/PageResourceProvider';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        const { pageResource, addPageResource } = useContext(PageResourceContext);

        try {
            // TO DO
            addPageResource([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <BrowserRouter>
                <Navigation />
                <NotificationProvider>
                    {isLoading ? (
                        <Spinner style={{}} />
                    ) : (
                        <PageResourceProvider>
                            <CartProvider>
                                <Views />
                            </CartProvider>
                        </PageResourceProvider>
                    )}
                </NotificationProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
