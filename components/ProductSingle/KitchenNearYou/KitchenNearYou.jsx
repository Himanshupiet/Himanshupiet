import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Row, Col } from 'react-bootstrap';
import KitchenNearYouStyle from './KitchenNearYou.module.css';

/**
* @author
* @function KitchenNearYou
**/

const KitchenNearYou = (props) => {
  return(
    <section className={KitchenNearYouStyle.section_outer}>
      <Container fluid>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={1}>
              <h3>Want To Try Our Brick Ovens?</h3>
              <h2>VISIT A TEST KITCHEN NEAR YOU</h2>
              <p>Marra Forni has multiple test kitchens located across the country. You can take your next authentic Italian wood, gas, and electric brick oven for a spin anytime. Schedule a visit now</p>
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true} animateIn="zoomIn" duration={1}>
              <ul>
                <li><button>Washington, DC</button></li>
                <li><button>Downey, CA</button></li>
                <li><button>Los Angeles, CA</button></li>
                <li><button>Denver, CO</button></li>
                <li><button>Miami, FL</button></li>
                <li><button>Acworth, GA</button></li>
                <li><button>Atlanta, GA</button></li>
                <li><button>Norcross, GA</button></li>
                <li><button>Southfield, MI</button></li>
                <li><button>Charlotte, NC</button></li>
                <li><button>Houston, TX</button></li>
                <li><button>Fort Erie, ON</button></li>
                <li><button>Mexico City, MX</button></li>
                <li><button>Cardano Al Campo (Va), Italy</button></li>
                <li><button>Dubai, UAE</button></li>
              </ul>
            </ScrollAnimation>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </section>
   )
  }


export default KitchenNearYou;