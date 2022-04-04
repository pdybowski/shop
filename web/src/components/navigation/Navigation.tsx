import { RoutesPaths } from '../../routes';
import { Item, NavItem } from './components';
import './style.css';

const navigationLinks: Item[] = [
    {
        name: 'Main Page',
        link: RoutesPaths.MainPage,
    },
    {
        name: 'Sports',
        link: RoutesPaths.Sports,
        children: [
            {
                name: 'Tennis',
                link: RoutesPaths.MainPage,
            },
            {
                name: 'Football',
                link: RoutesPaths.MainPage,
            },
        ],
    },
    {
        name: 'Woman',
        link: RoutesPaths.Woman,
        children: [
            {
                name: 'Female clothing',
                link: RoutesPaths.MainPage,
                children: [
                    {
                        name: 'Female jackets',
                        link: RoutesPaths.MainPage,
                    },
                ],
            },
            {
                name: 'Female shoes',
                link: RoutesPaths.MainPage,
            },
        ],
    },
    {
        name: 'Man',
        link: RoutesPaths.Man,
        children: [
            {
                name: "Men's clothing",
                link: RoutesPaths.MainPage,
            },
            {
                name: "Men's shoes",
                link: RoutesPaths.MainPage,
            },
        ],
    },
    {
        name: 'Child',
        link: RoutesPaths.Child,
    },
    {
        name: 'Brands',
        link: RoutesPaths.Brands,
    },
    {
        name: 'Bestsellers',
        link: RoutesPaths.Bestsellers,
    },
];

export const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul className="submenu">
                {navigationLinks.map((menu: Item) => (
                    <NavItem key={menu.name} child={menu} level={1} />
                ))}
            </ul>
        </nav>
    );
};
