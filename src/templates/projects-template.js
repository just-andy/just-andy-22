import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Blockquote from '../components/shortcodes/Blockquote';

const shortcodes = {Blockquote};

const ProjectsTemplate = ({
    data: {
        mdx: {
            frontmatter: { title, banner, tags, summary },
            body,
        },
    },
}) => {

    const image = getImage(banner);

    return (
        <>
            <div className="grid mb-3" style={{ height: '350px' }}>
            <GatsbyImage
                style={{ gridArea: '1/1', objectFit: 'cover', height: '350px' }}
                image={image}
                alt={`${title} Banner`}
            />
            <div
                className="text-center"
                style={{
                    // By using the same grid area for both, they are stacked on top of each other
                    gridArea: '1/1',
                    position: 'relative',
                    // This centers the other elements inside the hero component
                    placeItems: 'center',
                    display: 'grid',
                }}
            >
                {/* Any content here will be centered in the component */}
                <h1 className=" text-white text-3xl md:text-5xl lg:text-6xl">{title}</h1>
            </div>
        </div>
        <section className="container mx-auto"></section>
            <article className="mx-auto prose md:prose-lg lg:prose-xl">
                <div className="flex my-3 font-sans">
                    <Link to="/" title="Return to the homepage">Home</Link>&nbsp;/&nbsp;<Link to="/projects" title="View all projects">Projects</Link>
                </div>
                <h1 className="text-3xl lg:text-4xl">{title}</h1>

                <MDXProvider components={shortcodes}>
                    <MDXRenderer>{body}</MDXRenderer>
                </MDXProvider>
                <div className="flex mt-5 mr-3 justify-start font-sans text-xl">
                    <div className="mr-2 flex items-center text-gray-600 font-bold">Tags:</div>
                    {tags
                        ? tags.map((tag, index) => (
                              <span className="block text-xl text-gray-500 list-none capitalize text-sm" key={index}>
                                  {tag},&nbsp;
                              </span>
                          ))
                        : null}
                </div>
            </article>
        </>
    );
};

export default ProjectsTemplate;
