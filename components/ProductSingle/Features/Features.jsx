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
      <Container fluid>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <Row>
              <Col md={4}>
                <ScrollAnimation animateOnce={true} duration={1} animateIn="fadeInLeft">
                  <div className={FeaturesStyle.inner}>
                    <h2>Standard Features</h2>
                    <ol>
                        { props && props.data && props.data.standardFeatures && props.data.standardFeatures.length ?
                            props.data.standardFeatures.map((val, i) => {
                                return (
                                    <li key={i}>{val}</li>
                                )
                            })
                            : null
                        }
                    </ol>
                  </div>
                </ScrollAnimation>
              </Col>
              <Col md={4}>
                <ScrollAnimation animateOnce={true} duration={1} animateIn="fadeInUp">
                  <div className={FeaturesStyle.inner}>
                    <h2>Optional Features</h2>
                    <ol>
                     { props && props.data && props.data.optionalFeatures && props.data.optionalFeatures.length ?
                         props.data.optionalFeatures.map((val, i) => {
                           return (
                               <li key={i}>{val}</li>
                           )
                         })
                         : null
                     }
                    </ol>
                  </div>
                </ScrollAnimation>
              </Col>
              <Col md={4}>
                <ScrollAnimation animateOnce={true} duration={1} animateIn="fadeInRight">
                  <div className={FeaturesStyle.inner_approve}>
                    <h2>Approved</h2>
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
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </section>
   )
  }


export default Features