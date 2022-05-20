import { ChangeEvent, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { NotificationMode, RoutePaths } from '../../../models';
import { User } from '../../../models/user';
import { Api } from '../../../Api';
import { USER_TOKEN } from '../../../constants/userToken';
import { setLocalStorage } from '../../../utils/localStorage';

import { Form, FormInput } from '../../shared';

import './style.css';
import { saveUserDataAction } from '../../../services/actions/userActions';
import { useDispatch } from 'react-redux';
import { NotificationContext } from '../../../contexts';

export const LoginPage = (): any => {
    const [form, setForm] = useState(new User());
    const [errors, setErrors] = useState(new User());
    const [isLoading, setIsLoading] = useState(false);
    const { addNotification } = useContext(NotificationContext);

    const handleChange = (e: ChangeEvent<{ value: string; name: string }>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const findErrors = () => {
        const { email, password }: User = form;
        const newErrors = new User();

        delete newErrors.role;

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
    const dispatch = useDispatch();

    const login = async () => {
        try {
            const userData = (await api.post('url..', form)) as User;
            setLocalStorage(USER_TOKEN, userData.token);
            dispatch(saveUserDataAction(form));
            navigate(RoutePaths.MainPage);
        } catch (error: any) {
            return addNotification({
                mode: NotificationMode.INFO,
                title: 'Login',
                message: error,
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogin = (e: any): void => {
        e.preventDefault();

        const newErrors = findErrors();
        if (Object.values(newErrors).some((el) => el)) return setErrors(newErrors);

        login();
    };

    return (
        <div className="login">
            <Form
                header="Login"
                submitBtn={{
                    handleSubmit: handleLogin,
                    text: 'Login',
                    isLoading: isLoading,
                    isSubmitDisabled: !findErrors,
                }}
                additionalElement={
                    <Link to={`${RoutePaths.Register}`} style={{ textDecoration: 'none' }}>
                        Don't have an account?
                    </Link>
                }
            >
                <>
                    <FormInput
                        inputProps={{
                            placeholder: 'Email',
                            type: 'text',
                            onChange: handleChange,
                            name: 'email',
                        }}
                        error={errors.email}
                    />

                    <FormInput
                        inputProps={{
                            placeholder: 'Password',
                            type: 'password',
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
