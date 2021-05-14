import React from 'react'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import VideoGalleryStyle from './VideoGallery.module.css'

const VideoGallery = (props) => {
  return(
    <Container fluid className={VideoGalleryStyle.videogallery_outer}>
      <Row>
        <Col lg={1}></Col>
        <Col lg={10}>
          <div className={VideoGalleryStyle.title_box}>
            <h4>Video Gallery</h4>
            <h1>WE LOVE WHAT WE DO</h1>
          </div>
        </Col>
        <Col lg={1}></Col>
      </Row>
      <Row>
        <Col lg={3} md={6} className={VideoGalleryStyle.gallery_outer}>
          <div className={VideoGalleryStyle.gallery_inner}>
            <Link href='/'>
              <a title='Gallery Image'>
                <img 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Gemignani-World-Pizza-Champ.jpg`}
                  width='550'
                  height='533'
                  className='img-fluid'
                />
                <div className={VideoGalleryStyle.gallery_overlay}>
                  <div className={VideoGalleryStyle.info_box}>
                    <span><i className='bx bx-play-circle'></i></span>
                    <p>Chef Tony Gemignani Live!</p>
                  </div>
                </div>
                <div className={VideoGalleryStyle.gallery_coloroverlay}>
                  <div className={VideoGalleryStyle.info_box}>
                    <span><i className='bx bx-play-circle'></i></span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </Col>
        <Col lg={3} md={6} className={VideoGalleryStyle.gallery_outer}>
          <div className={VideoGalleryStyle.gallery_inner}>
            <Link href='/'>
              <a title='Gallery Image'>
                <img 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Services-and-Passion.jpg`}
                  width='550'
                  height='533'
                  className='img-fluid'
                />
                <div className={VideoGalleryStyle.gallery_overlay}>
                  <div className={VideoGalleryStyle.info_box}>
                    <span><i className='bx bx-play-circle'></i></span>
                    <p>Amazing Innovations, Services, And Passion</p>
                  </div>
                </div>
                <div className={VideoGalleryStyle.gallery_coloroverlay}>
                  <div className={VideoGalleryStyle.info_box}>
                    <span><i className='bx bx-play-circle'></i></span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </Col>
        <Col lg={3} md={6} className={VideoGalleryStyle.gallery_outer}>
          <div className={VideoGalleryStyle.gallery_inner}>
            <Link href='/'>
              <a title='Gallery Image'>
                <img 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/We-Are-Here-For-You.jpg`}
                  width='550'
                  height='533'
                  className='img-fluid'
                />
                <div className={VideoGalleryStyle.gallery_overlay}>
                  <div className={VideoGalleryStyle.info_box}>
                    <span><i className='bx bx-play-circle'></i></span>
                    <p>We Are Here For You!</p>
                  </div>
                </div>
                <div className={VideoGalleryStyle.gallery_coloroverlay}>
                  <div className={VideoGalleryStyle.info_box}>
                    <span><i className='bx bx-play-circle'></i></span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </Col>
        <Col lg={3} md={6} className={VideoGalleryStyle.gallery_outer}>
          <div className={VideoGalleryStyle.gallery_inner}>
            <Link href='/'>
              <a title='Gallery Image'>
                <img 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/We-Create-We-Innovate.jpg`}
                  width='550'
                  height='533'
                  className='img-fluid'
                />
                <div className={VideoGalleryStyle.gallery_overlay}>
                  <div className={VideoGalleryStyle.info_box}>
                    <span><i className='bx bx-play-circle'></i></span>
                    <p>Your Oven From Start To Finish</p>
                  </div>
                </div>
                <div className={VideoGalleryStyle.gallery_coloroverlay}>
                  <div className={VideoGalleryStyle.info_box}>
                    <span><i className='bx bx-play-circle'></i></span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
   )
  }


export default VideoGallery