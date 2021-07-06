import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {withRouter} from 'next/router'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as productActions from '../../actions/product'

import {Col, Container, Row} from 'react-bootstrap';

import ProductStyle from './Products.module.css';
import ScrollAnimation from "react-animate-on-scroll";


const Products = (props) => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        props.productActions.getAllProduct()
    }, [])

    useEffect(() => {
        setProduct(props.product.product)
    }, [props.product])
    console.log(product)

    return (
        <section className={ProductStyle.section_outer}>
            <Container fluid>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        {(product && product.length) ? product.map((item, id) => (
                            <div key={id}>
                                <ScrollAnimation duration={2} animateIn="zoomIn" animateOnce={true}>
                                    <div className={ProductStyle.product_headingbox}>
                                        <h2>{item.name}</h2>
                                        <p>{item.description}</p>
                                    </div>
                                </ScrollAnimation>
                                <Row className={ProductStyle.innovation}>
                                    {item.categoryList.map(res => (
                                        <Col lg={4} md={6} key={res.id}>
                                            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
                                                <div className={ProductStyle.product_inner}>
                                                    {/*<div style={{overflow: 'hidden', height: '320px',verticalAlign:'middle',display:'flex',justifyContent:'center',alignItems:'center'}}>*/}
                                                        <img
                                                            src={res.imageUrl}
                                                            className="img-fluid"
                                                            style={{transform: 'scale(.9)'}}
                                                            alt="The Rotator"/>
                                                    {/*</div>*/}
                                                    <div className={ProductStyle.product_info}>
                                                        <h3>{res.categoryName}</h3>
                                                        <p>{res.categoryDescription.substr(0, 80) + "..."}</p>
                                                        <Link href={`/product/${res.categoryName}`}>
                                                            <a className="mf_btn" title="The Rotator">Explore more</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </ScrollAnimation>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        )) : null}
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
        </section>
    )
}

const mapStateToProps = ({product}) => {
    return {product}
}

const mapDispatchToProps = dispatch => {
    return {
        productActions: bindActionCreators(productActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Products))
