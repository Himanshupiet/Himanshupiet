import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Col, Container, Row, Tabs, Tab } from 'react-bootstrap';
import Rotate360DStyle from './RotateImage360D.module.css';

/**
* @author
* @function RotateImage360D
**/

const RotateImage360D = (props) => {
  return(
    <section className={Rotate360DStyle.section_outer}>
      <Container>
        <Row>
          <Col lg={3}>
            <ScrollAnimation duration={2} animateIn="fadeInLeft" animateOnce={true}>
              <div className={Rotate360DStyle.iconbox}>
                <img alt="Rotating Deck" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MarraForniRotatingDeckicon.png`} width="68" height="68" />
                <h5>Rotating Deck</h5>
                <p>Increased production capacity, streamline cooking operation, simple to use even with limited skill set.</p>
              </div>
              <div className={Rotate360DStyle.iconbox}>
                <img alt="Plug & Play Ventilation" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Marra-Forni-Plug-and-Play-Ventilation-icon.webp`} width="68" height="68" />
                <h5>Plug & Play Ventilation</h5>
                <p>Compressed Wool Insulation, Double Wall Venting and 103 and 1978 UL listed integrated venting</p>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={6}>
            <ScrollAnimation duration={2} animateIn="fadeIn" animateOnce={true}>
              <Tabs defaultActiveKey="RedPennyTile" id="uncontrolled-tab-example">
                <Tab eventKey="RedPennyTile" title="Red Penny Tile">
                Red Penny Tile
                </Tab>
                <Tab eventKey="RedBrokenTile" title="Red Broken Tile">
                Red Broken Tile
                </Tab>
              </Tabs>
            </ScrollAnimation>
          </Col>
          <Col lg={3}>
            <ScrollAnimation duration={2} animateIn="fadeInRight" animateOnce={true}>
              <div className={Rotate360DStyle.iconbox}>
                <img alt="TouchScreen" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Marra-Forni-Plug-and-Play-Ventilation-icon.webp`} width="68" height="68" />
                <h5>TouchScreen</h5>
                <p>Control the temperature, rotation speed, auto on/off all from the integrated touchsreen</p>
              </div>
              <div className={Rotate360DStyle.iconbox}>
                <img alt="84,000 BTU" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MarraForniRotatingDeckicon.png`} width="68" height="68" />
                <h5>84,000 BTU</h5>
                <p>Lower energy bills enable you to invest in the grow of you business</p>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </section>
   )
  }


export default RotateImage360D;