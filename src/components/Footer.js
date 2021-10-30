import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query FooterQuery {
            site {
                siteMetadata {
                    social {
                        name
                        url
                    }
                }
            }
        }
    `);

    return (
        <footer className="flex flex-col md:flex-row md:justify-between p-4">
            <div>&copy; Andrew Cetnarskyj {new Date().getFullYear()}</div>
            <div className="flex">
                {data.site.siteMetadata.social.map((socialLink, index) => (
                    <li key={index} className="mr-2 list-none">
                        <a href={socialLink.url} title={socialLink.name}>
                            {socialLink.name}
                        </a>
                    </li>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
