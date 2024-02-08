import React from 'react';
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";

const MainLayout = (props) => {
    return (
        <>
            <Navbar/>
                {props.children}
            <Footer/>

        </>
    );
};

export default MainLayout;