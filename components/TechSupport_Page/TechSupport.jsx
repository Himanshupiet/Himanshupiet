import React from 'react'
import Header from "../header/header";
import Footer from "../footer/footer";
import TechSupportStyle from './TechSupport.module.css'
import {Col, Container, Row} from "react-bootstrap";
import MainHomePageStyle from "../Home_Page/index.module.css";
import GetAQuote from "../common/GetAQuote/GetAQuote";
import VideoSlider from "../Press_Page/VideoSlider/VideoSlider";

const TechSupportPage = (props) => {
    return (
        <>
            <Header/>
            <Container fluid className={TechSupportStyle.tech_banner}>
                <h1>Tech Support Page</h1>
            </Container>
            <Container fluid>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10} className={TechSupportStyle.contact_info}>
                        <Row>
                            <Col lg={6}>
                                <h1>Get In Touch</h1>
                                <div className={`${TechSupportStyle.contact_section} mt-3`}>
                                    <div className={TechSupportStyle.item}>
                                        <i className={`${TechSupportStyle.icon} fa fa-home fa-1x`}></i>
                                        10310 Southard Dr. Beltsville MD 20705
                                    </div>
                                    <div className={TechSupportStyle.item}>
                                        <i className={`${TechSupportStyle.icon} fa fa-phone fa-1x`}></i>
                                        ph 888.239.0575 / Fax. 240.667.7991
                                    </div>
                                    <div className={TechSupportStyle.item}>
                                        <i className={`${TechSupportStyle.icon} fa fa-envelope fa-1x`}></i>
                                        inquiries@marraforni.com
                                    </div>
                                    <div className={TechSupportStyle.item}>
                                        <i className={`${TechSupportStyle.icon} fa fa-envelope  fa-1x`}></i>
                                        Monday – Friday 8:00am – 5:00pm EST
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className='pt-4'>
                                <h2>Let’s Get In Touch</h2>
                                <p>When outfitting your home or restaurant with the finest Neapolitan, Marra Forni is
                                    the clear choice. Whether you need a custom built and artisan tiled oven to match
                                    your restaurant, or the ultimate build-in pizza oven for your outdoor living area,
                                    Marra Forni has an oven for the job.

                                    We look forward to hearing from you and figuring out a solution for your pizzeria,
                                    restaurant, or residential application.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <VideoSlider/>
            <Container fluid className={TechSupportStyle.contact_info}>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <Row>
                            <Col lg={6} className={TechSupportStyle.border}>
                                <h2>Warrenty Information</h2>
                                <p>When outfitting your home or restaurant with the finest Neapolitan, Marra Forni is
                                    the clear choice. Whether you need a custom built and artisan tiled oven to match
                                    your restaurant, or the ultimate build-in pizza oven for your outdoor living area,
                                    Marra Forni has an oven for the job. We look forward to hearing from you and
                                    figuring out a solution for your pizzeria, restaurant, or residential
                                    application.</p>
                            </Col>
                            <Col lg={6}>
                                <h2>Terms of Services</h2>
                                <p>When outfitting your home or restaurant with the finest Neapolitan, Marra Forni is
                                    the clear choice. Whether you need a custom built and artisan tiled oven to match
                                    your restaurant, or the ultimate build-in pizza oven for your outdoor living area,
                                    Marra Forni has an oven for the job. We look forward to hearing from you and
                                    figuring out a solution for your pizzeria, restaurant, or residential
                                    application.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <Container fluid className={MainHomePageStyle.quoteform_outer}>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <GetAQuote/>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}
export default TechSupportPage