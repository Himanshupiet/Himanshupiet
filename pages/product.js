import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Products from '../components/Product_page/Products';

/**
* @author
* @function Product
**/

const Product = (props) => {
  const {pathname} = useRouter();
  return(
    <>
      <Head>
        <meta name="description" content="Marra Forni offers a one-stop-shop for restaurant oven and oven equipment and appliances and other foodservice businesses. Our innovative solutions range from" />
        
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}${pathname}`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Products - MarraForni" />
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
        <meta name="twitter:title" content="Products - MarraForni" />
        <meta name="twitter:description" content="Marra Forni offers a one-stop-shop for restaurant oven and oven equipment and appliances and other foodservice businesses. Our innovative solutions range from" />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}/images/Rotator-Penny-Red.png`} />

        <title>Products - MarraForni</title>
      </Head>
      <Header />
      <div style={{height:"610px",backgroundImage:`url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/Choose-Your-Model-Banner.png)`,backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"cover"}}></div>
      <Products />
      <Footer />
    </>
   )

 }

export default Product;