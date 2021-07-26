import Link from 'next/link'
import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import ProductStyle from './Product.module.css'
import Typical from 'react-typical'

const Product = (props) => {
    return (
        <section
            className={ProductStyle.section_outer}>
            <Container fluid className='pt-5'>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <Row>
                            <Col lg={6}>
                                <Row>
                                    <Col lg={6}>
                                        <ScrollAnimation duration={2} animateIn="fadeInLeft" animateOnce={true}>
                                            <div className={ProductStyle.panel_bg_accent}>
                                                <div
                                                    className={`${ProductStyle.panel_heading} text-center pl-2 pr-2`}>Customize
                                                    Your Commercial Brick Oven
                                                </div>
                                                <div className={`${ProductStyle.panel_body} pt-0 text-center`}>
                                                    Businesses need a wide set of technical expertise but a blooming
                                                    business
                                                    doesn’t have the economical capacity to hire full time developers.
                                                    You
                                                    can
                                                    hire developers by paying per hour for low operational risks.to hire
                                                    full time developers.
                                                </div>
                                            </div>
                                            <div className={ProductStyle.panel_bg_accent}>
                                                <div
                                                    className={`${ProductStyle.panel_heading} text-center pl-2 pr-2`}>Your
                                                    Success Is Our Inspiration
                                                </div>
                                                <div className={`${ProductStyle.panel_body} pt-0 text-center`}>
                                                    Businesses need a wide set of technical expertise but a blooming
                                                    business
                                                    doesn’t have the economical capacity to hire full time developers.
                                                    You
                                                    can
                                                    hire developers by paying per hour for low operational risks.to hire
                                                    full time developers.
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry.
                                                </div>
                                            </div>
                                        </ScrollAnimation>
                                    </Col>
                                    <Col lg={6}>
                                        <ScrollAnimation duration={2} animateIn="fadeInLeft" animateOnce={true}>
                                            <div className={ProductStyle.panel_bg_accent}>
                                                <div
                                                    className={`${ProductStyle.panel_heading} text-center pl-2 pr-2`}>Low
                                                    Operational Risk
                                                </div>
                                                <div className={`${ProductStyle.panel_body} pt-0 text-center`}>
                                                    Businesses need a wide set of technical expertise but a blooming
                                                    business
                                                    doesn’t have the economical capacity to hire full time developers.
                                                    You
                                                    can
                                                    hire developers by paying per hour for low operational risks.to hire
                                                    full time developers.
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever
                                                    since the 1500s.
                                                </div>
                                            </div>
                                            <div className={ProductStyle.panel_bg_accent}>
                                                <div className={`${ProductStyle.panel_heading} text-center`}>Low
                                                    Operational
                                                    Risk
                                                </div>
                                                <div className={`${ProductStyle.panel_body} pt-0 text-center`}>
                                                    Businesses need a wide set of technical expertise but a blooming
                                                    business
                                                    doesn’t have the economical capacity to hire full time developers.
                                                    You
                                                    can
                                                    hire developers by paying per hour for low operational risks.to hire
                                                    full time developers.
                                                </div>
                                            </div>
                                        </ScrollAnimation>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6}>
                                <ScrollAnimation duration={2} animateIn="fadeInRight" animateOnce={true}>
                                    <div className={ProductStyle.hire_developer_page}>
                                        <img
                                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/quality_banner.jpg`}
                                            alt="Hire Developers Who Code Smartly"/>
                                        <div className={ProductStyle.hire_developer_page_para}>
                                            <h3 className={ProductStyle.dg_title31}>High-Volume Pizza Making.</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                                1500s, when an unknown printer took a galley of type and scrambled it to
                                                make a type specimen book. It has survived not only five centuries, but
                                                also
                                                the leap into electronic typesetting.</p>


                                            <ul className={ProductStyle.list_ico}>
                                                <li><span className="fa fa-check"></span>24*7 Support</li>
                                                <li><span className="fa fa-check"></span>Global Quality Standards</li>
                                                <li><span className="fa fa-check"></span>Time-Zone Compatibility</li>
                                                <li><span className="fa fa-check"></span>Resource backup for absence and
                                                    replacement policies
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
        </section>
    )
}


export default Product