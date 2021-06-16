import React from 'react'
import HighLightStyle from './HighLight.module.css'
import ScrollAnimation from 'react-animate-on-scroll'
import { Col, Container, Row } from 'react-bootstrap'

const HighLight = ({highlightData}) => {
  let background_color = highlightData.backgroundImage.IsImage ? {backgroundImage: `url(${highlightData.backgroundImage.imagePath})`} : {backgroundColor:'#f6f7fb!important',padding:'55px'};

  return(
    highlightData ? <section
      className={HighLightStyle.section_outer}
      // style={background_color}
        style={{backgroundColor: '#f6f7fb'}}
    >
      <Container fluid className={HighLightStyle.highlight_section}>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <Row 
              className='align-items-center'>
              <Col 
                lg={8} 
                md={6} 
                className={HighLightStyle.text_box}
              >
                <ScrollAnimation 
                  duration={2} 
                  animateIn='zoomIn' 
                  animateOnce={true}
                >  
                  <h2>{highlightData.Heading}</h2>
                  <h3>{highlightData.subHeading}</h3>
                </ScrollAnimation>
              </Col>
              <Col 
                lg={4} 
                md={6} 
                className={HighLightStyle.button_box}
              >
                <ScrollAnimation 
                  duration={2} 
                  animateIn='bounceInUp' 
                  animateOnce={true}
                >
                  <button 
                    className='mf_btn mf_btn_round'>
                      {highlightData.buttonText}
                  </button>
                </ScrollAnimation>
              </Col>
            </Row>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </section> : ''
   )
  }


export default HighLight