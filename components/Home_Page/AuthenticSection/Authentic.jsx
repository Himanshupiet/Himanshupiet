import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import AuthenticStyle from './Authentic.module.css'
import Link from 'next/link'

const Authentic = (props) => {
  return(
    <section className={AuthenticStyle.section_outer}>
      <Container>
        <Row>
          <Col 
            lg={6} 
            className={AuthenticStyle.content_box}
          >
            <ScrollAnimation 
              duration={1} 
              animateIn='fadeInUp' 
              animateOnce={true}
            >
              <h2>Authentic Handcrafted Brick Ovens</h2>
              <h3>Welcome To The Marra Forni Nation!</h3>
              <p>Where Artisan intersects with Technology and Innovation.  Each Marra Forni brick oven is uniquely handcrafted and built, brick by brick, resulting in the industry’s highest quality, most energy-efficient brick oven cooking solution available.  See why Marra Forni is the leading brick oven cooking solution manufacturer in the commercial foodservice industry.  We Create, We Innovate, We Inspire!</p>
              <p>Visit any of our culinary demonstration locations and test kitchen locations located throughout the US, Canada and Mexico and with International locations in Italy and Dubai.</p>
              <Link 
                href='/'>
                <a 
                  className='mf_btn' 
                  title='Visit a Test Kitchen'
                >
                  Visit a Test Kitchen
                </a>
              </Link>
            </ScrollAnimation>
          </Col>
          <Col 
            lg={6} 
            className={AuthenticStyle.image_box}
          >
            <ScrollAnimation 
              duration={1} 
              animateIn='fadeInRight' 
              animateOnce={true}
            >
              <img 
                className='img-fluid' 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/firedupbrewing-banner.webp`} 
                alt='Commercial Brick Oven' 
                width='480' 
                height='546' 
              />
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </section>
   )
  }


export default Authentic