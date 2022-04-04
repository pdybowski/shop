import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Views from './Views';
import { Navigation } from './components/navigation';

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