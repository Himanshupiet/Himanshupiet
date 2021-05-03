import Link from 'next/link'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import {Col, Container, Row} from 'react-bootstrap'
import CategoryGalleryStyle from './Category_Gallery.module.css'

const Category_Gallery = (props) => {
  return(
    <>
      <section className={CategoryGalleryStyle.tabs_outer}>
        <Container fluid>
          <ScrollAnimation 
            animateIn={'zoomIn'}
            animateOnce={true}
            duration={1}  
          >
            <h4>Ovens</h4>
            <ul className={CategoryGalleryStyle.gallerytabs}>
              <li><button className={CategoryGalleryStyle.btn_active}>All</button></li>
              <li><button>Mobile Brick Oven</button></li>
              <li><button>Neapolitan</button></li>
              <li><button>Rotator</button></li>
              <li><button>Wood</button></li>
            </ul>
          </ScrollAnimation>
        </Container>
      </section>
      <section className={CategoryGalleryStyle.gallery_outer}>
        <Container>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Mobile Brick Oven</span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Mobile Brick Oven</span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Mobile Brick Oven</span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Mobile Brick Oven</span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Mobile Brick Oven</span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Mobile Brick Oven</span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Mobile Brick Oven</span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Mobile Brick Oven</span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={CategoryGalleryStyle.tabs_outer}>
        <Container fluid>
          <ScrollAnimation 
            animateIn={'zoomIn'}
            animateOnce={true}
            duration={1}  
          >
            <h4>Prep Tables</h4>
            <ul className={CategoryGalleryStyle.gallerytabs}>
              <li><button className={CategoryGalleryStyle.btn_active}>All</button></li>
              <li><button>Refrigerated Prep Table</button></li>
              <li><button>Refrigerated Condiment Rail</button></li>
            </ul>
          </ScrollAnimation>
        </Container>
      </section>
      <section className={CategoryGalleryStyle.gallery_outer}>
        <Container>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Refrigerated Condiment Rail</span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Refrigerated Condiment Rail</span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Refrigerated Condiment Rail</span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Refrigerated Condiment Rail</span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Refrigerated Condiment Rail</span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Refrigerated Condiment Rail</span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Refrigerated Condiment Rail</span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Refrigerated Condiment Rail</span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={CategoryGalleryStyle.tabs_outer}>
        <Container fluid>
          <ScrollAnimation 
            animateIn={'zoomIn'}
            animateOnce={true}
            duration={1}  
          >
            <h4>Mixers</h4>
            <ul className={CategoryGalleryStyle.gallerytabs}>
              <li><button className={CategoryGalleryStyle.btn_active}>All</button></li>
              <li><button>Spiral Dough Mixers</button></li>
              <li><button>Fork Dough Mixers</button></li>
            </ul>
          </ScrollAnimation>
        </Container>
      </section>
      <section className={CategoryGalleryStyle.gallery_outer}>
        <Container>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Fork Dough Mixers</span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Fork Dough Mixers</span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Fork Dough Mixers</span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Fork Dough Mixers</span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Fork Dough Mixers</span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Fork Dough Mixers</span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Fork Dough Mixers</span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Fork Dough Mixers</span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </ScrollAnimation>  
            </Col>
          </Row>
        </Container>
      </section>
      <section className={CategoryGalleryStyle.tabs_outer}>
        <Container fluid>
          <ScrollAnimation 
            animateIn={'zoomIn'}
            animateOnce={true}
            duration={1}  
          >
            <h4>Market Segments</h4>
          </ScrollAnimation>
        </Container>
      </section>
      <section className={CategoryGalleryStyle.gallery_outer}>
        <Container>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Market Segments </span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Market Segments </span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Market Segments </span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Market Segments </span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Market Segments </span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Market Segments </span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Market Segments </span>
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
                <div className={CategoryGalleryStyle.gallery_inner}>
                  <Link href='/'>
                    <a title='Gallery Image'>
                      <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                        width='550'
                        height='533'
                        className='img-fluid'
                      />
                      <div className={CategoryGalleryStyle.gallery_overlay}>
                        <div className={CategoryGalleryStyle.info_box}>
                          <span>Market Segments </span>
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
              <ul className={CategoryGalleryStyle.pagination}>
                <li><button className={CategoryGalleryStyle.activepagination}>1</button></li>
                <li><button>2</button></li>
                <li><button>3</button></li>
                <li><button>4</button></li>
                <li><button>5</button></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
   )
  }


export default Category_Gallery