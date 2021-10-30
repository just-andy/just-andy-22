import React from 'react';
import { Link, PageProps } from 'gatsby';
import HeroBanner from '../components/partials/HeroBanner';
import Seo from '../components/Seo';

// markup
const IndexPage = (props) => (
    <>
        <Seo title="This homepage" description="this is a description" />
        <HeroBanner title="This is a banner" filename="dummy-image" />
        <section className="container my-6">
            <h1>Heading 1</h1>
            <p>{props.path}</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat totam nam dicta ut consequuntur
                officiis reprehenderit eveniet, itaque incidunt a consectetur velit soluta aperiam dolor exercitationem
                temporibus officia dolore blanditiis repellendus. Temporibus deserunt itaque illum totam ad neque,
                corporis odio deleniti quibusdam quasi commodi? Quo fuga laborum numquam eos.
            </p>

            <h2>Heading 2</h2>

            <ul>
                <li>List Items</li>
                <li>List Items</li>
                <li>List Items</li>
                <li>List Items</li>
            </ul>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eaque necessitatibus voluptates, mollitia
                dicta omnis unde eveniet. Optio quasi culpa ratione recusandae rem, accusamus repudiandae?
            </p>

            <h3>Heading 3</h3>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nostrum at mollitia ipsa aspernatur
                similique pariatur aperiam minus, rerum cupiditate quos? Consequuntur, vero modi natus officia provident
                fugit maxime nemo commodi nisi sapiente harum asperiores temporibus iure hic alias expedita.
            </p>

            <div className="flex justify-between gap-y-3 flex-col my-3 md:flex-row">
                <Link to="/" className="btn btn-primary">
                    Primary
                </Link>
                <Link to="/" className="btn btn-secondary">
                    Secondary
                </Link>
            </div>
        </section>
    </>
);

export default IndexPage;
