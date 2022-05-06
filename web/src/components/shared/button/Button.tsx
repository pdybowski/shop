import { ButtonProps } from './interfaces';
import './style.css';

export const Button = ({ children, mode, type, ...args }: ButtonProps) => (
    <button className={`button button--${mode}`} type={type} {...args}>
        {children}
    </button>
);
