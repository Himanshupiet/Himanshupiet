import React from 'react'

import Head from '../../../components/common/Head'
import Footer from '../../../components/footer/footer'
import Header from '../../../components/header/header'
import TopBanner from '../../../components/ProductSingle/TopBanner/TopBanner'
import Overview from '../../../components/ProductSingle/Overview/Overview'
import Modals from '../../../components/ProductSingle/Modals/Modals'
import Touchscreen from '../../../components/ProductSingle/Touchscreen/Touchscreen'
import ProductInfo from '../../../components/ProductSingle/ProductInfo/ProductInfo'
import Features from '../../../components/ProductSingle/Features/Features'
import HighLight from '../../../components/Home_Page/HighLightSection/HighLight'
import Resources from '../../../components/ProductSingle/Resources/Resources'
import VideoPart from '../../../components/ProductSingle/VideoPart/VideoPart'
import KitchenNearYou from '../../../components/ProductSingle/KitchenNearYou/KitchenNearYou'
import Testimonials from '../../../components/ProductSingle/Testimonials/Testimonials'

const SingleProduct = (props) => {
    let highlightData = {
        Heading: '',
        subHeading: 'You are a few clicks away from owning the most durable, energy-efficient, customizable and feature pack brick oven in the world.',
        buttonText: 'Build Your Own Oven!'
    }
    return(
        <>
            <Head
                title='Rotator Brick Oven - MarraForni'
                description='Marra Forni offers a one-stop-shop for restaurant oven and oven equipment and appliances and other foodservice businesses. Our innovative solutions range from'
            />
            <Header />
            <TopBanner />
            <Overview />
            <Modals />
            <Touchscreen />
            <ProductInfo />
            <Features />
            <Resources />
            <HighLight highlightData={highlightData} />
            <VideoPart />
            <KitchenNearYou />
            <Testimonials />
            <Footer />
        </>
    )

}

export default SingleProduct;


