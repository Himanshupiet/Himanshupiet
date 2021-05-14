import Link from 'next/link'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import {Col, Container, Row} from 'react-bootstrap'
import SegmentGalleryStyle from './SegmentGallery.module.css'

const SegmentGallery = (props) => {
  return(
    <>
      <section className={SegmentGalleryStyle.tabs_outer}>
        <Container fluid>
          <Row>
            <Col xl={1}></Col>
            <Col xl={10}>
              <ScrollAnimation 
                animateIn={'zoomIn'}
                animateOnce={true}
                duration={1}  
              >
                <h2>Market Segments</h2>
              </ScrollAnimation>
            </Col>
            <Col xl={1}></Col>
          </Row>
        </Container>
      </section>
      <section className={SegmentGalleryStyle.gallery_outer}>
        <Container fluid>
          <Row>
            <Col xl={1}></Col>
            <Col xl={10}>
              <Row>
                <Col
                  lg={3}
                  sm={6}
                >
                  <ScrollAnimation 
                    animateIn={'fadeInUp'}
                    animateOnce={true}
                    duration={1}  
                  >
                    <div className={SegmentGalleryStyle.gallery_inner}>
                      <Link href='/'>
                        <a title='Gallery Image'>
                          <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                            width='550'
                            height='533'
                            className='img'
                          />
                          <div className={SegmentGalleryStyle.gallery_overlay}>
                            <div className={SegmentGalleryStyle.info_box}>
                              <span>Market Segments</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </ScrollAnimation>
                </Col>
                <Col
                  lg={3}
                  sm={6}
                >
                  <ScrollAnimation 
                    animateIn={'fadeInUp'}
                    animateOnce={true}
                    duration={1}  
                  >
                    <div className={SegmentGalleryStyle.gallery_inner}>
                      <Link href='/'>
                        <a title='Gallery Image'>
                          <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                            width='550'
                            height='533'
                            className='img'
                          />
                          <div className={SegmentGalleryStyle.gallery_overlay}>
                            <div className={SegmentGalleryStyle.info_box}>
                              <span>Market Segments</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </ScrollAnimation>  
                </Col>
                <Col
                  lg={3}
                  sm={6}
                >
                  <ScrollAnimation 
                    animateIn={'fadeInUp'}
                    animateOnce={true}
                    duration={1}  
                  >
                    <div className={SegmentGalleryStyle.gallery_inner}>
                      <Link href='/'>
                        <a title='Gallery Image'>
                          <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                            width='550'
                            height='533'
                            className='img'
                          />
                          <div className={SegmentGalleryStyle.gallery_overlay}>
                            <div className={SegmentGalleryStyle.info_box}>
                              <span>Market Segments</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </ScrollAnimation>  
                </Col>
                <Col
                  lg={3}
                  sm={6}
                >
                  <ScrollAnimation 
                    animateIn={'fadeInUp'}
                    animateOnce={true}
                    duration={1}  
                  >
                    <div className={SegmentGalleryStyle.gallery_inner}>
                      <Link href='/'>
                        <a title='Gallery Image'>
                          <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                            width='550'
                            height='533'
                            className='img'
                          />
                          <div className={SegmentGalleryStyle.gallery_overlay}>
                            <div className={SegmentGalleryStyle.info_box}>
                              <span>Market Segments</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </ScrollAnimation>
                </Col>
                <Col
                  lg={3}
                  sm={6}
                >
                  <ScrollAnimation 
                    animateIn={'fadeInUp'}
                    animateOnce={true}
                    duration={1}  
                  >
                    <div className={SegmentGalleryStyle.gallery_inner}>
                      <Link href='/'>
                        <a title='Gallery Image'>
                          <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                            width='550'
                            height='533'
                            className='img'
                          />
                          <div className={SegmentGalleryStyle.gallery_overlay}>
                            <div className={SegmentGalleryStyle.info_box}>
                              <span>Market Segments</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </ScrollAnimation>
                </Col>
                <Col
                  lg={3}
                  sm={6}
                >
                  <ScrollAnimation 
                    animateIn={'fadeInUp'}
                    animateOnce={true}
                    duration={1}  
                  >
                    <div className={SegmentGalleryStyle.gallery_inner}>
                      <Link href='/'>
                        <a title='Gallery Image'>
                          <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                            width='550'
                            height='533'
                            className='img'
                          />
                          <div className={SegmentGalleryStyle.gallery_overlay}>
                            <div className={SegmentGalleryStyle.info_box}>
                              <span>Market Segments</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </ScrollAnimation>  
                </Col>
                <Col
                  lg={3}
                  sm={6}
                >
                  <ScrollAnimation 
                    animateIn={'fadeInUp'}
                    animateOnce={true}
                    duration={1}  
                  >
                    <div className={SegmentGalleryStyle.gallery_inner}>
                      <Link href='/'>
                        <a title='Gallery Image'>
                          <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                            width='550'
                            height='533'
                            className='img'
                          />
                          <div className={SegmentGalleryStyle.gallery_overlay}>
                            <div className={SegmentGalleryStyle.info_box}>
                              <span>Market Segments</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </ScrollAnimation>
                </Col>
                <Col
                  lg={3}
                  sm={6}
                >
                  <ScrollAnimation 
                    animateIn={'fadeInUp'}
                    animateOnce={true}
                    duration={1}  
                  >
                    <div className={SegmentGalleryStyle.gallery_inner}>
                      <Link href='/'>
                        <a title='Gallery Image'>
                          <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                            width='550'
                            height='533'
                            className='img'
                          />
                          <div className={SegmentGalleryStyle.gallery_overlay}>
                            <div className={SegmentGalleryStyle.info_box}>
                              <span>Market Segments</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </ScrollAnimation>
                </Col>
                <Col
                  lg={3}
                  sm={6}
                >
                  <ScrollAnimation 
                    animateIn={'fadeInUp'}
                    animateOnce={true}
                    duration={1}  
                  >
                    <div className={SegmentGalleryStyle.gallery_inner}>
                      <Link href='/'>
                        <a title='Gallery Image'>
                          <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                            width='550'
                            height='533'
                            className='img'
                          />
                          <div className={SegmentGalleryStyle.gallery_overlay}>
                            <div className={SegmentGalleryStyle.info_box}>
                              <span>Market Segments</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </ScrollAnimation>
                </Col>
                <Col
                  lg={3}
                  sm={6}
                >
                  <ScrollAnimation 
                    animateIn={'fadeInUp'}
                    animateOnce={true}
                    duration={1}  
                  >
                    <div className={SegmentGalleryStyle.gallery_inner}>
                      <Link href='/'>
                        <a title='Gallery Image'>
                          <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                            width='550'
                            height='533'
                            className='img'
                          />
                          <div className={SegmentGalleryStyle.gallery_overlay}>
                            <div className={SegmentGalleryStyle.info_box}>
                              <span>Market Segments</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </ScrollAnimation>
                </Col>
                <Col
                  lg={3}
                  sm={6}
                >
                  <ScrollAnimation 
                    animateIn={'fadeInUp'}
                    animateOnce={true}
                    duration={1}  
                  >
                    <div className={SegmentGalleryStyle.gallery_inner}>
                      <Link href='/'>
                        <a title='Gallery Image'>
                          <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                            width='550'
                            height='533'
                            className='img'
                          />
                          <div className={SegmentGalleryStyle.gallery_overlay}>
                            <div className={SegmentGalleryStyle.info_box}>
                              <span>Market Segments</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </ScrollAnimation>
                </Col>
                <Col
                  lg={3}
                  sm={6}
                >
                  <ScrollAnimation 
                    animateIn={'fadeInUp'}
                    animateOnce={true}
                    duration={1}  
                  >
                    <div className={SegmentGalleryStyle.gallery_inner}>
                      <Link href='/'>
                        <a title='Gallery Image'>
                          <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                            width='550'
                            height='533'
                            className='img'
                          />
                          <div className={SegmentGalleryStyle.gallery_overlay}>
                            <div className={SegmentGalleryStyle.info_box}>
                              <span>Market Segments</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </ScrollAnimation>
                </Col>
                <Col
                  lg={3}
                  sm={6}
                >
                  <ScrollAnimation 
                    animateIn={'fadeInUp'}
                    animateOnce={true}
                    duration={1}  
                  >
                    <div className={SegmentGalleryStyle.gallery_inner}>
                      <Link href='/'>
                        <a title='Gallery Image'>
                          <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                            width='550'
                            height='533'
                            className='img'
                          />
                          <div className={SegmentGalleryStyle.gallery_overlay}>
                            <div className={SegmentGalleryStyle.info_box}>
                              <span>Market Segments</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </ScrollAnimation>
                </Col>
                <Col
                  lg={3}
                  sm={6}
                >
                  <ScrollAnimation 
                    animateIn={'fadeInUp'}
                    animateOnce={true}
                    duration={1}  
                  >
                    <div className={SegmentGalleryStyle.gallery_inner}>
                      <Link href='/'>
                        <a title='Gallery Image'>
                          <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                            width='550'
                            height='533'
                            className='img'
                          />
                          <div className={SegmentGalleryStyle.gallery_overlay}>
                            <div className={SegmentGalleryStyle.info_box}>
                              <span>Market Segments</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </ScrollAnimation>
                </Col>
                <Col
                  lg={3}
                  sm={6}
                >
                  <ScrollAnimation 
                    animateIn={'fadeInUp'}
                    animateOnce={true}
                    duration={1}  
                  >
                    <div className={SegmentGalleryStyle.gallery_inner}>
                      <Link href='/'>
                        <a title='Gallery Image'>
                          <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                            width='550'
                            height='533'
                            className='img'
                          />
                          <div className={SegmentGalleryStyle.gallery_overlay}>
                            <div className={SegmentGalleryStyle.info_box}>
                              <span>Market Segments</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </ScrollAnimation>
                </Col>
                <Col
                  lg={3}
                  sm={6}
                >
                  <ScrollAnimation 
                    animateIn={'fadeInUp'}
                    animateOnce={true}
                    duration={1}  
                  >
                    <div className={SegmentGalleryStyle.gallery_inner}>
                      <Link href='/'>
                        <a title='Gallery Image'>
                          <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                            width='550'
                            height='533'
                            className='img'
                          />
                          <div className={SegmentGalleryStyle.gallery_overlay}>
                            <div className={SegmentGalleryStyle.info_box}>
                              <span>Market Segments</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </ScrollAnimation>
                </Col>
                <Col
                  lg={3}
                  sm={6}
                >
                  <ScrollAnimation 
                    animateIn={'fadeInUp'}
                    animateOnce={true}
                    duration={1}  
                  >
                    <div className={SegmentGalleryStyle.gallery_inner}>
                      <Link href='/'>
                        <a title='Gallery Image'>
                          <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                            width='550'
                            height='533'
                            className='img-fluid'
                          />
                          <div className={SegmentGalleryStyle.gallery_overlay}>
                            <div className={SegmentGalleryStyle.info_box}>
                              <span>Market Segments</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </ScrollAnimation>
                </Col>
                <Col
                  lg={3}
                  sm={6}
                >
                  <ScrollAnimation 
                    animateIn={'fadeInUp'}
                    animateOnce={true}
                    duration={1}  
                  >
                    <div className={SegmentGalleryStyle.gallery_inner}>
                      <Link href='/'>
                        <a title='Gallery Image'>
                          <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                            width='550'
                            height='533'
                            className='img-fluid'
                          />
                          <div className={SegmentGalleryStyle.gallery_overlay}>
                            <div className={SegmentGalleryStyle.info_box}>
                              <span>Market Segments</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </ScrollAnimation>
                </Col>
                <Col
                  lg={3}
                  sm={6}
                >
                  <ScrollAnimation 
                    animateIn={'fadeInUp'}
                    animateOnce={true}
                    duration={1}  
                  >
                    <div className={SegmentGalleryStyle.gallery_inner}>
                      <Link href='/'>
                        <a title='Gallery Image'>
                          <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                            width='550'
                            height='533'
                            className='img-fluid'
                          />
                          <div className={SegmentGalleryStyle.gallery_overlay}>
                            <div className={SegmentGalleryStyle.info_box}>
                              <span>Market Segments</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </ScrollAnimation>
                </Col>
                <Col
                  lg={3}
                  sm={6}
                >
                  <ScrollAnimation 
                    animateIn={'fadeInUp'}
                    animateOnce={true}
                    duration={1}  
                  >
                    <div className={SegmentGalleryStyle.gallery_inner}>
                      <Link href='/'>
                        <a title='Gallery Image'>
                          <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                            width='550'
                            height='533'
                            className='img-fluid'
                          />
                          <div className={SegmentGalleryStyle.gallery_overlay}>
                            <div className={SegmentGalleryStyle.info_box}>
                              <span>Market Segments</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </ScrollAnimation>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <ul className={SegmentGalleryStyle.pagination}>
                    <li><button className={SegmentGalleryStyle.activepagination}>1</button></li>
                    <li><button>2</button></li>
                    <li><button>3</button></li>
                    <li><button>4</button></li>
                    <li><button>5</button></li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col xl={1}></Col>
          </Row>
        </Container>
      </section>
    </>
   )
  }


export default SegmentGallery