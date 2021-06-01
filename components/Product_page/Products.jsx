import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {withRouter} from 'next/router'
import { useRouter } from "next/router"

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as productActions from '../../actions/product'

import {Col, Container, Row} from 'react-bootstrap';

import ProductStyle from './Products.module.css';
import ScrollAnimation from "react-animate-on-scroll";


const Products = (props) => {
    const [product, setProduct] = useState([])
    const history = useRouter()

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
                        {(product && product.length)? product.map((item,id) => (
                            <div key={id}>
                                <ScrollAnimation duration={2} animateIn="zoomIn" animateOnce={true}>
                                    <div className={ProductStyle.product_headingbox}>
                                        <h2>{item.productTypeName}</h2>
                                        <p>{item.productTypeDescription}</p>
                                    </div>
                                </ScrollAnimation>
                                <Row className={ProductStyle.innovation}>
                                    {item.productCategory.map(res => (
                                        <Col lg={4} md={6} key={res.id}>
                                            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
                                                <div className={ProductStyle.product_inner}>
                                                    <img
                                                        src={res.productCategoryImagePath}
                                                        width="400" height="500" className="img-fluid"
                                                        alt="The Rotator"/>
                                                    <div className={ProductStyle.product_info}>
                                                        <h3>{res.productCategoryName}</h3>
                                                        <p>{res.productCategoryDescription.substr(0, 115)}</p>
                                                        {/*<Link href={`http://localhost:3005/product/${res.id}`}>*/}
                                                        <Link href={`http://localhost:3005/product/${res.id}`}>
                                                            <a className="mf_btn" title="The Rotator">Explore more</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </ScrollAnimation>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        )):null}
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
