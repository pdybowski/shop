import { MainPage } from './components/pages';
import { ProductsPage } from './pages/productsPage/ProductsPage';

export enum RoutesPaths {
    MainPage = '/',
    Sports = '/sports',
    Woman = '/woman',
    Man = '/man',
    Child = '/child',
    Bestsellers = '/bestsellers',
    Brands = '/brands',
}

// {
//     path: RoutesPaths.ProductsPage,
//     element: <ProductsPage />,
//     key: 'products-page',
// },

// export enum RoutesPaths {
//     MainPage = '/',
//     ProductsPage = '/products/:type',

export const routes = [
    {
        path: RoutesPaths.MainPage,
        element: <MainPage />,
        key: 'main-page',
    },
    {
        path: RoutesPaths.Sports,
        element: <ProductsPage header="Sports" />,
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
