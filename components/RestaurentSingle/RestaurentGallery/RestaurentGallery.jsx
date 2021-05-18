import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RestaurentStyle from './RestaurentGallery.module.css'

const RestaurentGallery = (props) => {
  return(
    <>
    <Container fluid className={RestaurentStyle.top_banner}>
      <Row>
        <Col lg={1}></Col>
        <Col lg={10}>
          <h1>Pi Co.</h1>
          <p>Pi Co offers quality, made-to-order, Neapolitan-style pizzas in a unique quick-serve experience. Visit Pi Co for more tasty pizzas, salads, gluten-free ‘za and meals</p>
          <div className={RestaurentStyle.heading_box}>
            <p>Category: Rotator</p>
            <p>Date: January 19, 2018</p>
          </div>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Container>  
    <Container fluid>
      <Row>
        <Col lg={1}></Col>
        <Col lg={10}>
          <div className={RestaurentStyle.gallery_outer_main}>
            <div className={RestaurentStyle.gallery_outer}>
              <div className={RestaurentStyle.gallery_inner}>
                <div className={RestaurentStyle.gallery_inner_main}>
                  <img src={`https://marraforni.com/wp/wp-content/uploads/2017/10/Marra-Forni-Rotator-Brick-Oven-Client-Pizzeria-Vetri-Owner.jpg`} alt={''} width="400" height="300" className="img-fluid" />
                  <div className={RestaurentStyle.gallery_hover}></div>
                </div>
              </div>
              <div className={RestaurentStyle.gallery_inner}>
                <div className={RestaurentStyle.gallery_inner_main}>
                  <img src={`https://marraforni.com/wp/wp-content/uploads/2017/10/Marra-Forni-Rotator-Brick-Oven-Client-Pizzeria-Vetri-Oven.jpg`} alt={''} width="400" height="300" className="img-fluid" />
                  <div className={RestaurentStyle.gallery_hover}></div>
                </div>
              </div>
              <div className={RestaurentStyle.gallery_inner}>
                <div className={RestaurentStyle.gallery_inner_main}>
                  <img src={`https://marraforni.com/wp/wp-content/uploads/2017/10/Marra-Forni-Rotator-Brick-Oven-Client-Pizzeria-Vetri-Pizza-Makers.jpg`} alt={''} width="400" height="300" className="img-fluid" />
                  <div className={RestaurentStyle.gallery_hover}></div>
                </div>
              </div>
              <div className={RestaurentStyle.gallery_inner}>
                <div className={RestaurentStyle.gallery_inner_main}>
                  <img src={`https://marraforni.com/wp/wp-content/uploads/2017/10/Marra-Forni-Rotator-Brick-Oven-Client-Pizzeria-Vetri-Pizza-Making.jpg`} alt={''} width="400" height="300" className="img-fluid" />
                  <div className={RestaurentStyle.gallery_hover}></div>
                </div>
              </div>
              <div className={RestaurentStyle.gallery_inner}>
                <div className={RestaurentStyle.gallery_inner_main}>
                  <img src={`https://marraforni.com/wp/wp-content/uploads/2018/01/fresh-pico-pizza.jpg`} alt={''} width="400" height="300" className="img-fluid" />
                  <div className={RestaurentStyle.gallery_hover}></div>
                </div>
              </div>
              <div className={RestaurentStyle.gallery_inner}>
                <div className={RestaurentStyle.gallery_inner_main}>
                  <img src={`https://marraforni.com/wp/wp-content/uploads/2018/01/lines-at-pico.jpg`} alt={''} width="400" height="300" className="img-fluid" />
                  <div className={RestaurentStyle.gallery_hover}></div>
                </div>
              </div>
              <div className={RestaurentStyle.gallery_inner}>
                <div className={RestaurentStyle.gallery_inner_main}>
                  <img src={`https://marraforni.com/wp/wp-content/uploads/2018/01/pico-rotator-brick-oven-in-action.jpg`} alt={''} width="400" height="300" className="img-fluid" />
                  <div className={RestaurentStyle.gallery_hover}></div>
                </div>
              </div>
              <div className={RestaurentStyle.gallery_inner}>
                <div className={RestaurentStyle.gallery_inner_main}>
                  <img src={`https://marraforni.com/wp/wp-content/uploads/2018/01/pico-rotator-brick-oven.jpg`} alt={''} width="400" height="300" className="img-fluid" />
                  <div className={RestaurentStyle.gallery_hover}></div>
                </div>
              </div>
              <div className={RestaurentStyle.gallery_inner}>
                <div className={RestaurentStyle.gallery_inner_main}>
                  <img src={`https://marraforni.com/wp/wp-content/uploads/2018/01/IMG_1198.jpg`} alt={''} width="400" height="300" className="img-fluid" />
                  <div className={RestaurentStyle.gallery_hover}></div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Container>
    </>
   )
  }


export default RestaurentGallery