import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const Seo = ({ title, description, image, pathname, article }) => (
    <StaticQuery
        query={query}
        render={({
            site: {
                siteMetadata: {
                    defaultTitle,
                    titleTemplate,
                    defaultDescription,
                    siteUrl,
                    defaultImage,
                    twitterUsername,
                },
            },
        }) => {
            const Seo = {
                title: title || defaultTitle,
                description: description || defaultDescription,
                image: `${siteUrl}${image || defaultImage}`,
                url: `${siteUrl}${pathname || '/'}`,
            };

            return (
                <>
                    <Helmet title={Seo.title} titleTemplate={titleTemplate}>
                        <meta name="description" content={Seo.description} />
                        <meta name="image" content={Seo.image} />
                        {Seo.url && <meta property="og:url" content={Seo.url} />}
                        {(article ? true : null) && <meta property="og:type" content="article" />}
                        {Seo.title && <meta property="og:title" content={Seo.title} />}
                        {Seo.description && <meta property="og:description" content={Seo.description} />}
                        {Seo.image && <meta property="og:image" content={Seo.image} />}
                        <meta name="twitter:card" content="summary_large_image" />
                        {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
                        {Seo.title && <meta name="twitter:title" content={Seo.title} />}
                        {Seo.description && <meta name="twitter:description" content={Seo.description} />}
                        {Seo.image && <meta name="twitter:image" content={Seo.image} />}
                    </Helmet>
                </>
            );
        }}
    />
);

export default Seo;

Seo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    pathname: PropTypes.string,
    article: PropTypes.bool,
};

Seo.defaultProps = {
    title: null,
    description: null,
    image: null,
    pathname: null,
    article: false,
};

const query = graphql`
    query SeoQuery {
        site {
            siteMetadata {
                defaultTitle: title
                titleTemplate
                defaultDescription: description
                siteUrl: siteUrl
                defaultImage: image
                twitterUsername
            }
        }
    }
`;
