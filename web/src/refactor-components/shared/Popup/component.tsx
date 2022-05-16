import { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';

import { Button, BtnMode } from '../Button';

import './style.css';

interface Props {
    headerText?: string;
    saveBtnText?: string;
    isDisplayed: boolean;
    children: JSX.Element | string;
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
                    <Button type="button" mode={BtnMode.CANCEL} onClick={handleClose}>
                        Cancel
                    </Button>

                    {saveBtnText && (
                        <Button
                            type="button"
                            mode={BtnMode.PRIMARY}
                            onClick={handleSubmit}
                            style={{ marginLeft: '13px' }}
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
