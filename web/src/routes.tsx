import { MainPage } from './components/pages';
import { ProductsPage } from './pages/productsPage/ProductsPage';

export enum RoutePaths {
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
        path: RoutePaths.MainPage,
        element: <MainPage />,
        key: 'main-page',
    },
    {
        path: RoutePaths.Sports,
        element: <ProductsPage header="Sports" />,
        key: 'sports',
    },
    {
        path: RoutePaths.Woman,
        element: <></>,
        key: 'woman',
    },
    {
        path: RoutePaths.Man,
        element: <></>,
        key: 'man',
    },
    {
        path: RoutePaths.Bestsellers,
        element: <></>,
        key: 'bestsellers',
    },
    {
        path: RoutePaths.Brands,
        element: <></>,
        key: 'brands',
    },
];
