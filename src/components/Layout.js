import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
    <>
        <Header />
        <main className="mt-3 mb-12">{children}</main>
        <Footer />
    </>
);

export default Layout;
