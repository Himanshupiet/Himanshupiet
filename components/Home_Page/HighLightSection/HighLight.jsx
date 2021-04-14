import React from 'react';
import HighLightStyle from './HighLight.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { Col, Container, Row } from 'react-bootstrap';

/**
* @author
* @function HighLight
**/

const HighLight = ({highlightData}) => {
  return(
    highlightData ? <section className={HighLightStyle.section_outer}>
      <Container>
        <Row className="align-items-center">
          <Col lg={8} md={6} className={HighLightStyle.text_box}>
            <ScrollAnimation duration={2} animateIn="zoomIn" animateOnce={true}>  
              <h3>{highlightData.Heading}</h3>
              <h4>{highlightData.subHeading}</h4>
            </ScrollAnimation>
          </Col>
          <Col lg={4} md={6} className={HighLightStyle.button_box}>
            <ScrollAnimation duration={2} animateIn="bounceInUp" animateOnce={true}>
              <button className="mf_btn mf_btn_round">{highlightData.buttonText}</button>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </section> : ""
   )
  }


export default HighLight;