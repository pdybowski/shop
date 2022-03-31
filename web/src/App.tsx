import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Views from './Views';

function App() {
    return (
        <>
            <BrowserRouter>
                <Views />
            </BrowserRouter>
        </>
    );
}

export default App;