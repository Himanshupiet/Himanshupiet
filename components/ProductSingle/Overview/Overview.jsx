import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container } from 'react-bootstrap';
import OverviewStyle from './Overview.module.css';

/**
* @author
* @function Overview
**/

const Overview = (props) => {
  return(
    <section className={OverviewStyle.section_outer}>
      <Container>
        <ScrollAnimation animateOnce={true} animateIn="fadeIn" duration={2}>
          <h2>Easy and Efficient</h2>
          <h3>Like a Professional.</h3>
          <p>Engineered specifically to accommodate high-volume pizza-making of a true pizzaiolo. The Marra Forni Rotator is the most versatile, durable, and easy-to-use brick oven on the market. Marra Forni Rotator brick oven comes with the most high-tech standard features currently available in the market. In addition to the rotating deck, the Rotator brick oven is highly customizable with additional Turbo Burner, Integral Exhaust System, Custom Tile Design, and many more. Wood-fired burning and Gas fired burning options are available to meet the specific needs of your commercial restaurant oven.</p>
        </ScrollAnimation>
      </Container>
    </section>
   )
  }


export default Overview;