import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductStyle from './Products.module.css'

const Products = (props) => {
  return(
    <section className={ProductStyle.section_outer}>
      <Container>
        <div className={ProductStyle.heading_inner}>
          <h4>The Right Tool For The Right Recipe</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <Row>
          <Col lg={6}>
            <div className={ProductStyle.product_main}>
              <Row>
                <Col sm={6}>
                  <div className={ProductStyle.image_box}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Red-Peel.png`}
                      alt="Picture of the author"
                      width={170}
                      height={300}
                      className='img-fluid'
                    />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className={ProductStyle.info_box}>
                    <h5>Aluminum Loading/Unloading Peels</h5>
                    <ul>
                      <li>Perforated Rectangular, 14.5” with 59” handle –# MF.A-37RF</li>
                      <li>Perforated Rectangular 12.5” with 59” handle – # MF.A-32RF</li>
                      <li>Replacement Peel, 12.5”</li>
                      <li>Replacement Peel, 14.5”</li>
                      <li>Replacement Handle 38”</li>
                      <li>Replacement Handle 59”</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div className={ProductStyle.product_main}>
              <Row>
                <Col sm={6}>
                  <div className={ProductStyle.image_box}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Round-Steel-Peel.png`}
                      alt="Picture of the author"
                      width={170}
                      height={300}
                      className='img-fluid'
                    />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className={ProductStyle.info_box}>
                    <h5>Aluminum Turning Peels</h5>
                    <ul>
                      <li>Perforated Round 8” with 59” handle – #MF.120</li>
                      <li>Perforated Round 10” with 59” handle – #MF.126</li>
                      <li>Replacement Peel, 8”</li>
                      <li>Replacement Peel, 10″</li>
                      <li>Replacement Handle 38”</li>
                      <li>Replacement Handle 59″</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <div className={ProductStyle.heading_inner}>
          <h4>Adjustable Copper Brush</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <Row>
          <Col lg={6}>
            <div className={ProductStyle.product_main}>
              <Row>
                <Col sm={6}>
                  <div className={ProductStyle.image_box}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Brush-1.png`}
                      alt="Picture of the author"
                      width={170}
                      height={300}
                      className='img-fluid'
                    />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className={ProductStyle.info_box}>
                    <h5>Adjustable Brush</h5>
                    <ul>
                      <li>Adjustable brush, copper bristles with 59″ handle – #AK-D54</li>
                      <li>Wire cleaning brush, copper bristles with 59″ handle – #AC-SP</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div className={ProductStyle.product_main}>
              <Row>
                <Col sm={6}>
                  <div className={ProductStyle.image_box}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/BrushMF.png`}
                      alt="Picture of the author"
                      width={170}
                      height={300}
                      className='img-fluid'
                    />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className={ProductStyle.info_box}>
                    <h5>Replacement Brush Head</h5>
                    <ul>
                      <li>Replacement brush head, copper bristles – #SPAZ-01</li>
                      <li>Adjustable brush, copper bristles with 59″ handle – #PTL-06</li>
                      <li>Replacement Brush handle 59″</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <div className={ProductStyle.heading_inner}>
          <h4>Pizza Peel Kit</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <Row>
          <Col lg={6}>
            <div className={ProductStyle.product_main}>
              <Row>
                <Col sm={6}>
                  <div className={ProductStyle.image_box}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Marble-Base-Stand.jpg`}
                      alt="Picture of the author"
                      width={170}
                      height={300}
                      className='img-fluid'
                    />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className={ProductStyle.info_box}>
                    <h5>Standard Peel Kit</h5>
                    <ul>
                      <li>Standard Peel kit – Part #TKBASIC (includes (1) loading peel, (1) brush, (1) unloading peel, (1) bubble popper)</li>
                      <li>The kit does NOT include double-sided dual stand</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div className={ProductStyle.product_main}>
              <Row>
                <Col sm={6}>
                  <div className={ProductStyle.image_box}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Marble-Base-Stand.jpg`}
                      alt="Picture of the author"
                      width={170}
                      height={300}
                      className='img-fluid'
                    />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className={ProductStyle.info_box}>
                    <h5>Deluxe Peel Kit</h5>
                    <ul>
                      <li>Deluxe Peel Kit – Part #TKPREMIUM (includes (2) loading peels, (2) unloading peels, (2) brushes, (2) bubble poppers, (1) Peel Stand)</li>
                      <li>Dual Sided Marble Base Stand (Supports tool length of up to 80″) – Part #MFPPC1618-G</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
   )
  }


export default Products