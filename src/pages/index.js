import React from 'react';
import Seo from '../components/Seo';
import CardGrid  from '../components/partials/CardGrid';

// markup
const IndexPage = (props) => (
    <>
        <Seo title="Welcome" description="Product Designer and design systems builder Andrew Cetnarskyj's portfolio." />
        <section className="container">
            <div className="flex text-center justify-center mx-auto lg:justify-start lg:text-left lg:w-10/12 lg:ml-0">
            <h1 className="text-4xl uppercase font-bold font-header text-gray-800 md:text-6xl lg:text-7xl xl:text-8l">
            I build design systems, various websites and tinker with code...
            </h1>
            </div>
        </section>
        <section className="container my-6">
            <CardGrid />
        </section>
    </>
);

export default IndexPage;
