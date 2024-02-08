import React from 'react';
import MainLayout from "../components/Layout/MainLayout.jsx";
import Products from "../components/Products.jsx";

const HomePage = () => {
    return (
        <>
         <MainLayout>
                <Products/>
         </MainLayout>
        </>
    );
};

export default HomePage;