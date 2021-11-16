import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {RiLinkedinBoxLine, RiTwitterLine, RiGithubLine, RiInstagramLine} from 'react-icons/ri'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query FooterQuery {
            site {
                siteMetadata {
                    social {
                        name
                        url
                        icon
                    }
                }
            }
        }
    `);

    return (
        <footer className="flex flex-col font-sans p-6 justify-items-center flex-col-reverse bg-secondary-100 md:flex-row md:justify-between">
            <div className="flex flex-col text-center md:items-center md:flex-row  md:text-left"><div>&copy; Andrew Cetnarskyj {new Date().getFullYear()}</div><div className="ml-0 md:ml-2">Built with <a className="secondary-link underline" href="https://www.gatsbyjs.com/" rel="external" target="_blank" >Gatsby</a> &amp; <a className="secondary-link underline" href="https://tailwindcss.com/" rel="external" target="_blank" >Tailwind</a></div></div>
            <ul className="flex mx-auto items-center py-4 w-5/12 justify-between md:justify-end">
                {data.site.siteMetadata.social.map((socialLink, index) => (
                    <li key={index} className="mx-0 md:mx-2">
                        <a className="capitalize" href={socialLink.url} title={socialLink.name} rel="me" target="_blank">
                            {getIcon(socialLink.icon)}
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
};

const getIcon = (icon) => {
    switch (icon) {
        case 'RiLinkedinBoxLine':
        return <RiLinkedinBoxLine className="text-3xl" />
        break;
        case 'RiTwitterLine':
        return <RiTwitterLine className="text-3xl" />
        break;
        case 'RiGithubLine':
        return <RiGithubLine className="text-3xl" />
        break;
        case 'RiInstagramLine':
        return <RiInstagramLine className="text-3xl" />
        break;
        default:
            return null
    }
}

export default Footer;
