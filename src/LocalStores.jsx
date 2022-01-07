import React from 'react';
import LocalStoresCard from './LocalStoresCard';
import Navbar1 from "./Navbar1";
import NavbarData from './navbarData';
import Footer from "./Footer";
import LocalStoreNavbar from "./LocalStoreNavbar";

const LocalStores=()=>{
return(
    <>
    <LocalStoreNavbar />
    <Navbar1 navbarText={NavbarData.localStoreNavbar}/>
    <LocalStoresCard />
    <Footer />
    </>
);
};

export default LocalStores;