import { MainPage } from './components';

export const ROUTES_PATHS = {
    MAIN_PAGE: '/shop',
};

export const routes = [
    {
        path: ROUTES_PATHS.MAIN_PAGE,
        element: <MainPage />,
        key: 'main-page',
    },
];
