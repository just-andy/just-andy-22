import React from 'react';
import Layout from './src/components/Layout';
import './src/styles/global.css';
import "@fontsource/league-spartan";
import "@fontsource/baskervville";
require("prismjs/themes/prism-dark.css");

export function wrapPageElement({ element, props }) {
    return <Layout {...props}>{element}</Layout>;
}
