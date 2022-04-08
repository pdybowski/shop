import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation, Spinner } from './components';
import {
    NotificationProvider,
    CartProvider,
    PageResourceContext,
    PageResourceProvider,
} from './contexts';
import Views from './Views';

function App() {
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        // const { pageResource, addPageResource } = useContext(PageResourceContext);
        // try {
        //     // TO DO
        //     addPageResource([]);
        // } finally {
        //     setIsLoading(false);
        // }
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
