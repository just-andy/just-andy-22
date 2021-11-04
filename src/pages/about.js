import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';

const About = () => {
    return (
        <section>
            <div className="container mx-auto prose md:prose-lg lg:prose-xl">
            <header>
                <h1>About Me</h1>
            </header>
            <article className="">
                <h3>Long Story Short</h3>
            </article>
            </div>
            <article className="bg-gray-100 py-8 my-8">
                <div className="container mx-auto flex justify-between align-text-top">
                <header className="text-right"><h2>Experience</h2></header>
                <div className="">
                <dl className="mb-3">
                    <dt className="font-header font-bold text-2xl">Wood Mackenzie</dt>
                    <dd>Senior Product Designer - Design Systems</dd>
                    <dd>July 2019 - Present</dd>
                </dl>
                <dl className="mb-3">
                    <dt className="font-header font-bold text-2xl">William Hill</dt>
                    <dd className="font-bold text-lg">Sportbook UX Lead</dd>
                    <dd>July 2019 - June 2019</dd>
                    <dd className="font-bold text-lg">Interim Head of UX</dd>
                    <dd>July 2015 - June 2018</dd>
                    <dd className="font-bold text-lg">Product Designer</dd>
                    <dd>October 2011 - June 2015</dd>
                </dl>
                </div>
            </div>
            </article>
        <article  className="container mx-auto prose md:prose-lg lg:prose-xl">
            <h2>The Backstory</h2>
            <p className="text-bold">After completing an Honours Degree in Consumer Product Design, I started freelancing in Web Design and paid my dues to a few agencies. Remember IE6 bug's and designing with tables... yes I did that.</p>


<p>I was fortunate enough to land a role based in Gibraltar with <a href="https://www.williamhill.com" target="_blank" rel="external" title="William Hill website">William Hill</a>, one of the UK's largest bookmakers. During my eight years, I worked my way up to the <b>Sportsbook UX Lead</b>. My time in the Med allowed me to make significant strides in my career. Building teams, managing in remote and in-house teams all the while championing UX with changing leadership.</p>

<p>After a long time away, it was time to return home with my wife and son into the growing tech scene in Scotland.</p>

<StaticImage className="object-cover" src="../images/profile-photo.jpg" alt="Family photo returning to the UK" />


<p>I'm now fortunate enough to be focused on building out the design system for <a href="https://www.woodmac.com/" target="_blank" rel="external" title="Wood Mackenzie">Wood Mackenzie</a>, one of the world's leading energy consultancies. By day I move between building out our design system site in Gatsby, documenting components in React &amp; MDX and transitioning our system from Sketch to Figma.</p>

<p>Throughout my career, I've always loved the technical side of digital design. I continue to build out small sites and side projects to keep my skills on point; you are more likely to find me in Codepen than Dribbble. Over the past two years I have been fortunate enough to provide my design skills to the fitness platform <a href="https://streetparking.com/" target="_blank" title="Street Parking Website" rel="external">Street Parking</a>. I was one of their users for two years prior, so getting to work on a project I use daily is a true passion project.</p>

<p>Thanks for taking the time to check out my work, if you would like to discuss a project, please get in touch.</p>
        </article>
        </section>
    )
}

export default About;
