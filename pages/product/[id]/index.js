import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../../../components/footer/footer';
import Header from '../../../components/header/header';
import TopBanner from '../../../components/ProductSingle/TopBanner/TopBanner';
import Overview from '../../../components/ProductSingle/Overview/Overview';
import Modals from '../../../components/ProductSingle/Modals/Modals';
import Touchscreen from '../../../components/ProductSingle/Touchscreen/Touchscreen';
import ProductInfo from '../../../components/ProductSingle/ProductInfo/ProductInfo';
import Features from '../../../components/ProductSingle/Features/Features';
import HighLight from '../../../components/Home_Page/HighLightSection/HighLight';
import Resources from '../../../components/ProductSingle/Resources/Resources';
import VideoPart from '../../../components/ProductSingle/VideoPart/VideoPart';
import KitchenNearYou from '../../../components/ProductSingle/KitchenNearYou/KitchenNearYou';
import Testimonials from '../../../components/ProductSingle/Testimonials/Testimonials';

const SingleProduct = (props) => {
    const {pathname} = useRouter();
    let highlightData = {
        Heading: "",
        subHeading: "You are a few clicks away from owning the most durable, energy-efficient, customizable and feature pack brick oven in the world.",
        buttonText: "Build Your Own Oven!"
    }
    return(
        <>
            <Head>
                <meta name="description" content="Marra Forni offers a one-stop-shop for restaurant oven and oven equipment and appliances and other foodservice businesses. Our innovative solutions range from" />

                <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}${pathname}`} />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Rotator Brick Oven - MarraForni" />
                <meta property="og:description" content="Marra Forni offers a one-stop-shop for restaurant oven and oven equipment and appliances and other foodservice businesses. Our innovative solutions range from" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}${pathname}`} />
                <meta property="og:site_name" content="MarraForni" />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}/images/Rotator-Penny-Red.png`} />
                <meta property="og:image:secure_url" content={`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}/images/Rotator-Penny-Red.png`} />
                <meta property="og:image:width" content="372" />
                <meta property="og:image:height" content="500" />
                <meta property="og:image:alt" content="Marra Forni Rotator Penny Red" />
                <meta property="og:image:type" content="image/png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Rotator Brick Oven - MarraForni" />
                <meta name="twitter:description" content="Marra Forni offers a one-stop-shop for restaurant oven and oven equipment and appliances and other foodservice businesses. Our innovative solutions range from" />
                <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}/images/Rotator-Penny-Red.png`} />

                <title>Rotator Brick Oven - MarraForni</title>
            </Head>
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