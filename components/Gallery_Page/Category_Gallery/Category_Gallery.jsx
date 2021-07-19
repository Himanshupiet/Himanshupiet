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
                  }),
                  catN:Object.entries(val && val[1]).map(s => {
                      return {
                          sName: s[0],
                          subCat: s[1],
                          isActive:false
                      }})
              }
          })
          let a = gList.map(val=> {
              let x = [] ;
              val.cat.map(c => {
                  c.subCat.map(v =>{
                   x.push({...v})
                  })
              })
              let aCat = val.cat
              aCat.unshift({
                  sName:'All',
                  subCat:x,
                  isActive:true
              })
              let bb = aCat
                 return {
                     ...val,
                     ['cat']:aCat,
                     ['catN']:aCat
             }

          })
          console.log(a)
          let updateList = a.map(val => {
              return {
                  ...val,
                  cat:val.cat.filter(v => v.sName === 'All')
              }
          })
          setGetAllGalleryList(updateList)
      })
  },[])

 const handleCatFilter = (gallery, pId, cat, idx) => {
          let activeCat = getAllGalleryList.map(val => {
              if (val.name == gallery.name) {
                  let fCat = val.catN.filter(c => c.sName == cat.sName)
                  let filterCName = val.catN.map(n => {
                      if (n.sName == cat.sName) {
                          return {...n, isActive: true}
                      } else {
                          return {...n, isActive: false}
                      }
                  })
                  return {
                      ...val,
                      cat: fCat,
                      catN: filterCName
                  }
              } else {
                  return val
              }
          })
          setGetAllGalleryList(activeCat)
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
                                  { gallery.catN && gallery.catN.length ?
                                      gallery.catN.map((category, i) => {
                                         return(
                                                  <li key={i}>
                                                      <button
                                                          onClick={() => handleCatFilter(gallery, idx, category, i)}
                                                          className={
                                                              category.isActive ? CategoryGalleryStyle.btn_active : ''
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
                                                    {
                                                      gallery.cat && gallery.cat.length ?
                                                        gallery.cat.map((category, i) =>

                                                                category &&
                                                                category.subCat &&
                                                                category.subCat.length ?
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
                                                                   })
                                                                 : null

                                                        )
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