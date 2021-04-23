import React from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import ResourcesStyle from './Resources.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

/**
* @author
* @function Resources
**/

const Resources = (props) => {
  return(
    <section className={ResourcesStyle.section_outer}>
      <Container>
        <ScrollAnimation animateIn="zoomIn" animateOnce={true} duration={1}>
          <div className={ResourcesStyle.title_box}>
            <h3>Model Resources</h3>
            <p>The Marra Forni Rotator Oven Spec Sheets, CAD Blocks, and REVIT Files refer to the resources option within the choices below.</p>
          </div>
        </ScrollAnimation>
        <Row>
          <Col md={4}>
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration={1}>
              <div className={ResourcesStyle.inner}>
                <h4>Spec Sheets</h4>
                <ul>
                  <li><Link href="/"><a title="Rotator Gas" target="_blank">Rotator Gas</a></Link></li>
                  <li><Link href="/"><a title="RT90G" target="_blank">RT90G</a></Link></li>
                  <li><Link href="/"><a title="RT90G" target="_blank">RT110G</a></Link></li>
                  <li><Link href="/"><a title="RT90G" target="_blank">RT130G</a></Link></li>
                  <li><Link href="/"><a title="RT90G" target="_blank">RT150G</a></Link></li>
                </ul>
              </div>
            </ScrollAnimation>
          </Col>
          <Col md={4}>
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration={1}>
              <div className={ResourcesStyle.inner}>
                <h4>CAD Blocks</h4>
                <ul>
                  <li><Link href="/"><a title="Rotator Gas" target="_blank">Rotator Gas</a></Link></li>
                  <li><Link href="/"><a title="RT90G" target="_blank">RT90G</a></Link></li>
                  <li><Link href="/"><a title="RT90G" target="_blank">RT110G</a></Link></li>
                  <li><Link href="/"><a title="RT90G" target="_blank">RT130G</a></Link></li>
                  <li><Link href="/"><a title="RT90G" target="_blank">RT150G</a></Link></li>
                </ul>
              </div>
            </ScrollAnimation>
          </Col>
          <Col md={4}>
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration={1}>
              <div className={ResourcesStyle.inner}>
                <h4>REVIT Files</h4>
                <ul>
                  <li><Link href="/"><a title="Rotator Gas" target="_blank">Rotator Gas</a></Link></li>
                  <li><Link href="/"><a title="RT90G" target="_blank">RT90G</a></Link></li>
                  <li><Link href="/"><a title="RT90G" target="_blank">RT110G</a></Link></li>
                  <li><Link href="/"><a title="RT90G" target="_blank">RT130G</a></Link></li>
                  <li><Link href="/"><a title="RT90G" target="_blank">RT150G</a></Link></li>
                </ul>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </section>
   )
  }


export default Resources;