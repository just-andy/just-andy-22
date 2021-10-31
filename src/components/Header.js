import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import MobileNav from './partials/MobileNav';

const Header = () => {
    /** State */
    const [isOpen, setNav] = useState(false);
    const toggleNav = () => {
        setNav((isOpen) => !isOpen);
    };

    /** Menu Query */
    const menuData = useStaticQuery(graphql`
        query menuQuery {
            site {
                id
                siteMetadata {
                    menuLinks {
                        url
                        label
                    }
                }
            }
        }
    `);

    return (
        <>
            <header className="flex justify-between p-6">
                <Link className="text-2xl md:text-5xl" to="/" title="Return to Just Andy home page">
                    Just Andy
                </Link>
                {/** Mobile Navigation */}
                <div className="flex items-center md:hidden">
                    <button onClick={toggleNav} type="button">
                        {isOpen === true ? 'Close' : 'Menu'}
                    </button>
                </div>
                                {/** Desktop Navigation */}
                                <nav className="hidden lg:flex items-center justify-end invisible md:visible">
                    <ul className="header-nav">
                        {menuData.site.siteMetadata.menuLinks.map((menu, index) => (
                            <li key={index} className="mr-4">
                                <Link to={menu.url} activeClassName="header-nav-active" title={`Go to ${menu.label}`}>
                                    {menu.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <MobileNav value={isOpen} updateNav={toggleNav} menuData={menuData.site.siteMetadata.menuLinks} />
            </header>
        </>
    );
};

export default Header;
