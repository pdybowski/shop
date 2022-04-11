import { MainPage, ProductsPage } from './components';
import { ProductType, SportType } from './interfaces';
import { CartPage } from './components/pages/CartPage/CartPage';

export enum RoutePaths {
    MainPage = '/',
    Sports = '/sports',
    Tennis = '/tennis',
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
        element: <ProductsPage header="Sports" />,
        key: 'sports',
    },
    {
        path: `${RoutePaths.Sports}${RoutePaths.Tennis}`,
        element: <ProductsPage header="Tennis" sportType={SportType.tennis} />,
        key: 'sports-tennis',
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
        path: RoutePaths.Child,
        element: <></>,
        key: 'child',
    },
    {
        path: RoutePaths.Brands,
        element: <></>,
        key: 'brands',
    },
];
