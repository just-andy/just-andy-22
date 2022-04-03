import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import { RiFileDownloadLine } from "react-icons/ri";
import Seo from '../components/Seo';

const About = () => {
    return (
        <>
        <Seo title="My background and experience" description="Find out more about Andy Cetnarskyj,his work experience or download his CV." />
        <section>
            <div className="container mx-auto prose prose-md md:prose-lg lg:prose-xl lg:w-8/12 xl:w-10/12 max-w-none">
            <header>
                <h1>About Me</h1>
            </header>
            <article>
                <ul>
                    <li>I've found my niche in building design systems; the perfect mix of pixel pushing and development.</li>
                    <li>Some of the titles I've held in my career are Head of UX, Senior Product Designer and Frontend Developer</li>
                    <li>I have lived in Spain and worked in Gibraltar for eight years, however, my Spanish isn't great.</li>
                    <li>I started building websites with Dreamweaver MX and when IE6 was cutting edge.</li>
                    <li>I am married, have a wild son that's football daft and I love working out.</li>
                </ul>
            </article>
            </div>
            <article className="section-white py-3 lg:py-8 my-8">
                <div className="container mx-auto">
                <header className="md:text-center"><h2 className="mt-0">Experience</h2></header>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <dl className="md:text-right">
                    <dt className="font-header font-bold text-gray-600 text-2xl mb-2">Phoenix Group</dt>
                    <dd className="font-bold text-lg">Senior Product Designer <br />Design Systems, <em>Jan 2022 - Present</em></dd>
                </dl>
                <dl >
                    <dt className="font-header font-bold text-gray-600 text-2xl mb-2">Wood Mackenzie</dt>
                    <dd className="font-bold text-lg">Senior Product Designer <br />Design Systems, <em>Jul 2019 - Jan 2022</em></dd>
                </dl>
                <dl className="md:text-right">
                    <dt className="font-header font-bold text-gray-600  text-2xl mb-2">William Hill</dt>
                    <dd className="font-bold text-lg">Sportbook UX Lead, <em>Sep 2015 - Jun 2019</em></dd>
                    <dd className="font-bold text-lg">Interim Head of UX, <em>Jan 2015 - Sep 2015</em></dd>
                    <dd className="font-bold text-lg">UX/UI Designer, <em>Oct 2011 - Dec 2014</em></dd>
                </dl>
                <dl>
                    <dt className="font-header font-bold text-gray-600  text-2xl mb-2">Other</dt>
                    <dd className="font-bold text-lg">Product Designer <br />Design Systems, <em>April 2020 - Present</em></dd>
                    <dd className="font-bold text-lg">Crush, <em>Sep 2008 - Oct 2011</em></dd>
                    <dd className="font-bold text-lg">1st Class Media, <em>Aug 2006 - Aug 2008</em></dd>
                </dl>
                </div>
            </div>
            </article>
        <article  className="container mx-auto prose prose-md md:prose-lg lg:prose-xl lg:w-8/12 xl:w-10/12 max-w-none">
            <h2>The Backstory</h2>
            <p className="text-bold">After completing an Honours Degree in Consumer Product Design, I started freelancing in Web Design and paid my dues to a few agencies. Remember IE6 bug's and designing with tables... yes I did that.</p>


<p>I was fortunate enough to land a role based in Gibraltar with <a href="https://www.williamhill.com" target="_blank" rel="external" title="William Hill website">William Hill</a>, one of the UK's largest bookmakers. During my eight years, I worked my way up to the <b>Sportsbook UX Lead</b>. My time in the Med allowed me to make significant strides in my career. Building teams, managing in remote and in-house teams all the while championing UX with changing leadership.</p>

<p>After a long time away, it was time to return home with my wife and son into the growing tech scene in Scotland.</p>

<StaticImage className="object-cover" src="../images/profile-photo.jpg" alt="Family photo returning to the UK" />


<p>I moved out of management back on to the tools building out the design system for <a href="https://www.woodmac.com/" target="_blank" rel="external" title="Wood Mackenzie">Wood Mackenzie</a>, one of the world's leading energy consultancies. The role had me move between building out our design system site in Gatsby, documenting components in React &amp; MDX and transitioning our system from Sketch to Figma.</p>

<p>Currently I'm working on the build out of my second design system for <a href="https://www.thephoenixgroup.com/" target="_blank" rel="external" title="Phoenix Group">Phoenix Group</a>, the UK's largest long-term savings and retirement business. We are starting from the ground up on this system which will eventually be multi-brand and multi-platform.</p>

<p>Throughout my career, I've always loved the technical side of digital design. I continue to build out small sites and side projects to keep my skills on point; you are more likely to find me in Codepen than Dribbble. Over the past two years I have been fortunate enough to provide my design skills to the fitness platform <a href="https://streetparking.com/" target="_blank" title="Street Parking Website" rel="external">Street Parking</a>. I was one of their users for two years prior, so getting to work on a project I use daily is a true passion project.</p>

<p>Thanks for taking the time to check out my work, if you would like to discuss a project, <a href="https://www.linkedin.com/in/andrewcetnarskyj/" title="Andrew Cetnarskyj LinkedIn profile" target="_blank" rel="external">please get in touch via LinkedIn</a> or download my CV below.</p>
        </article>
        <div className="mt-8 mb-16 flex justify-center">
            <div className="grid grid-flow-row gap-2">
            <a href="../AndrewCetnarskyjCVMar22.pdf" download className="bg-primary-500 text-white rounded-full p-8 hover:bg-primary-700 hover:text-white hover:shadow-lg ">
                <RiFileDownloadLine size="4em" />
            </a>
            <div className="italic text-center">3.4 MB PDF</div>
            </div>
        </div>
        </section>
        </>
    )
}

export default About;
