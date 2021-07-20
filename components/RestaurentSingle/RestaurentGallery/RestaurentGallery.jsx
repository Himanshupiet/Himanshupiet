import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RestaurentStyle from './RestaurentGallery.module.css'

const RestaurentGallery = (props) => {
  const {bannerImage,categoryName,tags,createdAt,title} = props.data
  const date = (new Date(createdAt)).toLocaleDateString()

  return(
    <>
    <Container fluid className={RestaurentStyle.top_banner} style={{backgroundImage:`url(${bannerImage})`,height:'500px'}}>
      <Row>
        <Col lg={1}></Col>
        <Col lg={10}>
          <h1>{title}</h1>
          <p>Pi Co offers quality, made-to-order, Neapolitan-style pizzas in a unique quick-serve experience. Visit Pi Co for more tasty pizzas, salads, gluten-free ‘za and meals</p>
          <div className={RestaurentStyle.heading_box}>
            <p>Category: {categoryName}</p>
            <p>Date: {date}</p>
          </div>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Container>  
    <Container fluid>
      <Row>
        <Col lg={1}></Col>
        <Col lg={10}>
          <div className={RestaurentStyle.gallery_outer_main}>
            <div className={RestaurentStyle.gallery_outer}>
              {tags && tags.length ? tags.map((data,i)=>(
                  <div className={RestaurentStyle.gallery_inner} key={i}>
                    <div className={RestaurentStyle.gallery_inner_main}>
                      <img src={data} alt={''} width="400" height="300" className="img-fluid" />
                      <div className={RestaurentStyle.gallery_hover}></div>
                    </div>
                  </div>
              )):null}
            </div>
          </div>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Container>
    </>
   )
  }


export default RestaurentGallery