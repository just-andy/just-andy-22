import React from 'react';
import { graphql } from 'gatsby';

import ProjectsTemplate from '../../templates/projects-template';
import ArticlesTemplate from '../../templates/articles-template';

const MdxPage = ({
    data,
    data: {
        mdx: {
            frontmatter: { variant }
        },
    },
}) => {
    const templates = {
        projects: <ProjectsTemplate data={data} />,
        articles: <ArticlesTemplate data={data} />,
    };

    return <>{templates[variant] ? templates[variant] : null}</>;
};

export const query = graphql`
    query ($slug: String) {
        mdx(slug: { eq: $slug }) {
            frontmatter {
                title
                strapline
                variant
                tags
                description
                summary
                banner {
                    childImageSharp {
                        gatsbyImageData(width: 1920)
                    }
                }
            }
            body
        }
    }
`;

export default MdxPage;
