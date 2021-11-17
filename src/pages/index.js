import React from 'react';
import Seo from '../components/Seo';
import CardGrid  from '../components/partials/CardGrid';

// markup
const IndexPage = (props) => (
    <>
        <Seo title="Welcome" description="Product Designer and design systems builder Andrew Cetnarskyj's portfolio." />
        <section className="container">
            <div className="flex text-center justify-center mx-auto lg:justify-start lg:text-left lg:w-10/12 lg:ml-0">
            <h1 className="text-5xl uppercase font-black font-header mt-0 text-gray-800 md:text-7xl lg:text-8xl xl:text-9l">
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
