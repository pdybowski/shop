import './style.css';

interface props {
    style?: React.CSSProperties;
}

export const Spinner = ({ style }: props) => {
    return <div className="spinner" style={style} />;
};
