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
import KitchenNearYou from '../ProductSingle/KitchenNearYou/KitchenNearYou'
import GetAQuote from './../common/GetAQuote/GetAQuote'
import {Container, Row, Col} from 'react-bootstrap'
import MainHomePageStyle from './index.module.css'
import FormPage from "./GetAQuoteForm_Page/form";
import VideoGallery from './VideoGallery/VideoGallery'

const highlightData1 = {
    Heading: 'High-Volume Cooking',
    subHeading: 'Grow your business and expand your menu with Marra Forni’s Brick Oven Cooking Solutions.',
    buttonText: 'Build Your Own Oven!',
    backgroundImage: {
        IsImage: true,
        imagePath: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/PaintBrush_Slider/painthouse-one.jpg`
    }
};
let highlightData2 = {
    Heading: 'Customize Your Commercial Brick Oven, Add Logo!!',
    subHeading: 'Premium and Beautiful Tile Options.',
    buttonText: 'Build Your Own Oven!',
    backgroundImage: {
        IsImage: true,
        imagePath: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/PaintBrush_Slider/painthouse-three.jpg`
    }
};
let highlightData3 = {
    Heading: 'Customized Handcrafted Brick Oven, Add Your Logo',
    subHeading: 'Premium and Beautiful Tile Options.',
    buttonText: 'Build Your Own Oven!',
    backgroundImage: {
        IsImage: true,
        // imagePath: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/Marra-Forni-Client.jpg`
    }
};
let highlightData4 = {
    Heading: '',
    subHeading: 'You are a few clicks away from owning the most durable, energy efficient, customizable and feature-packed brick oven in the world.',
    buttonText: 'Build Your Own Oven!',
    backgroundImage: {
        IsImage: true,
        imagePath: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/PaintBrush_Slider/painthouse-one.jpg`
    }
};
let highlightData5 = {
    Heading: 'Explore Our Industrial Kitchen Appliances',
    subHeading: 'Slicers, Mixers & Prep Tables',
    buttonText: 'GET A QUOTE',
    backgroundImage: {
        IsImage: false,
        imagePath: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/PaintBrush_Slider/painthouse-two.jpg`
    }
};

const MainHomePage = props => {
    return (
        <>
            <Header/>
            <BannerSlider/>
            <Authentic/>
            {/*<HighLight*/}
            {/*    highlightData={ highlightData1 } */}
            {/*/>*/}
            {/*<Product />*/}
            {/*<HighLight*/}
            {/*    highlightData={ highlightData5 } */}
            {/*/>*/}
            {/*<Reliable />*/}
            {/*<HighLight*/}
            {/*    highlightData={ highlightData2 } */}
            {/*/>*/}
            <QodefSlider/>
            <HighLight
                highlightData={highlightData3}
            />
            <RotateImage360D/>
            <HighLight
                highlightData={highlightData4}
            />
            <Features_Services/>
            <KitchenNearYou/>
            <Container fluid className={MainHomePageStyle.quoteform_outer}>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <GetAQuote/>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <VideoGallery/>
            <FormPage/>
            <LogoSlider/>
            <Footer/>
        </>
    )
};

export default MainHomePage
