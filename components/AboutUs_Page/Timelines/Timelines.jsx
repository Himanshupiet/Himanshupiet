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
                                    <p className="timeline__content-desc">Marra Forni currently markets and supports
                                        products in 5 continents and 23 countries
                                        worldwide.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <Container className={`${TimelineStyle.our_mission}`}>
                <Row>
                    {/*<Col lg={1}></Col>*/}
                    <Col lg={12} className={TimelineStyle.outer_section}>
                        {/*<h2>Our Mission</h2>*/}
                        <Row>
                            <Col lg={6}>
                                <div className={`${TimelineStyle.mission_statement}`}>
                                    <h2>OUR MISSION</h2>
                                    <p>At Marra Forni, we value each of our customers individually, with respect and
                                        gratitude. We carefully list
                                        en to our customer’s needs so that our understanding may result in delivering
                                        the best possible customer experience and innovative customized solution,
                                        providing inspiration and growth in their business.
                                    </p>
                                    <p>At Marra Forni, our family of employees is what defines us in the global
                                        marketplace. We recognize the significant individual talents and unique
                                        contributions that each of our employees provides in making our products highly
                                        sought after, respected and valued in the foodservice industry.
                                    </p>
                                    <p>At Marra Forni, we are all as individuals and as an organization, committed to
                                        operating and managing our business responsibly and profitably our Owners and
                                        Shareholders, allowing for continued growth and reinvestment in our
                                        business.
                                    </p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className={`${TimelineStyle.side_video} card`}>
                                    <iframe width="531" height="360" src="https://www.youtube.com/embed/ZspT1T45rIQ"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                    <div className={`${TimelineStyle.mission_statement} mt-3`}>
                                        <h2>OUR VISION</h2>
                                        <p>To partner with and inspire our customers across the world by providing
                                            innovative brick oven cooking solutions while maintaining our Artisan roots.
                                        </p>
                                    </div>
                                    {/*<div className={`${TimelineStyle.side_video_content} card-body text-center`}>*/}
                                    {/*    <p className="card-text text-white">Subscribe To Our YouTube Channel</p>*/}
                                    {/*    <button href="#" className="mf_btn">Youtube</button>*/}
                                    {/*</div>*/}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    {/*<Col lg={1}></Col>*/}
                </Row>
            </Container>
            <Container className={`${TimelineStyle.our_mission}`}>
                <Row>
                    <Col lg={12} className={TimelineStyle.outer_section}>
                        <h2>OUR VALUES</h2>
                        <Row>
                            <Col lg={4}>
                                <div className={TimelineStyle.our_mission_heading}>
                                    <h5>
                                        <i className="fa fa-star pr-1"></i>
                                        Value
                                    </h5>
                                    <p> We promise to deliver exceptional value in all that we do through our commitment
                                        to quality, innovation, support and partnership.</p>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={TimelineStyle.our_mission_heading}>
                                    <h5>
                                        <i className="fa fa-star pr-1"></i>
                                        Quality
                                    </h5>
                                    <p> We are committed to preserving our tradition of artisan workmanship combined
                                        with state-of-the-art technology and design innovation, to produce the highest
                                        quality products in our industry.</p>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={TimelineStyle.our_mission_heading}>
                                    <h5>
                                        <i className="fa fa-user pr-1"></i>
                                        Integrity and Respect
                                    </h5>
                                    <p>We believe in doing the right thing, for our company, for our employees, for our
                                        customers, and for our industry. </p>
                                </div>
                            </Col>
                        </Row>
                        <Row className='pt-5'>
                            <Col lg={4}>
                                <div className={TimelineStyle.our_mission_heading}>
                                    <h5>
                                        <i className="fa fa-lightbulb-o pr-1"></i>
                                        Service
                                    </h5>
                                    <p> We are committed to exceeding the expectations of our customers by providing the
                                        highest level of customer support possible.</p>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={TimelineStyle.our_mission_heading}>
                                    <h5>
                                        <i className="fa fa-user pr-1"></i>
                                        Family
                                    </h5>
                                    <p> We are committed to our people, working together as a team toward the
                                        achievement of a common goal, and to the responsibility of helping them to
                                        achieve success in their personal and professional endeavors.</p>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={TimelineStyle.our_mission_heading}>
                                    <h5>
                                        <i className="fa fa-lightbulb-o pr-1"></i>
                                        Customer Experience
                                    </h5>
                                    <p>We promise to embrace continuous improvement as the foundation for achieving the
                                        positive experience that each of our customers, internal and external, has as a
                                        result of engaging with our company. </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Timelines