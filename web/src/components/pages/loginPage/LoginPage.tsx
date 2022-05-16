import React, { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RoutePaths } from '../../../models';
import { Button, Spinner } from '../../shared';
import { ButtonMode } from '../../shared/button/interfaces';
import '../loginPage/style.css';
import { User } from '../../../models/user';
import { Api } from '../../../Api';
import { USER_TOKEN } from '../../../constants/userToken';
import { setLocalStorage } from '../../../utils/localStorage';

export const LoginPage = (): JSX.Element => {
    const [form, setForm] = useState(new User());
    const [errors, setErrors] = useState(new User());
    const [isLoading, setIsLoading] = useState(true);

    const handleChange = (e: ChangeEvent<{ value: string; name: string }>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const findErrors = () => {
        const { email, password }: User = form;
        const newErrors = new User();

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

    let navigate = useNavigate();

    const api = new Api();

    const login = async () => {
        console.log(form);

        try {
            const userData = await api.post('url..', form);
            setLocalStorage(USER_TOKEN, userData.token);
            navigate(RoutePaths.MainPage);
        } catch (error: any) {
            console.log(error?.response.data || error?.response.status);
        }
    };

    const handleLogin = (e: any): void => {
        e.preventDefault();

        const newErrors = findErrors();
        if (Object.keys(newErrors).length > 0) return setErrors(newErrors);

        login();
    };

    return (
        <div className="login">
            <form className="login__form">
                <h2 className="login__form__header">Member login</h2>
                <input
                    className="login__form__input"
                    placeholder="Email"
                    type="text"
                    onChange={handleChange}
                    name="email"
                    required
                ></input>
                {errors.email && <span className="form__errors">{errors.email}</span>}
                <input
                    className="login__form__input"
                    placeholder="Password"
                    type="password"
                    onChange={handleChange}
                    name="password"
                    required
                ></input>
                {errors.password && errors.password !== '' ? (
                    <span className="form__errors">{errors.password}</span>
                ) : null}
                <br />
                <Link to={`${RoutePaths.Login}/`} style={{ textDecoration: 'none' }}>
                    <Button
                        type="submit"
                        onClick={handleLogin}
                        mode={ButtonMode.SECONDARY}
                        disabled={!findErrors}
                    >
                        {isLoading ? <Spinner /> : 'Login'}
                    </Button>
                </Link>
                <br />
                <h4 className="login__info">Don't have an account?</h4>
                <Link to={`${RoutePaths.Register}`}>
                    <h3 className="login__info">Join us</h3>
                </Link>
            </form>
        </div>
    );
};
