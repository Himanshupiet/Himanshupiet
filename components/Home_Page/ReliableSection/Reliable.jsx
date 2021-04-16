import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ScrollAnimation from "react-animate-on-scroll";
import ReliableStyle from './Reliable.module.css';

/**
* @author
* @function Reliable
**/

const Reliable = (props) => {
  return(
    <section className={ReliableStyle.section_outer}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className={ReliableStyle.image_box}>
            <ScrollAnimation duration={2} animateIn="bounceInUp" animateOnce={true}>
              <img className="img-fluid" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/One-Stop-Shop-2.webp`} alt="Reliable Appliances" width="1189" height="711" />
            </ScrollAnimation>
          </Col>
          <Col lg={6} className={ReliableStyle.content_box}>
            <ScrollAnimation duration={1} animateIn="zoomIn" animateOnce={true}>
              <h2>Reliable Appliances</h2>
              <h3>Slicers, Mixers & Prep Tables</h3>
              <p>Marra Forni offers additional products to support our World Class Brick Oven Cooking Solutions.</p>
              <p>Marra Forni forked and spiral dough mixers are the right solution to achieve the perfect pizza crust by allowing the dough to oxygenate quickly without warming or overbeating.  Available in a variety of sizes, depending upon production requirements these mixers are durable and offer user-friendly features including a tilting mixer head, protective bowl screen guard, and simple on/off controls.</p>
              <p>Marra Forni “flywheel” slicers are the perfect accent to any kitchen or servery area.  Cast in aluminum and steel, the body of the slicer combines beauty with fast and easy cleanup.  With its built-in blade sharpener and protective guard, the slider offers precision combined with the classic appeal of a hand-operated flywheel.  The slicer and optional cast-iron pedestal base are available in a variety of custom colors to accent any décor.</p>
              <p>Marra Forni offers refrigerated pizza prep tables in 2 and 3 door configurations to complement any high-volume pizza operation.  With optional refrigerated stainless steel condiment rails and a marble countertop, it’s the optimal pizza prep solution.</p>
              <Link href="/connect"><a className="mf_btn" title="GET A QUOTE">GET A QUOTE</a></Link>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </section>
   )
  }


export default Reliable;