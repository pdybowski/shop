import React, { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RoutePaths } from '../../../models';
import { Button } from '../../shared';
import { ButtonMode } from '../../shared/button/interfaces';
import '../loginPage/style.css';
import PropTypes from 'prop-types';
import UseToken from '../../../hooks/useToken';
import { User } from '../../../models/user';
import { MainPage } from '../mainPage/MainPage';
import useToken from '../../../hooks/useToken';

const LoginPage = (): JSX.Element => {
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [errors, setErrors] = useState({} as User);
    const { token, setToken } = UseToken('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: ChangeEvent<{ value: string; name: string }>) => {
        const { name, value } = e.target;
        setForm({ [name]: value });
        if (errors[name])
            setErrors({
                ...errors,
                [name]: null,
            });
    };

    // const setField = ({ target: { email } }) => {};

    const findErrors = () => {
        const { email, password }: User = form;
        const newErrors: any = {};
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

    // let navigate = useNavigate();

    // const handleLogin = (e: React.SyntheticEvent<EventTarget>): void => {
    //     e.preventDefault();
    //     const newError = findErrors();
    //     setIsLoggedIn(true);
    //     navigate(RoutePaths.MainPage);
    //     localStorage.setItem('token', token);
    //     return newError;
    // };

    const handleSubmit = (e: React.SyntheticEvent<EventTarget>): void => {
        e.preventDefault();
        const newErrors = findErrors();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setForm(form);
        }
    };
    //     setToken(token);
    //     <MainPage />;
    // };
    // let { email, password } = document.forms[0] || {};

    // const userData = database?.find((user: { email: any }) => user.email === email.value);

    // if (typeof userData !== undefined) {
    //     if (database.password !== password.value) {
    //         setErrors(errors);
    //     } else {
    //         setIsLoggedIn(true);
    //     }
    // }

    return (
        <div className="register">
            <form className="register__form" onSubmit={handleSubmit}>
                <h2 className="register__form__header">Member login</h2>
                <input
                    className="register__form__input"
                    placeholder="Email"
                    type="text"
                    value={mail}
                    onChange={(e) => handleChange(e.target.value)}
                    required
                ></input>
                {errors.email && <span className="form__errors">{errors.email}</span>}
                <input
                    className="register__form__input down__input"
                    placeholder="Password"
                    type="password"
                    value={pass}
                    onChange={(e) => handleChange(e.target.value)}
                    required
                ></input>
                {errors.password && errors.password !== '' ? (
                    <span className="form__errors">{errors.password}</span>
                ) : null}
                <Link to={`${RoutePaths.Login}/`} style={{ textDecoration: 'none' }}>
                    <Button
                        type="submit"
                        mode={ButtonMode.SECONDARY}
                        // onSubmit={handleLogin}
                        children="Login"
                    />
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
