import React from 'react';
import CardItem from './CardItem';

interface CardGridProps {
    data: [
        {
            name: string;
            slug: string;
            thumb: string;
            summary: string;
            description: string;
        }
    ];
}

const CardGrid = ({ data }: CardGridProps) => (
    <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 ">
        {data.map((card, index) => (
            <CardItem
                key={index}
                name={card.node.frontmatter.title}
                slug={card.node.slug}
                thumb={card.node.frontmatter.thumbnail}
                summary={card.node.frontmatter.summary}
                description={card.node.frontmatter.description}
            />
        ))}
    </div>
);

export default CardGrid;
