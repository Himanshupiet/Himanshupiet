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
import Service from "./Services_Page/services";

const MainHomePage = props => {
    return (
        <>
            <Header/>
            <BannerSlider/>
            <Reliable />
            <Service/>
            <Authentic/>
            <KitchenNearYou/>
            <Product />
            <RotateImage360D/>
            <VideoGallery/>
            <Features_Services/>
            <FormPage/>
            <LogoSlider/>
            <Footer/>
         </>
    )
};

export default MainHomePage
