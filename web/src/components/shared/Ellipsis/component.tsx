import './style.css';

interface Props {
    children: JSX.Element | JSX.Element[] | string;
    tooltip?: string;
    textLength?: number;
}

export const Ellipsis = ({ children, tooltip, textLength = 5 }: Props) => {
    return (
        <div title={tooltip} className="block-with-text" style={{ WebkitLineClamp: textLength }}>
            {children}
        </div>
    );
};
