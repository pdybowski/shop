export enum SpinnerMode {
    PRIMARY = 'primary',
    PRIMARYSMALL = 'primarySmall',
}

export interface SpinnerProps {
    style?: React.CSSProperties;
    mode?: SpinnerMode;
}
