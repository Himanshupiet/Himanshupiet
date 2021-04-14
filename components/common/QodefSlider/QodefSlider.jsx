import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import QodefSliderStyle from './QodefSlider.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

/**
* @author
* @function QodefSlider
**/

const QodefSlider = (props) => {
  let QodefSliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return(
    <section className={QodefSliderStyle.section_outer}>
      <Container fluid>
        <ScrollAnimation duration={1.5} animateIn="fadeInUp" animateOnce={true}>
          <Slider {...QodefSliderSettings} className={QodefSliderStyle.qodefslider_outer}>
            <div className={QodefSliderStyle.qodefslider_inner}>
              <div className={QodefSliderStyle.qodefslider_innermain}>
                <img className="img-fluid" alt="Wegmans" width="376" height="498" src="./images/WholeFoods.webp" />
              </div>
            </div>
            <div className={QodefSliderStyle.qodefslider_inner}>
              <div className={QodefSliderStyle.qodefslider_innermain}>
                <img className="img-fluid" alt="Wegmans" width="376" height="498" src="./images/Wegmans.webp" />
              </div>
            </div>
            <div className={QodefSliderStyle.qodefslider_inner}>
              <div className={QodefSliderStyle.qodefslider_innermain}>
                <img className="img-fluid" alt="Wegmans" width="376" height="498" src="./images/UrbanBrick.webp" />
              </div>
            </div>
            <div className={QodefSliderStyle.qodefslider_inner}>
              <div className={QodefSliderStyle.qodefslider_innermain}>
                <img className="img-fluid" alt="Wegmans" width="376" height="498" src="./images/PizzaFire.webp" />
              </div>
            </div>
            <div className={QodefSliderStyle.qodefslider_inner}>
              <div className={QodefSliderStyle.qodefslider_innermain}>
                <img className="img-fluid" alt="Wegmans" width="376" height="498" src="./images/WholeFoods.webp" />
              </div>
            </div>
          </Slider>
        </ScrollAnimation>
      </Container>
    </section>
   )
  }


export default QodefSlider;