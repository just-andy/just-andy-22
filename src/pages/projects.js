import React from 'react';
import Seo from '../components/Seo';
import CardGrid from '../components/partials/CardGrid';

const Projects = () => {
  return (
    <section className="container">
      <Seo title="Projects" description="A wide portfolio of projects that Andrew Cetnarskyj has worked on." />
      <header>
      <h1 className="text-6xl my-12">My Projects </h1>
      </header>
      <CardGrid />
    </section>
  );
};

export default Projects;
