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
                    <h2>{props && props.data && props.data.length && props.data[0].pitchTitle}</h2>
                    <h3>{props && props.data && props.data.length && props.data[0].pitchSubTitle}</h3>
                    <p>{props && props.data && props.data.length && props.data[0].pitchDesciption}</p>
                  </div>
                </ScrollAnimation>
              </Col>
              <Col md={6}>
                <ScrollAnimation animateIn="fadeInRight" animateOnce={true} duration={1}>
                  <div className={ProductInfoStyle.info}>
                    <img alt="Logo" width="77" height="81" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/intertek_listed.webp`} />
                    <img alt="Logo" width="77" height="81" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/sanitation_listed.webp`} />
                    <h2>{props && props.data && props.data.length && props.data[1].pitchTitle}</h2>
                    <h3>{props && props.data && props.data.length && props.data[1].pitchSubTitle}</h3>
                    <p>{props && props.data && props.data.length && props.data[1].pitchDesciption}</p>
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