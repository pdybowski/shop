import './style.css';

interface EllipsisWrapperProps {
    children?: JSX.Element | JSX.Element[] | string;
}

export const EllipsisWrapper = ({ children }: EllipsisWrapperProps) => {
    return <div className="block-with-text">{children}</div>;
};
