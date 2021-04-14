import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderStyle from './LogoSlider.module.css';
import Link from 'next/link';

/**
* @author
* @function LogoSlider
**/

const LogoSlider = (props) => {
  let LogoSliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4
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
    <section className={SliderStyle.section_outer}>
    <Container>
      <Slider {...LogoSliderSettings} className={SliderStyle.logoslider_outer}>
          <div className={SliderStyle.logoslider_inner}>
            <Link href="https://www.wegmans.com/">
              <a target="_blank" rel="noopener" title="Wegmans">
                <img className="img-fluid" alt="Wegmans" width="115" height="70" src="./images/marraforni_clients_wegmans.webp" />
              </a>
            </Link>
          </div>
          <div className={SliderStyle.logoslider_inner}>
            <Link href="https://www.wholefoodsmarket.com/">
              <a target="_blank" rel="noopener" title="Whole Foods Market">
                <img className="img-fluid" alt="Whole Foods Market" width="115" height="70" src="./images/marraforni_clients_wholefood.webp" />
              </a>
            </Link>
          </div>
          <div className={SliderStyle.logoslider_inner}>
            <Link href="https://sbarro.com/">
              <a target="_blank" rel="noopener" title="Sbarro">
                <img className="img-fluid" alt="Sbarro" width="115" height="70" src="./images/marraforni_clients_sbarro.webp" />
              </a>
            </Link>
          </div>
          <div className={SliderStyle.logoslider_inner}>
            <Link href="https://modernmarket.com/">
              <a target="_blank" rel="noopener" title="Modern Market">
                <img className="img-fluid" alt="Modern Market" width="115" height="70" src="./images/marraforni_clients_modmarket.webp" />
              </a>
            </Link>
          </div>
          <div className={SliderStyle.logoslider_inner}>
            <Link href="https://urbanbrickspizza.com/">
              <a target="_blank" rel="noopener" title="Urban Bricks Pizza">
                <img className="img-fluid" alt="Urban Bricks Pizza" width="115" height="70" src="./images/marraforni_clients_urbanbricks.webp" />
              </a>
            </Link>
          </div>
          <div className={SliderStyle.logoslider_inner}>
            <Link href="https://kingsfoodmarkets.com/">
              <a target="_blank" rel="noopener" title="Kingsfood Markets">
                <img className="img-fluid" alt="Kingsfood Markets" width="115" height="70" src="./images/marraforni_clients_kings.webp" />
              </a>
            </Link>
          </div>
        </Slider>
    </Container>
    </section>
   )
  }


export default LogoSlider;