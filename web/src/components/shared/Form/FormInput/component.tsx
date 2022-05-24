import './style.css';

interface Props {
    label?: {
        text: string;
        className?: string;
    };
    inputProps: {
        name: string;
        id?: string;
        className?: string;
        value?: any;
        type?: 'text' | 'button' | 'checkbox' | 'password' | 'email';
        placeholder?: string;
        onChange: (e: any) => void;
    };
    error?: string;
}

export const FormInput = ({ inputProps, label, error }: Props) => {
    if (!inputProps.className) {
        inputProps.className = 'form__input';
    } else {
        inputProps.className += ' form__input';
    }

    return (
        <>
            {label && (
                <label className={label.className ? label.className : ''}>{label.text}</label>
            )}
            <input {...inputProps} />
            {error && <span className="form__error">{error}</span>}
        </>
    );
};
