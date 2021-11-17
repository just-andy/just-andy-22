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
            <header className="flex justify-between p-4 font-normal font-sans flex-col md:flex-row md:px-8 md:py-4 md:items-center ">
                <div className="flex flex-col items-center md:flex-row md:items-center">
                    <figure className="svg-container mt-2">
                    <svg width="100%" height="100%" className="w-24 h-24  md:w-12 lg:h-12" viewBox="0 0 148 148">
                    <path className="text-primary-500 fill-current" d="m133.86 79.701"/>
                    <path className="text-primary-500 fill-current" d="m75.803 0.73438-61.801 31.609v4.8594 72.961 2.3086l61.801 34.172 61.799-34.602v-1.8789-72.951-3.5391l-61.799-32.939zm-4.8301 17.609v110.98l-44.43-23.83v-17.871l27.789 12.68v-68.869-3.7695-1.7207l16.641-7.5996zm8.2793 0 45.699 22.721v64.219l-14.17 7.791v-34.701l-15.568-6.5v49.371l-15.961 8.0898v-110.99zm15.949 22.34v13.17l15.58 8.1992v-12.809l-15.58-8.5605z"/>
                    </svg>
                    </figure>
                    <Link className="flex text-5xl mt-2 mb-10 justify-center hidden secondary-link md:ml-2 md:block md:my-0 md:justify-start md:items-center" to="/" title="Return to Just Andy home page">
                        Just Andy
                    </Link>
                </div>
                {/** Desktop Navigation */}
                <nav className="items-center justify-center my-4 md:justify-end lg:flex ">
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
