import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {Container, Row, Col} from 'react-bootstrap';
import OverviewStyle from './Overview.module.css';
import CulinaryStyle from "../../CulinarySupport_Page/culinary.module.css";

/**
 * @author
 * @function Overview
 **/

const Overview = (props) => {
    const {categoryName,imageUrl,categoryDescription} = props.data
    return (
        <section className={OverviewStyle.section_outer}>
            <Container fluid>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <Row>
                            <Col lg={6} className='pt-5'>
                                <h2>{props.data.productCategory}</h2>
                                <p>{props.data.productDescription}</p>
                                <button className='mf_btn' onClick={() => props.onCheckOut()}>Check it Out</button>
                            </Col>
                            <Col lg={6} className={OverviewStyle.culinary_img}>
                                <img
                                    className='img-fluid'
                                    src={props.data.uploadImage}
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
        </section>
    )
}


export default Overview;