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
      </Container>
    </section>
   )
  }


export default KitchenNearYou;