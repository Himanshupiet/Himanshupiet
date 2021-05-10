import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FSStyle from './Features_Services.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';

/**
* @author
* @function Features_Services
**/

const Features_Services = (props) => {
  return(
    <section className={FSStyle.section_outer}>
      <Container fluid>
        <Row>
          <Col xl={1}></Col>
          <Col xl={10}>
            <ScrollAnimation duration={1} animateIn="fadeIn" animateOnce={true}>
              <div className={FSStyle.title_box}>
                <h2>Authentic Italian Design, Manufactured In American</h2>
                <p>You don’t just buy a Brick Oven from Marra Forni, you join a growing family of passionate entrepreneurs, executives, pizzaiolos and mom-and-pops operations across the world.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation duration={1} animateIn="zoomIn" animateOnce={true}>
              <div className={FSStyle.table_outer}>
                <table>
                  <tbody>
                    <tr>
                      <td><h5>Features & Services</h5></td>
                      <td><h5>Import Ovens</h5></td>
                      <td><h5>Marra Forni Brick Ovens</h5></td>
                    </tr>
                    <tr>
                      <td>Worldwide Shipping</td>
                      <td><span className={FSStyle.check_sign}><FontAwesomeIcon icon={faCheck} /></span></td>
                      <td><span className={FSStyle.check_sign}><FontAwesomeIcon icon={faCheck} /></span></td>
                    </tr>
                    <tr>
                      <td>Precision Rotating Deck Control</td>
                      <td><span className={FSStyle.cross_sign}><FontAwesomeIcon icon={faTimes} /></span></td>
                      <td><span className={FSStyle.check_sign}><FontAwesomeIcon icon={faCheck} /></span></td>
                    </tr>
                    <tr>
                      <td>Touchscreen Control</td>
                      <td><span className={FSStyle.cross_sign}><FontAwesomeIcon icon={faTimes} /></span></td>
                      <td><span className={FSStyle.check_sign}><FontAwesomeIcon icon={faCheck} /></span></td>
                    </tr>
                    <tr>
                      <td>Auto On/Off</td>
                      <td><span className={FSStyle.cross_sign}><FontAwesomeIcon icon={faTimes} /></span></td>
                      <td><span className={FSStyle.check_sign}><FontAwesomeIcon icon={faCheck} /></span></td>
                    </tr>
                    <tr>
                      <td>Integrated Ventilation</td>
                      <td><span className={FSStyle.cross_sign}><FontAwesomeIcon icon={faTimes} /></span></td>
                      <td><span className={FSStyle.check_sign}><FontAwesomeIcon icon={faCheck} /></span></td>
                    </tr>
                    <tr>
                      <td>Consulting</td>
                      <td><span className={FSStyle.cross_sign}><FontAwesomeIcon icon={faTimes} /></span></td>
                      <td><span className={FSStyle.check_sign}><FontAwesomeIcon icon={faCheck} /></span></td>
                    </tr>
                    <tr>
                      <td>Unlimited Tile, Color & Branding Customization</td>
                      <td><span className={FSStyle.cross_sign}><FontAwesomeIcon icon={faTimes} /></span></td>
                      <td><span className={FSStyle.check_sign}><FontAwesomeIcon icon={faCheck} /></span></td>
                    </tr>
                    <tr>
                      <td>84,000 BTUs</td>
                      <td><span className={FSStyle.cross_sign}><FontAwesomeIcon icon={faTimes} /></span></td>
                      <td><span className={FSStyle.check_sign}><FontAwesomeIcon icon={faCheck} /></span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ScrollAnimation>  
          </Col>
          <Col xl={1}></Col>
        </Row>
      </Container>
    </section>
   )
  }


export default Features_Services;