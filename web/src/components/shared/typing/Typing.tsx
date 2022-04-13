import React, { useState, useEffect } from 'react';

interface typingProps {
    staticText?: string;
    typedWords: Required<string[]>;
    intervalTime?: number;
    style?: React.CSSProperties;
    className?: string;
}
const Typing = ({
    staticText = '',
    typedWords,
    intervalTime = 130,
    style,
    className,
}: typingProps) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (index === typedWords.length - 1 && subIndex === typedWords[index].length) {
            return;
        }

        if (
            subIndex === typedWords[index].length + 1 &&
            index !== typedWords.length - 1 &&
            !reverse
        ) {
            return setReverse(true);
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
        }

        const timeout: NodeJS.Timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === typedWords[index].length ? 1000 : 150, intervalTime));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, typedWords, intervalTime]);

    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    return (
        <>
            <div style={style} className={className}>{`${staticText} ${typedWords[index].substring(
                0,
                subIndex
            )}${blink ? '|' : ' '}`}</div>
        </>
    );
};

export default Typing;
