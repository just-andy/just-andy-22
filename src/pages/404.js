import * as React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/Seo';

// markup
const NotFoundPage = () => (
    <div className="container">
        <Seo title="Oops we can't find the page" description="It looks like we can't find what you were looking for" />
        <h1>Page not found</h1>
        <div className="flex flex-col ">
            <div>
                <p>
                    Sorry
                    <span role="img" aria-label="Pensive emoji">
                        😔
                    </span>
                    we couldn't find what you were looking for.
                </p>
            </div>
            <div className="pt-3">
                <Link className="btn btn-primary" to="/" title="Return to homepage">
                    Go home
                </Link>
            </div>
        </div>
    </div>
);

export default NotFoundPage;
