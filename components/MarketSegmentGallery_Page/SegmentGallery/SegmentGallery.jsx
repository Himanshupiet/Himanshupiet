import React,{ useState, useEffect} from 'react'

import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll'
import { Col, Container, Row } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import * as galleryActions from '../../../actions/gallery'

import SegmentGalleryStyle from './SegmentGallery.module.css'
import CategoryGalleryStyle from "../../Gallery_Page/Category_Gallery/Category_Gallery.module.css";

const SegmentGallery = (props) => {
  const[segmentGallery, setSegmentGallery] = useState([])
  const[allSegmentGallery, setAllSegmentGallery] = useState([])
  const[ galleryPerPage, setGalleryPerPage ] = useState(4)
  const[ currentPage, setCurrentPage ] = useState(1)

  useEffect(() => {
      let indexOfLastTodo = currentPage * galleryPerPage
      let indexOfFirstTodo = indexOfLastTodo - galleryPerPage
      props.galleryActions.getAllSegmentGallery().then(res => {
          let getSData = Object.entries(res)
          let allCat = []
          let sList = getSData.map(val => {
              val && val.length && val[1].map(c => {
                  allCat.push({...c})
              })
              return {
                  name:val && val.length && val[0],
                  cat:val && val.length && val[1],
                  isActive:false
              }
          })

          sList.unshift({
              name:'All',
              cat:allCat,
              isActive:false
          })

          let list = sList.map(val => {
              let pagination = Math.ceil((val && val.cat && val.cat.length)/ 1)
              if(val.name == 'All'){
                  return {
                      ...val,
                      ['cat']:val.cat && val.cat.length && val.cat.slice(indexOfFirstTodo, indexOfLastTodo),
                      isActive:true,
                      paginationArr: pagination ?
                          Array(pagination - 1 + 1).fill().map((_, idx) => {
                              return{
                                  name:1 + idx,
                                  activeGallery: idx+1 == 1 ? true :false
                              }
                          }) : []
                  }
              }else{
                  return {
                      ...val,
                      ['cat']:val.cat && val.cat.length && val.cat.slice(indexOfFirstTodo, indexOfLastTodo),
                      paginationArr: pagination ?
                          Array(pagination - 1 + 1).fill().map((_, idx) => {
                              return{
                                  name:1 + idx,
                                  activeGallery: idx+1 == 1 ? true :false
                              }
                          }) : []
                  }
              }
          })

          let allList = sList.map(val => {
              let pagination = Math.ceil((val && val.cat && val.cat.length)/ 1)
              if(val.name == 'All'){
                  return {
                      ...val,
                      ['cat']:val.cat,
                      isActive:true,
                      paginationArr: pagination ?
                          Array(pagination - 1 + 1).fill().map((_, idx) => {
                              return{
                                  name:1 + idx,
                                  activeGallery: idx+1 == 1 ? true :false
                              }
                          }) : []
                  }
              }else {
                  return {
                      ...val,
                      ['cat']: val.cat,
                      isActive:false,
                      paginationArr: pagination ?
                          Array(pagination - 1 + 1).fill().map((_, idx) => {
                              return{
                                  name:1 + idx,
                                  activeGallery: idx+1 == 1 ? true :false
                              }
                          }) : []
                  }
              }
          })

          setSegmentGallery(list.filter(item => item.name === 'All'))
          setAllSegmentGallery(allList)
      })
  },[])

  const handleGalleryFilter = (g) => {

      let sList = allSegmentGallery && allSegmentGallery.length && allSegmentGallery.map((val) => {
          if(val.name == g.name){
              return {
                  ...val,
                  isActive:true
              }
          }else{
              return {
                  ...val,
                  isActive:false
              }
          }
      })

      let cList = allSegmentGallery.filter(val => val.name === g.name)
      let indexOfLastTodo = currentPage * galleryPerPage
      let indexOfFirstTodo = indexOfLastTodo - galleryPerPage

      let list = cList.map(val => {
          let pagination = Math.ceil((val && val.cat && val.cat.length)/ 1)
          if(val.name == 'All'){
              return {
                  ...val,
                  ['cat']:val.cat && val.cat.length && val.cat.slice(indexOfFirstTodo, indexOfLastTodo),
                  isActive:true,
                  paginationArr: pagination ?
                      Array(pagination - 1 + 1).fill().map((_, idx) => {
                          return{
                              name:1 + idx,
                              activeGallery: idx+1 == 1 ? true :false
                          }
                      }) : []
              }
          }else{
              return {
                  ...val,
                  ['cat']:val.cat && val.cat.length && val.cat.slice(indexOfFirstTodo, indexOfLastTodo),
                  paginationArr: pagination ?
                      Array(pagination - 1 + 1).fill().map((_, idx) => {
                          return{
                              name:1 + idx,
                              activeGallery: idx+1 == 1 ? true :false
                          }
                      }) : []
              }
          }
      })

      setAllSegmentGallery(sList)
      setSegmentGallery(list)
  }

    const handlePagination = (page, cat) => {
        let indexOfLastTodo = page.name * galleryPerPage
        let indexOfFirstTodo = indexOfLastTodo - galleryPerPage

        let currentProduct = allSegmentGallery.map(t => {
            if(t.name == cat.name){
                return{
                    ...t,
                    cat:t && t.cat && t.cat.length && t.cat.slice(indexOfFirstTodo, indexOfLastTodo),
                    paginationArr: t.paginationArr.map(val => {
                        if(page.name == val.name){
                            return{
                                ...val,
                                activeGallery:true
                            }
                        } else{
                            return {
                                ...val,
                                activeGallery:false
                            }
                        }
                    })
                }
            }else{
                return t
            }
        })
        setSegmentGallery(currentProduct.filter(val => val.name == cat.name))
    }
  return(
    <>
        <section className={SegmentGalleryStyle.tabs_outer}>
            <Container fluid>
                <Row>
                    <Col xl={1}></Col>
                    <Col xl={10}>
                        <div>
                            <h2>Market Segments</h2>
                            <ul className={CategoryGalleryStyle.gallerytabs}>
                                { allSegmentGallery && allSegmentGallery.length ?
                                    allSegmentGallery.map((category, i) => {
                                        return(
                                            <li key={i}>
                                                <button
                                                    onClick={() => handleGalleryFilter(category)}
                                                    className={
                                                        category.isActive ? CategoryGalleryStyle.btn_active : ''
                                                    }
                                                >
                                                    {category.name}
                                                </button>
                                            </li>
                                        )
                                    })
                                    : null
                                }
                            </ul>
                        </div>
                    </Col>
                    <Col xl={1}></Col>
                </Row>
            </Container>
        </section>


      <section className={SegmentGalleryStyle.gallery_outer}>
        <Container fluid>
          <Row>
            <Col xl={1}></Col>
            <Col xl={10}>
              <Row>
                { segmentGallery &&
                  segmentGallery.length ?
                    segmentGallery.map(val => (
                        val.cat.map((item, idx) => {
                            return (
                                <Col
                                    lg={3}
                                    sm={6}
                                    key={idx}
                                >
                                    <ScrollAnimation
                                        animateIn={'fadeInUp'}
                                        animateOnce={true}
                                        duration={1}
                                    >
                                        <div className={SegmentGalleryStyle.gallery_inner}>
                                            <Link href='/'>
                                                <a title='Gallery Image'>
                                                    <img
                                                        src={item.bannerImage}
                                                        width='550'
                                                        height='533'
                                                        className='img'
                                                    />
                                                    <div className={SegmentGalleryStyle.gallery_overlay}>
                                                        <div className={SegmentGalleryStyle.info_box}>
                                                            <span>{item.marketSegment}</span>
                                                            <p>{item.organisationDescription}</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                    </ScrollAnimation>
                                </Col>
                            )
                        })
                    ))
                    :
                    null
                }
              </Row>
              <Row>
                  <Col md={12}>
                      <ul className={SegmentGalleryStyle.pagination}>
                          { segmentGallery &&
                            segmentGallery.length ?
                            segmentGallery.map(val => (
                              val &&
                              val.paginationArr.length &&
                              val.paginationArr.map((page,i) => (
                                  <li key={i}>
                                      <button
                                          onClick={() => handlePagination(page, val)}
                                          className={page.activeGallery ? SegmentGalleryStyle.activepagination:''}>
                                          {page.name}
                                      </button>
                                  </li>
                              ))
                            ))
                              :null
                          }
                      </ul>
                  </Col>
              </Row>
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

export default connect(null, mapDispatchToProps)(withRouter(SegmentGallery))