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
            <header className="flex justify-between p-4 font-normal font-sans flex-col md:flex-row md:px-8 md:py-6 ">
                <div className="flex flex-col items-center md:flex-row md:items-center">
                    <figure className="avatar"></figure>
                    <Link className="flex text-5xl mt-2 mb-10 justify-center hidden secondary-link md:block md:mb-0 md:mt-0 md:justify-start md:items-center" to="/" title="Return to Just Andy home page">
                        Just Andy
                    </Link>
                </div>
                {/** Desktop Navigation */}
                <nav className="items-center justify-center my-8 md:justify-end lg:flex ">
                    <ul className="header-nav">
                        <li className="mr-4">
                            <Link to="/"  activeClassName="header-nav-active" title="Go to home page">
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
            <div className="line-break md:hidden"></div>
        </>
    );
};

export default Header;
