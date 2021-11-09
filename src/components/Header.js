import React from 'react';
import { Link } from 'gatsby';

const Header = () => {

    const whatLocation = props => {
        const currentLocation = props.pathname
        if (currentLocation.includes("projects")) {
          return { className: "header-nav-active" }
        }
      }


    return (
        <>
            <header className="flex justify-between p-6 md:p-10 font-normal font-sans flex-col md:flex-row">
                <Link className="flex text-3xl py-8 justify-center md:py-0 md:justify-start" to="/" title="Return to Just Andy home page">
                    Just Andy
                </Link>
                {/** Desktop Navigation */}
                <nav className="lg:flex items-center justify-center md:justify-end ">
                    <ul className="header-nav">
                        <li className="mr-4">
                            <Link to="/" activeClassName="header-nav-active" title="Go to home page">
                            Home
                            </Link>
                        </li>
                        <li className="mr-4">
                            <Link to="/projects" getProps={({ location }) => whatLocation(location)} title="Andy Cetnarskyj's projects">
                            Projects
                            </Link>
                        </li>
                        <li className="mr-0">
                            <Link to="/about" activeClassName="header-nav-active" title="About Andy Cetnarskyj">
                            About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
