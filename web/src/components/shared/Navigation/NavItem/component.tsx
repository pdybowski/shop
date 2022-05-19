import { Link } from 'react-router-dom';

import { DownArrow, RightArrow } from '../../Arrows/component';
import { NavItemChild } from './models';

interface Props {
    child: NavItemChild;
    level: number;
    parentUrl?: string;
}

const NavName = ({ child, level, parentUrl }: Props) => {
    const url = parentUrl ? `${parentUrl}${child.link}` : child.link;
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

const NavChildren = ({ parentUrl, child, level }: Props) => {
    return (
        <ul className={`submenu submenu-${level}`}>
            {child.children?.map((submenu: NavItemChild) => (
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

export const NavItem = ({ child, level, parentUrl }: Props) => {
    const link = parentUrl ? parentUrl + child.link : child.link;

    return (
        <li key={child.name}>
            <NavName child={child} level={level} parentUrl={parentUrl} />
            {child.children && <NavChildren child={child} level={level} parentUrl={link || ''} />}
        </li>
    );
};
