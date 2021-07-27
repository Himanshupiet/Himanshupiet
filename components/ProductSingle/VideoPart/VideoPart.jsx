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
            <iframe title="Rotator Double Mouth" width="1060" height="355" src={props.data.videoUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
          </Col>
          <Col md={6} className={VideoPartStyle.content_section}>
            <ScrollAnimation animateIn="zoomIn" duration={2} animateOnce={true}>
              <h2>{props.data.productCategory}</h2>
              <h3>{props.data.videoTitle}</h3>
              <p>{props.data.videoDescription}</p>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </section>
   )
  }


export default VideoPart;