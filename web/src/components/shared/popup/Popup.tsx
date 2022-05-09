import { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Button } from '../button/Button';
import { ButtonMode } from '../button/interfaces';

import './style.css';

interface Props {
    headerText?: string;
    saveBtnText?: string;
    isDisplayed: boolean;
    children: JSX.Element;
    handleClose: () => void;
    handleSubmit?: () => void;
}

export const Popup = ({
    headerText,
    saveBtnText,
    isDisplayed,
    children,
    handleClose,
    handleSubmit,
}: Props) => {
    useEffect(() => {
        document.body.style.overflow = isDisplayed ? 'hidden' : 'auto';
    }, [isDisplayed]);

    if (!isDisplayed) return <></>;

    const handleOverlayClick = (e: any) => {
        e.preventDefault();

        const isOverlay = [...e.target.classList].indexOf('popup__overlay') > -1;
        if (isOverlay) {
            handleClose();
        }
    };

    return (
        <div className="popup__overlay" onClick={handleOverlayClick}>
            <div className="popup">
                {headerText && <div className="popup__header">{headerText}</div>}

                {<div className="popup__body">{children}</div>}

                <div className="popup__footer">
                    <Button
                        type="reset"
                        mode={ButtonMode.CANCEL}
                        onClick={handleClose}
                        style={{ margin: '0px' }}
                    >
                        Cancel
                    </Button>
                    {saveBtnText && (
                        <Button
                            type="submit"
                            mode={ButtonMode.PRIMARY}
                            style={{ margin: '0px' }}
                            onClick={handleSubmit}
                        >
                            {saveBtnText}
                        </Button>
                    )}
                </div>

                <div className="popup__close cursor--pointer" onClick={handleClose}>
                    <IoMdClose />
                </div>
            </div>
        </div>
    );
};
