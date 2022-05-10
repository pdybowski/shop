import React, { useState } from 'react';
import { FormValues } from '../singleProductPage/components/singleProductComponent/interfaces';

const SingUp = ({ email, firstName, lastName, password }: FormValues) => {
    const [Errors, setErrors] = useState({});
    const [Form, setForm] = useState({
        email,
        firstName,
        lastName,
        password,
    });
    return <div>SingUp</div>;
};

export default SingUp;
