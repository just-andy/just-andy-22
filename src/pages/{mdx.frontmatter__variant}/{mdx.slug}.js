import React from 'react';
import { graphql } from 'gatsby';

import ProjectsTemplate from '../../templates/projects-template';
import ArticlesTemplate from '../../templates/articles-template';

const MdxPage = ({
    data,
    data: {
        mdx: {
            frontmatter: { variant },
        },
    },
}) => {
    const templates = {
        projects: <ProjectsTemplate data={data} />,
        articles: <ArticlesTemplate data={data} />,
    };

    return <section className="container mx-auto">{templates[variant] ? templates[variant] : null}</section>;
};

export const query = graphql`
    query ($slug: String) {
        mdx(slug: { eq: $slug }) {
            frontmatter {
                title
                variant
                tags
                description
            }
            body
        }
    }
`;

export default MdxPage;
