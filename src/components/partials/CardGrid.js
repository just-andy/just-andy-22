import React from 'react';
import CardItem  from '../partials/CardItem';
import { useStaticQuery, graphql } from 'gatsby';


const CardGrid = () => {
    const projectsList = useStaticQuery(graphql`
        query projectsGrid {
            allMdx(
            filter: {frontmatter: {variant: {eq: "projects"}, private: {eq: false}}}
            sort: {order: ASC, fields: frontmatter___order}
            ) {
            edges {
                node {
                frontmatter {
                    title
                    order
                    summary
                    tags
                    thumbnail {
                    childImageSharp {
                    gatsbyImageData(width: 1024)
                    }
                    }
                }
                slug
                }
            }
            }
        }`
    );
    
    const props = projectsList.allMdx.edges;

    return (
        <div className="grid gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3 ">
            {props.map((card, index) =>(
                <CardItem key={index} name={card.node.frontmatter.title} slug={card.node.slug} thumb={card.node.frontmatter.thumbnail} summary={card.node.frontmatter.summary} />
            ))}
        </div>
    )
}

export default CardGrid;