import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import Seo from "../components/Seo";

interface ArticleTemplateProps {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        description: string;
        tags: string[];
      };
      body: JSX.Element;
    };
  };
}

const DocsTemplate = ({
  data: {
    mdx: {
      frontmatter: { title, description, tags },
      body,
    },
  },
}: ArticleTemplateProps) => (
  <>
    <Seo title={title} description={description} />
    <section className="container mx-auto lg:w-8/12 xl:w-10/12">
      <article className="projects prose md:prose-lg lg:prose-xl max-w-none">
        <div className="flex mt-4 mb-8 ">
          <Link to="/" title="Return to the homepage">
            Home
          </Link>
          &nbsp;/&nbsp;
          <Link to="/articles" title="View other articles">
            Articles
          </Link>
        </div>
        <h1 className="text-3xl lg:text-5xl">{title}</h1>
        <div className="flex text-gray-100 justify-start text-lg lg:text-xl last:mr-0">
          <div className="mr-2 flex items-center font-bold">Tags:</div>
          {tags
            ? tags.map((tag, index) => <div key={index}>{tag},&nbsp;</div>)
            : null}
        </div>
        <MDXProvider>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </article>
    </section>
  </>
);

export default DocsTemplate;
