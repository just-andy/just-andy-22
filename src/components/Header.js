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
            <header name="top"  id="top" className="flex justify-between p-4 font-normal font-sans flex-col md:flex-row md:px-8 md:py-4 md:items-center ">
                <div className="flex flex-col items-center md:flex-row md:items-center"> 
                    <figure className="svg-container">
                    <Link to="/" title="Back to home page">
                        <svg width="100%" height="100%" className="w-24 h-24  md:w-12 lg:h-12" viewBox="0 0 87 97">
                        <path className="fill-current text-primary-500" d="M44.879 55.964c0 .229.16.343.48.343h10.488c.183 0 .32-.046.411-.137.092-.138.092-.297 0-.48l-5.484-11.868c-.091-.229-.228-.343-.411-.343-.137 0-.252.114-.343.343l-5.073 11.867-.068.275z"/>
                        <path className="fill-current text-primary-500" fillRule="evenodd" d="M0 67.707v-37.85a10.06 10.06 0 015.069-8.735L38.345 2.108a10.06 10.06 0 019.982 0l33.276 19.014a10.06 10.06 0 015.069 8.735v37.85a10.06 10.06 0 01-5.07 8.735L48.328 95.457a10.06 10.06 0 01-9.982 0L5.069 76.442A10.06 10.06 0 010 67.707zm38.366 4.419c-.137.366-.388.549-.754.549h-9.734c-.229 0-.389-.069-.48-.206-.092-.183-.092-.389 0-.617l18.646-46.51c.137-.365.389-.548.754-.548h6.855c.366 0 .617.183.754.548l19.867 46.51.069.274c0 .366-.206.549-.617.549H64.06c-.366 0-.617-.183-.754-.549l-2.648-5.758c-.137-.274-.365-.411-.685-.411H41.6c-.366 0-.595.137-.686.411l-2.549 5.758zm-6.43-47.333a.61.61 0 00-.567.383L12.554 72.004a.489.489 0 00.454.67h9.815c.349 0 .663-.212.793-.535l18.753-46.676a.489.489 0 00-.453-.67h-9.98z" clipRule="evenodd"/>
                        </svg>
                    </Link>
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
