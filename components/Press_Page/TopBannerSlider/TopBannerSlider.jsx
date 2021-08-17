import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopBannerStyle from './TopBannerSlider.module.css'
import {Container, Row, Col} from 'react-bootstrap';
import Link from 'next/link';

const TopBannerSlider = (props) => {
    const slider = props.slider

    let TopBannerSliderSettings = {
        speed: 800,
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true
    };
    return (

        <Slider {...TopBannerSliderSettings} className={TopBannerStyle.slider_outer}>
            {(slider && slider.length) ? slider.map((item, i) => (
                <div key={item.id}>
                    <Container fluid className={TopBannerStyle.slider_inner}
                               style={{backgroundImage: `url(${item.imagePath})`}}>
                        <Row>
                            <Col lg={1}></Col>
                            <Col lg={10}>
                                <div className={TopBannerStyle.slider_content}>
                                    <h1>{item.title}</h1>
                                    <h3>{item.createdAt}</h3>
                                    <p>{item.message}</p>
                                    <Link href='/events'>
                                        <a title='events' className='mf_btn'>
                                            Events
                                        </a>
                                    </Link>
                                </div>
                            </Col>
                            <Col lg={1}></Col>
                        </Row>
                    </Container>
                </div>
            )) : null}
        </Slider>
    )
}


export default TopBannerSlider