import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation, Spinner } from './components';
import {
    CartProvider,
    NotificationContext,
    PageResourceContext,
    PageResourceProvider,
} from './contexts';
import { useFetch } from './hooks';
import { NotificationMode, Product } from './interfaces';
import Views from './Views';

function App() {
    const { isLoading, data, error } = useFetch<Product[]>({ url: 'products' });

    const { addPageResource } = useContext(PageResourceContext);
    const { addNotification } = useContext(NotificationContext);

    useEffect(() => {
        if (!isLoading) {
            if (error) {
                return addNotification({
                    mode: NotificationMode.DANGER,
                    title: 'Products',
                    message: error,
                });
            }
            if (data) {
                addPageResource(data);
            }
        }
    }, [isLoading]);

    return (
        <>
            <BrowserRouter>
                <Navigation />
                {isLoading ? (
                    <Spinner style={{}} />
                ) : (
                    <PageResourceProvider>
                        <CartProvider>
                            <Views />
                        </CartProvider>
                    </PageResourceProvider>
                )}
            </BrowserRouter>
        </>
    );
}

export default App;
