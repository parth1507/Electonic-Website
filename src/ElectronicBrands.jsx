import React from 'react';
import NavbarData from './navbarData';
import ElectronicBrandsSlider from './ElectronicBrandsSlider';
import FeaturedBrandProductsData from './FeaturedBrandProductsData';
import Navbar1 from './Navbar1';
import Card from './Card';
import TrendingProductData from './TrendingProductsData';
import Footer from './Footer';



const ElectronicBrands=()=>{
return(
    <>
    <Navbar1 navbarText = {NavbarData.electronicBrandNavbar}/>
    <ElectronicBrandsSlider />
    <Card data={FeaturedBrandProductsData} />
    <Card data={TrendingProductData}/>
    <Footer />

    </>
);
};

export default ElectronicBrands;