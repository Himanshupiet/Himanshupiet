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
    dots: true,
    infinite: true,
    speed: 800,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
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
    <Container fluid>
      <Slider {...LogoSliderSettings} className={SliderStyle.logoslider_outer}>
          <div className={SliderStyle.logoslider_inner}>
            <img className="img-fluid" alt="5StarGoogleReview" width="115" height="70" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/5StarGoogleReview.webp`} />
          </div>
          <div className={SliderStyle.logoslider_inner}>
            <img className="img-fluid" alt="NationalRestaurantAssociationlogo" width="115" height="70" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/1200px-National_Restaurant_Association_logo.webp`} />
          </div>
          <div className={SliderStyle.logoslider_inner}>
            <img className="img-fluid" alt="AHFLogo" width="115" height="70" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AHFLogo.webp`} />
          </div>
          <div className={SliderStyle.logoslider_inner}>
            <img className="img-fluid" alt="download" width="115" height="70" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/download.webp`} />
          </div>
          <div className={SliderStyle.logoslider_inner}>
            <img className="img-fluid" alt="FEDALogoTransparent" width="115" height="70" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/FEDA_Logo_Transparent2.webp`} />
          </div>
          <div className={SliderStyle.logoslider_inner}>
            <img className="img-fluid" alt="Manufactured-in-USA" width="115" height="70" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Manufactured-in-USA.webp`} />
          </div>
          <div className={SliderStyle.logoslider_inner}>
            <img className="img-fluid" alt="NACUFSLogo20201204" width="115" height="70" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/NACUFSLogo20201204.webp`} />
          </div>
          <div className={SliderStyle.logoslider_inner}>
            <img className="img-fluid" alt="NAFEMLogo" width="115" height="70" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/NAFEMLogo.webp`} />
          </div>
          <div className={SliderStyle.logoslider_inner}>
            <img className="img-fluid" alt="Pizza-U-Logo" width="115" height="70" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Pizza-U-Logo.png`} />
          </div>
          <div className={SliderStyle.logoslider_inner}>
            <img className="img-fluid" alt="shfm_logo" width="115" height="70" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/shfm_logo_400px.webp`} />
          </div>
          <div className={SliderStyle.logoslider_inner}>
            <img className="img-fluid" alt="VPNLogo" width="115" height="70" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/VPNLogo.webp`} />
          </div>
        </Slider>
    </Container>
    </section>
   )
  }


export default LogoSlider;