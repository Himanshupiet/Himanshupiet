import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import AuthenticStyle from './Authentic.module.css'
import Link from 'next/link'

const Authentic = (props) => {
    return (
        <section className={AuthenticStyle.section_outer}>
            <Container fluid>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <Row>
                            {/*<Col */}
                            {/*  lg={6}*/}
                            {/*  className={AuthenticStyle.content_box}*/}
                            {/*>*/}
                            {/*  <ScrollAnimation */}
                            {/*    duration={1} */}
                            {/*    animateIn='fadeInUp' */}
                            {/*    animateOnce={true}*/}
                            {/*  >*/}
                            {/*    <h1>Authentic Handcrafted Brick Ovens</h1>*/}
                            {/*    <h2>Welcome To The Marra Forni Nation!</h2>*/}
                            {/*    <p>Where Artisan intersects with Technology and Innovation.  Each Marra Forni brick oven is uniquely handcrafted and built, brick by brick, resulting in the industry’s highest quality, most energy-efficient brick oven cooking solution available.  See why Marra Forni is the leading brick oven cooking solution manufacturer in the commercial foodservice industry.  We Create, We Innovate, We Inspire!</p>*/}
                            {/*    <p>Visit any of our culinary demonstration locations and test kitchen locations located throughout the US, Canada and Mexico and with International locations in Italy and Dubai.</p>*/}
                            {/*    <Link */}
                            {/*      href='/'>*/}
                            {/*      <a */}
                            {/*        className='mf_btn' */}
                            {/*        title='Visit a Test Kitchen'*/}
                            {/*      >*/}
                            {/*        Visit a Test Kitchen*/}
                            {/*      </a>*/}
                            {/*    </Link>*/}
                            {/*  </ScrollAnimation>*/}
                            {/*</Col>*/}
                            {/*<Col */}
                            {/*  lg={6}*/}
                            {/*  className={AuthenticStyle.image_box}*/}
                            {/*>*/}
                            {/*  <ScrollAnimation */}
                            {/*    duration={1} */}
                            {/*    animateIn='fadeInRight' */}
                            {/*    animateOnce={true}*/}
                            {/*  >*/}
                            {/*    <img */}
                            {/*      className='img-fluid' */}
                            {/*      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/firedupbrewing-banner.webp`} */}
                            {/*      alt='Commercial Brick Oven' */}
                            {/*      width='480' */}
                            {/*      height='546' */}
                            {/*    />*/}
                            {/*  </ScrollAnimation>*/}
                            {/*</Col>*/}
                            {/*Extra Data*/}
                            <div className="col-md-7">
                                <h1 className='pt-4'>Authentic Handcrafted Brick Ovens</h1>
                                <p>
                                    Where Artisan intersects with Technology and Innovation. Each Marra
                                    Forni brick oven is uniquely handcrafted and built, brick by brick,
                                    resulting in the industry’s highest quality, most energy-efficient
                                    brick oven cooking solution available. See why Marra Forni is the
                                    leading brick oven cooking solution manufacturer in the commercial
                                    foodservice industry.
                                </p>
                                {/*<p>*/}
                                {/*    Visit any of our culinary demonstration locations and test kitchen*/}
                                {/*    locations located throughout the US, Canada and Mexico and with*/}
                                {/*    International locations in Italy and Dubai.*/}
                                {/*</p>*/}
                                <button className="btn btn-danger main-btn">Visit A Test Kitchen</button>
                            </div>
                            <div className="col-md-5">
                                <img
                                    className="object-cover object-center rounded"
                                    alt="hero"
                                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/firedupbrewing-banner.webp`}
                                    height="500"
                                    width="400"
                                />
                            </div>
                        </Row>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <section className={`${AuthenticStyle.main_data} mt-5`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <h1>High-Volume Cooking</h1>
                                <p>
                                    Grow your business and expand your menu with Marra Forni’s Brick
                                    Oven Cooking Solutions.
                                </p>
                                <button className="btn btn-danger main-btn mt-2">
                                    Build Your Own
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <section className={`${AuthenticStyle.pricing}`} id="pricingdiv"
                         style={{background: 'linear-gradient(160deg, #e31422 55%, #fff 0%)'}}>
                    {/*<div className="container headings text-center">*/}
                    {/*    <h1 className="test-center font-weight-bold">Best Out Product</h1>*/}
                    {/*</div>*/}
                    <div className="container pt-5">
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <div className={`${AuthenticStyle.card_style} card text-center`}>
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/bice-500.webp`}
                                        className="card-img-top" alt="..." width='376'
                                        height='498'/>
                                    <p className="card-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Quibusdam hic sed ullam.
                                    </p>
                                    <button className='p-3' style={{background:'#e31422'}}>Discover the Oven</button>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className={`${AuthenticStyle.card_style} card text-center`}>
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Neapolitan_Broken_Red.webp`}
                                        className="card-img-top" alt="..." width='376'
                                        height='498'/>
                                    <p className="card-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Quibusdam hic sed ullam.
                                    </p>
                                    <button className='p-3' style={{background:'#e31422'}}>Discover the Oven</button>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className={`${AuthenticStyle.card_style} card text-center`}>
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/WholeFoods.webp`}
                                        className="card-img-top" alt="..." width='376'
                                        height='498'/>
                                    <p className="card-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Quibusdam hic sed ullam.
                                    </p>
                                    <button className='p-3' style={{background:'#e31422'}}>Discover the Oven</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<div className='container mt-5'>*/}
                {/*    <div className='row'>*/}
                {/*        /!*<div className="card-group">*!/*/}
                {/*        <div className='col-lg-4'>*/}
                {/*            <div className={`${AuthenticStyle.main_card} card`}>*/}
                {/*                <img*/}
                {/*                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/bice-500.webp`}*/}
                {/*                    className="card-img-top" alt="..." width='376'*/}
                {/*                    height='498'/>*/}
                {/*                <div className="card-body text-center">*/}
                {/*                    <h5 className="card-title">Rotator</h5>*/}
                {/*                    <p className="card-text">This is a wider card with supporting text below as a*/}
                {/*                        natural.</p>*/}
                {/*                    <button className='mf_btn'>Discover the Oven</button>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className='col-lg-4'>*/}
                {/*            <div className={`${AuthenticStyle.main_card} card`}>*/}
                {/*                <img*/}
                {/*                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Neapolitan_Broken_Red.webp`}*/}
                {/*                    className="card-img-top" alt="..."/>*/}
                {/*                <div className="card-body text-center">*/}
                {/*                    <h5 className="card-title">Due Bocche</h5>*/}
                {/*                    <p className="card-text">This is a wider card with supporting text below as a*/}
                {/*                        natural.</p>*/}
                {/*                    <button className='mf_btn'>Discover the Oven</button>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className='col-lg-4'>*/}
                {/*            <div className={`${AuthenticStyle.main_card} card`}>*/}
                {/*                <img*/}
                {/*                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/WholeFoods.webp`}*/}
                {/*                    className="card-img-top" alt="..."/>*/}
                {/*                <div className="card-body text-center">*/}
                {/*                    <h5 className="card-title">Neapolitan</h5>*/}
                {/*                    <p className="card-text">This is a wider card with supporting text below as a*/}
                {/*                        natural.</p>*/}
                {/*                    <button className='mf_btn'>Discover the Oven</button>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        /!*</div>*!/*/}
                {/*    </div>*/}
                {/*</div>*/}
                <section className={`${AuthenticStyle.main_data} mt-5`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-center">
                                    <h1>Explore Our Industrial Kitchen Appliances</h1>
                                    <p>Slicers, Mixers & Prep Tables</p>
                                    <button className="btn btn-danger main-btn mt-2">Get A Quote</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`${AuthenticStyle.dap}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/One-Stop-Shop-2.webp`}
                                     style={{paddingTop: "70px"}}/>
                            </div>
                            <div className="col-md-7" style={{paddingTop: '60px', paddingLeft: '70px'}}>
                                <h1>Reliable Appliances</h1>
                                <p>
                                    Marra Forni forked and spiral dough mixers are the right solution
                                    to achieve the perfect pizza crust by allowing the dough to
                                    oxygenate quickly without warming or overbeating. Available in a
                                    variety of sizes, depending upon production requirements these
                                    mixers are durable and offer user-friendly features including a
                                    tilting mixer head, protective bowl screen guard, and simple
                                    on/off controls.
                                </p>
                                <p>
                                    Marra Forni offers refrigerated pizza prep tables in 2 and 3 door
                                    configurations to complement any high-volume pizza operation. With
                                    optional refrigerated stainless steel condiment rails and a marble
                                    countertop, it’s the optimal pizza prep solution.
                                </p>
                                <button className="btn btn-danger main-btn mt-3">Get A Quote</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className={`${AuthenticStyle.main_data}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <h1>Customize Your Commercial Brick Oven, Add Logo!!</h1>
                                <p>Premium and Beautiful Tile Options.</p>
                                <button className="btn btn-danger main-btn mt-2">
                                    Build Your Own Oven
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}


export default Authentic