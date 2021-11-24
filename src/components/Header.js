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
                        <svg width="100%" height="100%" viewBox="0 0 70 80" className="w-24 h-24  md:w-12 lg:h-12" >
<path fill-rule="evenodd" clip-rule="evenodd" className="fill-current text-primary-500" d="M0 57.0984V22.9016C0 21.1073 0.961429 19.4506 2.5193 18.5604L32.5193 1.41754C34.0565 0.539161 35.9435 0.539162 37.4807 1.41754L67.4807 18.5604C69.0386 19.4506 70 21.1073 70 22.9016V57.0984C70 58.8927 69.0386 60.5494 67.4807 61.4396L37.4807 78.5825C35.9435 79.4608 34.0565 79.4608 32.5193 78.5825L2.51931 61.4396C0.96143 60.5494 0 58.8927 0 57.0984ZM31.3811 54.6332C31.2894 54.8777 31.1213 55 30.8768 55H24.3668C24.2139 55 24.107 54.9542 24.0458 54.8625C23.9847 54.7402 23.9847 54.6027 24.0458 54.4499L36.5158 23.3668C36.6074 23.1223 36.7755 23 37.0201 23H41.6046C41.8491 23 42.0172 23.1223 42.1089 23.3668L55.404 54.4499L55.4499 54.6332C55.4499 54.8777 55.3123 55 55.0373 55H48.5731C48.3286 55 48.1605 54.8777 48.0688 54.6332L46.2808 50.7364C46.1891 50.553 46.0363 50.4613 45.8223 50.4613H33.5358C33.2913 50.4613 33.1385 50.553 33.0774 50.7364L31.3811 54.6332ZM35.7364 43.8138C35.7364 43.9666 35.8434 44.043 36.0573 44.043H43.0716C43.1939 44.043 43.2856 44.0124 43.3467 43.9513C43.4078 43.8596 43.4078 43.7526 43.3467 43.6304L39.6791 35.6991C39.618 35.5463 39.5263 35.4699 39.404 35.4699C39.3123 35.4699 39.2359 35.5463 39.1748 35.6991L35.7822 43.6304L35.7364 43.8138ZM20.3811 54.6332C20.2894 54.8777 20.1213 55 19.8768 55H13.3668C13.2139 55 13.107 54.9542 13.0458 54.8625C12.9847 54.7402 12.9847 54.6027 13.0458 54.4499L25.5158 23.3668C25.6074 23.1223 25.7755 23 26.0201 23H32.4957C32.7402 23 32.9083 23.1223 33 23.3668L20.3811 54.6332Z"/>
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
