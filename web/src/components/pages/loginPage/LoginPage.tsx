import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../../models';
import { Button } from '../../shared';
import { ButtonMode } from '../../shared/button/interfaces';
import '../loginPage/style.css';

const LoginPage = (): JSX.Element => {
    return (
        <div className="register">
            <form className="register__form">
                <h2 className="register__form__header">Member login</h2>
                <input className="register__form__input" placeholder="Email" type="text"></input>

                <input
                    className="register__form__input"
                    placeholder="Password"
                    type="password"
                ></input>
                <Link to={`${RoutePaths.Login}/`}>
                    <Button type="submit" mode={ButtonMode.SECONDARY} label="Login" />
                </Link>
                <h4 className="login__info">Don't have an account?</h4>
                <Link to={`${RoutePaths.Register}`}>
                    <h3 className="login__info" style={{ textDecoration: 'none' }}>
                        Join us
                    </h3>
                </Link>
            </form>
        </div>
    );
};

export default LoginPage;
