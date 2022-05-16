import './style.css';

interface Props {
    style?: React.CSSProperties;
}

export const Spinner = ({ style }: Props) => {
    return <div className="spinner" style={style} />;
};
