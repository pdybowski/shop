import React, { ReactChild, useState } from 'react';
import './style.css';

const DEFAULT_DELAY = 400;
const DEFAULT_DIRECTION = 'top';

interface Props {
    direction?: ['top', 'left', 'bottom', 'right'];
    delay?: number;
    content: string;
    children: ReactChild;
}

export const Tooltip = (props: Props) => {
    let timeout: NodeJS.Timeout;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, props.delay || DEFAULT_DELAY);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <div className="Tooltip-Wrapper" onMouseEnter={showTip} onMouseLeave={hideTip}>
            {props.children}
            {active && (
                <div className={`Tooltip-Tip ${props.direction || DEFAULT_DIRECTION}`}>
                    {props.content}
                </div>
            )}
        </div>
    );
};
