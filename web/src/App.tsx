import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './components';
import Views from './Views';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Views />
            </BrowserRouter>
        </>
    );
}

export default App;
