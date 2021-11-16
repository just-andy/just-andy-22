import React from 'react'

const Blockquote = ({caption, children}) => {
    return (
        <figure className="bg-primary-100 py-4 child ">
            <div className="flex flex-col justify-center container mx-auto w-10/12 lg:w-8/12">
            <blockquote>{children}</blockquote>
            <figcaption>{caption}</figcaption>
            </div>
        </figure>
    )
}

export default Blockquote;