import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import Header from '../header/header'
import Footer from '../footer/footer'
import BlogContent from './BlogContent/BlogContent'
import BlogSidebar from './BlogSidebar/BlogSidebar'

const BlogMain = (props) => {
  return(
    <>
      <Header />
      <div style={{
        height: '300px',
        backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/resource_banner.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}/>
      <Container fluid className='mb-5 mt-5'>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <Row>
              <Col lg={9}>
                <BlogContent />
              </Col>
              <Col lg={3}>
                <BlogSidebar />
              </Col>
            </Row>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>  
      <Footer />
    </>
   )

 }

export default BlogMain