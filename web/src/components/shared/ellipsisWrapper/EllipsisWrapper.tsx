import { useState } from 'react';
import './style.css';

interface EllipsisWrapperProps {
    children?: JSX.Element | JSX.Element[] | string;
    textLength?: number;
}

export const EllipsisWrapper = ({ children, textLength = 5 }: EllipsisWrapperProps) => {

    return (
        <div className="block-with-text" style={{ WebkitLineClamp: textLength }}>
            {children}
        </div>
    );
};
