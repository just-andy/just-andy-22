import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import Seo from '../components/Seo';



const DocsTemplate = ({
    data: {
        mdx: {
            frontmatter: { title, variant, description, tags },
            body,
        },
    },
}) => (
    <>
        <Seo title={title} description={description} />
        <section className="prose md:prose-lg lg:prose-xl xl:prose-2xl max-w-none">
            <h1>{title}</h1>
            <h5>{`Variant - ${variant}`}</h5>
            <ul className="flex mr-3 justify-start">
                <li>Tags</li>
                {tags ? tags.map((tag, index) => <li key={index}>{tag}</li>) : null}
            </ul>
            <MDXProvider>
                <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
            <div className="flex w-full my-3">
                <Link to="/articles" className="btn btn-primary">
                    Back to articles
                </Link>
            </div>
        </section>
    </>
);

export default DocsTemplate;
