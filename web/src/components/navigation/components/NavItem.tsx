import { Link } from 'react-router-dom';

type Item = { name: string; link: string; children?: Item[] };

interface NavItemProps {
    child: Item;
    level: number;
    parentUrl?: string;
}

const DownArrow = () => <span className="arrow">&#x25BC;</span>;
const RightArrow = () => <span className="arrow">&#x25B6;</span>;

const NavName = ({ child, level, parentUrl }: NavItemProps) => {
    const url = parentUrl ? `${parentUrl}${child.link}` : child.link;
    return (
        <Link to={url}>
            {child.name}
            {child.children && (
                <>
                    <div>{level === 1 && <DownArrow />}</div>
                    <div className="nav__arrow">{level > 1 && <RightArrow />}</div>
                    <div className="nav__arrow__resp">{level > 1 && <DownArrow />}</div>
                </>
            )}
        </Link>
    );
};

const NavChildren = ({ parentUrl, child, level }: NavItemProps) => {
    return (
        <ul className={`submenu submenu-${level}`}>
            {child.children?.map((submenu: Item) => (
                <NavItem
                    key={submenu.name}
                    child={submenu}
                    level={level + 1}
                    parentUrl={parentUrl}
                />
            ))}
        </ul>
    );
};

export const NavItem = ({ child, level, parentUrl }: NavItemProps) => {
    const link = parentUrl ? parentUrl + child.link : child.link;

    return (
        <li key={child.name}>
            <NavName child={child} level={level} parentUrl={parentUrl} />
            {child.children && <NavChildren child={child} level={level} parentUrl={link || ''} />}
        </li>
    );
};

export type { Item };
