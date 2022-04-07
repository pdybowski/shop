import { RoutePaths } from '../../routes';
import { Item, NavItem } from './components';
import './style.css';

const navigationLinks: Item[] = [
    {
        name: 'Main Page',
        link: RoutePaths.MainPage,
    },
    {
        name: 'Sports',
        link: RoutePaths.Sports,
        children: [
            {
                name: 'Tennis',
                link: RoutePaths.MainPage,
            },
            {
                name: 'Football',
                link: RoutePaths.MainPage,
            },
        ],
    },
    {
        name: 'Woman',
        link: RoutePaths.Woman,
        children: [
            {
                name: 'Female clothing',
                link: RoutePaths.MainPage,
                children: [
                    {
                        name: 'Female jackets',
                        link: RoutePaths.MainPage,
                    },
                ],
            },
            {
                name: 'Female shoes',
                link: RoutePaths.MainPage,
            },
        ],
    },
    {
        name: 'Man',
        link: RoutePaths.Man,
        children: [
            {
                name: "Men's clothing",
                link: RoutePaths.MainPage,
            },
            {
                name: "Men's shoes",
                link: RoutePaths.MainPage,
            },
        ],
    },
    {
        name: 'Child',
        link: RoutePaths.Child,
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
    return (
        <nav className="main-nav">
            <ul>
                {navigationLinks.map((menu: Item) => (
                    <NavItem key={menu.name} child={menu} level={1} />
                ))}
            </ul>
        </nav>
    );
};
