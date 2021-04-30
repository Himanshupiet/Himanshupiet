import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import GalleryImgStyle from './GalleryImages.module.css'

const GalleryImages = (props) => {
  return(
    <Container fluid>
      <Row>
        <Col 
          lg={3} 
          sm={6}
          className={GalleryImgStyle.gallery_inner}
        >    
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Marra-Forni-Client-800-Degrees-3.jpg`}
            width=''
            height='250'
            alt='galler image'
            className='img-fluid'
          />
          <div className={GalleryImgStyle.img_overlay}></div>
        </Col>
        <Col 
          lg={3} 
          sm={6}
          className={GalleryImgStyle.gallery_inner}
        >    
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Marra-Forni-Client-800-Degrees-4.jpg`}
            width=''
            height='250'
            alt='galler image'
            className='img-fluid'
          />
          <div className={GalleryImgStyle.img_overlay}></div>
        </Col>
        <Col 
          lg={3} 
          sm={6}
          className={GalleryImgStyle.gallery_inner}
        >    
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/big-bon-savannah-magazine.jpg`}
            width=''
            height='250'
            alt='galler image'
            className='img-fluid'
          />
          <div className={GalleryImgStyle.img_overlay}></div>
        </Col>
        <Col 
          lg={3} 
          sm={6}
          className={GalleryImgStyle.gallery_inner}
        >    
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/big-bon-savannah.jpg`}
            width=''
            height='250'
            alt='galler image'
            className='img-fluid'
          />
          <div className={GalleryImgStyle.img_overlay}></div>
        </Col>
      </Row>
    </Container>
   )
  }


export default GalleryImages