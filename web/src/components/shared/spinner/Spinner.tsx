import { SpinnerProps } from './interfaces';
import './style.css';

export const Spinner = ({ style, mode }: SpinnerProps) => {
    return <div className={`spinner--${mode}`} style={style} />;
};
