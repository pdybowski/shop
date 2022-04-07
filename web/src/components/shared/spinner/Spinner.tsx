import './style.css';

interface props {
    style: React.CSSProperties;
}

export const Spinner = (props: props) => {
    return <div className="spinner" style={props.style} />;
};
