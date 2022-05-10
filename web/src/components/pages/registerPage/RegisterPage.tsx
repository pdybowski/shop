import React, { useState } from 'react';
import { Button } from '../../shared';
import { ButtonMode } from '../../shared/button/interfaces';
import '../registerPage/style.css';

const RegisterPage = (): JSX.Element => {
    return (
        <div className="register">
            <form className="register__form">
                <h2 className="register__form__header">Join us!</h2>
                <input className="register__form__input" placeholder="Email" type="text"></input>
                <input
                    className="register__form__input"
                    placeholder="First Name"
                    type="text"
                ></input>
                <input
                    className="register__form__input"
                    placeholder="Last Name"
                    type="text"
                ></input>
                <input
                    className="register__form__input"
                    placeholder="Password"
                    type="password"
                ></input>
                <Button type="button" mode={ButtonMode.SECONDARY} label="Register" />
            </form>
        </div>
    );
};

export default RegisterPage;
