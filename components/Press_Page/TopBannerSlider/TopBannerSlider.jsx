import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopBannerStyle from './TopBannerSlider.module.css'
import { Container, Row, Col } from 'react-bootstrap';

const TopBannerSlider = (props) => {
  let TopBannerSliderSettings = {
    speed: 800,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true
  };
  return(
    
      <Slider {...TopBannerSliderSettings} className={TopBannerStyle.slider_outer}>
        <div>
          <Container fluid className={TopBannerStyle.slider_inner} style={{backgroundImage: 'url(https://marraforni.com/wp/wp-content/uploads/2020/02/PIC_7194-scaled.jpg)'}}>
            <Row>
              <Col lg={1}></Col>
              <Col lg={10}>
                <div className={TopBannerStyle.slider_content}>
                  <h1>FER Virtual NEXT Online Conference</h1>
                  <h3>June 6, 2020</h3>
                  <p>Marra Forni is excited to participate at the first FER Virtual NEXT Online event on June 9th. Virtual NEXT is a new digital conference and online expo from Foodservice Equipment Reports offering attendees enhanced learning, networking, and equipment browsing experience.</p>
                </div>
              </Col>
              <Col lg={1}></Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container fluid className={TopBannerStyle.slider_inner} style={{backgroundImage: 'url(https://marraforni.com/wp/wp-content/uploads/2020/02/PIC_7194-scaled.jpg)'}}>
            <Row>
              <Col lg={1}></Col>
              <Col lg={10}>
                <div className={TopBannerStyle.slider_content}>
                  <h1>RC Show, Toronto, Canada</h1>
                  <h3>March 1 – 3, 2020</h3>
                  <p>Marra Forni is excited to participate at RC Show 2020. Come see the famous Marra Forni Rotator, Electric and Due Bocche brick ovens on display for 3 days in Toronto, Canada.</p>
                </div>
              </Col>
              <Col lg={1}></Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container fluid className={TopBannerStyle.slider_inner} style={{backgroundImage: 'url(https://marraforni.com/wp/wp-content/uploads/2018/01/Marra-Forni-Tradeshow-Event-nra-2016.jpg)'}}>
            <Row>
              <Col lg={1}></Col>
              <Col lg={10}>
                <div className={TopBannerStyle.slider_content}>
                  <h1>Phoenix, Arizona</h1>
                  <h3>May 22-25, 2020</h3>
                  <p>Join Marra Forni at the Restaurant Leadership Conference. Come checkout our innovative Marra Forni Rotator, Electric and Due Bocche brick ovens on display for 4 days at the JW Marriott Phoenix Desert Ridge Resort & Spa in Phoenix.</p>
                </div>
              </Col>
              <Col lg={1}></Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container fluid className={TopBannerStyle.slider_inner} style={{backgroundImage: 'url(https://marraforni.com/wp/wp-content/uploads/2018/01/Marra-Forni-Tradeshow-Event-Pizza-Expo-Abastur-Mexico.jpg)'}}>
            <Row>
              <Col lg={1}></Col>
              <Col lg={10}>
                <div className={TopBannerStyle.slider_content}>
                  <h1>International Pizza Expo, Las Vegas</h1>
                  <h3>March 30 – April 4, 2020</h3>
                  <p>Marra Forni is excited to participate at the International Pizza Expo 2020. Come see the famous Marra Forni Rotator, Electric and Due Bocche brick ovens on display for 5 days at the Las Vegas Convention Center.</p>
                </div>
              </Col>
              <Col lg={1}></Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container fluid className={TopBannerStyle.slider_inner} style={{backgroundImage: 'url(https://marraforni.com/wp/wp-content/uploads/2020/02/010.jpg)'}}>
            <Row>
              <Col lg={1}></Col>
              <Col lg={10}>
                <div className={TopBannerStyle.slider_content}>
                  <h1>FCSI The Americas 2020 conference, Austin, TX</h1>
                  <h3>April 30 – May 2, 2020</h3>
                  <p>Come meet Marra Forni at FCSI The Americas Conference 2020. Come check out our famous Marra Forni Rotator, Electric and Due Bocche brick ovens on display for 4 days in Austin, Texas.</p>
                </div>
              </Col>
              <Col lg={1}></Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container fluid className={TopBannerStyle.slider_inner} style={{backgroundImage: 'url(https://marraforni.com/wp/wp-content/uploads/2020/02/Pizza-Expo-Team.jpg)'}}>
            <Row>
              <Col lg={1}></Col>
              <Col lg={10}>
                <div className={TopBannerStyle.slider_content}>
                  <h1>NRA 2020, Illinois, Chicago</h1>
                  <h3>May 16 – May 19, 2020</h3>
                  <p>Marra Forni will be at the NRA 2020 trades show in Illinois, Chicago. Join Marra Forni and experience our famous Marra Forni Rotator, Electric and Due Bocche brick ovens on display for 3 days.</p>
                </div>
              </Col>
              <Col lg={1}></Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container fluid className={TopBannerStyle.slider_inner} style={{backgroundImage: 'url(https://marraforni.com/wp/wp-content/uploads/2020/02/PIC_1604-scaled.jpg)'}}>
            <Row>
              <Col lg={1}></Col>
              <Col lg={10}>
                <div className={TopBannerStyle.slider_content}>
                  <h1>Denver, Colorado</h1>
                  <h3>July 8 – July 11, 2020</h3>
                  <p>Marra Forni is excited to participate at the NACUFS Nat’l Conference 2020. Visit our booth to experience our innovative brick ovens such as, Marra Forni Rotator, Electric and Due Bocche brick ovens on display for 4 days at the Colorado Convention Center.</p>
                </div>
              </Col>
              <Col lg={1}></Col>
            </Row>
          </Container>
        </div>
      </Slider>
   )
  }


export default TopBannerSlider