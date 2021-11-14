import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Blockquote from '../components/shortcodes/Blockquote';
import ImageText from '../components/shortcodes/ImageText';
import Seo from '../components/Seo';

const shortcodes = {Blockquote, ImageText};

const ProjectsTemplate = ({
    data: {
        mdx: {
            frontmatter: { title, strapline, banner, tags, summary, description },
            body,
        },
    },
}) => {

    const image = getImage(banner);

    return (
        <>
        <Seo title={title} description={description} />
        <div className="grid mb-3" style={{ height: '500px' }}>
            <GatsbyImage
                style={{ gridArea: '1/1', objectFit: 'cover', height: '500px' }}
                image={image}
                alt={`${title} Banner`}
            />
            <div className="text-center grid relative place-items-center bannerGridArea">
                {/* Any content here will be centered in the component */}
                <header className="flex flex-col">
                <h2 className="text-white text-2xl md:text-4xl lg:text-6xl">{strapline}</h2>
                <h4 className="text-gray-100 text-lg px-4  md:text-xl md:px-6 ">{summary}</h4>
                </header>
            </div>
        </div>
        <section className="container mx-auto lg:w-8/12 xl:w-10/12">
            <article className="projects prose md:prose-lg lg:prose-xl max-w-none">
                <div className="flex my-3 font-sans">
                    <Link to="/" title="Return to the homepage">Home</Link>&nbsp;/&nbsp;<Link to="/projects" title="View all projects">Projects</Link>
                </div>
                <h1 className="text-3xl lg:text-5xl">{title}</h1>

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
        </section>
        </>
    );
};

export default ProjectsTemplate;
