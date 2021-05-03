import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import { Container } from 'react-bootstrap';
import GalleryStyle from './index.module.css'
import Category_Gallery from './Category_Gallery/Category_Gallery';
import Testimonials from './../ProductSingle/Testimonials/Testimonials';
import StoryForm from './StoryForm/StoryForm';

const GalleryMain = (props) => {
  return(
    <>
      <Header />
      <div style={{
        height:'310px',
        backgroundImage:`url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/Marra-Tools-Accessories-Banner.jpg)`,
        backgroundRepeat:'no-repeat',
        backgroundAttachment:'fixed',
        backgroundSize:'cover',
        backgroundPosition: 'center 0'
      }}/>
      <Container>
        <div className={GalleryStyle.heading_main}>
          <h3>Your Success Is Our Inspiration</h3>
          <p>Marra Forni is built for the people who believe in us and use our brick ovens and other Marra Forni products daily to feed thousands of hungry mouths around the world. Without our awesome clients, we do not have a product, nor do we have a company. We take your suggestions and comments to heart so that we may continue to innovate and support your own success and growth.</p>
        </div>
      </Container>
      <Category_Gallery />
      <Testimonials background={'red'} />
      <StoryForm />
      <Footer />
    </>
   )

 }

export default GalleryMain