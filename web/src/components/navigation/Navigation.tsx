import { ProductCategory, ProductType, RoutePaths, SportType } from '../../models';
import { Item, NavItem } from './components';
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './style.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
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
    const [open, setOpen] = useState(false);
    const cartContext = useContext(CartContext);
    let cartItemNumber = 0;
    cartContext.cart.reduce((count, curItem) => {
        cartItemNumber = count + curItem.quantity;
        return cartItemNumber;
    }, 0);

    return (
        <nav className="main-nav">
            <ul className={open ? 'nav-links active' : 'nav-links'}>
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
            <div onClick={() => setOpen(!open)} className="nav__icon">
                {open ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
        </nav>
    );
};
