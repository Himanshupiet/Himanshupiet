import React from 'react'
import HighLightStyle from './HighLight.module.css'
import ScrollAnimation from 'react-animate-on-scroll'
import { Col, Container, Row } from 'react-bootstrap'

const HighLight = ({highlightData}) => {
  let background_color = highlightData.background=='grey' ? {backgroundColor:'#24262a'} : {backgroundColor:'#f6f7fc'};
  let text_color = highlightData.background=='grey' ? {color:'#fff'} : {color:'#24262a'};

  return(
    highlightData ? <section 
      className={HighLightStyle.section_outer} 
      style={background_color}
    >
      <Container fluid>
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
              <h2 style={text_color}>{highlightData.Heading}</h2>
              <h3 style={text_color}>{highlightData.subHeading}</h3>
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
      </Container>
    </section> : ''
   )
  }


export default HighLight