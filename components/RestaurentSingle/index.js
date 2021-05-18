import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import Testimonials from './../ProductSingle/Testimonials/Testimonials';
import RestaurentGallery from './RestaurentGallery/RestaurentGallery';


const RestaurentMain = (props) => {
  return(
    <>
      <Header />
      <RestaurentGallery />
      <Testimonials />
      <Footer />
    </>
   )

 }

export default RestaurentMain