import React from 'react';
import { ButtonProps } from './interfaces';
import './style.css';

export const Button = ({ label, mode, type, ...args }: ButtonProps) => {
    return (
        <div>
            <button className={`button button--${mode}`} type={type} {...args}>
                {label}
            </button>
        </div>
    );
};
