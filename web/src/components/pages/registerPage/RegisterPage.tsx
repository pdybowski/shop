import e from 'express';
import React, { useState } from 'react';
import { Button } from '../../shared';
import { ButtonMode } from '../../shared/button/interfaces';
import '../registerPage/style.css';
import { User } from '../../../models/user';

const RegisterPage = ({
    email = '',
    firstName = '',
    lastName = '',
    password = '',
}: User): JSX.Element => {
    const [errors, setErrors] = useState({} as User);
    const [form, setForm] = useState({
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
    });
    // async function postForm(form:User) {
    //     await "Api".post('users', form);
    // }

    const setField = ({ target: { firstName, value } }: any) => {
        const convertedValue = isNaN(value) ? value : parseInt(value, 10);
        setForm({
            ...form,
            [firstName]: convertedValue,
        });
        if (errors.firstName)
            setErrors({
                ...errors,
                [firstName]: null,
            });
    };

    const findErrors = () => {
        const { email, firstName, lastName, password }: User = form;
        const newErrors: User = {};
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

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault();
        const newErrors = findErrors();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setForm(form);
        }
    };

    const [disabled, setDisabled] = useState(true);
    const buttonSubmit = () => {
        setDisabled(true);
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
                    onChange={setField}
                ></input>
                {errors.email && errors.email !== '' ? (
                    <span className="form__errors">{errors.email}</span>
                ) : null}

                <input
                    className="register__form__input"
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    onChange={setField}
                ></input>
                {errors.firstName && errors.firstName !== '' ? (
                    <span className="form__errors">{errors.firstName}</span>
                ) : null}
                <input
                    className="register__form__input"
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    onChange={setField}
                ></input>
                {errors.lastName && errors.lastName !== '' ? (
                    <span className="form__errors">{errors.lastName}</span>
                ) : null}
                <input
                    className="register__form__input"
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={setField}
                ></input>
                {errors.password && errors.password !== '' ? (
                    <span className="form__errors">{errors.password}</span>
                ) : null}
                <Button
                    type="button"
                    mode={ButtonMode.SECONDARY}
                    children="Register"
                    disabled={!findErrors()}
                    onClick={() => handleSubmit}
                />
            </form>
        </div>
    );
};

export default RegisterPage;
