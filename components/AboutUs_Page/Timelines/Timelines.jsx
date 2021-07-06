import React, {useEffect} from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import TimelineStyle from './Timeline.module.css'

const Timelines = (props) => {
  useEffect(()=>{
    (function(jQuery) {
      jQuery.fn.timeline = function() {
        var selectors = {
          id: jQuery(this),
          item: jQuery(this).find(".timeline-item"),
          activeClass: "timeline-item--active",
          img: ".timeline__img"
        };
        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css(
          "background-image",
          "url(" +
            selectors.item
              .first()
              .find(selectors.img)
              .attr("src") +
            ")"
        );
        var itemLength = selectors.item.length;
        jQuery(window).scroll(function() {
          var max, min;
          var pos = jQuery(this).scrollTop();
          selectors.item.each(function(i) {
            min = jQuery(this).offset().top;
            max = jQuery(this).height() + jQuery(this).offset().top;
            var that = jQuery(this);
            if (i == itemLength - 2 && pos > min + jQuery(this).height() / 2) {
              selectors.item.removeClass(selectors.activeClass);
              selectors.id.css(
                "background-image",
                "url(" +
                  selectors.item
                    .last()
                    .find(selectors.img)
                    .attr("src") +
                  ")"
              );
              selectors.item.last().addClass(selectors.activeClass);
            } else if (pos <= max - 40 && pos >= min) {
              selectors.id.css(
                "background-image",
                "url(" +
                  jQuery(this)
                    .find(selectors.img)
                    .attr("src") +
                  ")"
              );
              selectors.item.removeClass(selectors.activeClass);
              jQuery(this).addClass(selectors.activeClass);
            }
          });
        });
      };
    })(jQuery);

    jQuery("#timeline-1").timeline();

  },[])

  return(
    <Container fluid className={'timeline-container'} id="timeline-1">
      <Row>
        <Col lg={1}></Col>
        <Col lg={10}>
          <div className="timeline-header">
            <h1>About Us</h1>
            <h3>Timeline</h3>
          </div>
          <div className="timeline">
            <div className="timeline-item" data-text="ABOUT OF THE MARRA FORNI">
              <div className={`${TimelineStyle.heading} timeline__content`}>
                <img className="timeline__img" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/PIC_7775.jpg`} alt='About Us' width='1500' height='1500' />
                <Link href='https://www.linkedin.com/in/francesco-marra-aa204518/'>
                  <a target='_blank' rel='noopener' title='Linked In'>
                    {/*<h2 className="timeline__content-title">1981</h2>*/}
                    <h6 className="timeline__content-title">Francesco Marra</h6>
                  </a>
                </Link>
                <p className="timeline__content-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <div className="timeline-item" data-text="ABOUT OF THE MARRA FORNI">
              <div className={`${TimelineStyle.heading} timeline__content`}>
                <img className="timeline__img" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/PIC_7591-1.jpg`} alt='About Us' width='1500' height='1500' />
                <Link href='https://www.linkedin.com/in/vincenzo-marra-coo/'>
                  <a target='_blank' rel='noopener' title='Linked In'>
                    {/*<h2 className="timeline__content-title">1984</h2>*/}
                    <h6 className="timeline__content-title">Vincenzo Marra</h6>
                  </a>
                </Link>
                <p className="timeline__content-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            {/*<div className="timeline-item" data-text="ABOUT OF THE MARRA FORNI">*/}
            {/*  <div className="timeline__content">*/}
            {/*    <img className="timeline__img" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/Todd-1.png`} alt='About Us' width='1500' height='1500' />*/}
            {/*    <h2 className="timeline__content-title">1987</h2>*/}
            {/*    <p className="timeline__content-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="timeline-item" data-text="ABOUT OF THE MARRA FORNI">*/}
            {/*  <div className="timeline__content">*/}
            {/*    <img className="timeline__img" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/PIC_7625.jpg`} alt='About Us' width='1500' height='1500' />*/}
            {/*    <h2 className="timeline__content-title">1990</h2>*/}
            {/*    <p className="timeline__content-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="timeline-item" data-text="ABOUT OF THE MARRA FORNI">*/}
            {/*  <div className="timeline__content">*/}
            {/*    <img className="timeline__img" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/David-copy.png`} alt='About Us' width='1500' height='1500' />*/}
            {/*    <h2 className="timeline__content-title">1993</h2>*/}
            {/*    <p className="timeline__content-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="timeline-item" data-text="ABOUT OF THE MARRA FORNI">*/}
            {/*  <div className="timeline__content">*/}
            {/*    <img className="timeline__img" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/PIC_7673.jpg`} alt='About Us' width='1500' height='1500' />*/}
            {/*    <h2 className="timeline__content-title">1996</h2>*/}
            {/*    <p className="timeline__content-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="timeline-item" data-text="ABOUT OF THE MARRA FORNI">*/}
            {/*  <div className="timeline__content">*/}
            {/*    <img className="timeline__img" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/PIC_1116-min-e1550695784172.jpg`} alt='About Us' width='1500' height='1500' />*/}
            {/*    <h2 className="timeline__content-title">1999</h2>*/}
            {/*    <p className="timeline__content-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="timeline-item" data-text="ABOUT OF THE MARRA FORNI">*/}
            {/*  <div className="timeline__content">*/}
            {/*    <img className="timeline__img" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/Maykell-1.png`} alt='About Us' width='1500' height='1500' />*/}
            {/*    <h2 className="timeline__content-title">2002</h2>*/}
            {/*    <p className="timeline__content-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="timeline-item" data-text="ABOUT OF THE MARRA FORNI">*/}
            {/*  <div className="timeline__content">*/}
            {/*    <img className="timeline__img" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/PIC_7647.jpg`} alt='About Us' width='1500' height='1500' />*/}
            {/*    <h2 className="timeline__content-title">2005</h2>*/}
            {/*    <p className="timeline__content-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="timeline-item" data-text="ABOUT OF THE MARRA FORNI">*/}
            {/*  <div className="timeline__content">*/}
            {/*    <img className="timeline__img" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/PIC_7632.jpg`} alt='About Us' width='1500' height='1500' />*/}
            {/*    <h2 className="timeline__content-title">2008</h2>*/}
            {/*    <p className="timeline__content-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="timeline-item" data-text="ABOUT OF THE MARRA FORNI">*/}
            {/*  <div className="timeline__content">*/}
            {/*    <img className="timeline__img" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/P1366250-min.jpg`} alt='About Us' width='1500' height='1500' />*/}
            {/*    <h2 className="timeline__content-title">2011</h2>*/}
            {/*    <p className="timeline__content-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="timeline-item" data-text="ABOUT OF THE MARRA FORNI">*/}
            {/*  <div className="timeline__content">*/}
            {/*    <img className="timeline__img" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/PIC_7606.jpg`} alt='About Us' width='1500' height='1500' />*/}
            {/*    <h2 className="timeline__content-title">2014</h2>*/}
            {/*    <p className="timeline__content-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="timeline-item" data-text="ABOUT OF THE MARRA FORNI">*/}
            {/*  <div className="timeline__content">*/}
            {/*    <img className="timeline__img" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/Girish.png`} alt='About Us' width='1500' height='1500' />*/}
            {/*    <h2 className="timeline__content-title">2017</h2>*/}
            {/*    <p className="timeline__content-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Container>
   )
  }


export default Timelines