import './style.css';

interface Props {
    style: React.CSSProperties;
}

export const Spinner = (props: Props) => {
    return <div className='spinner' style={props.style}/>;
};
