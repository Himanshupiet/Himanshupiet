import React from 'react'

import Header from '../header/header'
import Footer from '../footer/footer'
import Product from './ProductSection/Product'
import Reliable from './ReliableSection/Reliable'
import Authentic from './AuthenticSection/Authentic'
import HighLight from './HighLightSection/HighLight'
import LogoSlider from '../common/LogoSlider/LogoSlider'
import QodefSlider from '../common/QodefSlider/QodefSlider'
import RotateImage360D from './RotateImage360D/RotateImage360D'
import Features_Services from './Features&Services/Features_Services'
import BannerSlider from './BannerSlider/BannerSlider'

const highlightData1 = {
    Heading: 'High-Volume Cooking',
    subHeading: 'Grow your business and expand your menu with Marra Forni’s Brick Oven Cooking Solutions.',
    buttonText: 'Build Your Own Oven!'
}
let highlightData2 = {
    Heading: 'Customize Your Commercial Brick Oven, Add Logo!!',
    subHeading: 'Premium and Beautiful Tile Options.',
    buttonText: 'Build Your Own Oven!'
}
let highlightData3 = {
    Heading: 'Customized Handcrafted Brick Oven, Add Your Logo',
    subHeading: 'Premium and Beautiful Tile Options.',
    buttonText: 'Build Your Own Oven!'
}
let highlightData4 = {
    Heading: '',
    subHeading: 'You are a few clicks away from owning the most durable, energy efficient, customizable and feature-packed brick oven in the world.',
    buttonText: 'Build Your Own Oven!'
}
let highlightData5 = {
    Heading: 'Explore Our Industrial Kitchen Appliances',
    subHeading: 'Slicers, Mixers & Prep Tables',
    buttonText: 'GET A QUOTE',
    background: 'grey'
}

const MainHomePage = props => {
    return (
        <>
            <Header />
            {/* <div style={{
                height:'610px',
                backgroundImage:`url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/Choose-Your-Model-Banner.png)`,
                backgroundRepeat:'no-repeat'
            }}/> */}
            <BannerSlider />
            <Authentic />
            <HighLight
                highlightData={ highlightData1 } 
            />
            <Product />
            <HighLight
                highlightData={ highlightData5 } 
            />
            <Reliable />
            <HighLight
                highlightData={ highlightData2 } 
            />
            <QodefSlider />
            <HighLight
                highlightData={ highlightData3 } 
            />
            <RotateImage360D />
            <HighLight
                highlightData={ highlightData4 } 
            />
            <Features_Services />
            <LogoSlider />
            <Footer />
        </>
    )
}

export default MainHomePage
