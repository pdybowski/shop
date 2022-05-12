import React, { useContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation, Spinner } from './components';
import { CartProvider, NotificationContext, PageResourceContext } from './contexts';
import { addPageResource } from './services/actions/pageResourceActions';
import { useFetch } from './hooks';
import { NotificationMode, PageResource, PageResourceEditType } from './models';
import * as PageResourceService from './services/pageResource.service';
import Views from './Views';
import { Footer } from './components/shared/footer/Footer';
import './index.css';
import { useDispatch } from 'react-redux';

function App() {
    const { isLoading, data, error } = useFetch<PageResource>({ url: 'pageResource' });

    const dispatch = useDispatch();

    const { addNotification } = useContext(NotificationContext);

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
            return () => dispatch(addPageResource({ ...pageResource }));
        }
    }

    useEffect(() => {
        getData();
    }, [data, error]);

    return (
        <>
            <div id='content-wrap'>
                <CartProvider>
                    <BrowserRouter>
                        <Navigation />
                        {isLoading ? <Spinner /> : <Views />}
                    </BrowserRouter>
                </CartProvider>
            </div>
            <Footer />
        </>
    );
}

// @ts-ignore
export default App;
