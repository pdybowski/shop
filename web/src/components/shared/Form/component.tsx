import { Button, BtnMode } from '../Button';
import { Spinner } from '../Spinner';

import './style.css';

interface Props {
    header?: string;
    submitBtn?: {
        text: string;
        isSubmitDisabled?: boolean;
        isLoading?: boolean;
        handleSubmit: (e: any) => void;
    };
    children: JSX.Element;
    additionalElement?: JSX.Element;
}

export const Form = ({ header, submitBtn, children, additionalElement }: Props) => {
    return (
        <form className="form">
            {header && <h2 className="form__header">{header}</h2>}

            {children}

            {submitBtn && (
                <Button
                    type="button"
                    mode={BtnMode.PRIMARY}
                    disabled={submitBtn.isSubmitDisabled}
                    onClick={submitBtn.handleSubmit}
                >
                    {submitBtn.isLoading ? <Spinner /> : submitBtn.text}
                </Button>
            )}

            {additionalElement && <div style={{ marginTop: '10px' }}>{additionalElement}</div>}
        </form>
    );
};
