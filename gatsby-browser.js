import React from 'react';
import Layout from './src/components/Layout';
import './src/styles/global.css';
require("@fontsource/league-spartan/700.css");
require("@fontsource/league-spartan/400.css");
require("@fontsource/Baskervville/400.css");
require("prismjs/themes/prism-dark.css");

export function wrapPageElement({ element, props }) {
    return <Layout {...props}>{element}</Layout>;
}
