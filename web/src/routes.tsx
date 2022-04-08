import { MainPage } from './components';
import { CartPage } from './components/pages/CartPage/CartPage';

export enum RoutePaths {
    MainPage = '/',
    Sports = '/sports',
    Woman = '/woman',
    Man = '/man',
    Child = '/child',
    Bestsellers = '/bestsellers',
    Brands = '/brands',
    Cart = '/cart',
}

export const routes = [
    {
        path: RoutePaths.Cart,
        element: <CartPage />,
        key: 'cart-page',
    },
    {
        path: RoutePaths.MainPage,
        element: <MainPage />,
        key: 'main-page',
    },
    {
        path: RoutePaths.Sports,
        element: <></>,
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
