import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductInfoStyle from './ProductInfo.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
 
/**
* @author
* @function ProductInfo
**/

const ProductInfo = (props) => {
  return(
    <section className={ProductInfoStyle.section_outer}>
      <Container fluid>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <Row>
              <Col md={6}>
                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={1}>
                  <div className={ProductInfoStyle.info}>
                    <img alt="Logo" width="300" height="81" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/LogoRed.png`} />
                    <h2>Fast Growth</h2>
                    <h3>Lower Labor & Energy Cost.</h3>
                    <p>Enjoy lower energy bills thanks to the 84,000 BTU per burner and decreased labor cost with the automations integrated into the touchscreen of your Marra Forni Rotator brick oven. The easy to operate Rotator means that you won’t have to spend thousands of dollars on expensive Pizzaiolos.</p>
                  </div>
                </ScrollAnimation>
              </Col>
              <Col md={6}>
                <ScrollAnimation animateIn="fadeInRight" animateOnce={true} duration={1}>
                  <div className={ProductInfoStyle.info}>
                    <img alt="Logo" width="77" height="81" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/intertek_listed.webp`} />
                    <img alt="Logo" width="77" height="81" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/sanitation_listed.webp`} />
                    <h2>Made in America</h2>
                    <h3>No More Costly Downtime.</h3>
                    <p>Marra Forni brick ovens are manufactured in the United States using core materials from Italy. This means that you’ll enjoy excellent service support that imported brick oven manufacturers just can’t provide.</p>
                  </div>
                </ScrollAnimation>
              </Col>
            </Row>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </section>
   )
  }


export default ProductInfo;