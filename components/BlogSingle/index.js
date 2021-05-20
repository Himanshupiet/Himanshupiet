import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import { Container, Row, Col } from 'react-bootstrap'
import BlogSingleMainStyle from './index.module.css'
import BlogSidebar from './../Blog_Page/BlogSidebar/BlogSidebar';
import BlogSingleContent from './BlogSingleContent/BlogSingleContent'

const BlogSingleMain = (props) => {
  return(
    <>
      <Header />
      <Container fluid className={BlogSingleMainStyle.top_banner}>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <h1>Blog</h1>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
      <Container fluid className={BlogSingleMainStyle.blog_outer}>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <Row>
              <Col lg={9}>
                <BlogSingleContent />
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

export default BlogSingleMain