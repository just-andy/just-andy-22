import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SeoProps {
    title: string;
    description: string;
}

interface SeoQueryProps {
    site: {
        siteMetadata: {
            title?: string;
            titleTemplate?: string;
            description?: string;
            siteUrl: string;
            image: string;
            twitterUsername: string;
        };
    };
}

const Seo = ({ title, description }: SeoProps) => {
    const { site }: SeoQueryProps = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        titleTemplate
                        description
                        siteUrl
                        image
                        twitterUsername
                    }
                }
            }
        `
    );

    const { image, twitterUsername, siteUrl, titleTemplate } = site.siteMetadata;

    return (
        <Helmet htmlAttributes={{ lang: 'en' }} title={title || site.siteMetadata.title} titleTemplate={titleTemplate}>
            <meta name="description" content={description || site.siteMetadata.description} />
            <meta
                name="keywords"
                content="Andrew Cetnarskyj, Design Systems, Just Andy, Portfolio, Product Designer, UX, UI, Design Systems"
            />
            <meta name="type" content="website" />
            <meta name="author" content="Andrew Cetnarskyj" />
            {siteUrl && <meta property="og:url" content={siteUrl} />}
            {title && <meta property="og:title" content={title || site.siteMetadata.title} />}
            {description && <meta property="og:description" content={description || site.siteMetadata.description} />}
            {image && <meta property="og:image" content={image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
            {title && <meta name="twitter:title" content={title || site.siteMetadata.title} />}
            {description && <meta name="twitter:description" content={description || site.siteMetadata.description} />}
            {image && <meta name="twitter:image" content={image} />}
        </Helmet>
    );
};

export default Seo;
