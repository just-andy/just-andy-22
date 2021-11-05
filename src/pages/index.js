import React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/Seo';
import CardGrid  from '../components/partials/CardGrid';

// markup
const IndexPage = (props) => (
    <>
        <Seo title="Welcome" description="Product Designer and design systems builder Andrew Cetnarskyj's portfolio." />
        <section className="container">
            <div className="flex text-center justify-center mx-auto lg:justify-start lg:text-left lg:w-9/12 lg:ml-0">
            <h1 className="text-4xl uppercase font-header md:text-6xl lg:text-7xl">
            I build design systems, websites and tinker with code...
            </h1>
            </div>
        </section>
        <section className="container my-6">
            <CardGrid />
        </section>
    </>
);

export default IndexPage;
