import React from 'react';
import Layout from './src/components/Layout';
import './src/styles/global.css';
import "@fontsource/league-spartan/700.css";
import "@fontsource/league-spartan/400.css";
import "@fontsource/Baskervville/400.css";
require("prismjs/themes/prism-dark.css");

export function wrapPageElement({ element, props }) {
    return <Layout {...props}>{element}</Layout>;
}
