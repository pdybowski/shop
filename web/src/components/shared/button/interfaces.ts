export enum ButtonMode {
    PRIMARY = 'primary',
    PRIMARYSMALL = 'primarySmall',
    PRIMARYBIG = 'primaryBig',
    SECONDARY = 'secondary',
    SECONDARYBIG = 'secondaryBig',
    CANCEL = 'cancel',
    DARK = 'dark',
}

export interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    mode?: ButtonMode;
    label?: string | JSX.Element;
    height?: string;
    width?: string;
    border?: string;
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    onClick?: () => void;
}
