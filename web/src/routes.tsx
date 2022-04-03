import { MainPage } from './pages/mainPage';

export const ROUTES_PATHS = {
    MAIN_PAGE: '/',
};

export const routes = [
    {
        path: ROUTES_PATHS.MAIN_PAGE,
        element: <MainPage />,
        key: 'main-page',
    },
];
