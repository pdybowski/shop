import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationMode } from '../../../interfaces';
import { Notification, notificationProps } from './Notification';

export default {
    title: 'Notification',
    component: Notification,
    argTypes: {
        mode: {
            options: [
                NotificationMode.DANGER,
                NotificationMode.WARN,
                NotificationMode.INFO,
                NotificationMode.SUCCESS,
            ],
            control: { type: 'select' },
        },
        title: { control: 'text' },
        deleteTimeout: { control: false },
        key: { control: false },
    },
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args: any) => <Notification {...args} />;

export const NotificationComponent = Template.bind({});
NotificationComponent.args = {
    mode: NotificationMode.DANGER,
    title: 'Danger Title',
    deleteTimeout: 100000000000000000,
};
