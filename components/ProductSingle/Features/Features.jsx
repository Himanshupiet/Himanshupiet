import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FeaturesStyle from './Features.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

/**
* @author
* @function Features
**/

const Features = (props) => {
  return(
    <section className={FeaturesStyle.section_outer}>
      <Container>
        <Row>
          <Col md={4}>
            <ScrollAnimation animateOnce={true} duration={1} animateIn="fadeInLeft">
              <div className={FeaturesStyle.inner}>
                <h4>Standard Features</h4>
                <ol>
                  <li>Touchscreen</li>
                  <li>Dome Terra Cotta Finish</li>
                  <li>Turbo Burner</li>
                  <li>Durable Proprietary Brick Deck</li>
                  <li>Door</li>
                  <li>Stainless Steel Flue Collar/Adapter</li>
                  <li>Steel Stand</li>
                  <li>Powder Coating</li>
                  <li>2 Year Deck and Dome Warranty</li>
                  <li>1 Year Parts and Labor Warranty</li>
                </ol>
              </div>
            </ScrollAnimation>
          </Col>
          <Col md={4}>
            <ScrollAnimation animateOnce={true} duration={1} animateIn="fadeInUp">
              <div className={FeaturesStyle.inner}>
                <h4>Optional Features</h4>
                <ol>
                  <li>Custom Tile Application</li>
                  <li>Integrated Exhaust System</li>
                  <li>Exhaust Fan</li>
                  <li>Stainless Steel Mast/Stand</li>
                  <li>All Fuel Grease Duct</li>
                  <li>Gas Burning Accessories</li>
                  <li>Aluminum Oven Tools</li>
                </ol>
              </div>
            </ScrollAnimation>
          </Col>
          <Col md={4}>
            <ScrollAnimation animateOnce={true} duration={1} animateIn="fadeInRight">
              <div className={FeaturesStyle.inner_approve}>
                <h4>Approved</h4>
                <p>Marra Forni products that feature these logos meet rigorous standards for electrical safety and electromagnetic emissions. The acronyms are as follows:</p>
                <p>
                  <span><b>UL: </b>Underwriters Laboratories, Inc.</span><br />
                  <span><b>CSA: </b>Canadian Standards Association</span><br />
                  <span><b>ETL: </b>Formerly ETL Testing Laboratories, now Intertek Testing Services</span><br />
                  <span><b>CE: </b>Conformance European</span><br />
                </p>
                <img alt="Logo" width="77" height="81" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/intertek_listed.webp`} />
                <img alt="Logo" width="77" height="81" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/sanitation_listed.webp`} />
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </section>
   )
  }


export default Features