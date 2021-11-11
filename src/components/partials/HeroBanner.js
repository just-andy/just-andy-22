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
    return imagePath;
};

const HeroBanner = ({ title, filename}) => {
    const response = useStaticQuery(bannerQuery);
    const banners = response.allFile.edges;
    const image = getImage(getImagePath(banners, filename));

    console.log(banners);

    // Return
    return (
        <div style={{ display: 'grid', height: '350px' }}>
            <GatsbyImage
                style={{ gridArea: '1/1', objectFit: 'cover', height: '350px' }}
                image={image}
                alt={`${title} Banner`}
            />

            <div className="grid relative place-items-center col-span-1 row-span-1">
                {/* Any content here will be centered in the component */}
                <div>
                <h2 className=" text-white bg-gray-600 py-4 px-8">{title}</h2>
                <span>{summary}</span>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
