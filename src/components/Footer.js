import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {AiFillLinkedin, AiFillTwitterCircle, AiOutlineGithub, AiOutlineInstagram} from 'react-icons/ai'

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
        <footer className="flex flex-col font-sans bg-gray-100 p-6 justify-items-center flex-col-reverse md:flex-row md:justify-between">
            <div className="flex flex-col text-center md:items-center md:flex-row  md:text-left"><div>&copy; Andrew Cetnarskyj {new Date().getFullYear()}</div><div className="ml-0 md:ml-2">Built with <a href="https://www.gatsbyjs.com/" rel="external" target="_blank" >Gatsby</a> &amp; <a href="https://tailwindcss.com/" rel="external" target="_blank" >Tailwind</a></div></div>
            <div className="flex justify-center py-4 md:justify-start md:py-0">
                {data.site.siteMetadata.social.map((socialLink, index) => (
                    <li key={index} className="mr-6 lg:mr-3 list-none">
                        <a className="capitalize" href={socialLink.url} title={socialLink.name} rel="me" target="_blank">
                            {getIcon(socialLink.icon)}
                        </a>
                    </li>
                ))}
            </div>
        </footer>
    );
};

const getIcon = (icon) => {
    switch (icon) {
        case 'AiFillLinkedin':
        return <AiFillLinkedin className="text-3xl" />
        break;
        case 'AiFillTwitterCircle':
        return <AiFillTwitterCircle className="text-3xl" />
        break;
        case 'AiOutlineGithub':
        return <AiOutlineGithub className="text-3xl" />
        break;
        case 'AiOutlineInstagram':
        return <AiOutlineInstagram className="text-3xl" />
        break;
        default:
            return null
    }
}

export default Footer;
