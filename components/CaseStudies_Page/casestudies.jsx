import React, {useState} from 'react';
import {Col, Container, Row, Accordion, Card} from 'react-bootstrap'
import Header from "../header/header";
import Footer from "../footer/footer";
import MainHomePageStyle from "../Home_Page/index.module.css";
import GetAQuote from "../common/GetAQuote/GetAQuote";
import CaseStudyStyle from './studies.module.css'
import SliderPage from "./Slider/slider";


const CaseStudiesPage = () => {
    return (
        <>
            <Header/>
            <Container fluid className={CaseStudyStyle.case_banner}>
                <h1>Case Studies</h1>
            </Container>
            <Container fluid>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <div className={CaseStudyStyle.main}>
                            <h2>Choosing The Right Commercial Brick Oven…</h2>
                            <p className='pt-3'>Marra Forni is the premier and fastest-growing manufacturer of brick
                                oven cooking
                                solutions to the global commercial foodservice industry. We continue to exceed customer
                                expectations through our artisan handcrafted workmanship, innovative technology, and a
                                continued commitment to achieving best-in-class quality, service, and performance,</p>
                            <p>Marra Forni’s flagship “Rotator” oven is changing the way restaurants, higher education,
                                grocery chains, and healthcare facilities cook. The easy-to-use MarraSmart ® touchscreen
                                technology offers full control of critical functions such as temperature, deck rotation
                                speed, direction, and automatic on and off. This innovative oven technology subsidizes
                                labor by eliminating the need for employees with higher skill sets while still producing
                                creative, healthy, consistent, and cost-effective food options for your clients. Pizzas
                                bake evenly in under 90 seconds. The Rotator is also great for extending your menu
                                applications, including; baking, slow roasting, braising meats, fire-roasting veggies,
                                and seafood in a cast-iron pan. You’ll also enjoy energy savings thanks to the high
                                efficiency dual-stage forced-air burner technology which uses only 84,000 BTUs.
                                Featuring MarraStone ® at its heart, each oven is built brick-by-brick by hand using the
                                same tried and tested process used by Italian masons hundreds of years ago. Yet, all
                                ovens are 100% manufactured in the USA. Choose from an extensive selection of
                                customizable tile options and other features that will complement and enhance the beauty
                                of any foodservice space.</p>
                            <h3 className='pt-3'>… Just Got Easier!</h3>
                            <button className='mf_btn mt-4'>Schedule a Demo</button>
                        </div>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <Container fluid className='pt-5'>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10} className={CaseStudyStyle.case_study}>
                        <h2 className='pb-4'>CASE STUDIES</h2>
                        <Row>
                            <Col lg={3}>
                                <div className={`${CaseStudyStyle.card_design} card`}>
                                    <img src="https://marraforni.com/wp/wp-content/uploads/2021/06/UB.png"
                                         className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h3 className="card-title">Urban Bricks</h3>
                                        <p className="card-text">Urban Bricks builds a pizza empire around the Marra
                                            Forni Rotator Pizza oven</p>
                                        <a href="#" className="mf_btn">View Case Study</a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className={`${CaseStudyStyle.card_design} card`}>
                                    <img src="https://marraforni.com/wp/wp-content/uploads/2021/06/UB.png"
                                         className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h3 className="card-title">Urban Bricks</h3>
                                        <p className="card-text">Pandemic Converts Temporary Dining Alternative to
                                            Permanent.</p>
                                        <a href="#" className="mf_btn">View Case Study</a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className={`${CaseStudyStyle.card_design} card`}>
                                    <img src="https://marraforni.com/wp/wp-content/uploads/2021/06/UB.png"
                                         className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h3 className="card-title">Ocean Edge</h3>
                                        <p className="card-text">Permanent dining experience and popular guest
                                            attraction with Marra.</p>
                                        <a href="#" className="mf_btn">View Case Study</a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className={`${CaseStudyStyle.card_design} card`}>
                                    <img src="https://marraforni.com/wp/wp-content/uploads/2021/06/UB.png"
                                         className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h3 className="card-title">Ocean Edge</h3>
                                        <p className="card-text">Permanent dining experience and popular guest
                                            attraction with.</p>
                                        <a href="#" className="mf_btn">View Case Study</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <SliderPage/>
            <Container fluid className={CaseStudyStyle.served}>
                <h1 className='pt-5 text-center pb-5'>Our Clients & Segments Served!</h1>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <Row>
                            <Col lg={3}>
                                <div className="card border-0">
                                    <img src="https://marraforni.com/wp/wp-content/uploads/2021/06/Roma-2-400x400.jpg"
                                         className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h3 className="card-title">STADIUM & ARENA</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="card border-0">
                                    <img
                                        src="https://marraforni.com/wp/wp-content/uploads/2021/06/Moxy-Chelsea-Marriott-2-400x400.png"
                                        className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h3 className="card-title">HOTEL AND RESORT</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="card border-0">
                                    <img
                                        src="https://marraforni.com/wp/wp-content/uploads/2021/06/Great-Trailer-for-Campus-400x400.jpg"
                                        className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h3 className="card-title">COUNTRY CLUB</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="card border-0">
                                    <img
                                        src="https://marraforni.com/wp/wp-content/uploads/2021/06/Great-Trailer-for-Campus-400x400.jpg"
                                        className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h3 className="card-title">CORPORATE DINING</h3>
                                    </div>
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
export default CaseStudiesPage