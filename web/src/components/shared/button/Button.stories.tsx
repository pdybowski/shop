import React from 'react';
import { Button } from './Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonMode } from './interfaces';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        mode: {
            options: [ButtonMode.PRIMARY, ButtonMode.SECONDARY, ButtonMode.CANCEL, ButtonMode.DARK],
            backgroundColor: { control: 'color' },
        },
        label: { control: 'text' },
        color: { control: true },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    mode: ButtonMode.PRIMARY,
};
