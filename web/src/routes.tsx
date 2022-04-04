import { MainPage } from './pages/mainPage';
// import { ProductsPage } from './pages/productsPage/ProductsPage';

export enum RoutesPaths {
    MainPage = '/',
    ProductsPage = '/products/:type',
}

export const routes = [
    {
        path: RoutesPaths.MainPage,
        element: <MainPage />,
        key: 'main-page',
    },
    // {
    //     path: RoutesPaths.ProductsPage,
    //     element: <ProductsPage />,
    //     key: 'products-page',
    // },
];
