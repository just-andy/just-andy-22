import React from 'react';
import { GatsbyImage, getImage, GatsbyImageProps } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

interface CardProps {
    slug: string;
    name: string;
    description: string;
    thumb: {};
    summary: string;
}

const CardItem = ({ thumb, name, slug, description, summary }: CardProps) => {
    console.log(thumb);
    const image = getImage(thumb);

    return (
        <div className="flex flex-col gap-y-6 lg:gap-y-4">
            <div className="tile-wrapper">
                <Link to={`/projects/${slug}`} title={`${name} Project`}>
                    <GatsbyImage
                        className="rounded-xl hover:shadow-lg tile-image"
                        imgStyle={{ borderRadius: '0.75em' }}
                        image={image}
                        alt={`${name} Thumbnail}`}
                    />

                    <div className="tile-content">
                        <div className="text-gray-100">
                            <h3 className="text-gray-100">Skills Used</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </Link>
            </div>
            <h3 className="my-0 ">
                <Link className="secondary-link" to={`/projects/${slug}`} title={`${name} Project`}>
                    {name}
                </Link>
            </h3>
            <p className="mb-3 md:mb-0 lg:text-xl ">{summary}</p>
        </div>
    );
};

export default CardItem;
