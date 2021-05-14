import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import ResourceStyle from './index.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import Filters from './Filters/Filters';
import FiltersResult from './FiltersResult/FiltersResult';

const Resources_main = (props) => {
  return(
    <>
      <Header />
      <div style={{
        height:'300px',
        backgroundImage:`url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/resource_banner.png)`,
        backgroundRepeat:'no-repeat',
        backgroundAttachment:'fixed',
        backgroundSize:'cover',
        backgroundPosition: 'center'
      }}/>
      <section className={ResourceStyle.section_outer}>
        <Container fluid>
          <Row>
            <Col lg={1}></Col>
            <Col lg={10}>
              <Row>
                <Col md={3}>
                  <Filters />
                </Col>
                <Col md={9}>
                  <FiltersResult />
                </Col>
              </Row>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
   )

 }

export default Resources_main