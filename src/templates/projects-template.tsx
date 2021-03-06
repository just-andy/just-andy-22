import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Blockquote from '../components/shortcodes/Blockquote';
import ImageText from '../components/shortcodes/ImageText';
import StatCounter from '../components/shortcodes/StatCounter';
import Gallery from '../components/shortcodes/Gallery';
import Seo from '../components/Seo';

const shortcodes = { Blockquote, ImageText, StatCounter, Gallery };

interface ProjectTemplateProps {
    data: {
        mdx: {
            frontmatter: {
                title: string;
                strapline: string;
                banner: any;
                tags: string[];
                summary: string;
                description: string;
            };
            body: any;
        };
    };
}

const ProjectsTemplate = ({
    data: {
        mdx: {
            frontmatter: { title, strapline, banner, tags, summary, description },
            body,
        },
    },
}: ProjectTemplateProps) => {
    const image = getImage(banner);

    return (
        <>
            <Seo title={title} description={description} />
            <div className="grid">
                <GatsbyImage className="hero-banner" image={image} alt={`${title} Banner`} />
                <div className="text-center grid relative place-items-center bannerGridArea">
                    {/* Any content here will be centered in the component */}
                    <header className="flex flex-col text-gray-100 text-left px-4 lg:px-0 ">
                        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl uppercase">{strapline}</h2>
                        <div className="text-gray-100 text-xl my-2 md:text-2xl ">{summary}</div>
                        <div className="flex flex-wrap text-gray-100 justify-start text-lg lg:text-xl last:mr-0">
                            <div className="mr-2 block items-center font-bold">My Role:</div>
                            {tags
                                ? tags.map((tag, index) => (
                                      <div className="block" key={index}>
                                          {tag},&nbsp;
                                      </div>
                                  ))
                                : null}
                        </div>
                    </header>
                </div>
            </div>
            <section className="container mx-auto my-8 lg:w-8/12 xl:w-10/12">
                <article className="projects prose prose-lg lg:prose-xl max-w-none">
                    <div className="flex mt-4 mb-8 ">
                        <Link to="/" title="Return to the homepage">
                            Home
                        </Link>
                        &nbsp;/&nbsp;
                        <Link to="/projects" title="View all projects">
                            Projects
                        </Link>
                    </div>
                    <h1 className="text-3xl lg:text-5xl">{title}</h1>

                    <MDXProvider components={shortcodes}>
                        <MDXRenderer>{body}</MDXRenderer>
                    </MDXProvider>
                </article>
            </section>
        </>
    );
};

export default ProjectsTemplate;
