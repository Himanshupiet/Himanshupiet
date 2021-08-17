import React from 'react'
import Header from "../header/header";
import Footer from "../footer/footer";
import SelesSupportStyle from './SalesSupport.module.css'
import {Col, Container, Row} from "react-bootstrap";
import MainHomePageStyle from "../Home_Page/index.module.css";
import GetAQuote from "../common/GetAQuote/GetAQuote";
import CulinaryStyle from "../CulinarySupport_Page/culinary.module.css";

const SalesSupportPage = (props) => {
    return (
        <>
            <Header/>
            <Container fluid className={SelesSupportStyle.tech_banner}>
                <h1>Sales Support Page</h1>
            </Container>
            <Container fluid className={SelesSupportStyle.banner_content}>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <Row>
                            <Col lg={6} className={`${SelesSupportStyle.main} pt-5`}>
                                <h2>Stunning On All Screens</h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                                    minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                                    aliquip ex ea commodo consequat.</p>
                                <button className='mf_btn'>Check it Out</button>
                            </Col>
                            <Col lg={6} className={CulinaryStyle.culinary_img}>
                                <img
                                    className='img-fluid'
                                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/firedupbrewing-banner.webp`}
                                    alt='Commercial Brick Oven'
                                    width='440'
                                    height='500'
                                />
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
export default SalesSupportPage