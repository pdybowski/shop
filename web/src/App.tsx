import { useContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useStore } from 'react-redux';

import { Navigation, Spinner, Footer } from './components';
import { NotificationContext } from './contexts';
import { useFetch } from './hooks';
import { NotificationMode, PageResource, PageResourceEditType } from './models';
import * as PageResourceService from './services/pageResource.service';
import Views from './Views';

import './index.css';
import { addPageResourceAction } from './services/actions';

function App() {
    const { isLoading, data, error } = useFetch<PageResource>({ url: 'pageResource' });
    const store: any = useStore();

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
            store.dispatch((dispatch: any, getState: any) =>
                addPageResourceAction(dispatch, getState, pageResource)
            );
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

// @ts-ignore
export default App;
