import React, {useEffect, useState} from 'react'

import Header from '../header/header'
import Footer from '../footer/footer'
import Filters from './Filters/Filters'
import FiltersResult from './FiltersResult/FiltersResult'

import ResourceStyle from './index.module.css'
import { Container, Row, Col } from 'react-bootstrap'

import { PRODUCT_DATA } from './product'

const Resources_main = (props) => {
  const[ product, setProduct ] = useState([])

  useEffect(() => {
    setProduct(PRODUCT_DATA)
  },[])

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
                  <Filters
                    product={ product }
                  />
                </Col>
                <Col md={9}>
                  <FiltersResult
                    product={ product }
                  />
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