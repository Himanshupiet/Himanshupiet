import React from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import Header from "../header/header";
import Footer from "../footer/footer";
import ContactStyle from './contact.module.css'
import GetAQuote from "../common/GetAQuote/GetAQuote";
import MainHomePageStyle from "../Home_Page/index.module.css";
import Link from "next/link";

const Contact = () => {
    return (
        <>
            <Header/>
            <Container fluid className={ContactStyle.contact_banner}>
                <h1>Contact Us</h1>
            </Container>
            <Container fluid className={ContactStyle.card_section}>
                <Row className={ContactStyle.row_style}>
                    <Col lg={4} md={12}>
                        <div className={`${ContactStyle.card} ${ContactStyle.card_one}`}>
                            <div className={`${ContactStyle.imgBx} d-flex pl-5`}>
                                <i className="fa fa-desktop fa-4x align-self-center"></i>
                                <div className='align-self-center p-3'>
                                    <h3>Curlinary Support</h3>
                                    <p>Lorem ipsum dolor sit at consectetur</p>
                                </div>
                            </div>
                            <div className={ContactStyle.details}>
                                <div className='d-flex pl-3'>
                                    <i className="fa fa-desktop fa-4x align-self-center"></i>
                                    <div className='align-self-center'>
                                        <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/culinary-support`}>
                                            <a title='Culinary Support'>
                                                <h3>Curlinary Support</h3>
                                            </a>
                                        </Link>
                                        <p>Lorem ipsum dolor sit at consectetur</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={12}>
                        <div className={`${ContactStyle.card} ${ContactStyle.card_two}`}>
                            <div className={`${ContactStyle.imgBx} d-flex pl-5`}>
                                <i className="fa fa-user fa-4x align-self-center"></i>
                                <div className='align-self-center p-3'>
                                    <h3>Tech Support</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur </p>
                                </div>
                            </div>
                            <div className={ContactStyle.details}>
                                <div className='d-flex pl-3'>
                                    <i className="fa fa-user fa-4x align-self-center"></i>
                                    <div className='align-self-center'>
                                        <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/tech-support`}>
                                            <a title='Culinary Support'>
                                                <h3>Tech Support</h3>
                                            </a>
                                        </Link>
                                        <p>Lorem ipsum dolor sit amet consectetur </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={12}>
                        <div className={`${ContactStyle.card} ${ContactStyle.card_one}`}>
                            <div className={`${ContactStyle.imgBx} d-flex pl-5`}>
                                <i className="fa fa-magic fa-4x align-self-center"></i>
                                <div className='align-self-center p-2'>
                                    <h3>Sales of Support</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur </p>
                                </div>
                            </div>
                            <div className={ContactStyle.details}>
                                <div className='d-flex pl-3'>
                                    <i className="fa fa-magic fa-4x align-self-center"></i>
                                    <div className='align-self-center'>
                                        <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/sales-support`}>
                                            <a title='Sales Support'>
                                                <h3>Sales of Support</h3>
                                            </a>
                                        </Link>
                                        <p>Lorem ipsum dolor sit amet consectetur</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
            <Container fluid className={ContactStyle.section}>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <Row>
                            <Col lg={6}>
                                <div className={ContactStyle.content}>
                                    <h2>Let’s Get In Touch</h2>
                                    <p>When outfitting your home or restaurant with the finest Neapolitan, Marra Forni
                                        is the clear choice. Whether you need a custom built and artisan tiled oven to
                                        match your restaurant, or the ultimate build-in pizza oven for your outdoor
                                        living area, Marra Forni has an oven for the job.</p>
                                    <p>We look forward to hearing from you and figuring out a solution for your
                                        pizzeria, restaurant, or residential application.</p>
                                </div>
                                <div className={ContactStyle.content}>
                                    <h2>Marra Forni Holidays</h2>
                                    <p><b>Closed</b> Jan. 1, May 26, July 4, Sept. 2, Nov. 27, Nov. 28, Dec. 25, Dec. 31
                                    </p>
                                    <p>
                                        <strong>Phone Sales & Service</strong><br/>
                                        Monday – Friday 7:00am — 5:00pm EST
                                    </p>
                                    <p>
                                        <strong>Showroom – Open to Public</strong><br/>
                                        Monday – Friday 8:00am – 5:00pm EST
                                    </p>
                                    <p>
                                        10310 Southard Dr.<br/>
                                        Beltsville MD 20705<br/>
                                        ph 888.239.0575 / Fax. 240.667.7991<br/>
                                        <strong>EMAIL us at inquiries@marraforni.com</strong>
                                    </p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className={ContactStyle.responsive_map}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3099.3010822988804!2d-76.90994158528557!3d39.03125414664905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c38346afc43d%3A0x704a91abb3dd3468!2sMarra%20Forni!5e0!3m2!1sen!2sin!4v1622775755423!5m2!1sen!2sin"
                                        width="600" height="660" frameBorder="0" style={{border: '0'}}
                                        allowFullScreen></iframe>
                                </div>
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
export default Contact