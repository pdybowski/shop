<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation, Spinner } from './components';
import LoginPage from './components/pages/loginPage/LoginPage';
import { CartProvider, NotificationContext, PageResourceContext } from './contexts';
import { useFetch } from './hooks';
import useToken from './hooks/useToken';
import { NotificationMode, PageResource } from './models';
=======
import { useContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useStore } from 'react-redux';

import { Navigation, Spinner, Footer } from './components';
import { NotificationContext } from './contexts';
import { useFetch } from './hooks';
import { NotificationMode, PageResource, PageResourceEditType } from './models';
>>>>>>> master
import * as PageResourceService from './services/pageResource.service';
import Views from './Views';

import './index.css';
import { addPageResourceAction } from './services/actions';

function App() {
    const { isLoading, data, error } = useFetch<PageResource>({ url: 'pageResource' });

    const { addNotification } = useContext(NotificationContext);
    const dispatch = useDispatch();

    function getData(): (() => { payload: PageResourceEditType; type: string }) | void {
        if (error) {
            return addNotification({
                mode: NotificationMode.DANGER,
                title: 'Products',
                message: error,
            });
        }
        if (data) {
            const pageResource = PageResourceService.getEnabledPageResource(data);
            dispatch(addPageResourceAction(pageResource));
        }
    }

    useEffect(() => {
        getData();
    }, [data, error]);

    return (
        <>
            <div id="content-wrap">
                <BrowserRouter>
                    <Navigation />
                    {isLoading ? <Spinner /> : <Views />}
                </BrowserRouter>
            </div>
            <Footer />
        </>
    );
}

export default App;
