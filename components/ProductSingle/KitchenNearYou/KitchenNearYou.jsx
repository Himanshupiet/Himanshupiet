import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container } from 'react-bootstrap';
import KitchenNearYouStyle from './KitchenNearYou.module.css';

/**
* @author
* @function KitchenNearYou
**/

const KitchenNearYou = (props) => {
  return(
    <section className={KitchenNearYouStyle.section_outer}>
      <Container>
        <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={1}>
          <h4>Want To Try Our Brick Ovens?</h4>
          <h3>VISIT A TEST KITCHEN NEAR YOU</h3>
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
      </Container>
    </section>
   )
  }


export default KitchenNearYou;