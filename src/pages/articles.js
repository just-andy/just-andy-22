import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import Seo from '../components/Seo';

const Articles = () => {
    const articlesList = useStaticQuery(graphql`
        query articlesQuery {
            allMdx(filter: { frontmatter: { variant: { eq: "articles" } } }) {
                edges {
                    node {
                        slug
                        frontmatter {
                            title
                            date
                        }
                    }
                }
            }
        }
    `);

    const articles = articlesList.allMdx.edges;

    return (
        <section className="container">
            <Seo title="Chart" description="This is description" />
            <h1>Articles</h1>
            <p>Here is a list of articles.</p>
            <article>
                <ul>
                    {articles.map((article, index) => (
                        <li key={index}>
                            <Link to={article.node.slug}>{article.node.frontmatter.title}</Link>
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    );
};

export default Articles;
