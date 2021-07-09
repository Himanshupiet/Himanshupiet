import React, {useEffect, useState} from 'react';
import {Col, Container, Row, Accordion, Card} from 'react-bootstrap'
import Header from "../header/header";
import Footer from "../footer/footer";
import EventStyle from './events.module.css'
import axios from "axios";
import {API_HOST} from "../../env";
import Loader from "../Loading/loading";


const EventsPage = () => {
    const [slider, setSlider] = useState([])
    const [loading, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        axios.get(`${API_HOST}slider/getSliderBySliderName?sliderName=Press`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            setLoader(false)
            if (res.status) {
                setSlider(res.data)
            }
        }).catch((error) => {
            setLoader(false)
        })
    }, [])

    return (
        <>
            <Header/>
            <Loader data={loading}/>
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
            <Container fluid className={EventStyle.card_section}>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <Row className='pt-5 pb-5'>
                            <Col lg={3}>
                                <div className='text-center'>
                                    <i className="fa fa-users fa-2x"></i>
                                    <h3>Private Demonstration</h3>
                                    <p>Learn how Marra Forni brick ovens can transform your business in a private
                                        demonstrations</p>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='text-center'>
                                    <i className="fa fa-gift fa-2x"></i>
                                    <h3>Hands On Experience</h3>
                                    <p>Take our brick ovens for a spin, live in our booth.</p>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='text-center'>
                                    <i className="fa fa-users fa-2x"></i>
                                    <h3>Meet The Team</h3>
                                    <p>Interact with our sales and engineering team and pick our brains.</p>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='text-center'>
                                    <i className="fa fa-gift fa-2x"></i>
                                    <h3>Win Cool Gifts</h3>
                                    <p>#NoMarraNoParty means you'll have a blast and take home awesome gifts.</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    {(slider && slider.length) ? slider.map((data, i) => {
                        return (
                            <>
                                <Col lg={6} className={`${EventStyle.main_img} p-0`}>
                                    {i % 2 === 0 ? <img style={{height:'700px'}}
                                            src={data.imagePath}/>
                                        :
                                        <div style={{backgroundColor: '#e31422',height:'700px'}}>
                                            <div className={`${EventStyle.card_design}`}>
                                                <h1>{data.title}</h1>
                                                <h5>March 1 – 3, 2020</h5>
                                                <p className='text-white'>{data.message}</p>
                                                <p>Find out more about the RC Show 2020 here.</p>
                                                <ul className='d-flex pl-0'>
                                                    <li>00<p id="days">Months</p></li>
                                                    <li>00<p id="days">Day</p></li>
                                                    <li>00<p id="days">Hour</p></li>
                                                    <li>00<p id="days">Minute</p></li>
                                                    <li>00<p id="days">Second</p></li>
                                                </ul>
                                                <button className='mt-3 form-control btn-dark text-white'>Request
                                                    Private
                                                    Demo
                                                </button>
                                            </div>
                                        </div>
                                    }

                                </Col>
                                <Col lg={6} className={`${EventStyle.main_img} p-0`}>
                                    {i % 2 === 0 ?
                                        <div style={{backgroundColor: '#e31422',height:'700px'}}>
                                            <div className={`${EventStyle.card_design}`}>
                                                <h1>{data.title}</h1>
                                                <h5>March 1 – 3, 2020</h5>
                                                <p className='text-white'>{data.message}</p>
                                                <p>Find out more about the RC Show 2020 here.</p>
                                                <ul className='d-flex pl-0'>
                                                    <li>00<p id="days">Months</p></li>
                                                    <li>00<p id="days">Day</p></li>
                                                    <li>00<p id="days">Hour</p></li>
                                                    <li>00<p id="days">Minute</p></li>
                                                    <li>00<p id="days">Second</p></li>
                                                </ul>
                                                <button className='mt-3 form-control btn-dark text-white'>Request
                                                    Private Demo
                                                </button>
                                            </div>
                                        </div>
                                        :
                                        <img src={data.imagePath} style={{height:'700px'}}/>
                                    }

                                </Col>
                            </>
                        )
                    }) : null}
                </Row>
            </Container>
            {/*<Container fluid>*/}
            {/*    <Row>*/}
            {/*        <Col lg={6} style={{backgroundColor: '#e31422'}}>*/}
            {/*            <div className={`${EventStyle.card_design}`}>*/}
            {/*                <h1>RC Show, Toronto, Canada</h1>*/}
            {/*                <h5>March 1 – 3, 2020</h5>*/}
            {/*                <p className='text-white'>Marra Forni is excited to participate at RC Show 2020. Come see*/}
            {/*                    the famous Marra Forni*/}
            {/*                    Rotator, Electric and Due Bocche brick ovens on display for 3 days in Toronto,*/}
            {/*                    Canada.</p>*/}
            {/*                <p>Find out more about the RC Show 2020 here.</p>*/}
            {/*                <ul className='d-flex pl-0'>*/}
            {/*                    <li>00<p id="days">Months</p></li>*/}
            {/*                    <li>00<p id="days">Day</p></li>*/}
            {/*                    <li>00<p id="days">Hour</p></li>*/}
            {/*                    <li>00<p id="days">Minute</p></li>*/}
            {/*                    <li>00<p id="days">Second</p></li>*/}
            {/*                </ul>*/}
            {/*                <button className='mt-3 form-control btn-dark text-white'>Request Private Demo</button>*/}
            {/*            </div>*/}
            {/*        </Col>*/}
            {/*        <Col lg={6} className={`${EventStyle.main_img} p-0`}>*/}
            {/*            <img src='https://marraforni.com/wp/wp-content/uploads/2020/02/PIC_7194-scaled.jpg'/>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</Container>*/}
            <Container fluid className={`${EventStyle.heading_style} p-5`}>
                <Row>
                    <Col lg={8} className='pl-5'>
                        <p className='text-white'>You are a few clicks away from owning the most durable, energy
                            efficient, customizable and
                            feature pack brick oven in the world.</p>
                    </Col>
                    <Col lg={4}>
                        <button className='mf_btn'>Build Your Brick Oven</button>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}
export default EventsPage