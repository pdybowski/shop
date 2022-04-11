import { ProductCategory, ProductType, SportType } from '../../interfaces';
import { RoutePaths } from '../../routes';
import { Item, NavItem } from './components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './style.css';
import { Link } from 'react-router-dom';

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
                link: `/product?sportType=${SportType.tennis}`,
            },
            {
                name: 'Football',
                link: `/product?sportType=${SportType.football}`,
            },
        ],
    },
    {
        name: 'Woman',
        link: `product?productCategory=${ProductCategory.woman}`,
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
        link: `product?productCategory=${ProductCategory.man}`,
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
        link: `product?productCategory=${ProductCategory.child}`,
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
    return (
        <nav className="main-nav">
            <ul>
                {navigationLinks.map((menu: Item) => (
                    <NavItem child={menu} level={1} />
                ))}
                <li>
                    <Link to={RoutePaths.Cart}>
                        <AiOutlineShoppingCart />
                        <p> (x)</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
