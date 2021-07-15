import Link from 'next/link'
import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import ScrollAnimation from "react-animate-on-scroll"
import ReliableStyle from './Reliable.module.css'

const Reliable = (props) => {
    return (
        <section
            className={ReliableStyle.section_outer}>
            <Container>
                <Row>
                    {/*<Col lg={1}></Col>*/}
                    <Col lg={12}>
                        <Row
                            className='align-items-center'>
                            <Col
                                lg={6}
                                className={ReliableStyle.image_box}
                            >
                                <ScrollAnimation
                                    duration={2}
                                    animateIn='bounceInUp'
                                    animateOnce={true}
                                >
                                    <img
                                        className='img-fluid'
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/One-Stop-Shop-2.webp`}
                                        alt='Reliable Appliances'
                                        width='1189'
                                        height='711'
                                    />
                                </ScrollAnimation>
                            </Col>
                            <Col
                                lg={6}
                                className={ReliableStyle.content_box}
                            >
                                <ScrollAnimation
                                    duration={1}
                                    animateIn='zoomIn'
                                    animateOnce={true}
                                >
                                    <h1>Reliable Appliances</h1>
                                    <h2>Slicers, Mixers & Prep Tables</h2>
                                    <p>Marra Forni offers additional products to support our World Class Commercial
                                        Brick Oven Cooking Solutions. Marra Forni Forked and Spiral dough mixers are the
                                        right solutions to achieve the perfect pizza crust by allowing the dough to
                                        oxygenate quickly without warming or overheating.</p>
                                    <p>Marra Forni flywheel slicers are the perfect accent to any kitchen or servery
                                        area. Cast in aluminum & steel, the body of the slicer combines beauty with fast
                                        & easy cleanup</p>
                                    <p>Discover refrigerated pizza Prep Tables in 2 and 3 door configurations to
                                        complement any high-volume pizza operation. With optional refrigerated stainless
                                        steel condiment rails and marble countertop, it’s the optimal pizza prep
                                        solution.</p>
                                    <Link
                                        href='/connect'>
                                        <a
                                            className='mf_btn'
                                            title='GET A QUOTE'
                                        >
                                            GET A QUOTE
                                        </a>
                                    </Link>
                                </ScrollAnimation>
                            </Col>
                        </Row>
                    </Col>
                    {/*<Col lg={1}></Col>*/}
                </Row>
            </Container>
        </section>
    )
}


export default Reliable