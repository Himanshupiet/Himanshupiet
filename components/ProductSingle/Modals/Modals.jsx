import React from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import ModalsStyle from './Modals.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

/**
* @author
* @function Modals
**/

const Modals = (props) => {
  return(
    <section className={ModalsStyle.section_outer}>
      <Container>
        <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
          <div className={ModalsStyle.title_box}>
            <h2>Fast-Casual, Franchise, Chains, etc…</h2>
            <h3>Whatever your needs, there’s a Rotator brick oven for you.</h3>
          </div>
        </ScrollAnimation>
        <Row>
          <Col lg={3} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ModalsStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/UrbanBrick.webp`} width="400" height="500" className="img-fluid" alt="Rotator RT90" />
                <div className={ModalsStyle.product_info}>
                  <h5>Rotator RT90</h5>
                  <p>{("Perfect brick oven for trailers and mobile operations.").substr(0,90)}{("Perfect brick oven for trailers and mobile operations.").length > 90 && "..."}</p>
                  <Link href="/pdf/RT90.pdf">
                    <a className="mf_btn" target="_blank" title="Rotator RT90">Quick Specs</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={3} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ModalsStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/WholeFoods.webp`} width="400" height="500" className="img-fluid" alt="Rotator RT110" />
                <div className={ModalsStyle.product_info}>
                  <h5>Rotator RT110</h5>
                  <p>{("Fast-casuals, small mom-and-pops operations.").substr(0,90)}{("Fast-casuals, small mom-and-pops operations.").length > 90 && "..."}</p>
                  <Link href="/pdf/RT90.pdf">
                    <a className="mf_btn" target="_blank" title="Rotator RT110">Quick Specs</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={3} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ModalsStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Wegmans.webp`} width="400" height="500" className="img-fluid" alt="Rotator RT130" />
                <div className={ModalsStyle.product_info}>
                  <h5>Rotator RT130</h5>
                  <p>{("Great for Universities, Hotels, Stadiums, etc").substr(0,90)}{("Great for Universities, Hotels, Stadiums, etc").length > 90 && "..."}</p>
                  <Link href="/pdf/RT90.pdf">
                    <a className="mf_btn" target="_blank" title="Rotator RT130">Quick Specs</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={3} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ModalsStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/800-Degrees.webp`} width="400" height="500" className="img-fluid" alt="Rotator RT150" />
                <div className={ModalsStyle.product_info}>
                  <h5>Rotator RT150</h5>
                  <p>{("Chains and Franchises where performance is key.").substr(0,90)}{("Chains and Franchises where performance is key.").length > 90 && "..."}</p>
                  <Link href="/pdf/RT90.pdf">
                    <a className="mf_btn" target="_blank" title="Rotator RT150">Quick Specs</a>
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


export default Modals;