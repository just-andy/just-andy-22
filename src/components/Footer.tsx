import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { RiLinkedinBoxLine, RiTwitterLine, RiGithubLine, RiInstagramLine, RiArrowUpLine } from 'react-icons/ri';

interface SocialProps {
    site: {
        siteMetadata: {
            social: {
                name: string;
                url: string;
                icon: string;
            };
        };
    };
}

const Footer = () => {
    const data: SocialProps = useStaticQuery(graphql`
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
        <>
            <div className="flex justify-center my-8 md:my-12">
                <button
                    type="button"
                    alt="Return to top"
                    onClick={() => scrollTo('#top')}
                    className="text-2xl block p-3 rounded-full bg-gray-200 text-primary-500 md:p-3 md:text-xl hover:bg-primary-700 hover:text-white hover:shadow-md"
                >
                    <RiArrowUpLine alt="Up Arrow" />
                </button>
            </div>
            <footer className="flex flex-col p-6 justify-items-center flex-col-reverse bg-white md:flex-row md:justify-between border-t-2 border-gray-200">
                <div className="flex flex-col text-center md:items-center md:flex-row md:text-left md:w-6/12">
                    <div>&copy; Andrew Cetnarskyj {new Date().getFullYear()}</div>
                    <div className="ml-0 md:ml-2">
                        Built with&nbsp;
                        <a href="https://www.gatsbyjs.com/" rel="external nofollow noopener noreferrer" target="_blank">
                            Gatsby
                        </a>
                        ,&nbsp;
                        <a href="https://www.netlify.com/" rel="external nofollow noopener noreferrer">
                            Netlify
                        </a>
                        &nbsp; &amp;&nbsp;
                        <a href="https://tailwindcss.com/" rel="external nofollow noopener noreferrer" target="_blank">
                            Tailwind
                        </a>
                    </div>
                </div>
                <ul className="flex mx-auto items-center py-4 w-8/12 justify-between md:justify-end">
                    {data.site.siteMetadata.social.map((socialLink, index) => (
                        <li key={index} className="mx-1 md:mx-2">
                            <a
                                className=" transition duration-500 ease-in-out hover:text-primary-700 transform hover:-translate-y-1 hover:scale-110"
                                href={socialLink.url}
                                title={socialLink.name}
                                rel="me noreferrer"
                                target="_blank"
                            >
                                {getIcon(socialLink.icon)}
                            </a>
                        </li>
                    ))}
                </ul>
            </footer>
        </>
    );
};

const getIcon = (icon: string) => {
    switch (icon) {
        case 'RiLinkedinBoxLine':
            return <RiLinkedinBoxLine className="text-4xl" />;
        case 'RiTwitterLine':
            return <RiTwitterLine className="text-4xl" />;
        case 'RiGithubLine':
            return <RiGithubLine className="text-4xl" />;
        case 'RiInstagramLine':
            return <RiInstagramLine className="text-4xl" />;
        default:
            return null;
    }
};

export default Footer;
