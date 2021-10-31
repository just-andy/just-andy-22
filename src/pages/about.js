import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';

const About = () => {
    return (
        <section className="container mx-auto prose">
            <h1> Just The Highlights</h1>

            <h2>The Backstory</h2>
            <p className="text-bold">After completing an Honours Degree in Consumer Product Design, I started freelancing in Web Design and paid my dues to a few agencies. Remember IE6 bug's and designing with tables... yes I did that.</p>


<p>I was fortunate enough to land a role based in Gibraltar with William Hill, one of the UK's largest bookmakers. During my eight years, I worked my way up to the Sportsbook UX Lead. My time in the Med allowed me to make significant strides in my career. Building teams, managing in remote and in-house teams all the while championing UX with changing leadership.</p>

<p>After a long time away, it was time to return home with my wife and son into the growing tech scene in Scotland.</p>

<StaticImage className="object-cover" src="../images/profile-photo.jpg" alt="Family photo returning to the UK" />


<p>I'm now fortunate enough to be focused on building out the design system for Wood Mackenzie, one of the world's leading energy consultancies. By day I move between building out our design system site in Gatsby, documenting components in React & MDX and transitioning our system from Sketch to Figma.</p>

<p>Throughout my career, I've always loved the technical side of digital design. I continue to build out small sites and side projects to keep my skills on point; you are more likely to find me in Codepen than Dribbble. In my free time I continue to expand on my skills building out sites, applications and trying the latest prototyping tools.</p>

<p>Thanks for taking the time to check out my work, if you would like to discuss a project, please get in touch.</p>
<h2>The Outtakes</h2>
        </section>
    )
}

export default About;
