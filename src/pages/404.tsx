import React from "react";
import { Link } from "gatsby";
import Seo from "../components/Seo";

// markup
const NotFoundPage: React.FC = () => (
  <div className="container my-8 mx-auto prose md:prose-lg lg:prose-xl">
    <Seo
      title="Oops we can't find the page"
      description="It looks like we can't find what you were looking for"
    />
    <h1 className="mb-0">Page not found</h1>
    <p className="text-4xl">
      Oh no it looks like this page has gone awol or something broke in the
      matrix.
    </p>
    <Link className="btn btn-primary" to="/" title="Return to homepage">
      Go home
    </Link>
  </div>
);

export default NotFoundPage;
