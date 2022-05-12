import { ButtonProps } from './interfaces';
import './style.css';

export const Button = ({ children, mode, type, onClick, ...args }: ButtonProps) => (
    <button className={`button button--${mode}`} type={type} onClick={onClick} {...args}>
        {children}
    </button>
);
