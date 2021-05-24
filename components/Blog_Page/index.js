import React from 'react'
import {Container} from 'react-bootstrap'
import Header from '../header/header'
import Footer from '../footer/footer'
import BlogContent from './BlogContent/BlogContent'
import BlogMainStyle from './index.module.css'

const BlogMain = (props) => {
  return(
    <>
      <Header />
      <Container fluid className={BlogMainStyle.blog_banner}>
        <h1>Marra Forni Blog</h1>
      </Container>
      <BlogContent />
      <Footer />
    </>
   )

 }

export default BlogMain