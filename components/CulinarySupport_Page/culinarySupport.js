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

const CulinarySupport = (props) => {
    return (
        <>
            <Header/>
            <Container fluid className={TermsConditionsStyle.top_banner}>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <h1>Culinary Support</h1>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <Container fluid className='mt-5 mb-5'>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <Row>
                            <Col lg={6} className='pt-4'>
                                <h2>Stunning On All Screens</h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                                    minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                                    aliquip ex ea commodo consequat.</p>
                                <button className='btn btn-danger'>Check it Out</button>
                            </Col>
                            <Col lg={6}>
                                <img
                                    src='https://ultima.qodeinteractive.com/wp-content/uploads/2016/09/main-background-img-3.jpg'/>
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
            <Container className='mt-5 mb-5'>
                <h1 className='text-center mb-5'>Blog</h1>
                <Row>
                    <Col lg={4}>
                        <div className={`${CulinaryStyle.card_style} card border-0`}>
                            <img src="https://blog.marraforni.com/wp/wp-content/uploads/2021/03/Rep-Chef-Blog.png"
                                 className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <button className='mf_btn'>Explore</button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className={`${CulinaryStyle.card_style} card border-0`}>
                            <img src="https://blog.marraforni.com/wp/wp-content/uploads/2021/03/Rep-Chef-Blog.png"
                                 className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make
                                    up the bulk of the card's content.</p>
                                <button className='mf_btn'>Explore</button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className={`${CulinaryStyle.card_style} card border-0`}>
                            <img src="https://blog.marraforni.com/wp/wp-content/uploads/2021/03/Rep-Chef-Blog.png"
                                 className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make
                                    up the bulk of the card's content.</p>
                                <button className='mf_btn'>Explore</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className={CulinaryStyle.pizza_university}>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10} className='p-5'>
                        <div className='text-center'>
                            <h2 className='text-center'>Welcome! <span className={CulinaryStyle.heading}>All Aspiring Pizzaiol</span></h2>
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