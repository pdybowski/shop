import { ProductCategory, ProductType, RoutePaths, SportType } from '../../models';
import { Item, NavItem } from './components';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { selectItemsNumber } from '../../services/selectors/cartSelectors';
import store from '../../services/store';
import { useSelector } from 'react-redux';
import logo from '../../assets/images/logo.png';
import { ButtonMode } from '../shared/button/interfaces';
import { Button } from '../shared';
import { useState } from 'react';
import './style.css';

const navigationLinks: Item[] = [
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
    const cartState = store.getState().cart;
    const itemsNumber = selectItemsNumber(cartState);
    useSelector(() => cartState.cart.map((item) => item));

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    return (
        <nav className="main-nav">
            <ul>
                <li className={'nav-logo'}>
                    <Link to={RoutePaths.MainPage}>
                        <img src={logo} alt={'logo'} className={'nav-logo-img'} />
                        <p className={'nav-logo-name'}>Sport Gen</p>
                    </Link>
                </li>
                {navigationLinks.map((menu: Item) => (
                    <NavItem key={menu.link} child={menu} level={1} />
                ))}
                <li className={'nav-signIn'}>
                    {isLoggedIn && (
                        <Button
                            type="button"
                            mode={ButtonMode.SECONDARY}
                            children="Logout"
                            onClick={handleLogout}
                        />
                    )}
                    {!isLoggedIn && (
                        <Link to={RoutePaths.Login}>
                            <Button type="button" mode={ButtonMode.SECONDARY} children="Login" />
                        </Link>
                    )}
                </li>
                <li className={'nav-cart'}>
                    <Link to={RoutePaths.Cart}>
                        <Button mode={ButtonMode.SECONDARY} type="button">
                            My cart
                        </Button>
                        {itemsNumber > 0 ? (
                            <p className={'nav-cart-badge'}> {itemsNumber}</p>
                        ) : null}
                    </Link>
                </li>

                <li className={'nav-signIn'}>
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
