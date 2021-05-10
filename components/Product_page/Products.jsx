import React, { useEffect } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from '../../actions/product'

import { Col, Container, Row } from 'react-bootstrap';

import ProductStyle from './Products.module.css';
import ScrollAnimation from "react-animate-on-scroll";


const Products = (props) => {

  useEffect(() => {
    props.productActions.getAllProduct()
    console.log(props)
  },[])

  return(
    <section className={ProductStyle.section_outer}>
      <Container>
        <ScrollAnimation duration={2} animateIn="zoomIn" animateOnce={true}>
          <div className={ProductStyle.product_headingbox}>
            <h2>Ovens</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </ScrollAnimation>
        <Row className={ProductStyle.innovation}>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/stainless_facade_square_black.webp`} width="400" height="500" className="img-fluid" alt="The Rotator" />
                <div className={ProductStyle.product_info}>
                  <h3>The Rotator</h3>
                  <p>{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s").substr(0,115)}{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").length > 115 && "..."}</p>
                  <Link href="/discover-the-rotator-brick-oven">
                    <a className="mf_btn" title="The Rotator">Explore more</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Blu-Penny-NP.webp`} width="400" height="500" className="img-fluid" alt="The Neapolitan" />
                <div className={ProductStyle.product_info}>
                  <h3>The Neapolitan</h3>
                  <p>{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s").substr(0,115)}{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").length > 115 && "..."}</p>
                  <Link href="/neapolitan">
                    <a className="mf_btn" title="The Neapolitan">Explore more</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Due_Bocche_White_Broken.webp`} width="400" height="500" className="img-fluid" alt="Due Bocche" />
                <div className={ProductStyle.product_info}>
                  <h3>Due Bocche</h3>
                  <p>{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s").substr(0,115)}{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").length > 115 && "..."}</p>
                  <Link href="/due-bocche">
                    <a className="mf_btn" title="Due Bocche">Explore more</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/EL_Square_Blue.webp`} width="400" height="500" className="img-fluid" alt="Due Bocche" />
                <div className={ProductStyle.product_info}>
                  <h3>Electric Oven</h3>
                  <p>{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s").substr(0,115)}{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").length > 115 && "..."}</p>
                  <Link href="/due-bocche">
                    <a className="mf_btn" title="Due Bocche">Explore more</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Big-Enclosed-BrIck-Oven-Rendering.webp`} width="400" height="500" className="img-fluid" alt="Due Bocche" />
                <div className={ProductStyle.product_info}>
                  <h3>Enclosed Facade</h3>
                  <p>{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s").substr(0,115)}{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").length > 115 && "..."}</p>
                  <Link href="/due-bocche">
                    <a className="mf_btn" title="Due Bocche">Explore more</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Webp.net-resizeimage-1.webp`} width="400" height="500" className="img-fluid" alt="Due Bocche" />
                <div className={ProductStyle.product_info}>
                  <h3>Mobile Trailer</h3>
                  <p>{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s").substr(0,115)}{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").length > 115 && "..."}</p>
                  <Link href="/due-bocche">
                    <a className="mf_btn" title="Due Bocche">Explore more</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MS_42-31.webp`} width="400" height="500" className="img-fluid" alt="Due Bocche" />
                <div className={ProductStyle.product_info}>
                  <h3>Metal Square</h3>
                  <p>{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s").substr(0,115)}{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").length > 115 && "..."}</p>
                  <Link href="/due-bocche">
                    <a className="mf_btn" title="Due Bocche">Explore more</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
        <ScrollAnimation duration={2} animateIn="zoomIn" animateOnce={true}>
          <div className={ProductStyle.product_headingbox}>
            <h2>Ventilation</h2>
            <p>Powered Exhaust Grade 444 Stainless Steel – mirror finish HIgh Temperature Ducting Plug & Play Installation Easy to clean</p>
          </div>
        </ScrollAnimation>
        <Row className={ProductStyle.innovation}>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Marra-Forni-Full-Length-integrated-Venting-Pipes.webp`} width="400" height="500" className="img-fluid" alt="The Rotator" />
                <div className={ProductStyle.product_info}>
                  <h3>Venting System</h3>
                  <p>{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s").substr(0,115)}{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").length > 115 && "..."}</p>
                  <Link href="/discover-the-rotator-brick-oven">
                    <a className="mf_btn" title="The Rotator">Explore more</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
        <ScrollAnimation duration={2} animateIn="zoomIn" animateOnce={true}>
          <div className={ProductStyle.product_headingbox}>
            <h2>Prep Tables</h2>
            <p>Condiments Rail 304 S/S Interior and Exterior 2 3/8″ Polyurethane Insulation Casters Standard Digital Controller Self-Closing Doors</p>
          </div>
        </ScrollAnimation>
        <Row className={ProductStyle.innovation}>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`https://marraforni.com/wp/wp-content/uploads/2017/11/Marra-Forni-Three-Door-Pizza-Prep-Table-without-Rail.jpg`} width="400" height="500" className="img-fluid" alt="The Rotator" />
                <div className={ProductStyle.product_info}>
                  <h3>Refrigerated Prep Table</h3>
                  <p>{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s").substr(0,115)}{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").length > 115 && "..."}</p>
                  <Link href="/discover-the-rotator-brick-oven">
                    <a className="mf_btn" title="The Rotator">Explore more</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`https://marraforni.com/wp/wp-content/uploads/2017/11/Marra-Forni-Three-Door-Pizza-Prep-Table-with-Rail.jpg`} width="400" height="500" className="img-fluid" alt="The Rotator" />
                <div className={ProductStyle.product_info}>
                  <h3>Refrigerated Condiment Rail</h3>
                  <p>{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s").substr(0,115)}{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").length > 115 && "..."}</p>
                  <Link href="/discover-the-rotator-brick-oven">
                    <a className="mf_btn" title="The Rotator">Explore more</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
        <ScrollAnimation duration={2} animateIn="zoomIn" animateOnce={true}>
          <div className={ProductStyle.product_headingbox}>
            <h2>Mixers</h2>
            <p>Enjoy excellent aeration, texture, and yield perfect elasticity for your dough with Marra Forni Forked and Spiral Mixers! Ideal for restaurants, confectioners, etc</p>
          </div>
        </ScrollAnimation>
        <Row className={ProductStyle.innovation}>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`https://marraforni.com/wp/wp-content/uploads/2017/11/Marra-Forni-Spiral-Dough-Mixer-IM-model.jpg`} width="400" height="500" className="img-fluid" alt="The Rotator" />
                <div className={ProductStyle.product_info}>
                  <h3>Spiral Dough Mixers</h3>
                  <p>{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s").substr(0,115)}{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").length > 115 && "..."}</p>
                  <Link href="/discover-the-rotator-brick-oven">
                    <a className="mf_btn" title="The Rotator">Explore more</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`https://marraforni.com/wp/wp-content/uploads/2017/11/Marra-Forni-Forked-Dough-Mixer.jpg`} width="400" height="500" className="img-fluid" alt="The Rotator" />
                <div className={ProductStyle.product_info}>
                  <h3>Fork Dough Mixers</h3>
                  <p>{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s").substr(0,115)}{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").length > 115 && "..."}</p>
                  <Link href="/discover-the-rotator-brick-oven">
                    <a className="mf_btn" title="The Rotator">Explore more</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </section>
   )
  }

const mapStateToProps = ({ product }) => {
  return { product }
}

const mapDispatchToProps = dispatch => {
  return {
    productActions: bindActionCreators(productActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Products))
