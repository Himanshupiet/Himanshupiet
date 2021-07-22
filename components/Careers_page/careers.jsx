import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import Header from "../header/header";
import Footer from "../footer/footer";
import CareerStyle from './careers.module.css'
import MainHomePageStyle from "../Home_Page/index.module.css";
import GetAQuote from "../common/GetAQuote/GetAQuote";
import Link from "next/link";
import axios from "axios";
import {API_HOST} from "../../env";

const CareerPage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`${API_HOST}career/getAllCareer`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status) {
                setData(res.data)
            }
        }).catch((error) => {

        })
    }, [])

    return (
        <>
            <Header/>
            <Container fluid className={CareerStyle.career_banner}>
                <h2>Careers at Marraforni</h2>
                <h3>We always have room for great talent.</h3>
            </Container>
            <Container fluid className={`${CareerStyle.main} mb-5`}>
                <h2 className='text-center pt-5'>Why Should You Join Us</h2>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10} className='pt-5'>
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={4}>
                                <img
                                    src='https://d27i7n2isjbnbi.cloudfront.net/careers/photos/114703/normal_photo_1558615544.png'/>
                            </Col>
                            <Col lg={6} className='pt-4'>
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
            <Container fluid className={`${CareerStyle.main} mb-5`}>
                <h2 className='text-center pt-5'>JOIN OUR GROWING TEAM</h2>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10} className='pt-3'>
                        <Row>
                            {data.map((data, i) => (
                                data.active && (data.jobTitle !== 'string') ?
                                    <Col lg={6} className='pt-3'>
                                        <div className={`${CareerStyle.career_card} card`}>
                                            <div className="card-body">
                                                <h5 className="card-title">{data.jobTitle}</h5>
                                                <div className='d-flex justify-content-between'>
                                                    <p className="card-text">{data.jobLocation}</p>
                                                    <Link href="/careers/1">
                                                        <a title="Growth">Growth</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col> : null
                            ))}
                        </Row>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <hr/>
            <Container fluid className={`${CareerStyle.main} mb-5`}>
                <h2 className='text-center pt-5'>PERKS & BENEFITS</h2>
                <h4 className='text-center'>OUR EFFORTS TO MAKE THE EMPLOYEE EXPERIENCE A GREAT ONE</h4>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10} className='pt-5'>
                        <Row>
                            <Col lg={4}>
                                <div className='card border-0'>
                                    <div className="card-body text-center">
                                        <img src='https://www.webmechanix.com/wp-content/uploads/svg/PTO.svg'
                                             height='50' width='50'/>
                                        <h4 className='pt-3'>UNLIMITED PAID TIME OFF</h4>
                                        <p>We offer Medical, Vision, and Dental insurance with the option to choose
                                            between.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="card border-0">
                                    <div className="card-body text-center">
                                        <img src='https://www.webmechanix.com/wp-content/uploads/svg/Health.svg'
                                             height='50' width='50'/>
                                        <h4 className='pt-3'>UNLIMITED PAID TIME OFF</h4>
                                        <p>We offer Medical, Vision, and Dental insurance with the option to choose
                                            between 2 nationwide.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="card border-0">
                                    <div className="card-body text-center">
                                        <img src='https://www.webmechanix.com/wp-content/uploads/svg/Familyleave.svg'
                                             height='50' width='50'/>
                                        <h4 className='pt-3'>UNLIMITED PAID TIME OFF</h4>
                                        <p>We offer Medical, Vision, and Dental insurance with the option to choose
                                            .</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <div className="card border-0">
                                    <div className="card-body text-center">
                                        <img src='https://www.webmechanix.com/wp-content/uploads/svg/PTO.svg'
                                             height='50' width='50'/>
                                        <h4 className='pt-3'>UNLIMITED PAID TIME OFF</h4>
                                        <p>We offer Medical, Vision, and Dental insurance with the option to choose
                                            between.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="card border-0">
                                    <div className="card-body text-center">
                                        <img src='https://www.webmechanix.com/wp-content/uploads/svg/Health.svg'
                                             height='50' width='50'/>
                                        <h4 className='pt-3'>UNLIMITED PAID TIME OFF</h4>
                                        <p>We offer Medical, Vision, and Dental insurance with the option to choose
                                            between 2.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="card border-0">
                                    <div className="card-body text-center">
                                        <img src='https://www.webmechanix.com/wp-content/uploads/svg/Familyleave.svg'
                                             height='50' width='50'/>
                                        <h4 className='pt-3'>UNLIMITED PAID TIME OFF</h4>
                                        <p>We offer Medical, Vision, and Dental insurance with the option to choose
                                            between.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <hr/>
            <Container fluid className={`${CareerStyle.main} mb-5`}>
                <h2 className='text-center pt-5'>OUR HIRING PROCESS</h2>
                <h4 className='text-center'>NO CLOAK AND DAGGER HERE - THIS IS WHAT OUR HIRING PROCESS LOOKS LIKE FOR
                    ANY POSITION.</h4>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10} className='pt-5'>
                        <Row className='text-center'>
                            <Col lg={3} className={CareerStyle.image}>
                                <img src='https://www.webmechanix.com/wp-content/uploads/svg/20W.svg'/>
                                <h3>REVIEW</h3>
                                <p>During this process, we'll introduce you to some of the people you'll work with
                                    daily!</p>
                            </Col>
                            <Col lg={3} className={CareerStyle.image}>
                                <img src='https://www.webmechanix.com/wp-content/uploads/svg/40W.svg'/>
                                <h3>PHONE CALL</h3>
                                <p>This interview is how we gain insight into your workflow while giving you a feel for
                                    the work you could be doing.</p>
                            </Col>
                            <Col lg={3} className={CareerStyle.image}>
                                <img src='https://www.webmechanix.com/wp-content/uploads/svg/60W.svg'/>
                                <h3>SKILLS</h3>
                                <p>We'll talk a bit about your background, interests and future ambitions. Our goal is
                                    to get to know you a little better!</p>
                            </Col>
                            <Col lg={3} className={CareerStyle.image}>
                                <img src='https://www.webmechanix.com/wp-content/uploads/svg/100W.svg'/>
                                <h3>TEAM</h3>
                                <p>A real human being will review your application. We don't rely on automated HR
                                    software to make decisions for us.</p>
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
export default CareerPage