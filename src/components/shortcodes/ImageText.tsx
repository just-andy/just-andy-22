import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, GatsbyImageProps } from 'gatsby-plugin-image';

interface ImageTextProps {
    image: string;
    altText: string;
    children: JSX.Element;
    sectionColour?: string;
    reverse?: boolean;
}

interface FileProps {
    allFile: {
        edges: {
            node: {
                name: string;
                childImageSharp: GatsbyImageProps;
            };
        };
    };
}

const ImageText = ({ image, altText, children, sectionColour, reverse }: ImageTextProps) => {
    const cardStyleImage =
        reverse !== undefined ? `flex items-center justify-center lg:order-2` : `flex justify-center  items-center`;
    const cardStyleText =
        reverse !== undefined && reverse === true
            ? `flex items-center justify-center  lg:mr-8 mb:order-1`
            : `flex items-center justify-center lg:ml-8`;

    const files: FileProps = useStaticQuery(graphql`
        query fileImage {
            allFile {
                edges {
                    node {
                        name
                        childImageSharp {
                            gatsbyImageData(width: 500)
                            fluid {
                                src
                            }
                        }
                    }
                }
            }
        }
    `);

    const images = files.allFile.edges;

    // Get Image Path
    const getImagePath = (edges: any, imageName: string) => {
        const imagePath = edges.find((edge) => edge.node.name === imageName);
        return imagePath.node;
    };

    const imageFile = getImage(getImagePath(images, image));

    return (
        <div className={`child section-spacer ${sectionColour}`}>
            <div className="container mx-auto grid grid-cols-1 gap-x-3 md:grid-cols-2">
                <div className={cardStyleImage}>
                    <GatsbyImage style={{ objectFit: 'contain' }} image={imageFile} alt={altText} />
                </div>
                <div className={cardStyleText}>
                    <div>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default ImageText;
