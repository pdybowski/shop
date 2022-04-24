import { useState } from 'react';
import './style.css';

interface EllipsisWrapperProps {
    children?: JSX.Element | JSX.Element[] | string;
    tooltip?: string;
    textLength?: number;
}

export const EllipsisWrapper = ({ children, tooltip, textLength = 5 }: EllipsisWrapperProps) => {
    return (
        <div title={tooltip} className="block-with-text" style={{ WebkitLineClamp: textLength }}>
            {children}
        </div>
    );
};
