import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC = ({ children }: LayoutProps) => (
    <>
        <Header />
        <main className="my-8" role="main">
            {children}
        </main>
        <Footer />
    </>
);

export default Layout;
