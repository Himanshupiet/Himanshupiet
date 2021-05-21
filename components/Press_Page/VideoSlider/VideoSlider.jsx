import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-bootstrap';
import VideoSliderStyle from './VideoSlider.module.css'

const VideoSlider = (props) => {
  let VideoSliderSettings = {
    speed: 800,
    arrows: false,
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5
        }
      },
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
    <Container fluid className={VideoSliderStyle.slider_outer}>
      <Row>
        <Col lg={1}></Col>
        <Col lg={10}>
          <h2>Videos</h2>
          <Slider {...VideoSliderSettings}>
            <div>
              <div className={VideoSliderStyle.slider_inner_main}>
                <div className={VideoSliderStyle.slider_inner}>
                  <img alt='Videos' width='500' height='250' src={'https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F1624444%252Ffec3bb46-a019-4545-957e-ad25f777275f.png%252F400x225.png'} className='img-fluid' />
                  <div className={VideoSliderStyle.icon_overlay}>
                    <span><i className="bx bx-play-circle"></i></span>
                  </div>
                </div>
                <h6>Apex Commercial Kitchen Co.</h6>
              </div>
            </div>
            <div>
              <div className={VideoSliderStyle.slider_inner_main}>
                <div className={VideoSliderStyle.slider_inner}>
                  <img alt='Videos' width='500' height='250' src={'https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F1624444%252Ffec3bb46-a019-4545-957e-ad25f777275f.png%252F400x225.png'} className='img-fluid' />
                  <div className={VideoSliderStyle.icon_overlay}>
                    <span><i className="bx bx-play-circle"></i></span>
                  </div>
                </div>
                <h6>The Daily Show</h6>
              </div>
            </div>
            <div>
              <div className={VideoSliderStyle.slider_inner_main}>
                <div className={VideoSliderStyle.slider_inner}>
                  <img alt='Videos' width='500' height='250' src={'https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F1624444%252Ffec3bb46-a019-4545-957e-ad25f777275f.png%252F400x225.png'} className='img-fluid' />
                  <div className={VideoSliderStyle.icon_overlay}>
                    <span><i className="bx bx-play-circle"></i></span>
                  </div>
                </div>
                <h6>Brookside Market</h6>
              </div>
            </div>
            <div>
              <div className={VideoSliderStyle.slider_inner_main}>
                <div className={VideoSliderStyle.slider_inner}>
                  <img alt='Videos' width='500' height='250' src={'https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F1624444%252Ffec3bb46-a019-4545-957e-ad25f777275f.png%252F400x225.png'} className='img-fluid' />
                  <div className={VideoSliderStyle.icon_overlay}>
                    <span><i className="bx bx-play-circle"></i></span>
                  </div>
                </div>
                <h6>Rai Italia</h6>
              </div>
            </div>
            <div>
              <div className={VideoSliderStyle.slider_inner_main}>
                <div className={VideoSliderStyle.slider_inner}>
                  <img alt='Videos' width='500' height='250' src={'https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F1624444%252Ffec3bb46-a019-4545-957e-ad25f777275f.png%252F400x225.png'} className='img-fluid' />
                  <div className={VideoSliderStyle.icon_overlay}>
                    <span><i className="bx bx-play-circle"></i></span>
                  </div>
                </div>
                <h6>Campeonato Pizza Mexico </h6>
              </div>
            </div>
            <div>
              <div className={VideoSliderStyle.slider_inner_main}>
                <div className={VideoSliderStyle.slider_inner}>
                  <img alt='Videos' width='500' height='250' src={'https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F1624444%252Ffec3bb46-a019-4545-957e-ad25f777275f.png%252F400x225.png'} className='img-fluid' />
                  <div className={VideoSliderStyle.icon_overlay}>
                    <span><i className="bx bx-play-circle"></i></span>
                  </div>
                </div>
                <h6>Boston Pizza Festival 2018</h6>
              </div>
            </div>
            <div>
              <div className={VideoSliderStyle.slider_inner_main}>
                <div className={VideoSliderStyle.slider_inner}>
                  <img alt='Videos' width='500' height='250' src={'https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F1624444%252Ffec3bb46-a019-4545-957e-ad25f777275f.png%252F400x225.png'} className='img-fluid' />
                  <div className={VideoSliderStyle.icon_overlay}>
                    <span><i className="bx bx-play-circle"></i></span>
                  </div>
                </div>
                <h6>Hanover College</h6>
              </div>
            </div>
            <div>
              <div className={VideoSliderStyle.slider_inner_main}>
                <div className={VideoSliderStyle.slider_inner}>
                  <img alt='Videos' width='500' height='250' src={'https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F1624444%252Ffec3bb46-a019-4545-957e-ad25f777275f.png%252F400x225.png'} className='img-fluid' />
                  <div className={VideoSliderStyle.icon_overlay}>
                    <span><i className="bx bx-play-circle"></i></span>
                  </div>
                </div>
                <h6>Boston Pizza Festival 2019</h6>
              </div>
            </div>
          </Slider>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Container>
   )
  }


export default VideoSlider