import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImageProps } from "gatsby-plugin-image";
import Seo from "../components/Seo";
import CardGrid from "../components/partials/CardGrid";

interface FeatureProjectsProps {
  allMdx: {
    edges: {
      node: {
        frontmatter: {
          title: string;
          order: number;
          summary: string;
          description: string;
          featured: boolean;
          tags: string[];
          thumbnail: GatsbyImageProps;
        };
        slug: string;
      };
    };
  };
}

// markup
const IndexPage: React.FC = () => {
  const featuredProjectsList: FeatureProjectsProps = useStaticQuery(graphql`
    query featuredProjectsGrid {
      allMdx(
        filter: {
          frontmatter: {
            variant: { eq: "projects" }
            private: { eq: false }
            featured: { eq: true }
          }
        }
        sort: { order: ASC, fields: frontmatter___order }
      ) {
        edges {
          node {
            frontmatter {
              title
              order
              summary
              description
              featured
              tags
              thumbnail {
                childImageSharp {
                  gatsbyImageData(width: 1024)
                }
              }
            }
            slug
          }
        }
      }
    }
  `);

  const featuredProjects = featuredProjectsList.allMdx.edges;

  return (
    <>
      <Seo
        title="Welcome"
        description="Product Designer and design systems builder Andrew Cetnarskyj's portfolio."
      />
      <section className="container">
        <div className="flex justify-center mx-auto lg:justify-start lg:text-left lg:w-11/12 lg:ml-0">
          <h1 className="text-4xl uppercase font-black font-header mt-0 text-gray-900 md:text-5xl lg:text-6xl xl:text-7l">
            I work with design systems, build websites and tinker with code...
          </h1>
        </div>
      </section>
      <section className="container my-6">
        <CardGrid data={featuredProjects} />
      </section>
    </>
  );
};

export default IndexPage;
