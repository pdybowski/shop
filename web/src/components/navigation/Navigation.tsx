import { ProductCategory, ProductType, RoutePaths, SportType } from '../../models';
import { Item, NavItem } from './components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts';

import './style.css';

const navigationLinks: Item[] = [
    {
        name: 'MainPage',
        link: RoutePaths.MainPage,
    },
    {
        name: 'Sports',
        link: RoutePaths.Sports,
        children: [
            {
                name: 'Tennis',
                link: `${RoutePaths.Products}?sportType=${SportType.tennis}`,
            },
            {
                name: 'Football',
                link: `${RoutePaths.Products}?sportType=${SportType.football}`,
            },
        ],
    },
    {
        name: 'Woman',
        link: `${RoutePaths.Products}?productCategory=${ProductCategory.woman}`,
        children: [
            {
                name: 'Tennis',
                link: `&sportType=${SportType.tennis}`,
                children: [
                    {
                        name: 'T-shirt',
                        link: `&productType=${ProductType.shirt}`,
                    },
                ],
            },
            {
                name: 'Football',
                link: `&sportType=${SportType.football}`,
            },
        ],
    },
    {
        name: 'Man',
        link: `${RoutePaths.Products}?productCategory=${ProductCategory.man}`,
        children: [
            {
                name: 'Tennis',
                link: `&sportType=${SportType.tennis}`,
                children: [
                    {
                        name: 'T-shirt',
                        link: `&productType=${ProductType.shirt}`,
                    },
                ],
            },
            {
                name: 'Football',
                link: `&sportType=${SportType.football}`,
            },
        ],
    },
    {
        name: 'Child',
        link: `${RoutePaths.Products}?productCategory=${ProductCategory.child}`,
        children: [
            {
                name: 'Tennis',
                link: `&sportType=${SportType.tennis}`,
                children: [
                    {
                        name: 'T-shirt',
                        link: `&productType=${ProductType.shirt}`,
                    },
                ],
            },
            {
                name: 'Football',
                link: `&sportType=${SportType.football}`,
            },
        ],
    },
    {
        name: 'Brands',
        link: RoutePaths.Brands,
    },
    {
        name: 'Bestsellers',
        link: RoutePaths.Bestsellers,
    },
];

export const Navigation = () => {
    const cartContext = useContext(CartContext);
    let cartItemNumber = 0;
    cartContext.cart.reduce((count, curItem) => {
        cartItemNumber = count + curItem.quantity;
        return cartItemNumber;
    }, 0);

    return (
        <nav className="main-nav">
            <ul>
                {navigationLinks.map((menu: Item) => (
                    <NavItem key={menu.link} child={menu} level={1} />
                ))}
                <li>
                    <Link to={RoutePaths.Cart}>
                        <AiOutlineShoppingCart />
                        {cartItemNumber > 0 ? <p> ({cartItemNumber})</p> : null}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
