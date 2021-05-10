import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import GetAQuote from '../common/GetAQuote/GetAQuote'
import T_and_A_Style from './index.module.css'
import { Container } from 'react-bootstrap'
import Products from './T&C_Products/Products'
import GalleryImages from './GalleryImages/GalleryImages'

const ToolsAndAccessoriesMain = (props) => {
  return(
    <>
      <Header />
      <div style={{
        height:'610px',
        backgroundImage:`url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/Marra-Tools-Accessories-Banner.jpg)`,
        backgroundRepeat:'no-repeat',
        backgroundAttachment:'fixed',
        backgroundSize:'cover',
        backgroundPosition: 'center 0'
      }}/>
      <Container>
        <div className={T_and_A_Style.heading_main}>
          <h1>The Right Tool For The Right Recipe</h1>
          <p>The perfect pizza is the result of the right ingredients, the right oven, and the right tools and accessories to get the job done!  All of Marra Forni’s quality brick oven cooking tools and accessories are designed to meet the specific needs and demands of our customers; from line cook to the chef, to artisan pizza maker; with durability, efficiency, and simplicity mind. Remember to think outside of the traditional “pizza box” and expand the bandwidth of your menu with the right tools and accessories.</p>
          <p>Complete the form below to get pricing information in minutes.</p>
        </div>
      </Container>
      <Products />
      <GetAQuote />
      <GalleryImages />
      <Footer />
    </>
   )

 }

export default ToolsAndAccessoriesMain