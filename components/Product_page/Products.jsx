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
            <h4>Our Innovation</h4>
            <p>Marra Forni offers a one-stop-shop for restaurant oven and oven equipment and appliances and other foodservice businesses. Our innovative solutions range from customizable commercial brick ovens, <Link href="/mobile"><a title="trailer catering solutions">trailer catering solutions</a></Link>, <Link href="/ventilation"><a title="venting systems">venting systems</a></Link>, and oven <Link href="/pizza-oven-tools-and-accessories"><a title="tools or cooking accessories">tools or cooking accessories</a></Link>.</p>
          </div>
        </ScrollAnimation>
        <Row className={ProductStyle.innovation}>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/stainless_facade_square_black.webp`} width="400" height="500" className="img-fluid" alt="The Rotator" />
                <div className={ProductStyle.product_info}>
                  <h5>The Rotator</h5>
                  <p>{("Touchscreen control, Turbo Burner, Custom Tile Selection, Integrated Exhaust System, Rotating Deck").substr(0,115)}{("Touchscreen control, Turbo Burner, Custom Tile Selection, Integrated Exhaust System, Rotating Deck").length > 115 && "..."}</p>
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
                  <h5>The Neapolitan</h5>
                  <p>{("Tile Upgrade, Stanless Steel Mask/ Stand, Custom Tile Applications, Turbo Burner, Door/ Fire Suppressor").substr(0,115)}{("Tile Upgrade, Stanless Steel Mask/ Stand, Custom Tile Applications, Turbo Burner, Door/ Fire Suppressor").length > 115 && "..."}</p>
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
                  <h5>Due Bocche</h5>
                  <p>{("Touchscreen Control, Durable Proprietory Brick Dec, Stainless Steel Mask, Gas Burning Accessories, Exhaust Fan").substr(0,115)}{("Touchscreen Control, Durable Proprietory Brick Dec, Stainless Steel Mask, Gas Burning Accessories, Exhaust Fan").length > 115 && "..."}</p>
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
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Big-Enclosed-BrIck-Oven-Rendering.webp`} width="400" height="500" className="img-fluid" alt="Enclosed Facade" />
                <div className={ProductStyle.product_info}>
                  <h5>Enclosed Facade</h5>
                  <p>{("Stainless Steel Mask, Gas Burning Accessories, Turbo Finish, Durable Deck, Door/ Fire Suppressor").substr(0,115)}{("Stainless Steel Mask, Gas Burning Accessories, Turbo Finish, Durable Deck, Door/ Fire Suppressor").length > 115 && "..."}</p>
                  <Link href="/enclosed-facade">
                    <a className="mf_btn" title="Enclosed Facade">Explore more</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MS_42-31.webp`} width="400" height="500" className="img-fluid" alt="Metal Square" />
                <div className={ProductStyle.product_info}>
                  <h5>Metal Square</h5>
                  <p>{("Turbo Burner, Touchscreen Control, Stainless Steel Frame, Gas Burning Accessories, Interior lights").substr(0,115)}{("Turbo Burner, Touchscreen Control, Stainless Steel Frame, Gas Burning Accessories, Interior lights").length > 115 && "..."}</p>
                  <Link href="/metal-square">
                    <a className="mf_btn" title="Metal Square">Explore more</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/EL_Square_Blue.webp`} width="400" height="500" className="img-fluid" alt="Electric Oven" />
                <div className={ProductStyle.product_info}>
                  <h5>Electric Oven</h5>
                  <p>{("Door/ Fire Suppressor, Integrated Exhaust System, Steel Stand, Exhaust Fan, Powder Coating").substr(0,115)}{("Door/ Fire Suppressor, Integrated Exhaust System, Steel Stand, Exhaust Fan, Powder Coating").length > 115 && "..."}</p>
                  <Link href="/electric">
                    <a className="mf_btn" title="Electric Oven">Explore more</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Small-Traditional-BrIck-Oven-Rendering.webp`} width="400" height="500" className="img-fluid" alt="Traditional Ovens" />
                <div className={ProductStyle.product_info}>
                  <h5>Traditional Ovens</h5>
                  <p>{("Dome Terra Cotta Finish, Brick Deck, Turbo Burner, Stainless Steel Stand, Stainless Steel Mask, Powder Coating").substr(0,115)}{("Dome Terra Cotta Finish, Brick Deck, Turbo Burner, Stainless Steel Stand, Stainless Steel Mask, Powder Coating").length > 115 && "..."}</p>
                  <Link href="/resources">
                    <a className="mf_btn" title="Traditional Ovens">Explore more</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Webp.net-resizeimage-1.webp`} width="400" height="500" className="img-fluid" alt="Mobile Trailer" />
                <div className={ProductStyle.product_info}>
                  <h5>Mobile Trailer</h5>
                  <p>{("Electric & Manual Brakes, 7 RV plug, Easy to use clam hitch, Standard Garage Size").substr(0,115)}{("Electric & Manual Brakes, 7 RV plug, Easy to use clam hitch, Standard Garage Size").length > 115 && "..."}</p>
                  <Link href="/mobile">
                    <a className="mf_btn" title="Mobile Trailer">Explore more</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
        <ScrollAnimation duration={2} animateIn="zoomIn" animateOnce={true}>
          <div className={ProductStyle.product_headingbox}>
            <h4>One-Stop-Shop For Restaurant Equipment</h4>
            <p>Marra Forni offers a comprehensive solution for the services industry with a wide range of durable Oven accessories, appliances and ventilation systems to completment Marra Forni Oven products and overall customer experience.</p>
          </div>
        </ScrollAnimation>
        <Row className={ProductStyle.equipment}>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Marra-Forni-Full-Length-integrated-Venting-Pipes.webp`} width="400" height="500" className="img-fluid" alt="Ventilation" />
                <div className={ProductStyle.product_info}>
                  <h5>Ventilation</h5>
                  <p>{("Powered Exhaust, Grade 444 Stainless Steel – mirror finish, HIgh Temperature Ducting, Plug & Play Installation, Easy to clean").substr(0,175)}{("Powered Exhaust, Grade 444 Stainless Steel – mirror finish, HIgh Temperature Ducting, Plug & Play Installation, Easy to clean").length > 175 && "..."}</p>
                  <Link href="/ventilation">
                    <a className="mf_btn" title="Ventilation">Explore more</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Marra-Forni-Two-Door-Pizza-Prep-Table-with-Rail.webp`} width="400" height="500" className="img-fluid" alt="Prep Tables" />
                <div className={ProductStyle.product_info}>
                  <h5>Prep Tables</h5>
                  <p>{("Condiments Rail, 304 S/S Interior and Exterior, 2 3/8″ Polyurethane Insulation, Casters Standard, Digital Controller, Self-Closing Doors").substr(0,175)}{("Condiments Rail, 304 S/S Interior and Exterior, 2 3/8″ Polyurethane Insulation, Casters Standard, Digital Controller, Self-Closing Doors").length > 175 && "..."}</p>
                  <Link href="/prep_tables">
                    <a className="mf_btn" title="Prep Tables">Explore more</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Marra-Forni-Spiral-Dough-Mixer.webp`} width="400" height="500" className="img-fluid" alt="Mixers" />
                <div className={ProductStyle.product_info}>
                  <h5>Mixers</h5>
                  <p>{("Enjoy excellent aeration, texture, and yield perfect elasticity for your dough with Marra Forni Forked and Spiral Mixers! Ideal for restaurants, confectioners, etc").substr(0,175)}{("Enjoy excellent aeration, texture, and yield perfect elasticity for your dough with Marra Forni Forked and Spiral Mixers! Ideal for restaurants, confectioners, etc").length > 175 && "..."}</p>
                  <Link href="/mixers">
                    <a className="mf_btn" title="Mixers">Explore more</a>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={4} md={6}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ProductStyle.product_inner}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Marble-Base-Stand.webp`} width="400" height="500" className="img-fluid" alt="Tools and Accessories" />
                <div className={ProductStyle.product_info}>
                  <h5>Tools and Accessories</h5>
                  <p>{("The perfect pizza is the result of the right ingredients, the right oven, and the right tools and accessories to get the job done! Marra Forni offers a one-stop-shop solution experience for kitchen equipment").substr(0,175)}{("The perfect pizza is the result of the right ingredients, the right oven, and the right tools and accessories to get the job done! Marra Forni offers a one-stop-shop solution experience for kitchen equipment").length > 175 && "..."}</p>
                  <Link href="/pizza-oven-tools-and-accessories">
                    <a className="mf_btn" title="Tools and Accessories">Explore more</a>
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