import React from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import Header from "../header/header";
import Footer from "../footer/footer";
import MainHomePageStyle from "../Home_Page/index.module.css";
import GetAQuote from "../common/GetAQuote/GetAQuote";
import TermsConditionsStyle from "../TermsAndConditions/TermsAndConditionsContent/TermsAndConditionsContent.module.css";
import KitchenNearYou from "../ProductSingle/KitchenNearYou/KitchenNearYou";
import VideoGallery from "../Home_Page/VideoGallery/VideoGallery";
import CulinaryStyle from './culinary.module.css'
import ContactStyle from "../ContactUs_Page/contact.module.css";

const CulinarySupport = (props) => {
    return (
        <>
            <Header/>
            <Container fluid className={CulinaryStyle.culinary_banner}>
                <h1>Culinary Support</h1>
            </Container>
            <Container fluid className={CulinaryStyle.banner_content}>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <Row>
                            <Col lg={6} className='pt-5'>
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
            <Container fluid style={{padding: '0'}}>
                <KitchenNearYou/>
            </Container>
            <VideoGallery/>
            <Container fluid className={CulinaryStyle.main_banner}>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <h1 className='text-center mb-5'>Blog</h1>
                        <Row>
                            <Col lg={4}>
                                <div className={`${CulinaryStyle.card_style} card border-0`}>
                                    <img
                                        src="https://blog.marraforni.com/wp/wp-content/uploads/2021/03/Rep-Chef-Blog.png"
                                        className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h4 className="card-title">Did you know that sundried bricks are the first</h4>
                                        <p className="card-text">Some quick example text to build on the card title and
                                            make
                                            up
                                            the bulk of the card's content.</p>
                                        <button className='mf_btn'>Explore</button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={`${CulinaryStyle.card_style} card border-0`}>
                                    <img
                                        src="https://blog.marraforni.com/wp/wp-content/uploads/2021/03/Rep-Chef-Blog.png"
                                        className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h4 className="card-title">Did you know that sundried bricks are the first</h4>
                                        <p className="card-text">Some quick example text to build on the card title and
                                            make
                                            up the bulk of the card's content.</p>
                                        <button className='mf_btn'>Explore</button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={`${CulinaryStyle.card_style} card border-0`}>
                                    <img
                                        src="https://blog.marraforni.com/wp/wp-content/uploads/2021/03/Rep-Chef-Blog.png"
                                        className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h4 className="card-title">Did you know that sundried bricks are the first</h4>
                                        <p className="card-text">Some quick example text to build on the card title and
                                            make
                                            up the bulk of the card's content.</p>
                                        <button className='mf_btn'>Explore</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <Container fluid className={CulinaryStyle.pizza_university}>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10} className='p-5'>
                        <div className='text-center'>
                            <h2 className='text-center'>Welcome! <span className={CulinaryStyle.heading}>All Aspiring Pizzaiol</span>
                            </h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                took a
                                galley of type and scrambled it to make a type specimen book.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                took a
                                galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy
                                text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard
                                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled
                                it to make a type specimen book.</p>
                        </div>
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
export default CulinarySupport