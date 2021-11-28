import React, { useState } from 'react';
import { graphql, useStaticQuery } from "gatsby"
import FsLightbox from 'fslightbox-react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Gallery = ({sources, sectionColour}) => {

    console.log(sectionColour)
    const bgColour = (sectionColour !== undefined ? `${sectionColour}` : '');


    const images = useStaticQuery(graphql`
    query projectImages {
        allFile(filter: {sourceInstanceName: {eq: "projects"}}) {
            edges {
            node {
                name
                childImageSharp {
                        gatsbyImageData(width: 640)
                        fluid {
                            src
                        }
                    }
                }
            }
        }
    }
    `);

    const [lightbox, setLightbox] = useState({
        toggler: false,
        selectedImage: 0
    });

    const handleClick = (image) => {
       setLightbox({ toggler: !lightbox.toggler , selectedImage: image});
    }

    // Find images 
    // Output of images - we want project images name
    const projectImages = images.allFile.edges;
    // Create a new arrage of objects comparing images and the resquested sources
    const intersection = projectImages.filter((image) => sources.includes(image.node.name));
    // Create a new array of image data
    const newImages = intersection.map((image) => image.node)
    // Source images
    const sourceImages = newImages.map((imageFile) => imageFile.childImageSharp.fluid.src)
  

    return (
    <section className={`section-spacer child ${sectionColour}`}>
        <div className="container mx-auto my-8">
            <div className="grid gap-x-3 grid-cols-3">
            {newImages.map((item, index) => {
                return(
                    <button key={index}  onClick={() => {handleClick(index + 1)}}>
                        <GatsbyImage imgStyle={{objectFit: 'contain'}} className=" hover:shadow-lg" image={getImage(item)} alt={item.name}/>
                    </button>
                )
            })}
            <FsLightbox toggler={lightbox.toggler} slide={lightbox.selectedImage} sources={sourceImages}/>
            </div>
        </div>
    </section>
    )
}

export default Gallery;