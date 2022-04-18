import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Seo from '../components/Seo';
import CardGrid from '../components/partials/CardGrid';

interface ProjectsProps {
    allMdx: {
        edges: {
            node: {
                frontmatter: {
                    title: string;
                    order: number;
                    summary: string;
                    description: string;
                    featured: boolean;
                    tags: string[];
                    thumbnail: GatsbyImageProps;
                };
            };
        };
    };
}

const Projects: React.FC = () => {
    const projectsList: ProjectsProps = useStaticQuery(graphql`
        query projectsGrid {
            allMdx(
                filter: { frontmatter: { variant: { eq: "projects" }, private: { eq: false } } }
                sort: { order: ASC, fields: frontmatter___order }
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            order
                            summary
                            description
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
        }
    `);

    const projects = projectsList.allMdx.edges;

    return (
        <section className="container">
            <Seo title="Projects" description="A wide portfolio of projects that Andrew Cetnarskyj has worked on." />
            <header>
                <h1 className="text-6xl my-12">Projects </h1>
            </header>
            <CardGrid data={projects} />
        </section>
    );
};

export default Projects;
