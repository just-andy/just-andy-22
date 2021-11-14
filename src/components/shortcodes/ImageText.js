import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


const ImageText = ({image, altText, children}) => {

const files = useStaticQuery(graphql`
query fileImage {
    allFile {
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
`);

const images = files.allFile.edges;

// Get Image Path
const getImagePath = (edges, imageName) => {
    const imagePath = edges.find((edge) => edge.node.name === imageName);
    return imagePath.node;
};



const imageFile = getImage(getImagePath(images,image));

    return (
        <div className="child my-8 pb-8 bg-white ">
            <div className="container mx-auto grid grid-cols-1 gap-x-3 md:grid-cols-2">
                <div className="flex items-center">
                <GatsbyImage image={imageFile} alt={altText} />
                </div>
                <div className="flex items-center md:ml-8">
                    <div>
                    {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageText;