import React from 'react'
import Header from "../header/header";
import ResourceStyle from "../Resources_Page/index.module.css";
import {Col, Container, Row} from "react-bootstrap";
import Filters from "../Resources_Page/Filters/Filters";
import FiltersResult from "../Resources_Page/FiltersResult/FiltersResult";
import Footer from "../footer/footer";

const Thankyou = (props) => {
    return(
        <>
            <Header />
            <div
                style={{
                    height:'300px',
                    background:`#eee`,
                    backgroundRepeat:'no-repeat',
                    backgroundAttachment:'fixed',
                    backgroundSize:'cover',
                    backgroundPosition: 'center',
                    textAlign:'center'
                 }}>
                <h1 className='' style={{paddingTop:'7rem'}}>Thank You</h1>
            </div>
            <section className={ResourceStyle.section_outer} style={{background:'#fff'}}>
                <Container fluid>
                    <Row>
                        <Col lg={1}></Col>
                        <Col lg={10}>
                           Thankyou
                        </Col>
                        <Col lg={1}></Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )

}

export default Thankyou