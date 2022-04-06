import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './components';
import { NotificationProvider } from './contexts';
import Views from './Views';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation />
                <NotificationProvider>
                    <Views />
                </NotificationProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
