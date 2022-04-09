import { RoutePaths } from '../../../routes';
import { Link } from 'react-router-dom';

type Item = { name: string; link: RoutePaths; children?: Item[] };

interface NavItemProps {
    child: Item;
    level: number;
    parentUrl?: string;
}

const DownArrow = () => <span className="arrow">&#x25BC;</span>;
const RightArrow = () => <span className="arrow">&#x25B6;</span>;

const NavName = ({ child, level, parentUrl }: NavItemProps) => {
    const url = parentUrl ? `${parentUrl}${child.link}` : child.link
    return (
        <Link to={url}>
            {child.name}
            {child.children && (
                <>
                    {level === 1 && <DownArrow />}
                    {level > 1 && <RightArrow />}
                </>
            )}
        </Link>
    );
};

const NavChildren = ({ parentUrl, child, level }: NavItemProps) => {
    return (
        <ul className={`submenu submenu-${level}`}>
            {child.children!.map((submenu: Item) => (
                <NavItem key={submenu.name} child={submenu} level={level + 1} parentUrl={parentUrl}/>
            ))}
        </ul>
    );
};

export const NavItem = ({ child, level, parentUrl }: NavItemProps) => {
    return (
        <li key={child.name}>
            <NavName child={child} level={level} parentUrl={parentUrl}/>
            {child.children && <NavChildren child={child} level={level} parentUrl={child.link || ""} />}
        </li>
    );
};

export type { Item };
