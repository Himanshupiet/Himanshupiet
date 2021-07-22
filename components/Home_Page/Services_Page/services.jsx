import React, {useState} from 'react';
import {Col, Container, Row, Tab, Tabs, Nav} from 'react-bootstrap'
import ServiceStyle from './service.module.css'
import MainHomePageStyle from "../index.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import 'react-web-tabs/dist/react-web-tabs.css';

const Service = () => {
    return (
        <>
            <section className={MainHomePageStyle.quoteform_outer}>
                <Tab.Container defaultActiveKey="first">
                    <Row>
                        <Col lg={3}></Col>
                        <Col lg={7} className={ServiceStyle.service_outer_section}>
                            <ScrollAnimation duration={2}
                                             animateIn='fadeInUp'
                                             animateOnce={true}>
                                <Row className={ServiceStyle.service_section}>
                                    <Col lg={3} className={`${ServiceStyle.side_set} pr-0 pl-0 border-right side_set`} style={{backgroundColor:'white'}}>
                                        <Nav variant="pills" className={`${ServiceStyle.nav_style} flex-column`}>
                                            <Nav.Item className='border-bottom'>
                                                <Nav.Link eventKey="first">
                                                    <i className='fa fa-desktop fa-1x pr-2'></i>
                                                    Ovens
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className='border-bottom'>
                                                <Nav.Link eventKey="second">
                                                    <i className='fa fa-paper-plane pr-2'></i>
                                                    Prep Tables
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className='border-bottom'>
                                                <Nav.Link eventKey="fourth">
                                                    <i className='fa fa-paint-brush pr-2'></i>
                                                    Ventilation
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className='border-bottom'>
                                                <Nav.Link eventKey="fifth">
                                                    <i className='fa fa-mobile fa-2x pr-2'></i>
                                                    Mixers
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className='border-bottom'>
                                                <Nav.Link eventKey="six">
                                                    <i className='fa fa-database pr-2'></i>
                                                    Slicers
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className='border-bottom'>
                                                <Nav.Link eventKey="seven">
                                                    <i className='fa fa-wrench pr-2'></i>
                                                    Tools
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col lg={9} className={`${ServiceStyle.right_side} pl-0 border-0 pl-3 pr-3 pt-3 pb-4`} style={{backgroundColor:'white'}}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <div className="row">
                                                    <div className="col-sm-3 mt-2">
                                                        <div className={`${ServiceStyle.panel_body} card`}>
                                                            <div>
                                                                <p className={`${ServiceStyle.panel_heading} card-title`}>Rigid Touchscreen</p>
                                                                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3 mt-2">
                                                        <div className={`${ServiceStyle.panel_body} card`}>
                                                            <div>
                                                                <p className={`${ServiceStyle.panel_heading} card-title`}>Rotation Timer</p>
                                                                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3 mt-2">
                                                        <div className={`${ServiceStyle.panel_body} card`}>
                                                            <div>
                                                                <p className={`${ServiceStyle.panel_heading} card-title`}>Fallsafe Levers</p>
                                                                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3 mt-2">
                                                        <div className={`${ServiceStyle.panel_body} card`}>
                                                            <div>
                                                                <p className={`${ServiceStyle.panel_heading} card-title`}>Rotating Dock</p>
                                                                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    <Col lg={3}>
                                                        <div className={`${ServiceStyle.panel_body} card`}>
                                                            <div>
                                                                <p className={`${ServiceStyle.panel_heading} card-title`}>Plug & Play</p>
                                                                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={3}>
                                                        <div className={`${ServiceStyle.panel_body} card`}>
                                                            <div>
                                                                <p className={`${ServiceStyle.panel_heading} card-title`}>Made of Bricks</p>
                                                                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={3} className='mt-2'>
                                                        <div className={`${ServiceStyle.panel_body} card`}>
                                                            <div>
                                                                <p className={`${ServiceStyle.panel_heading} card-title`}>25 years warrenty</p>
                                                                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={3}>
                                                        <div className={`${ServiceStyle.panel_body} card`}>
                                                            <div>
                                                                <p className={`${ServiceStyle.panel_heading} card-title`}>Hybrid Fuel</p>
                                                                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-3">
                                                    <Col lg={3}>
                                                        <div className={`${ServiceStyle.panel_body} card`}>
                                                            <div>
                                                                <p className={`${ServiceStyle.panel_heading} card-title`}>Plug & Play</p>
                                                                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={3}>
                                                        <div className={`${ServiceStyle.panel_body} card`}>
                                                            <div>
                                                                <p className={`${ServiceStyle.panel_heading} card-title`}>Made of Bricks</p>
                                                                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={3}>
                                                        <div className={`${ServiceStyle.panel_body} card`}>
                                                            <div>
                                                                <p className={`${ServiceStyle.panel_heading} card-title`}>25 years warrenty</p>
                                                                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={3}>
                                                        <div className={`${ServiceStyle.panel_body} card`}>
                                                            <div>
                                                                <p className={`${ServiceStyle.panel_heading} card-title`}>Hybrid Fuel</p>
                                                                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </ScrollAnimation>
                        </Col>
                        <Col lg={3}></Col>
                    </Row>
                </Tab.Container>
            </section>
        </>
    )
}
export default Service
