import { createContext, useState } from 'react';
import { randomId } from '../../utils';
import { Notification, notificationProps } from './notification/Notification';

interface contextData {
    addNotification: ({ mode, title, deleteTimeout, key, message }: notificationProps) => void;
}

interface providerProps {
    children: Required<React.ReactChild>;
}

const contextDefaultValues: contextData = {
    addNotification: () => {},
};

export const NotificationContext = createContext<contextData>(contextDefaultValues);

export const NotificationProvider = ({ children }: providerProps) => {
    const [notification, setNotification] = useState<notificationProps[]>([]);

    const addNotification = (value: notificationProps) => {
        setNotification([...notification, { ...value, key: randomId() }]);
    };

    return (
        <NotificationContext.Provider value={{ addNotification }}>
            <div style={{ position: 'fixed', top: '15px', right: '10px', zIndex: 2 }}>
                {notification.map((item, index) => (
                    <Notification key={`${item.key}`} {...item} />
                ))}
            </div>
            {children}
        </NotificationContext.Provider>
    );
};
