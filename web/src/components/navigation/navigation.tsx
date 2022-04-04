import React from 'react';
import { RoutesPaths } from '../../routes';
import './navigation.css';

type link = { menu?: string; submenu?: string; name: string; to?: RoutesPaths; dropdown: boolean };

let navigationLinks = [
    {
        name: 'Main Page',
        to: RoutesPaths.MainPage,
        dropdown: false,
    },
    {
        name: 'Sports',
        to: RoutesPaths.Sports,
        dropdown: true,
    },
    {
        name: 'Woman',
        to: RoutesPaths.Woman,
        dropdown: true,
    },
    {
        name: 'Man',
        to: RoutesPaths.Man,
        dropdown: true,
    },
    {
        name: 'Child',
        to: RoutesPaths.Child,
        dropdown: true,
    },
    {
        name: 'Brands',
        to: RoutesPaths.Brands,
        dropdown: true,
    },
    {
        name: 'Bestsellers',
        to: RoutesPaths.Bestsellers,
        dropdown: false,
    },
    {
        menu: 'Sports',
        name: 'Tennis',
        to: RoutesPaths.MainPage,
        dropdown: false,
    },
    {
        menu: 'Sports',
        name: 'Football',
        to: RoutesPaths.MainPage,
        dropdown: false,
    },
    {
        menu: 'Woman',
        name: 'Female clothing',
        to: RoutesPaths.MainPage,
        dropdown: true,
    },
    {
        menu: 'Woman',
        name: 'Female shoes',
        to: RoutesPaths.MainPage,
        dropdown: false,
    },
    {
        menu: 'Man',
        name: "Men's clothing",
        to: RoutesPaths.MainPage,
        dropdown: false,
    },
    {
        menu: 'Man',
        name: "Men's shoes",
        to: RoutesPaths.MainPage,
        dropdown: false,
    },
    {
        submenu: 'Female clothing',
        name: 'Female jackets',
        to: RoutesPaths.MainPage,
        dropdown: false,
    },
];

export const Navigation = () => {
    function chooseMainNav(link: link) {
        if (!link.menu && !link.submenu) return link;
    }

    const NavLinksMain: any = () =>
        navigationLinks.filter(chooseMainNav).map((link: link) => (
            <li key={link.name}>
                <a href={link.to}>
                    {link.name}
                    {link.dropdown && <span className="arrow">&#x25BC;</span>}
                </a>
                {link.dropdown && (
                    <ul className="submenu">
                        {navigationLinks
                            .filter((value) => {
                                return value.menu === link.name;
                            })
                            .map((linkSubmenu: link) => (
                                <li key={linkSubmenu.name}>
                                    <a href={linkSubmenu.to}>
                                        {linkSubmenu.name}
                                        {linkSubmenu.dropdown && (
                                            <span className="arrow">&#x25B6;</span>
                                        )}
                                    </a>
                                    {linkSubmenu.dropdown && (
                                        <ul className="submenu-2">
                                            {navigationLinks
                                                .filter((value) => {
                                                    return value.submenu === linkSubmenu.name;
                                                })
                                                .map((linkSubmenu2: link) => (
                                                    <li key={linkSubmenu2.name}>
                                                        <a href={linkSubmenu2.to}>
                                                            {linkSubmenu2.name}
                                                        </a>
                                                    </li>
                                                ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                    </ul>
                )}
            </li>
        ));

    return (
        <nav className="main-nav">
            <ul>
                <NavLinksMain />
            </ul>
        </nav>
    );
};
