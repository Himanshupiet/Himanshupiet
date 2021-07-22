import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import {Container, Row, Col} from 'react-bootstrap';
import GalleryStyle from './index.module.css'
import Category_Gallery from './Category_Gallery/Category_Gallery';
import Testimonials from './../ProductSingle/Testimonials/Testimonials';
import TopBanner from './TopBanner/TopBanner';
import MainHomePageStyle from "../Home_Page/index.module.css";
import GetAQuote from "../common/GetAQuote/GetAQuote";

const GalleryMain = (props) => {
    return (
        <>
            <Header/>
            <TopBanner heading1={'Clients &'} heading2={'Partner Gallery'}/>
            <Container fluid>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <div className={GalleryStyle.heading_main}>
                            <h1>Your Success Is Our Inspiration</h1>
                            <p>Marra Forni is built for the people who believe in us and use our brick ovens and other
                                Marra Forni products daily to feed thousands of hungry mouths around the world. Without
                                our awesome clients, we do not have a product, nor do we have a company. We take your
                                suggestions and comments to heart so that we may continue to innovate and support your
                                own success and growth.</p>
                        </div>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <Category_Gallery/>
            <Testimonials background={'red'}/>
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

export default GalleryMain