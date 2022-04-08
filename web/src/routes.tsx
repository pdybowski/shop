
import { MainPage } from './components/pages';
import { ProductsPage } from './components/pages/productsPage/ProductsPage';


export enum RoutePaths {
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
