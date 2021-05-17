import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import { Col, Container, Row } from 'react-bootstrap'
import Testimonials from './../ProductSingle/Testimonials/Testimonials';
import TopBanner from '../Gallery_Page/TopBanner/TopBanner';
import StoryForm from '../Gallery_Page/StoryForm/StoryForm';
import SegmentGallery from './SegmentGallery/SegmentGallery';
import SegmentGalleryMainStyle from './index.module.css'


const MarketSegmentGalleryMain = (props) => {
  return(
    <>
      <Header />
      <TopBanner heading1={'Market'} heading2={'Segment Gallery'} />
      <SegmentGallery />
      <Testimonials background={'red'} />
      <Container fluid className={SegmentGalleryMainStyle.storyform_outer}>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <StoryForm />
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
      <Footer />
    </>
   )

 }

export default MarketSegmentGalleryMain