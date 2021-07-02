import React, {useState} from 'react';
import {Col, Container, Row, Accordion, Card} from 'react-bootstrap'
import Header from "../header/header";
import Footer from "../footer/footer";
import EventStyle from './events.module.css'


const EventsPage = () => {
    return (
        <>
            <Header/>
            <Container fluid className={EventStyle.event_banner}>
                {/*<h1>FAQs</h1>*/}
            </Container>
            <Container fluid>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <Row className='pt-5 pb-5'>
                            <Col lg={6} className={EventStyle.content_section}>
                                <h1>Private and Hands-on Demonstrations</h1>
                            </Col>
                            <Col lg={6}>
                                <p>Our #NoMarraNoParty is an excellent, straight to the point description of what to
                                    expect at a Marra Forni booth.You can expect Food, Music, Brick Ovens, Prizes,
                                    Social Media Interactions and more Prizes!</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <Row className='pt-5 pb-5'>
                            <Col lg={3}>
                                <div className='text-center'>
                                    <i className="fa fa-hand-sparkles fa-2x"></i>
                                    <h4>Private Demonstration</h4>
                                    <p>Learn how Marra Forni brick ovens can transform your business in a private
                                        demonstrations</p>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='text-center'>
                                    <i className="fa fa-hand-paper"></i>
                                    <h4>Hands On Experience</h4>
                                    <p>Take our brick ovens for a spin, live in our booth.</p>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='text-center'>
                                    <i className="fa fa-users fa-2x"></i>
                                    <h4>Meet The Team</h4>
                                    <p>Interact with our sales and engineering team and pick our brains.</p>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='text-center'>
                                    <i className="fa fa-gift fa-2x"></i>
                                    <h4>Win Cool Gifts</h4>
                                    <p>#NoMarraNoParty means you'll have a blast and take home awesome gifts.</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}
export default EventsPage