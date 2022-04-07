import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './components';
import { NotificationProvider } from './contexts';
import Views from './Views';
import { apiContextData, ApiProvider } from './contexts/apiProvider/ApiProvider';
import { Spinner } from './components/shared';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [pageResource, setPageResource] = useState<apiContextData>({});

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
                        <ApiProvider value={{ pageResource }}>
                            <Views />
                        </ApiProvider>
                    )}
                </NotificationProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
