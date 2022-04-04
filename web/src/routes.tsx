import { MainPage } from './pages/mainPage';

export enum RoutesPaths {
    MainPage = '/',
    Sports = '/sports',
    Woman = '/woman',
    Man = '/man',
    Child = '/child',
    Bestsellers = '/bestsellers',
    Brands = '/brands',
}

export const routes = [
    {
        path: RoutesPaths.MainPage,
        element: <MainPage />,
        key: 'main-page',
    },
    {
        path: RoutesPaths.Sports,
        element: <></>,
        key: 'sports',
    },
    {
        path: RoutesPaths.Woman,
        element: <></>,
        key: 'woman',
    },
    {
        path: RoutesPaths.Man,
        element: <></>,
        key: 'man',
    },
    {
        path: RoutesPaths.Bestsellers,
        element: <></>,
        key: 'bestsellers',
    },
    {
        path: RoutesPaths.Brands,
        element: <></>,
        key: 'brands',
    },
];
