import React, {useEffect, useState} from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Col, Container, Row, Tabs, Tab } from 'react-bootstrap'
import Rotate360DStyle from './RotateImage360D.module.css'
import Rotation from 'react-rotation'

const RotateImage360D = (props) => {
  const [pennyTile, setPennyTile] = useState([])
  const [brokenTile, setBrokenTile] = useState([])

  useEffect(() => {
    let pennyTileArr=[...pennyTile];
    let brokenTileArr=[...brokenTile];
    for(let i=0; i<72;i++){
      pennyTileArr.push(`${process.env.NEXT_PUBLIC_BASE_PATH}/images/penny_tile/marra-forni-penny-tile-brick-oven-lg-${i}.webp`)
      brokenTileArr.push(`${process.env.NEXT_PUBLIC_BASE_PATH}/images/broken_tile/marra-forni-broken-tile-brick-oven-lg-${i}.webp`)
    }
     setPennyTile(pennyTileArr)
     setBrokenTile(brokenTileArr)
  },[])
  return(
    <section className={Rotate360DStyle.section_outer}>
      <Container fluid>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <Row>
              <Col lg={3}>
                <ScrollAnimation duration={2} animateIn="fadeInLeft" animateOnce={true}>
                  <div className={Rotate360DStyle.iconbox}>
                    <img alt="Rotating Deck" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MarraForniRotatingDeckicon.png`} width="68" height="68" />
                    <h3>Rotating Deck</h3>
                    <p>Increased production capacity, streamline cooking operation, simple to use even with limited skill set.</p>
                  </div>
                  <div className={Rotate360DStyle.iconbox}>
                    <img alt="Plug & Play Ventilation" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Marra-Forni-Plug-and-Play-Ventilation-icon.webp`} width="68" height="68" />
                    <h3>Plug & Play Ventilation</h3>
                    <p>Compressed Wool Insulation, Double Wall Venting and 103 and 1978 UL listed integrated venting</p>
                  </div>
                </ScrollAnimation>
              </Col>
              <Col lg={6}>
                <ScrollAnimation duration={2} animateIn="fadeIn" animateOnce={true}>
                  <Tabs defaultActiveKey="RedPennyTile" id="uncontrolled-tab-example">
                    <Tab eventKey="RedPennyTile" title="Red Penny Tile">
                      <Rotation
                        reverse={true}
                        cycle={true}
                        scroll={true}
                        className='rotation'>
                      {pennyTile.map((val, i) => (
                          <img src={val} alt='' key={i}/>
                      ))}
                      </Rotation>
                    </Tab>
                    <Tab eventKey="RedBrokenTile" title="Red Broken Tile">
                      <Rotation
                          reverse={true}
                          cycle={true}
                          scroll={true}
                          className='rotation'>
                        {brokenTile.map((val, i) => (
                            <img src={val} alt='' key={i}/>
                        ))}
                      </Rotation>
                    </Tab>
                  </Tabs>
                </ScrollAnimation>
              </Col>
              <Col lg={3}>
                <ScrollAnimation duration={2} animateIn="fadeInRight" animateOnce={true}>
                  <div className={Rotate360DStyle.iconbox}>
                    <img alt="TouchScreen" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Marra-Forni-Plug-and-Play-Ventilation-icon.webp`} width="68" height="68" />
                    <h3>TouchScreen</h3>
                    <p>Control the temperature, rotation speed, auto on/off all from the integrated touchsreen</p>
                  </div>
                  <div className={Rotate360DStyle.iconbox}>
                    <img alt="84,000 BTU" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MarraForniRotatingDeckicon.png`} width="68" height="68" />
                    <h3>84,000 BTU</h3>
                    <p>Lower energy bills enable you to invest in the grow of you business</p>
                  </div>
                </ScrollAnimation>
              </Col>
              <Col lg={1}></Col>
            </Row>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </section>
   )
  }


export default RotateImage360D;