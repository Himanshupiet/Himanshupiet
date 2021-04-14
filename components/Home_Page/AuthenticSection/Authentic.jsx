import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ScrollAnimation from "react-animate-on-scroll";
import AuthenticStyle from './Authentic.module.css';

/**
* @author
* @function Authentic
**/

const Authentic = (props) => {
  return(
    <section className={AuthenticStyle.section_outer}>
      <Container>
        <Row>
          <Col lg={6} className={AuthenticStyle.content_box}>
            <ScrollAnimation duration={1} animateIn="fadeInUp" animateOnce={true}>
              <h2>Authentic Handcrafted</h2>
              <h3>Commercial Brick Ovens</h3>
              <p>Authentic Handcrafted <Link href="/product"><a title="Commercial Brick Ovens">Commercial Brick Ovens</a></Link>:&nbsp; <strong>Welcome To The Marra Forni Nation!</strong>&nbsp; Where Artisan intersects with Technology and Innovation.&nbsp; Each Marra Forni <Link href="/product"><a title="Commercial Pizza oven">Commercial Pizza oven</a></Link>&nbsp;is uniquely handcrafted and built, brick by brick, resulting in the industry’s highest quality, most energy-efficient brick oven cooking solution available.&nbsp; See why Marra Forni is the <Link href="https://www.restaurant.org/news/pressroom/press-releases/2018-kitchen-innovations-awards"><a title="leading brick oven" target="_blank" rel="noopener">leading brick oven cooking solution manufacturer</a></Link> in the commercial foodservice industry.&nbsp; We Create, We Innovate, We Inspire!</p>
              <p>Our Wide range of traditional <Link href="/product"><a title="Stone Hearth Oven">Stone Hearth Oven</a></Link> is recognized worldwide for their patronizing cooking ability, efficiency and versatility of design and cooking solutions. We provide best customization and options as wood fired, gas fired or a combination of wood and gas.</p>
              <p>Visit any of our culinary demonstration locations and <Link href="/pdf/Test-Kitchens.pdf"><a title="test kitchen locations" target="_blank">test kitchen locations</a></Link> located throughout the US, Canada, and Mexico and with International locations in Italy and Dubai.</p>
            </ScrollAnimation>
          </Col>
          <Col lg={6} className={AuthenticStyle.image_box}>
            <ScrollAnimation duration={1} animateIn="fadeInRight" animateOnce={true}>
              <img className="img-fluid" src="./images/firedupbrewing-banner.webp" alt="Commercial Brick Oven" width="480" height="546" />
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </section>
   )
  }


export default Authentic;