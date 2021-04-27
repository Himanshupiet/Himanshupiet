import Head from 'next/head';
import { useRouter } from 'next/router';
import GetAQuote from '../components/common/GetAQuote/GetAQuote';
import LogoSlider from '../components/common/LogoSlider/LogoSlider';
import QodefSlider from '../components/common/QodefSlider/QodefSlider';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Authentic from '../components/Home_Page/AuthenticSection/Authentic';
import Features_Services from '../components/Home_Page/Features&Services/Features_Services';
import HighLight from '../components/Home_Page/HighLightSection/HighLight';
import Product from '../components/Home_Page/ProductSection/Product';
import Reliable from '../components/Home_Page/ReliableSection/Reliable';
import RotateImage360D from '../components/Home_Page/RotateImage360D/RotateImage360D';

export default function Home() {
  const {pathname} = useRouter();

  let highlightData1 = {
    Heading: "High-Volume Cooking",
    subHeading: "Grow your business and expand your menu with Marra Forni’s Brick Oven Cooking Solutions.",
    buttonText: "Build Your Own Oven!"
  }
  let highlightData2 = {
    Heading: "Customize Your Commercial Brick Oven, Add Logo!!",
    subHeading: "Premium and Beautiful Tile Options.",
    buttonText: "Build Your Own Oven!"
  }
  let highlightData3 = {
    Heading: "Customized Handcrafted Brick Oven, Add Your Logo",
    subHeading: "Premium and Beautiful Tile Options.",
    buttonText: "Build Your Own Oven!"
  }
  let highlightData4 = {
    Heading: "",
    subHeading: "You are a few clicks away from owning the most durable, energy efficient, customizable and feature-packed brick oven in the world.",
    buttonText: "Build Your Own Oven!"
  }
  let highlightData5 = {
    Heading: "Explore Our Industrial Kitchen Appliances",
    subHeading: "Slicers, Mixers & Prep Tables",
    buttonText: "GET A QUOTE",
    background: "grey"
  }

  return (
    <>
      <Head>
        <meta name="description" content="Authentic Commercial Brick Ovens: Welcome To The Marra Forni Nation! Where Artisan intersects with Technology and Innovation to build these Commercial Pizza Oven Cooking Solutions." />
        
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}${pathname}`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MarraForni | Artisan Commercial Brick Oven | Stone Hearth Oven" />
        <meta property="og:description" content="Authentic Commercial Brick Ovens: Welcome To The Marra Forni Nation! Where Artisan intersects with Technology and Innovation to build these Commercial Pizza Oven Cooking Solutions." />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}${pathname}`} />
        <meta property="og:site_name" content="MarraForni" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}/images/Rotator-Penny-Red.png`} />
        <meta property="og:image:secure_url" content={`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}/images/Rotator-Penny-Red.png`} />
        <meta property="og:image:width" content="372" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:alt" content="Marra Forni Rotator Penny Red" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MarraForni | Artisan Commercial Brick Oven | Stone Hearth Oven" />
        <meta name="twitter:description" content="Authentic Commercial Brick Ovens: Welcome To The Marra Forni Nation! Where Artisan intersects with Technology and Innovation to build these Commercial Pizza Oven Cooking Solutions." />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}/images/Rotator-Penny-Red.png`} />

        <title>MarraForni | Artisan Commercial Brick Oven | Stone Hearth Oven</title>
      </Head>
      <Header />
      <div style={{height:"610px",backgroundImage:`url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/Choose-Your-Model-Banner.png)`,backgroundRepeat:"no-repeat"}}></div>
      <Authentic />
      <HighLight highlightData={highlightData1} />
      <Product />
      <HighLight highlightData={highlightData5} />
      <Reliable />
      <HighLight highlightData={highlightData2} />
      <QodefSlider />
      <HighLight highlightData={highlightData3} />
      <RotateImage360D />
      <HighLight highlightData={highlightData4} />
      <Features_Services />
      {/* <GetAQuote /> */}
      <LogoSlider />
      <Footer />
    </>
  )
}
