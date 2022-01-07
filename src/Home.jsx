import React from 'react';
import Navbar1 from './Navbar1';
import HomeSlider from './HomeSlider';
import HomeCard from './HomeCard';
import HomeGadgetsData from "./HomeGadgetsData";
import Card from './Card';
import BestSellersData from './BestSellersData';
import FeaturedLocalStoreData from './FeaturedLocalStoreData';
import Footer from './Footer';
import NavbarData from './navbarData';

const Home=()=>{
return(
    <>
    <Navbar1 navbarText = {NavbarData.homepageNavbar} />
    <HomeSlider />
    <HomeCard />
    <Card data = {HomeGadgetsData}/>
    <Card data = {BestSellersData}/>
    <Card data = {FeaturedLocalStoreData}/>
    <Footer />
    </>
);
};

export default Home;