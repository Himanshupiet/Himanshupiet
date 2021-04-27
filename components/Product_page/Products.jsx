import React from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import ProductStyle from './Products.module.css';
import ScrollAnimation from "react-animate-on-scroll";

/**
* @author
* @function Products
**/

const Products = (props) => {
  return(
    <section className={ProductStyle.section_outer}>
      <Container>
        <ScrollAnimation duration={2} animateIn="zoomIn" animateOnce={true}>
          <div className={ProductStyle.product_headingbox}>
            <h4>Rotator Oven</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </ScrollAnimation>
        <Row className={ProductStyle.innovation}>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/stainless_facade_square_black.webp`} width="400" height="500" className="img-fluid" alt="The Rotator" />
                <div className={ProductStyle.product_info}>
                  <h5>Enclosed Façade</h5>
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
                  <h5>Gas</h5>
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
                  <h5>Gas With Wood Chamber</h5>
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
            <h4>Ventilation</h4>
            <p>Powered Exhaust Grade 444 Stainless Steel – mirror finish HIgh Temperature Ducting Plug & Play Installation Easy to clean</p>
          </div>
        </ScrollAnimation>
        <Row className={ProductStyle.innovation}>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/stainless_facade_square_black.webp`} width="400" height="500" className="img-fluid" alt="The Rotator" />
                <div className={ProductStyle.product_info}>
                  <h5>Electric Food Cart</h5>
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
            <h4>Prep Tables</h4>
            <p>Condiments Rail 304 S/S Interior and Exterior 2 3/8″ Polyurethane Insulation Casters Standard Digital Controller Self-Closing Doors</p>
          </div>
        </ScrollAnimation>
        <Row className={ProductStyle.innovation}>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/stainless_facade_square_black.webp`} width="400" height="500" className="img-fluid" alt="The Rotator" />
                <div className={ProductStyle.product_info}>
                  <h5>Two Door Prep Table</h5>
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
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/stainless_facade_square_black.webp`} width="400" height="500" className="img-fluid" alt="The Rotator" />
                <div className={ProductStyle.product_info}>
                  <h5>Three Door Prep Table</h5>
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
            <h4>Mixers</h4>
            <p>Enjoy excellent aeration, texture, and yield perfect elasticity for your dough with Marra Forni Forked and Spiral Mixers! Ideal for restaurants, confectioners, etc</p>
          </div>
        </ScrollAnimation>
        <Row className={ProductStyle.innovation}>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/stainless_facade_square_black.webp`} width="400" height="500" className="img-fluid" alt="The Rotator" />
                <div className={ProductStyle.product_info}>
                  <h5>Spiral Mixers Mono</h5>
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
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/stainless_facade_square_black.webp`} width="400" height="500" className="img-fluid" alt="The Rotator" />
                <div className={ProductStyle.product_info}>
                  <h5>Spiral Mixers Dual</h5>
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
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/stainless_facade_square_black.webp`} width="400" height="500" className="img-fluid" alt="The Rotator" />
                <div className={ProductStyle.product_info}>
                  <h5>Fork Dough Mixers Mono</h5>
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
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/stainless_facade_square_black.webp`} width="400" height="500" className="img-fluid" alt="The Rotator" />
                <div className={ProductStyle.product_info}>
                  <h5>Fork Dough Mixers Dual</h5>
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


export default Products;