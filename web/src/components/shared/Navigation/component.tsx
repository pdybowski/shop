import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { RoutePaths, SportType, ProductCategory, ProductType } from '../../../models';
import { selectItemsNumber } from '../../../services/selectors/cartSelectors';
import store from '../../../services/store';
import logo from '../../../assets/images/logo.png';

import { Button, BtnMode } from '../Button';

import { NavItemChild, NavItem } from './NavItem';

import './style.css';
import { useState, useEffect } from 'react';
import { USER_TOKEN } from '../../../constants/userToken';

const navigationLinks: NavItemChild[] = [
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
        link: `${RoutePaths.Products}?bestsellers=true`,
    },
];

export const Navigation = () => {
    const cartState = store.getState().cart;
    const itemsNumber = selectItemsNumber(cartState);
    useSelector(() => cartState.cart.map((item) => item));

    const [token, setToken] = useState(localStorage.getItem(USER_TOKEN) || '');
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        localStorage.removeItem(USER_TOKEN);
        setToken('');
    };

    useEffect(() => {
        setToken(localStorage.getItem('userToken') || '');
        setToken(localStorage.getItem(USER_TOKEN) || '');
    }, [location]);

    return (
        <nav className="main-nav">
            <ul>
                <li className={'nav-logo'}>
                    <Link to={RoutePaths.MainPage}>
                        <img src={logo} alt={'logo'} className={'nav-logo-img'} />
                        <p className={'nav-logo-name'}>Sport Gen</p>
                    </Link>
                </li>
                {navigationLinks.map((menu: NavItemChild) => (
                    <NavItem key={menu.link} child={menu} level={1} />
                ))}
            </ul>
            <div className="nav-signin">
                {token && (
                    <Button
                        type="button"
                        mode={BtnMode.SECONDARY}
                        children="Logout"
                        onClick={handleLogout}
                    />
                )}

                {!token && (
                    <Link to={RoutePaths.Login}>
                        <Button type="button" mode={BtnMode.SECONDARY} children="Login" />
                    </Link>
                )}

                {token && (
                    <Button type="button" mode={BtnMode.SECONDARY} children="Go to profile" />
                )}

                <Link className="my__cart__btn" to={RoutePaths.Cart}>
                    <Button mode={BtnMode.SECONDARY} type="button">
                        My cart
                    </Button>
                    {itemsNumber > 0 ? <p className={'nav-cart-badge'}> {itemsNumber}</p> : null}
                </Link>
            </div>
        </nav>
    );
};
