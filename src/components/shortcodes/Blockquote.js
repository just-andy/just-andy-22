import React from 'react'

const Blockquote = ({cite, children}) => {
    return (
        <figure className="bg-gray-100 py-4 child ">
            <div className="flex flex-col justify-center container mx-auto w-8/12">
            <blockquote>{children}</blockquote>
            <figcaption>{cite}</figcaption>
            </div>
        </figure>
    )
}

export default Blockquote;