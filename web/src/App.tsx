import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './components';
import { NotificationProvider } from './contexts';
import Views from './Views';
import { AppProvider } from './contexts/apiContext';

function App() {
    const [pageResource, setPageResource] = useState({
    });

    return (
        <>
            <BrowserRouter>
                <Navigation />
                <NotificationProvider>
                    <AppProvider value={{ pageResource }}>
                        <Views />
                    </AppProvider>
                </NotificationProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
