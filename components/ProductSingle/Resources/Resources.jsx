import React from 'react';
import Link from 'next/link';
import {Col, Container, Row} from 'react-bootstrap';
import ResourcesStyle from './Resources.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

/**
 * @author
 * @function Resources
 **/

const Resources = (props) => {
    const {subCategoryList} = props.data
    console.log(subCategoryList)
    return (
        <section className={ResourcesStyle.section_outer}>
            <Container fluid>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <ScrollAnimation animateIn="zoomIn" animateOnce={true} duration={1}>
                            <div className={ResourcesStyle.title_box}>
                                <h2>Model Resources</h2>
                                <p>The Marra Forni Rotator Oven Spec Sheets, CAD Blocks, and REVIT Files refer to the
                                    resources option within the choices below.</p>
                            </div>
                        </ScrollAnimation>
                        <Row>
                            {(subCategoryList && subCategoryList.length) ? subCategoryList.map((item, id) => (
                                <Col md={4} key={item.id}>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration={1}>
                                        <div className={ResourcesStyle.inner}>
                                            <h4>{item.subCategoryName}</h4>
                                            <ul>
                                                {item.productList.map((item, id) => (
                                                    <li key={item.id}>
                                                        <Link href="/">
                                                            <a title="Rotator Gas" target="_blank">{item.productName}</a>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </ScrollAnimation>
                                </Col>
                            )) : null}
                            {/*<Col md={4}>*/}
                            {/*    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration={1}>*/}
                            {/*        <div className={ResourcesStyle.inner}>*/}
                            {/*            <h4>REVIT Files</h4>*/}
                            {/*            <ul>*/}
                            {/*                <li><Link href="/"><a title="Rotator Gas" target="_blank">Rotator*/}
                            {/*                    Gas</a></Link></li>*/}
                            {/*                <li><Link href="/"><a title="RT90G" target="_blank">RT90G</a></Link></li>*/}
                            {/*                <li><Link href="/"><a title="RT90G" target="_blank">RT110G</a></Link></li>*/}
                            {/*                <li><Link href="/"><a title="RT90G" target="_blank">RT130G</a></Link></li>*/}
                            {/*                <li><Link href="/"><a title="RT90G" target="_blank">RT150G</a></Link></li>*/}
                            {/*            </ul>*/}
                            {/*        </div>*/}
                            {/*    </ScrollAnimation>*/}
                            {/*</Col>*/}
                        </Row>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
        </section>
    )
}


export default Resources;