import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../../models';
import { Button } from '../../shared';
import { ButtonMode } from '../../shared/button/interfaces';
import '../loginPage/style.css';
import PropTypes from 'prop-types';
import UseToken from '../../../hooks/useToken';
import { User } from '../../../models/user';
import { MainPage } from '../mainPage/MainPage';
// import useToken from '../../../hooks/useToken';

const LoginPage = (): JSX.Element => {
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [errors, setErrors] = useState({} as User);
    const { token, setToken } = UseToken('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // if (!token) {
    //     setToken();
    //     <LoginPage />;
    // }

    const database = [
        { email: 'test@test', password: 'test' },
        {
            email: 'test@test2',
            password: 'test',
        },
    ];

    const [form, setForm] = useState({
        email: mail,
        password: pass,
    });
    const findErrors = () => {
        const { email, password }: User = form;
        const newErrors: User = {};
        if (!email || email === '') {
            newErrors.email = 'E-mail is required!';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'E-mail has incorrect format';
        }
        if (!password || password === '') {
            newErrors.password = 'Password is required!';
        }
        return newErrors;
    };

    const handleSubmit = (e: React.SyntheticEvent<EventTarget>): void => {
        e.preventDefault();
        const newErrors = findErrors();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setForm(form);
        }

        setToken(token);
        <MainPage />;
    };
    let { email, password } = document.forms[0] || {};

    const userData = database?.find((user: { email: any }) => user.email === email.value);

    if (typeof userData !== undefined) {
        if (database.password !== password.value) {
            setErrors(errors);
        } else {
            setIsLoggedIn(true);
        }
    }

    return (
        <div className="register">
            <form className="register__form" onSubmit={handleSubmit}>
                <h2 className="register__form__header">Member login</h2>
                <input
                    className="register__form__input"
                    placeholder="Email"
                    type="text"
                    onChange={(e) => setMail(e.target.value)}
                ></input>
                {errors.email && errors.email !== '' ? (
                    <span className="form__errors">{errors.email}</span>
                ) : null}
                <input
                    className="register__form__input"
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setPass(e.target.value)}
                ></input>
                {errors.password && errors.password !== '' ? (
                    <span className="form__errors">{errors.password}</span>
                ) : null}
                <Link to={`${RoutePaths.Login}/`}>
                    <Button type="submit" mode={ButtonMode.SECONDARY} children="Login" />
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
