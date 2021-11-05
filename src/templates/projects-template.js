import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Blockquote from '../components/shortcodes/Blockquote';

const shortcodes = {Blockquote};

const ProjectsTemplate = ({
    data: {
        mdx: {
            frontmatter: { title, variant, tags },
            body,
        },
    },
}) => {
    const sideNav = useStaticQuery(graphql`
        query ProjectsNav {
            allMdx(filter: { frontmatter: { variant: { eq: "projects" } } }) {
                edges {
                    node {
                        frontmatter {
                            title
                        }
                        slug
                    }
                }
            }
        }
    `);
    const navArray = sideNav.allMdx.edges;
    return (
        <section className="container mx-auto">
            <article className="prose md:prose-lg lg:prose-xl">
                <div className="flex my-3 font-sans">
                    <Link to="/" title="Return to the homepage">Home</Link>&nbsp;/&nbsp;<Link to="/projects" title="View all projects">Projects</Link>
                </div>
                <h1 className="text-3xl lg:text-4xl">{title}</h1>

                <MDXProvider components={shortcodes}>
                    <MDXRenderer>{body}</MDXRenderer>
                </MDXProvider>
                <div className="flex mt-5 mr-3 justify-start ">
                    <div className="font-bold mr-2 flex items-center">Tags:</div>
                    {tags
                        ? tags.map((tag, index) => (
                              <span className="block list-none capitalize text-sm p-2 ml-1 rounded" key={index}>
                                  {tag},&nbsp;
                              </span>
                          ))
                        : null}
                </div>
            </article>
            </section>
    );
};

export default ProjectsTemplate;
