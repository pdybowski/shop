import { BtnMode } from '.';

import './style.css';

interface Props {
    type: 'button' | 'submit' | 'reset';
    children: string | JSX.Element;
    mode?: BtnMode;
    height?: string;
    width?: string;
    border?: string;
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

export const Button = ({ children, mode, type, ...args }: Props) => (
    <button className={`button button--${mode}`} type={type} {...args}>
        {children}
    </button>
);
