import { useEffect, useRef, useState } from 'react';
import {
    AiOutlineCheckCircle,
    AiOutlineExclamationCircle,
    AiOutlineInfoCircle,
    AiOutlineQuestionCircle,
} from 'react-icons/ai';
import { NotificationMode } from '../../../models';

import './style.css';

export interface notificationProps {
    readonly mode: NotificationMode;
    readonly title: string;
    readonly message?: string;
    readonly deleteTimeout?: number;
    readonly key?: string;
}

export const Notification = ({ mode, title, message, deleteTimeout = 5000 }: notificationProps) => {
    const notificationRef = useRef<HTMLDivElement>(null);
    const [timeoutId, setTimeoutId] = useState<any>(null);

    const startTimer = () => {
        const timeout = setTimeout(deleteComponent, deleteTimeout);
        setTimeoutId(timeout);
    };

    const stopTimer = () => {
        clearTimeout(timeoutId);
    };

    const deleteComponent = () => {
        if (!notificationRef.current) return;
        stopTimer();
        notificationRef.current.remove();
    };

    const handleNotificationClick = () => {
        deleteComponent();
    };

    useEffect(() => {
        startTimer();
    }, []);

    return (
        <div
            ref={notificationRef}
            className={`notification notification--${mode}`}
            onClick={handleNotificationClick}
        >
            <h4 className="notification__title">{title}</h4>
            <div>{message}</div>
            <span className="notification__icon">
                {mode === NotificationMode.DANGER && <AiOutlineExclamationCircle />}
                {mode === NotificationMode.WARN && <AiOutlineQuestionCircle />}
                {mode === NotificationMode.INFO && <AiOutlineInfoCircle />}
                {mode === NotificationMode.SUCCESS && <AiOutlineCheckCircle />}
            </span>
        </div>
    );
};
