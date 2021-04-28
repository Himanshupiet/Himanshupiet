import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Col, Container, Row } from 'react-bootstrap';
import VideoPartStyle from './VideoPart.module.css';

/**
* @author
* @function VideoPart
**/

const VideoPart = (props) => {
  return(
    <section className={VideoPartStyle.section_outer}>
      <Container fluid>
        <Row>
          <Col md={6} className={VideoPartStyle.video_section}>
            <iframe title="Rotator Double Mouth" width="1060" height="355" src="https://www.youtube.com/embed/AbPpq3K54ww?feature=oembed" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
          </Col>
          <Col md={6} className={VideoPartStyle.content_section}>
            <ScrollAnimation animateIn="zoomIn" duration={2} animateOnce={true}>
              <h3>The Marra Forni Rotator</h3>
              <h4>Due Bocci Demo</h4>
              <p>Discover the Rotator Brick Oven, recommended by top chefs globally for making pizzas in 90 seconds. The Rotator requires Little to No expertise required for cooking recipes and Pizzas by pizzaiolo. Easy to control with the innovative Touchscreen display.</p>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </section>
   )
  }


export default VideoPart;