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
        <footer className="flex flex-col font-sans bg-gray-100 p-6 justify-items-center flex-col-reverse md:flex-row md:justify-between">
            <div className="text-center lg:text-left">&copy; Andrew Cetnarskyj {new Date().getFullYear()} &middot; Built with <a href="https://www.gatsbyjs.com/" rel="external" target="_blank" >Gatsby</a> &amp; <a href="https://tailwindcss.com/" rel="external" target="_blank" >Tailwind</a></div>
            <div className="flex justify-center py-4 lg:justify-start lg:py-0">
                {data.site.siteMetadata.social.map((socialLink, index) => (
                    <li key={index} className="mr-2 list-none">
                        <a className="capitalize" href={socialLink.url} title={socialLink.name} rel="me" target="_blank">
                            {socialLink.name}
                        </a>
                    </li>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
