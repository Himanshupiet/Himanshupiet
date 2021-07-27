import React from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import ModalsStyle from './Modals.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

/**
* @author
* @function Modals
**/

const Modals = (props) => {
  return(
    <section className={ModalsStyle.section_outer}>
      <Container fluid>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
              <div className={ModalsStyle.title_box}>
                <h1>Fast-Casual, Franchise, Chains, etc…</h1>
                <h2>Whatever your needs, there’s a Rotator brick oven for you.</h2>
              </div>
            </ScrollAnimation>
            <Row>
                { props &&
                  props.data &&
                  props.data.productPageCardFiles &&
                  props.data.productPageCardFiles.length ?
                    props.data.productPageCardFiles.map((cat, i) =>{
                      return (
                          <Col lg={3} md={6} key={i}>
                              <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
                                  <div className={ModalsStyle.product_inner}>
                                      <img src={cat.imageUrl} width="400" height="500" className="img-fluid" alt="Rotator RT90" />
                                      <div className={ModalsStyle.product_info}>
                                          <h3>{cat.title}</h3>
                                          <p>{(cat.description).substr(0,90)}{(cat.description).length > 90 && "..."}</p>
                                          <Link href={cat.fileUrl}>
                                              <a className="mf_btn" target="_blank" title="Rotator RT90">Quick Specs</a>
                                          </Link>
                                      </div>
                                  </div>
                              </ScrollAnimation>
                          </Col>
                      )
                    })
                    : null
                }

            </Row>
          </Col>
          <Col lg={1}></Col>
        </Row>
        
      </Container>
    </section>
   )
  }


export default Modals;