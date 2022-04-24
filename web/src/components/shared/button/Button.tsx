import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonProps } from './interfaces';
import './style.css';

export const Button = ({ label, mode, type, toLink, ...args }: ButtonProps) => {
    return (
        <div>
            <button className={`button button--${mode}`} type={type} {...args}>
                <Link className="button__link" style={{ textDecoration: 'none' }} to={`${toLink}`}>
                    {label}
                </Link>
            </button>
        </div>
    );
};
