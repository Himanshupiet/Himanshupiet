import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as galleryActions from '../../../actions/gallery'
import { withRouter } from "next/router";

import ScrollAnimation from 'react-animate-on-scroll'
import {Col, Container, Row} from 'react-bootstrap'
import CategoryGalleryStyle from './Category_Gallery.module.css'

const Category_Gallery = (props) => {
  const[ getAllGalleryList, setGetAllGalleryList ] = useState([])
  const[ activeGalleryProd, setActiveGalleryProd ] = useState([])

  useEffect(() => {
      props.galleryActions.getAllGallery().then(res => {
          let getGData = Object.entries(res)
          let gList = getGData.map(val => {
              return {
                  name:val && val[0],
                  cat: Object.entries(val && val[1]).map(s => {
                      return {
                          sName: s[0],
                          subCat: s[1]
                      }
                  })
              }
          })
          setGetAllGalleryList(gList)
      })
  },[])
    console.log(getAllGalleryList)


  const handleCatFilter = (gallery) => {
      setActiveGalleryProd(gallery)
  }

  return(
    <>
      <section className={CategoryGalleryStyle.tabs_outer}>
        <Container fluid>
          <Row>
            <Col xl={1}></Col>
            <Col xl={10}>
              <ScrollAnimation 
                animateIn={'zoomIn'}
                animateOnce={true}
                duration={1}  
              >
                  { getAllGalleryList && getAllGalleryList.length ?
                      getAllGalleryList.map((gallery, idx) => {
                       return(
                            <div key={idx}>
                               <h2>{gallery.name}</h2>
                                <ul className={CategoryGalleryStyle.gallerytabs}>
                                <li>
                                    <button
                                        className={
                                           CategoryGalleryStyle.btn_active
                                        }
                                        onClick={() => handleCatFilter(gallery)}
                                    >
                                        All
                                    </button>
                                </li>
                                  { gallery.cat && gallery.cat.length ?
                                      gallery.cat.map((category, i) => {
                                         return(
                                                  <li key={i}>
                                                      <button
                                                          onClick={() => handleCatFilter(gallery)}
                                                          className={
                                                              CategoryGalleryStyle.btn_active
                                                          }
                                                      >
                                                          {category.sName}
                                                      </button>
                                                  </li>
                                              )
                                      })
                                     : null
                                  }
                                </ul>
                                <section className={CategoryGalleryStyle.gallery_outer}>
                                    <Container fluid>
                                        <Row>
                                            <Col xl={1}></Col>
                                            <Col xl={10}>
                                                <Row>
                                                    {gallery.cat && gallery.cat.length ?
                                                        gallery.cat.map((category, i) =>
                                                            category.subCat.map(val => {
                                                                return (
                                                                    <Col
                                                                        lg={3}
                                                                        sm={6}
                                                                    >
                                                                        <ScrollAnimation
                                                                            animateIn={'fadeInUp'}
                                                                            animateOnce={true}
                                                                            duration={1}
                                                                        >
                                                                            <div
                                                                                className={CategoryGalleryStyle.gallery_inner}>
                                                                                <Link href='/gallery/pico'>
                                                                                    <a title='Gallery Image'>
                                                                                        <img
                                                                                            src={val.bannerImage}
                                                                                            width='550'
                                                                                            height='533'
                                                                                            className='img'
                                                                                        />
                                                                                        <div
                                                                                            className={CategoryGalleryStyle.gallery_overlay}>
                                                                                            <div
                                                                                                className={CategoryGalleryStyle.info_box}>
                                                                                                <span>{val.organisation}</span>
                                                                                                <p>{val.organisationLocation}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </Link>
                                                                            </div>
                                                                        </ScrollAnimation>
                                                                    </Col>
                                                                )
                                                        }))
                                                        :
                                                        null
                                                    }
                                                </Row>
                                                <Row>
                                                    <Col md={12}>
                                                        {/*<ul className={CategoryGalleryStyle.pagination}>*/}
                                                        {/*{gallery.cat && gallery.cat.length ?*/}
                                                        {/*gallery.cat.map((category, i) =>{*/}
                                                        {/*return (*/}
                                                        {/*<li>*/}
                                                        {/*<button*/}
                                                        {/*className={CategoryGalleryStyle.activepagination}>{i+1}*/}
                                                        {/*</button>*/}
                                                        {/*</li>*/}
                                                        {/*)*/}
                                                        {/*})*/}
                                                        {/*: null*/}
                                                        {/*}*/}
                                                        {/*</ul>*/}
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col xl={1}></Col>
                                        </Row>
                                    </Container>
                                </section>
                            </div>
                        )
                      })
                      :null
                  }
              </ScrollAnimation>
            </Col>
            <Col xl={1}></Col>
          </Row>
        </Container>
      </section>
    </>
   )
  }



const mapDispatchToProps = dispatch => {
    return {
        galleryActions: bindActionCreators(galleryActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Category_Gallery))