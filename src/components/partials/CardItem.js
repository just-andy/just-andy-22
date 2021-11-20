import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {Link} from 'gatsby';

const CardItem = (props) => {

    const image = getImage(props.thumb)

    return (
    <div className="flex flex-col gap-y-6 lg:gap-y-4">
    <Link to={`/projects/${props.slug}`} title={`${props.name} Project`}>
    <GatsbyImage className="rounded-xl hover:shadow-lg" image={image} alt={`${props.name} Thumbnail}`} />
    </Link>
    <h3 className="my-0 "><Link className="secondary-link" to={`/projects/${props.slug}`} title={`${props.name} Project`}>{props.name}</Link></h3>
    <p className="mb-3 md:mb-0 lg:text-xl ">{props.summary}</p>
    </div>
    )
}

export default CardItem;