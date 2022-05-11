import { ProductCategory, ProductType, RoutePaths, SportType } from '../../models';
import { Item, NavItem } from './components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { selectItemsNumber } from '../../services/selectors/cartSelectors';
import store from '../../services/store';
import { useSelector } from 'react-redux';
import './style.css';
import { useState } from 'react';
import { Button } from '../shared';
import { ButtonMode } from '../shared/button/interfaces';

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
    const cartState = store.getState().shoppingCart;
    const itemsNumber = selectItemsNumber(cartState);
    useSelector(() => cartState.cart.map((item) => item));

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const onLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <nav className="main-nav">
            <ul>
                {navigationLinks.map((menu: Item) => (
                    <NavItem key={menu.link} child={menu} level={1} />
                ))}
                <li>
                    <Link to={RoutePaths.Cart}>
                        <AiOutlineShoppingCart />
                        {itemsNumber > 0 ? <p> ({itemsNumber})</p> : null}
                    </Link>
                </li>
                <li>
                    {isLoggedIn && (
                        <Button
                            type="button"
                            mode={ButtonMode.SECONDARY}
                            children="Logout"
                            onClick={onLogout}
                        />
                    )}
                    {!isLoggedIn && (
                        <Link to={RoutePaths.Login}>
                            <Button type="button" mode={ButtonMode.SECONDARY} children="Login" />
                        </Link>
                    )}
                </li>
                <li>
                    {' '}
                    {isLoggedIn && (
                        <Button
                            type="button"
                            mode={ButtonMode.SECONDARY}
                            children="Go to profile"
                        />
                    )}
                </li>
            </ul>
        </nav>
    );
};
