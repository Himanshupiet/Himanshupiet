import React, {useEffect} from 'react';
import { Container } from 'react-bootstrap';
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
      <Container>
        <ScrollAnimation animateIn="zoomIn" animateOnce={true} duration={2}>
          <div className={TouchscreenStyle.title_box}>
            <h1>Introducing the Touchscreen</h1>
            <h2>No technical skills, no problem.</h2>
          </div>
        </ScrollAnimation>
        <ul>
          <li>
            <img className={TouchscreenStyle.image} alt="Touchscreen" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/touchscreen.webp`} width="350" height="350" />
            <div className={TouchscreenStyle.info}>
              <h3>Auto Curing</h3>
              <p>Reduce errors and increase the lifespan of your Marra Forni Rotator brick oven.</p>
            </div>
          </li>
          <li>
            <img className={TouchscreenStyle.image} alt="Touchscreen" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/touchscreen.webp`} width="350" height="350" />
            <div className={TouchscreenStyle.info}>
              <h3>Auto On/Off</h3>
              <p>Save labor cost and never waste time reaching temperature in before you open.</p>
            </div>
          </li>
          <li>
            <img className={TouchscreenStyle.image} alt="Touchscreen" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/touchscreen.webp`} width="350" height="350" />
            <div className={TouchscreenStyle.info}>
              <h3>Flame Indicator</h3>
              <p>Limit human error with the high/low flames indicator.</p>
            </div>
          </li>
          <li>
            <img className={TouchscreenStyle.image} alt="Touchscreen" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/touchscreen.webp`} width="350" height="350" />
            <div className={TouchscreenStyle.info}>
              <h3>Multi-Languages</h3>
              <p>Make your chef happy with English, Spanish, Italian, French and German support.</p>
            </div>
          </li>
          <li>
            <img className={TouchscreenStyle.image} alt="Touchscreen" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/touchscreen.webp`} width="350" height="350" />
            <div className={TouchscreenStyle.info}>
              <h3>Temperature Control</h3>
              <p>Dial-in the exact temperature needed for consistent cooking every time.</p>
            </div>
          </li>
          <li>
            <img className={TouchscreenStyle.image} alt="Touchscreen" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/touchscreen.webp`} width="350" height="350" />
            <div className={TouchscreenStyle.info}>
              <h3>Burners Control</h3>
              <p>Turn on/off the right or left burners of your Rotator brick oven. *</p>
            </div>
          </li>
          <li>
            <img className={TouchscreenStyle.image} alt="Touchscreen" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/touchscreen.webp`} width="350" height="350" />
            <div className={TouchscreenStyle.info}>
              <h3>Rotation Control</h3>
              <p>Speed up, slow down or change direction of the deck to fit your liking to the exact second.</p>
            </div>
          </li>
          <li>
            <img className={TouchscreenStyle.image} alt="Touchscreen" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/touchscreen.webp`} width="350" height="350" />
            <div className={TouchscreenStyle.info}>
              <h3>Manage Recipes</h3>
              <p>Create new customized recipes and store them for anyone to use within your restaurant.</p>
            </div>
          </li>
        </ul>
      </Container>
    </section>
   )
  }


export default Touchscreen;