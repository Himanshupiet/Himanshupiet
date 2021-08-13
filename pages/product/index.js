import React from 'react'

import Head from '../../components/common/Head'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Products from '../../components/Product_page/Products'
import GetAQuote from '../../components/common/GetAQuote/GetAQuote'
import {Col, Container, Row} from 'react-bootstrap'
import ProductStyle from './index.module.css'
import MainHomePageStyle from "../../components/Home_Page/index.module.css";

const Product = (props) => {
    return (
        <>
            <Head
                title='Products - MarraForni'
                description='Marra Forni offers a one-stop-shop for restaurant oven and oven equipment and appliances and other foodservice businesses. Our innovative solutions range from'
                canonical='product'
            />
            <Header/>
            <div style={{
                height: '610px',
                backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/Choose-Your-Model-Banner.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover'
            }}/>
            <Products/>
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
export default Product