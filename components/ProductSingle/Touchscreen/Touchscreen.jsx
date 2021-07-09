import React, {useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TouchscreenStyle from './Touchscreen.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

/**
* @author
* @function Touchscreen
**/

const Touchscreen = (props) => {
  useEffect(()=>{
    var nodes  = [].slice.call(document.querySelectorAll('.Touchscreen_section_outer__ocpnD li'), 0);

    function getDirection(ev, obj) {
      var w, h, x, y, d;

      w = obj.offsetWidth;
      h = obj.offsetHeight;
      x = (ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? (h / w) : 1));
      y = (ev.pageY - obj.offsetTop - (h / 2) * (h > w ? (w / h) : 1));
      d = Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;

      return d;
    }

    function addClass(ev, obj, state) {
      var direction, class_suffix;

      direction = getDirection(ev, obj);
      class_suffix = "";
      obj.className = "";

      switch (direction) {
        case 0 : class_suffix = '-top';    break;
        case 1 : class_suffix = '-right';  break;
        case 2 : class_suffix = '-bottom'; break;
        case 3 : class_suffix = '-left';   break;
      }

      obj.classList.add(state + class_suffix);
    }

    nodes.forEach(function (el) {
      el.addEventListener('mouseover', function (ev) {
        addClass(ev, this, 'in');
      }, false);

      el.addEventListener('mouseout', function (ev) {
        addClass(ev, this, 'out');
      }, false);
    });
  })
  return(
    <section className={TouchscreenStyle.section_outer}>
      <Container fluid>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <ScrollAnimation animateIn="zoomIn" animateOnce={true} duration={2}>
              <div className={TouchscreenStyle.title_box}>
                <h1>Introducing the Touchscreen</h1>
                <h2>No technical skills, no problem.</h2>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
      <Container>
        <ul>
          <li>
            <img className={TouchscreenStyle.image} alt="Touchscreen" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/touchscreenone.png`} width="350" height="350" />
            <div className={TouchscreenStyle.info}>
              <h3>MarraSmart ® Control</h3>
              <p>Easy to use digital touchscreen technology features manual and programmable operating modes in addition to automated technical support assistance and diagnostics </p>
            </div>
          </li>
          <li>
            <img className={TouchscreenStyle.image} alt="Touchscreen" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/touchscreentwo.png`} width="350" height="350" />
            <div className={TouchscreenStyle.info}>
              <h3>Precision Timing</h3>
              <p>Guarantee consistent performance with a directional cooking deck, and exact speed control per rotation from 30 to 270 seconds . . .to the second!</p>
            </div>
          </li>
          <li>
            <img className={TouchscreenStyle.image} alt="Touchscreen" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/touchscreenthree.png`} width="350" height="350" />
            <div className={TouchscreenStyle.info}>
              <h3>Temperature Management</h3>
              <p>Execute daypart production and a variety of menu options with a thermal range of 400-950 Degrees F.</p>
            </div>
          </li>
          <li>
            <img className={TouchscreenStyle.image} alt="Touchscreen" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/touchscreenfour.png`} width="350" height="350" />
            <div className={TouchscreenStyle.info}>
              <h3>Auto ON/OFF Feature</h3>
              <p>Automate individual daily start up times so that you don’t lose valuable production time waiting for the oven to preheat.</p>
            </div>
          </li>
          <li>
            <img className={TouchscreenStyle.image} alt="Touchscreen" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/touchscreenfive.png`} width="350" height="350" />
            <div className={TouchscreenStyle.info}>
              <h3>Burner Efficiency Control</h3>
              <p>Operate burners individually to reduce energy consumption, or simultaneously for peak demand periods.</p>
            </div>
          </li>
          <li>
            <img className={TouchscreenStyle.image} alt="Touchscreen" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/touchscreensix.png`} width="350" height="350" />
            <div className={TouchscreenStyle.info}>
              <h3>High-Impact Protection</h3>
              <p>Protective touchscreen cover features self-closing hinges with high impact resistant plexiglass.</p>
            </div>
          </li>
          <li>
            <img className={TouchscreenStyle.image} alt="Touchscreen" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/touchscreenseven.png`} width="350" height="350" />
            <div className={TouchscreenStyle.info}>
              <h3>Built-in Operational Redundancy</h3>
              <p>Never be down, even with a control panel failure!  Manual switches activate oven power and recall the most recent temperature and deck rotation settings.</p>
            </div>
          </li>
          <li>
            <img className={TouchscreenStyle.image} alt="Touchscreen" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/touchscreeneight.png`} width="350" height="350" />
            <div className={TouchscreenStyle.info}>
              <h3>Oven Illumination</h3>
              <p>Optional oven feature that turns the oven cavity lighting on and off</p>
            </div>
          </li>
        </ul>
      </Container>
    </section>
   )
  }


export default Touchscreen;