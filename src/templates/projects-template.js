import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { useStaticQuery, graphql, Link } from 'gatsby';

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
        <section className="flex flex-wrap overflow-hidden">
            <div className="prose w-full overflow-hidden md:w-8/12">
                <h1>{title}</h1>
                <h2>{`Variant - ${variant}`}</h2>
                <div className="flex mr-3 justify-start ">
                    <span className="font-bold mr-2">Tags:</span>
                    {tags
                        ? tags.map((tag, index) => (
                              <span className="list-none capitalize" key={index}>
                                  {tag},&nbsp;
                              </span>
                          ))
                        : null}
                </div>
                <MDXProvider>
                    <MDXRenderer>{body}</MDXRenderer>
                </MDXProvider>
            </div>
            <div className="w-full overflow-hidden md:w-4/12">
                <h4 className="mt-0">Projects</h4>
                <ul className="border-t-2 border-gray-200">
                    {navArray.map((navItem, index) => (
                        <li key={index} className="capitalize border-b-2 py-3  border-gray-200">
                            <Link
                                to={`/Projects/${navItem.node.slug}`}
                                title={navItem.node.frontmatter.title}
                                activeClassName="text-primary-800"
                            >
                                {navItem.node.slug}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ProjectsTemplate;
