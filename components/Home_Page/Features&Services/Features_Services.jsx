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
      <Container>
        <Row>
          <Col xl={1}></Col>
          <Col xl={10}>
            <ScrollAnimation duration={1} animateIn="fadeIn" animateOnce={true}>
              <div className={FSStyle.title_box}>
                <h3>Authentic Italian Design, Manufactured In American</h3>
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
                      <td><FontAwesomeIcon icon={faCheck} /></td>
                      <td><FontAwesomeIcon icon={faCheck} /></td>
                    </tr>
                    <tr>
                      <td>Precision Rotating Deck Control</td>
                      <td><FontAwesomeIcon icon={faTimes} /></td>
                      <td><FontAwesomeIcon icon={faCheck} /></td>
                    </tr>
                    <tr>
                      <td>Touchscreen Control</td>
                      <td><FontAwesomeIcon icon={faTimes} /></td>
                      <td><FontAwesomeIcon icon={faCheck} /></td>
                    </tr>
                    <tr>
                      <td>Auto On/Off</td>
                      <td><FontAwesomeIcon icon={faTimes} /></td>
                      <td><FontAwesomeIcon icon={faCheck} /></td>
                    </tr>
                    <tr>
                      <td>Integrated Ventilation</td>
                      <td><FontAwesomeIcon icon={faTimes} /></td>
                      <td><FontAwesomeIcon icon={faCheck} /></td>
                    </tr>
                    <tr>
                      <td>Consulting</td>
                      <td><FontAwesomeIcon icon={faTimes} /></td>
                      <td><FontAwesomeIcon icon={faCheck} /></td>
                    </tr>
                    <tr>
                      <td>Unlimited Tile, Color & Branding Customization</td>
                      <td><FontAwesomeIcon icon={faTimes} /></td>
                      <td><FontAwesomeIcon icon={faCheck} /></td>
                    </tr>
                    <tr>
                      <td>84,000 BTUs</td>
                      <td><FontAwesomeIcon icon={faTimes} /></td>
                      <td><FontAwesomeIcon icon={faCheck} /></td>
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