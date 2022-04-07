import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './components';
import { NotificationProvider } from './contexts';
import Views from './Views';
import { pageResourceContextData, PageResourceProvider } from './contexts/pageResourceProvider/PageResourceProvider';
import { Spinner } from './components/shared';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [pageResource, setPageResource] = useState<pageResourceContextData>({});

    const fetchData = async () => {
        try {
            // TO DO
            setPageResource({});
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
                        // @ts-ignore
                        <PageResourceProvider value={{ pageResource }}>
                            <Views />
                        </PageResourceProvider>
                    )}
                </NotificationProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
