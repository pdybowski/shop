import React, { ChangeEvent, useContext, useState } from 'react';

import { Form, FormInput } from '../../shared';

import { Api } from '../../../Api';
import { useNavigate } from 'react-router-dom';
import { NotificationMode, RoutePaths, User } from '../../../models';

import { USER_TOKEN } from '../../../constants/userToken';
import { setLocalStorage } from '../../../utils/localStorage';

import './style.css';
import { saveUserDataAction } from '../../../services/actions/userActions';
import { useDispatch } from 'react-redux';
import { NotificationContext } from '../../../contexts';

export const RegisterPage = (): JSX.Element => {
    const [errors, setErrors] = useState(new User());
    const [form, setForm] = useState(new User());
    const [isLoading, setLoading] = useState(false);
    const { addNotification } = useContext(NotificationContext);

    const navigate = useNavigate();

    const api = new Api();
    const dispatch = useDispatch();

    async function register() {
        setLoading(true);
        try {
            const userData = (await api.post('url...', form)) as User;
            setLocalStorage(USER_TOKEN, userData.token);
            dispatch(saveUserDataAction(form));
            navigate(RoutePaths.MainPage);
        } catch (error: any) {
            return addNotification({
                mode: NotificationMode.INFO,
                title: 'Register',
                message: error,
            });
        } finally {
            setLoading(false);
        }
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
            <Form
                header="Join Us!"
                submitBtn={{
                    handleSubmit: handleRegister,
                    text: 'Register',
                    isLoading: isLoading,
                    isSubmitDisabled: !findErrors,
                }}
            >
                <>
                    <FormInput
                        inputProps={{
                            placeholder: 'Email',
                            type: 'email',
                            onChange: handleChange,
                            name: 'email',
                        }}
                        error={errors.email}
                    />

                    <FormInput
                        inputProps={{
                            placeholder: 'First Name',
                            onChange: handleChange,
                            name: 'firstName',
                        }}
                        error={errors.firstName}
                    />

                    <FormInput
                        inputProps={{
                            placeholder: 'Last Name',
                            onChange: handleChange,
                            name: 'lastName',
                        }}
                        error={errors.lastName}
                    />

                    <FormInput
                        inputProps={{
                            placeholder: 'Password',
                            onChange: handleChange,
                            name: 'password',
                        }}
                        error={errors.password}
                    />
                </>
            </Form>
        </div>
    );
};
