import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const bannerQuery = graphql`
    query HeroBanners {
        allFile(filter: { relativeDirectory: { eq: "banners" } }) {
            edges {
                node {
                    name
                    childImageSharp {
                        gatsbyImageData(width: 1920)
                    }
                }
            }
        }
    }
`;

// Get Image Path
const getImagePath = (edges, imageName) => {
    const imagePath = edges.find((edge) => edge.node.name === imageName);
    return imagePath.node;
};

const HeroBanner = ({ title, filename, link }) => {
    const response = useStaticQuery(bannerQuery);
    const banners = response.allFile.edges;
    const image = getImage(getImagePath(banners, filename));

    // Return
    return (
        <div style={{ display: 'grid', height: '350px' }}>
            <GatsbyImage
                style={{ gridArea: '1/1', objectFit: 'cover', height: '350px' }}
                image={image}
                alt={`${title} Banner`}
            />

            <div
                style={{
                    // By using the same grid area for both, they are stacked on top of each other
                    gridArea: '1/1',
                    position: 'relative',
                    // This centers the other elements inside the hero component
                    placeItems: 'center',
                    display: 'grid',
                }}
            >
                {/* Any content here will be centered in the component */}
                <h1 className=" text-white bg-gray-600 py-4 px-8">Hero text</h1>
            </div>
        </div>
    );
};

export default HeroBanner;
