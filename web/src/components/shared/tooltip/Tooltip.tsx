import './style.css';

interface TextProps {
    text: String;
}

export const Tooltip = ({ text = 'LOOOOOOL' }: TextProps) => {
    return (
        <div className="tooltip">
            <span className="tooltiptext">{text}</span>
        </div>
    );
};
