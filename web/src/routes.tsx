import { MainPage, ProductsPage } from './components';

export enum RoutePaths {
    MainPage = '/',
    Sports = '/sport',
    Products = '/product',
    Bestsellers = '/bestsellers',
    Brands = '/brands',
}

export const routes = [
    {
        path: RoutePaths.MainPage,
        element: <MainPage />,
        key: 'main-page',
    },
    // '/product?queries...'
    {
        path: RoutePaths.Products,
        exact: true,
        element: <ProductsPage />,
        key: 'products-page',
    },
    // '/sport'
    {
        path: RoutePaths.Sports,
        exact: true,
        element: <div>Hello</div>,
        key: 'sport-page',
    },
    // '/sport/product?queries...'
    {
        path: RoutePaths.Sports + RoutePaths.Products,
        element: <ProductsPage />,
        key: 'sport-product-page',
    },
    // {
    //     path: RoutePaths.Bestsellers,
    //     element: <Bestsellers />,
    //     key: 'bestsellers-page',
    // },
        // {
    //     path: RoutePaths.Brands,
    //     element: <Brands />,
    //     key: 'brands-page',
    // },
];
