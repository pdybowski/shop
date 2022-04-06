import { RoutePaths } from '../../../routes';

type Item = { name: string; link: RoutePaths; children?: Item[] };

interface NavItemProps {
    child: Item;
    level: number;
}

const DownArrow = () => <span className="arrow">&#x25BC;</span>;
const RightArrow = () => <span className="arrow">&#x25B6;</span>;

const NavName = ({ child, level }: NavItemProps) => {
    return (
        <a href={child.link}>
            {child.name}
            {child.children && (
                <>
                    {level === 1 && <DownArrow />}
                    {level > 1 && <RightArrow />}
                </>
            )}
        </a>
    );
};

const NavChildren = ({ child, level }: NavItemProps) => {
    return (
        <ul className={`submenu submenu-${level}`}>
            {child.children!.map((submenu: Item) => (
                <NavItem key={submenu.name} child={submenu} level={level + 1} />
            ))}
        </ul>
    );
};

export const NavItem = ({ child, level }: NavItemProps) => {
    return (
        <li key={child.name}>
            <NavName child={child} level={level} />
            {child.children && <NavChildren child={child} level={level} />}
        </li>
    );
};

export type { Item };
