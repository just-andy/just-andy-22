import React from 'react'

const Blockquote = ({caption, children}) => {
    return (
        <figure className="bg-primary-100 child ">
            <div className="flex flex-col justify-center container mx-auto w-10/12 lg:w-8/12">
            <blockquote className="mb-4">{children}</blockquote>
            {caption !== undefined && 
                <figcaption className="text-right pb-16  text-gray-700">~ {caption}</figcaption>
            }
            </div>
        </figure>
    )
}

export default Blockquote;