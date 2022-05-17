import React, { ChangeEvent, useState } from 'react';
import { BtnMode, Button, Spinner } from '../../shared';
import { User } from '../../../models/user';
import { Api } from '../../../Api';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from '../../../models';

import './style.css';

export const RegisterPage = (): JSX.Element => {
    const [errors, setErrors] = useState(new User());
    const [form, setForm] = useState(new User());
    const [isLoading, setLoading] = useState(false);

    const navigate = useNavigate();

    const api = new Api();

    async function register() {
        try {
            const userData = (await api.post('url...', form)) as User;
            navigate(RoutePaths.MainPage);
        } catch (error: any) {
            console.log(error?.response.data || error?.response.status);
        }
        console.log(form);
    }

    const handleChange = (e: ChangeEvent<{ name: string; value: string }>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const findErrors = () => {
        const { email, firstName, lastName, password }: User = form;
        const newErrors: any = {};
        if (!email || email === '') {
            newErrors.email = 'E-mail is required!';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'E-mail has incorrect format';
        }
        if (!firstName || firstName === '') {
            newErrors.firstName = 'First name is required!';
        } else if (firstName.length > 40) {
            newErrors.firstName = 'First name is too long';
        }
        if (!lastName || lastName === '') {
            newErrors.lastName = 'Last name is required!';
        } else if (lastName.length > 40) {
            newErrors.lastName = 'Last name is too long';
        }
        if (!password || password === '') {
            newErrors.password = 'Password is required!';
        }
        return newErrors;
    };

    const handleRegister = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault();

        const newErrors = findErrors();
        if (Object.values(newErrors).some((el) => el)) return setErrors(newErrors);

        register();
    };

    return (
        <div className="register">
            <form className="register__form">
                <h2 className="register__form__header">Join Us!</h2>

                <input
                    className="register__form__input"
                    name="email"
                    placeholder="Email"
                    type="text"
                    onChange={handleChange}
                ></input>
                {errors.email && errors.email !== '' ? (
                    <span className="form__errors">{errors.email}</span>
                ) : null}

                <input
                    className="register__form__input"
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                ></input>
                {errors.firstName && errors.firstName !== '' ? (
                    <span className="form__errors">{errors.firstName}</span>
                ) : null}
                <input
                    className="register__form__input"
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                ></input>
                {errors.lastName && errors.lastName !== '' ? (
                    <span className="form__errors">{errors.lastName}</span>
                ) : null}
                <input
                    className="register__form__input down__input"
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                ></input>
                {errors.password && errors.password !== '' ? (
                    <span className="form__errors">{errors.password}</span>
                ) : null}
                <br />
                <Button
                    type="button"
                    mode={BtnMode.PRIMARY}
                    disabled={!findErrors}
                    onClick={handleRegister}
                >
                    {isLoading ? <Spinner /> : 'Register'}
                </Button>
            </form>
        </div>
    );
};
