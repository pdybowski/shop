import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NotificationProvider, PageResourceProvider } from './contexts';
import { Provider } from 'react-redux';
import store from '../src/services/store';

ReactDOM.render(
    <React.StrictMode>
        <NotificationProvider>
            <PageResourceProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </PageResourceProvider>
        </NotificationProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
