import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import FsLightbox from 'fslightbox-react';
import { GatsbyImage, getImage, GatsbyImageProps } from 'gatsby-plugin-image';

interface GalleryProps {
    sources: string[];
    sectionColour: string;
}

interface GalleryQueryProps {
    allFile: {
        edges: {
            node: {
                name: string;
                childImageSharp: GatsbyImageProps;
            };
        };
    };
}

const Gallery = ({ sources, sectionColour }: GalleryProps) => {
    const bgColour: string = sectionColour !== undefined ? `${sectionColour}` : '';

    const images: GalleryQueryProps = useStaticQuery(graphql`
        query projectImages {
            allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
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
        selectedImage: 0,
    });

    const handleClick = (image: number) => {
        setLightbox({ toggler: !lightbox.toggler, selectedImage: image });
    };

    // Find images
    // Output of images - we want project images name
    const projectImages = images.allFile.edges;
    // Create a new array of objects comparing images and the resquested sources
    const intersection = projectImages.filter((image) => sources.includes(image.node.name));
    // Create a new array of image data
    const newImages = intersection.map((image) => image.node);
    // Source images
    const sourceImages = newImages.map((imageFile) => imageFile.childImageSharp.fluid.src);

    return (
        <section className={`section-spacer child ${bgColour}`}>
            <div className="container mx-auto my-8">
                <div className="grid gap-x-3 grid-cols-3">
                    {newImages.map((item, index) => (
                        <button
                            type="button"
                            key={index}
                            alt={item.name}
                            onClick={() => {
                                handleClick(index + 1);
                            }}
                        >
                            <GatsbyImage
                                imgStyle={{ objectFit: 'contain' }}
                                className=" hover:shadow-lg"
                                image={getImage(item)}
                                alt={item.name}
                            />
                        </button>
                    ))}
                    <FsLightbox toggler={lightbox.toggler} slide={lightbox.selectedImage} sources={sourceImages} />
                </div>
            </div>
        </section>
    );
};

export default Gallery;
