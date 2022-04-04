import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Views from './Views';
import { Spinner } from './components';
import { AppProvider } from './contexts/apiContext';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [pageResource, setPageResource] = useState({
    });

    const fetchData = async () => {
        try {
            // const { data } = await ;
            // setPageResource(data);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <>
            <BrowserRouter>
                {isLoading ? (
                    <Spinner  style={{}}/>
                ) : (
                    <AppProvider value={{ pageResource }}>
                        <Views />
                    </AppProvider>
                )}
                <Views />
            </BrowserRouter>
        </>
    );
}

export default App;