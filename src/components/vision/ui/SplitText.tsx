import React from 'react';

interface SplitTextProps {
    children: string;
    className?: string; // Class for the wrapper
    charClass?: string; // Class for individual characters
    wordClass?: string; // Class for individual words
    type?: 'chars' | 'words' | 'lines'; // Currently only supporting chars/words basic split
}

export const SplitText: React.FC<SplitTextProps> = ({
    children,
    className,
    charClass = "inline-block",
    wordClass = "inline-block whitespace-nowrap"
}) => {
    const words = children.split(' ');

    return (
        <span className={className}>
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className={wordClass}>
                    {word.split('').map((char, charIndex) => (
                        <span key={`${wordIndex}-${charIndex}`} className={charClass}>
                            {char}
                        </span>
                    ))}
                    {/* Add space after word unless it's the last one */}
                    {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
                </span>
            ))}
        </span>
    );
};
