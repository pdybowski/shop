import { MainPage } from './pages/mainPage';

export enum RoutesPaths {
    MainPage = '/',
}

export const routes = [
    {
        path: RoutesPaths.MainPage,
        element: <MainPage />,
        key: 'main-page',
    },
];
