import React from 'react';

interface BlockquoteProps {
    caption: string;
    children: JSX.Element;
    sectionColour?: string;
}

const Blockquote = ({ caption, children, sectionColour }: BlockquoteProps) => {
    const bgColour = sectionColour !== undefined ? `${sectionColour}` : 'section-primary ';

    return (
        <div className={`${bgColour} section-spacer child`}>
            <div className="flex flex-col justify-center container mx-auto w-10/12 lg:w-8/12">
                <blockquote>{children}</blockquote>
                {caption !== undefined && (
                    <figcaption className="text-right pb-16  text-gray-700">~ {caption}</figcaption>
                )}
            </div>
        </div>
    );
};

export default Blockquote;
