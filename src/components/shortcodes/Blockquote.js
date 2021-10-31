import React from 'react'

const Blockquote = ({cite, children}) => {
    return (
        <figure className="child">
            <blockquote className="block text-3xl lg:text-5xl">{children}</blockquote>
            <figcaption className="block text-xl">{cite}</figcaption>
        </figure>
    )
}

export default Blockquote;