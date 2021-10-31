import React from 'react';
import Seo from '../components/Seo';
import CardGrid from '../components/partials/CardGrid';

const Projects = () => {
  return (
    <section className="container">
      <Seo title="Projects" description="A wide portfolio of projects that Andrew Cetnarskyj has worked on." />
      <h1>Projects List</h1>
      <CardGrid />
    </section>
  );
};

export default Projects;
