import React, {useState} from 'react';
import {Col, Container, Row, Accordion, Card} from 'react-bootstrap'
import Header from "../header/header";
import Footer from "../footer/footer";
import CareerStyle from './careers.module.css'

const CareerPage = () => {
    return (
        <>
            <Header/>
            <Container fluid className={CareerStyle.faq_banner}>
                <h2>Careers at Marraforni</h2>
                <h3>We always have room for great talent.</h3>
            </Container>
            <Container className='mb-5'>
                <h2 className='text-center pt-5'>Why Should You Join Us</h2>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10} className='pt-5'>
                        <Row>
                            <Col lg={5}>
                                <img
                                    src='https://d27i7n2isjbnbi.cloudfront.net/careers/photos/114703/normal_photo_1558615544.png'/>
                            </Col>
                            <Col lg={7}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                    nihil.</p>
                                <p>
                                    <a href='#'>
                                        Will you join us?
                                    </a>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <hr/>
            <Container className='mb-5'>
                <h2 className='text-center pt-5'>JOIN OUR GROWING TEAM</h2>
                <Row>
                    <Col lg={12} className='pt-3'>
                        <Row>
                            <Col md={6} className='pt-3'>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Senior Content Strategist</h5>
                                        <div className='d-flex justify-content-between'>
                                            <p className="card-text">Remote Job</p>
                                            <a href="#">Growth</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} className='pt-3'>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Don't see the role you're looking for? Apply
                                            here!</h5>
                                        <div className='d-flex justify-content-between'>
                                            <p className="card-text">Marketing</p>
                                            <a href="#">Columbia, United States</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} className='pt-3'>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Business Development Representative</h5>
                                        <div className='d-flex justify-content-between'>
                                            <p className="card-text">Remote Job</p>
                                            <a href="#">Sales</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} className='pt-3'>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Account Director</h5>
                                        <div className='d-flex justify-content-between'>
                                            <p className="card-text">Remote Job</p>
                                            <a href="#">Marketing</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} className='pt-3'>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Account Manager</h5>
                                        <div className='d-flex justify-content-between'>
                                            <p className="card-text">Remote Job</p>
                                            <a href="#">Growth</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} className='pt-3'>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Pain Social Manager</h5>
                                        <div className='d-flex justify-content-between'>
                                            <p className="card-text">Remote Job</p>
                                            <a href="#">Marketing</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} className='pt-3'>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Digital Marketing Strategist - PPC</h5>
                                        <div className='d-flex justify-content-between'>
                                            <p className="card-text">Remote Job</p>
                                            <a href="#">Marketing</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} className='pt-3'>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Digital Marketing Strategist</h5>
                                        <div className='d-flex justify-content-between'>
                                            <p className="card-text">Remote Job</p>
                                            <a href="#">Marketing</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <hr/>
            <Container className='mb-5'>
                <h2 className='text-center pt-5'>PERKS & BENEFITS</h2>
                <h4 className='text-center'>OUR EFFORTS TO MAKE THE EMPLOYEE EXPERIENCE A GREAT ONE</h4>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10} className='pt-5'>
                        <Row>
                            <Col lg={4}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to
                                            additional content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to
                                            additional content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="card">
                                    <div className="card-body text-center">
                                        <img src='https://www.webmechanix.com/wp-content/uploads/svg/PTO.svg'
                                             height='40' width='30'/>
                                        <h4>UNLIMITED PAID TIME OFF</h4>
                                        <p>We offer Medical, Vision, and Dental insurance with the option to choose
                                            between 2 nationwide medical plans. WebMechanix contributes over half the
                                            cost of premiums.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <hr/>
            <Footer/>
        </>
    )
}
export default CareerPage