import { ReactChild, useState } from 'react';
import { TooltipDirection } from './models';

import './style.css';

const DEFAULT_DELAY = 400;
const DEFAULT_DIRECTION = 'top';

interface Props {
    direction?: TooltipDirection;
    delay?: number;
    content: string;
    children: ReactChild;
}

export const Tooltip = ({ direction = 'top', delay, content, children }: Props) => {
    let timeout: NodeJS.Timeout;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, delay || DEFAULT_DELAY);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <div className="Tooltip-Wrapper" onMouseEnter={showTip} onMouseLeave={hideTip}>
            {children}
            {active && (
                <div className={`Tooltip-Tip ${direction || DEFAULT_DIRECTION}`}>{content}</div>
            )}
        </div>
    );
};
