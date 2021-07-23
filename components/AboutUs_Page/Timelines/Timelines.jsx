import React, {useEffect} from 'react'
import {Col, Row, Container} from 'react-bootstrap'
import Link from "next/link";
import TimelineStyle from './Timeline.module.css'

const Timelines = (props) => {
    useEffect(() => {
        (function (jQuery) {
            jQuery.fn.timeline = function () {
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
                jQuery(window).scroll(function () {
                    var max, min;
                    var pos = jQuery(this).scrollTop();
                    selectors.item.each(function (i) {
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

    }, [])

    return (
        <>
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
                                    <img className="timeline__img"
                                         src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/PIC_7775.jpg`}
                                         alt='About Us' width='1500' height='1500'/>
                                    <Link href='https://www.linkedin.com/in/francesco-marra-aa204518/'>
                                        <a target='_blank' rel='noopener' title='Linked In'>
                                            {/*<h2 className="timeline__content-title">1981</h2>*/}
                                            <h6 className="timeline__content-title">Francesco Marra</h6>
                                        </a>
                                    </Link>
                                    <p className="timeline__content-desc">The Marra brothers, Francesco and Enzo, are
                                        natives of Naples, Italy – the original birthplace of pizza.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item" data-text="ABOUT OF THE MARRA FORNI">
                                <div className={`${TimelineStyle.heading} timeline__content`}>
                                    <img className="timeline__img"
                                         src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/PIC_7591-1.jpg`}
                                         alt='About Us' width='1500' height='1500'/>
                                    <Link href='https://www.linkedin.com/in/vincenzo-marra-coo/'>
                                        <a target='_blank' rel='noopener' title='Linked In'>
                                            <h6 className="timeline__content-title">Vincenzo Marra</h6>
                                        </a>
                                    </Link>
                                    <p className="timeline__content-desc">After immigrating to the U.S. in 1995, the
                                        Marra
                                        brothers began working in the food industry. Francesco explored a culinary
                                        career in
                                        Washington DC and served as Executive Chef for some of DC’s most prominent
                                        Italian
                                        restaurants. Enzo brought with him a strong technical and mechanical skill-set
                                        from
                                        previous Operations Management experience in Italy.</p>
                                </div>
                            </div>
                            <div className="timeline-item" data-text="ABOUT OF THE MARRA FORNI">
                                <div className="timeline__content">
                                    <img className="timeline__img"
                                         src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/about-us-image-3.png`}
                                         alt='About Us' width='1500' height='1500'/>
                                    <p className="timeline__content-desc">In 1999 the brother entre’ into the pizza oven
                                        business began with a client request to source an Authentic Italian Brick
                                        Oven. </p>
                                </div>
                            </div>
                            <div className="timeline-item" data-text="ABOUT OF THE MARRA FORNI">
                                <div className="timeline__content">
                                    <img className="timeline__img"
                                         src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/KI-Award-Electric-Oven.png`}
                                         alt='About Us' width='1500' height='1500'/>
                                    <p className="timeline__content-desc">
                                        Early attempts with importing became a challenge and when European manufacturers
                                        were unwilling to improve the quality of their products, a unique opportunity
                                        presented itself. It was this need and demand in the marketplace that convinced
                                        the
                                        brothers to sell their gourmet food distribution business and invest everything
                                        into
                                        a new venture in foodservice equipment manufacturing. In 2011 Marra Forni was
                                        established, and a new adventure began.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item" data-text="ABOUT OF THE MARRA FORNI">
                                <div className="timeline__content">
                                    <img className="timeline__img"
                                         src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Marra-Distribition.png`}
                                         alt='About Us' width='1500' height='1500'/>
                                    <p className="timeline__content-desc">In 1999 the brother entre’ into the pizza oven
                                        business began with a client request to source an Authentic Italian Brick
                                        Oven. </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            {/*<Container fluid className={`${TimelineStyle.middle_img}`}>*/}
            {/*    <Row>*/}
            {/*        <Col lg={2}></Col>*/}
            {/*        <Col lg={7}>*/}
            {/*            <div>*/}
            {/*                <p>Marra Forni currently markets and supports products in 5 continents and 23 countries*/}
            {/*                    worldwide. </p>*/}
            {/*            </div>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</Container>*/}
        </>
    )
}


export default Timelines