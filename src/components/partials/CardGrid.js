import React from 'react';
import CardItem  from '../partials/CardItem';


const CardGrid = ({data}) => {
   
    return (
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 ">
            {data.map((card, index) =>(
                <CardItem key={index} name={card.node.frontmatter.title} slug={card.node.slug} thumb={card.node.frontmatter.thumbnail} summary={card.node.frontmatter.summary} />
            ))}
        </div>
    )
}

export default CardGrid;