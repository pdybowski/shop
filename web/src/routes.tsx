import {
    CartPage,
    MainPage,
    ProductsPage,
    SingleProductPage,
    SportsPage,
    BrandsPage,
    BestsellersPage,
} from './components';
import { RoutePaths } from './models';

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
    // // '/product?queries...'
    {
        path: RoutePaths.Products,
        exact: true,
        element: <ProductsPage />,
        key: 'products-page',
    },
    // // '/sport'
    {
        path: RoutePaths.Sports,
        exact: true,
        element: <SportsPage />,
        key: 'sport-page',
    },
    // // '/sport/product?queries...'
    {
        path: RoutePaths.Sports + RoutePaths.Products,
        element: <ProductsPage />,
        key: 'sport-product-page',
    },
    {
        path: RoutePaths.Product + '/:id',
        element: <SingleProductPage />,
        key: 'single-product-page',
    },
    {
        path: RoutePaths.Brands,
        exact: true,
        element: <BrandsPage />,
        key: 'brands-page',
    },
    {
        path: `${RoutePaths.Bestsellers}`,
        exact: true,
        element: <BestsellersPage />,
        key: 'bestsellers-page',
    },
];
