import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import ProductStyle from './Product.module.css'

const Product = (props) => {
  return(
    <section 
      className={ProductStyle.section_outer}>
      <Container>
        <Row>
          <Col 
            lg={3} 
            md={6}
          >
            <ScrollAnimation 
              duration={1} 
              animateIn='fadeInLeft' 
              animateOnce={true}
            >
              <div 
                className={ProductStyle.product_inner}>
                <img 
                  className='img-fluid' 
                  alt='Card image cap' 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/WholeFoods.webp`} 
                  width='376' 
                  height='498' 
                />
                <div 
                  className={ProductStyle.product_info}>
                  <h4>Rotator</h4>
                  <p>{('High-performance, high-efficiency, user-friendly for unskilled labor').substr(0,80)}
                  {('High-performance, high-efficiency, user-friendly for unskilled labor').length > 80 && '...'}</p>
                  <Link 
                    href='/discover-the-rotator-brick-oven'>
                    <a 
                      className='mf_btn' 
                      title='Discover The Rotator'
                    >
                      Discover The Rotator
                    </a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col 
            lg={3} 
            md={6}
          >
            <ScrollAnimation 
              duration={1} 
              animateIn='fadeInUp' 
              animateOnce={true}
            >
              <div 
                className={ProductStyle.product_inner}>
                <img 
                  className='img-fluid'
                  alt='Card image cap' 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Neapolitan_Broken_Red.webp`} 
                  width='376' 
                  height='498' 
                />
                <div 
                  className={ProductStyle.product_info}>
                  <h4>Neapolitan</h4>
                  <p>{('The “Classic” brick oven solution for static and mobile applications. Available in Wood, Gas, and Combination').substr(0,80)}
                  {('The “Classic” brick oven solution for static and mobile applications. Available in Wood, Gas, and Combination').length > 80 && '...'}</p>
                  <Link 
                    href='/neapolitan'>
                    <a 
                      className='mf_btn' 
                      title='Discover the Neapolitan'
                    >
                      Discover the Neapolitan
                    </a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col 
            lg={3} 
            md={6}
          >
            <ScrollAnimation 
              duration={1} 
              animateIn='fadeInUp' 
              animateOnce={true}
            >
              <div 
                className={ProductStyle.product_inner}>
                <img 
                  className='img-fluid' 
                  alt='Card image cap' 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/bice-500.webp`} 
                  width='376' 
                  height='498' 
                />
                <div 
                  className={ProductStyle.product_info}>
                  <h4>Electric</h4>
                  <p>{('The look of a Traditional wood or gas-fired oven with Top and bottom heat controls').substr(0,80)}
                  {('The look of a Traditional wood or gas-fired oven with Top and bottom heat controls').length > 80 && '...'}</p>
                  <Link 
                    href='/electric'>
                    <a 
                      className='mf_btn' 
                      title='Discover The Electric'
                    >
                      Discover The Electric
                    </a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col 
            lg={3} 
            md={6}
          >
            <ScrollAnimation 
              duration={1} 
              animateIn='fadeInRight' 
              animateOnce={true}
            >
              <div 
                className={ProductStyle.product_inner}>
                <img 
                  className='img-fluid' 
                  alt='Card image cap' 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Due_Bocche_White_Broken.webp`} 
                  width='376' 
                  height='498' 
                />
                <div 
                  className={ProductStyle.product_info}>
                  <h4>Due Bocche</h4>
                  <p>{('All of the benefits of the Classic Neapolitan or the Rotator in a Pass-Thru configuration').substr(0,80)}
                  {('All of the benefits of the Classic Neapolitan or the Rotator in a Pass-Thru configuration').length > 80 && '...'}</p>
                  <Link 
                    href='/due-bocche'>
                    <a 
                      className='mf_btn' 
                      title='Discover the Passthrough'>
                        Discover the Passthrough
                    </a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </section>
   )
  }


export default Product