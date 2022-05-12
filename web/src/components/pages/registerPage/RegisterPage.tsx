import e from 'express';
import React, { ChangeEvent, useState } from 'react';
import { Button } from '../../shared';
import { ButtonMode } from '../../shared/button/interfaces';
import '../registerPage/style.css';
import { User } from '../../../models/user';
import { Api } from '../../../Api';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from '../../../models';

const RegisterPage = (): JSX.Element => {
    const [errors, setErrors] = useState(new User());
    const [form, setForm] = useState(new User());
    const api = new Api();

    async function postForm(form: any) {
        await api.put('users', form); // post ?
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
    let navigate = useNavigate();

    const handleRegister = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault();
        const newErrors = findErrors();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            navigate(RoutePaths.MainPage);
            console.log(form);
            postForm(form);
        }
    };

    return (
        <div className="register">
            <form className="register__form">
                <h2 className="register__form__header">Join us!</h2>

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
                <Button
                    type="button"
                    mode={ButtonMode.SECONDARY}
                    children="Register"
                    disabled={!findErrors}
                    onClick={handleRegister}
                />
            </form>
        </div>
    );
};

export default RegisterPage;
