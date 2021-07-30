import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'
import ResultStyle from './FiltersResult.module.css'


import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as productActions from '../../../actions/product'
import {withRouter} from "next/router";

const FiltersResult = (props) => {
  const{
      product,
      resourceList,
      blogList,
      allCaseStudyList,
      handleSearch } = props
  const[ productResult, setProductResult ] = useState([])
  const[ blogResult, setBlogResult ] = useState({})
  const[ caseStudyResult, setCaseStudyResult ] = useState({})
  const[ resourceResult, setResourceResult ] = useState({})

  const[ productPerPage, setProductPerPage ] = useState(3)
  const[ currentPage, setCurrentPage ] = useState(1)

  const[ activeBlog, setActiveBlog ] = useState(1)
  const[ activeCaseStudy, setActiveCaseStudy ] = useState(1)

  let textSearch = React.createRef();

  useEffect(() => {
    let indexOfLastTodo = currentPage * productPerPage
    let indexOfFirstTodo = indexOfLastTodo - productPerPage

    let currentProduct = product && product.length && product.map(val => {
       let pagination = Math.ceil((val && val.cat && val.cat.length)/ productPerPage)
       return {
         ...val,
         paginationArr: pagination ?
           Array(pagination - 1 + 1).fill().map((_, idx) => {
              return{
                  name:1 + idx,
                  activeProduct:1 + idx == 1 ? true :false
              }
           }) :
           [],
         catCurrentPage:1,
         newCat:val && val.cat && val.cat.length && val.cat.slice(indexOfFirstTodo, indexOfLastTodo)}
    })

    let pagination = Math.ceil((blogList && blogList && blogList.length)/ productPerPage)
    let currentBlog = {
            blogList:blogList && blogList.length && blogList.slice(indexOfFirstTodo, indexOfLastTodo),
            paginationArr: pagination ?
                Array(pagination - 1 + 1).fill().map((_, idx) => 1 + idx) :
                [],
            catCurrentPage: 1
        }

    let csPagination = Math.ceil((allCaseStudyList && allCaseStudyList && allCaseStudyList.length)/ productPerPage)
    let currentCaseStudy = {
            allCaseStudyList:allCaseStudyList && allCaseStudyList.length && allCaseStudyList.slice(indexOfFirstTodo, indexOfLastTodo),
            paginationArr: csPagination ?
                Array(csPagination - 1 + 1).fill().map((_, idx) => 1 + idx) :
                [],
            catCurrentPage: 1
    }


    let currentResourceList = {
      resourceList:resourceList && resourceList.length &&
        resourceList.map(val => {
            let rsPagination = Math.ceil((val && val.cat && val.cat.length)/ productPerPage)
            return{
                ...val,
                newCat:val && val.cat && val.cat.length && val.cat.slice(indexOfFirstTodo, indexOfLastTodo),
                paginationArr: rsPagination ?
                    Array(rsPagination - 1 + 1).fill().map((_, idx) => {
                        return{
                            name:1 + idx,
                            activeProduct:1 + idx == 1 ? true :false
                        }}
                    ) :
                    [],
                catCurrentPage: 1
            }
        })
    }

    setProductResult(currentProduct)
    setBlogResult(currentBlog)
    setCaseStudyResult(currentCaseStudy)
    setResourceResult(currentResourceList)
  },[product, blogList, allCaseStudyList, resourceList ])

  useEffect(() => {

    if(productResult &&
        productResult.length &&
        resourceResult &&
        resourceResult.resourceList &&
        resourceResult.resourceList.length &&
        resourceResult.resourceList.filter(v => v.checked == true ).length) {
        getAllResourceData(productResult, props.subCatList)
    }
  },[ productResult])

    const getAllResourceData = (data, sCat) => {
        props.productActions.getAllResourceData(data, sCat).then(res => {
            let getGData = Object.entries(res)
            let gList = getGData.map(val => {
                return {
                    name: val && val[0],
                    cat: Object.entries(val && val[1]).map(s => {
                        return{
                            name: s[0],
                            subCat:Object.entries(s && s[1]).map((v,i) => {
                                return {
                                    name: v[0],
                                    sCat: v[1].map(vvv => {return {...vvv,name:vvv.name+v[0]}}),
                                    sNewCat:v[1].map(vvv => {return {...vvv,name:vvv.name+v[0]}}),
                                    active:i+1 == 1 ? true : false
                                }
                            })
                        }
                    })
                }
            })

            let indexOfLastTodo = currentPage * productPerPage
            let indexOfFirstTodo = indexOfLastTodo - productPerPage

            let aa = []
              resourceResult.resourceList.map(val => {
                gList.map(prod => {
                  let rsPagination = Math.ceil((prod && prod.cat && prod.cat.length)/ productPerPage)
                  aa.push({
                      ...val,
                      cat:prod.cat,
                      newCat:prod && prod.cat && prod.cat.length && prod.cat.slice(indexOfFirstTodo, indexOfLastTodo) || [],
                        paginationArr: rsPagination ?
                        Array(rsPagination - 1 + 1).fill().map((_, idx) => {
                            return{
                                name:1 + idx,
                                activeProduct:1 + idx == 1 ? true :false
                            }}
                        ) :
                        [],
                        catCurrentPage: 1
                  })
                })
              }
            )
            const arrayUniqueByKey = [...new Map(aa.map(item =>
                [item['name'], item])).values()];

            setResourceResult({resourceList: arrayUniqueByKey})
        })
    }


  const handlePagination = (value, typeId, cat, types) => {
    if(cat == 'product') {
        let indexOfLastTodo = value.name * productPerPage
        let indexOfFirstTodo = indexOfLastTodo - productPerPage

        let currentProduct = productResult.map(val => {
            let indexOfLast = val.catCurrentPage * productPerPage
            let indexOfFirst = indexOfLast - productPerPage

            let pagination = Math.ceil((val && val.cat && val.cat.length) / productPerPage)
            if (val.id == typeId) {
                let pages = types.paginationArr.map(xx => {
                    if(xx.name == value.name){
                        return {
                              ...xx,
                              activeProduct:true
                        }
                    }else{
                        return {
                            ...xx,
                            activeProduct:false
                        }
                    }
                })
                return {
                    ...val,
                    paginationArr: pages,
                    catCurrentPage: value.name,
                    newCat: val && val.cat && val.cat.length && val.cat.slice(indexOfFirstTodo, indexOfLastTodo)
                }
            } else {
                return {
                    ...val,
                    paginationArr: pagination ?
                        Array(pagination - 1 + 1).fill().map((_, idx) => {
                          return{
                              name: 1 + idx,
                              activeProduct: 1 + idx ==1 ? true : false
                          }
                        }) :
                        [],
                    catCurrentPage: val.catCurrentPage,
                    newCat: val && val.cat && val.cat.length && val.cat.slice(indexOfFirst, indexOfLast)
                }
            }

        })
        setProductResult(currentProduct)
    }

      if(cat == 'resource') {
          let indexOfLastR = value.name * 3
          let indexOfFirstR = indexOfLastR - 3

          let currentResource = {
              resourceList:resourceList.map((val) => {

                  let indexOfLastTodo = currentPage * productPerPage
                  let indexOfFirstTodo = indexOfLastTodo - productPerPage
                  let catVal = val && val.cat && val.cat.length && val.cat.slice(indexOfFirstTodo, indexOfLastTodo)
                  let catFVal = val && val.cat && val.cat.length && val.cat.slice(indexOfFirstR, indexOfLastR)

                  if(val.name == types.name) {
                      return {
                          ...val,
                          newCat: catFVal,
                          paginationArr: types.paginationArr.map(p => {
                              if (p.name == value.name) {
                                  return {
                                      ...p,
                                      activeProduct: true
                                  }
                              } else {
                                  return {
                                      ...p,
                                      activeProduct: false
                                  }
                              }
                          }),
                          catCurrentPage: value
                      }
                  }else{
                      let rsPagination = Math.ceil((val && val.cat && val.cat.length)/ productPerPage)
                      return{
                          ...val,
                          newCat:catVal,
                          paginationArr: rsPagination ?
                              Array(rsPagination - 1 + 1).fill().map((_, idx) => {
                                  return{
                                      name:1 + idx,
                                      activeProduct:1 + idx == 1 ? true : false
                                  }}
                              ) :
                              [],
                          catCurrentPage: 1
                      }
                  }
              })

          }
          setResourceResult(currentResource)
      }

    if(cat == 'blog') {
        let indexOfLastB = value * 3
        let indexOfFirstB = indexOfLastB - 3
        let pagination = Math.ceil((blogList && blogList.length) / 3)
        let currentBlog = {
                    paginationArr: pagination ?
                        Array(pagination - 1 + 1).fill().map((_, idx) => 1 + idx) :
                        [],
                    catCurrentPage: value,
                    blogList: blogList && blogList.length && blogList.slice(indexOfFirstB, indexOfLastB)
            }
        setBlogResult(currentBlog)
    }

    if(cat == 'caseStudy') {
        let indexOfLast = value * productPerPage
        let indexOfFirst = indexOfLast - productPerPage
        let pagination = Math.ceil((allCaseStudyList && allCaseStudyList.length) / productPerPage)
        let currentCaseStudy = {
                    paginationArr: pagination ?
                        Array(pagination - 1 + 1).fill().map((_, idx) => 1 + idx) :
                        [],
                    catCurrentPage: value,
                    allCaseStudyList: allCaseStudyList &&
                        allCaseStudyList.length &&
                        allCaseStudyList.slice(indexOfFirst, indexOfLast)
            }
        setCaseStudyResult(currentCaseStudy)
    }

  }

  const handleCat = (v, c, item, index) => {
      let list = resourceResult.resourceList.map(val => {
          if(val.name == item.name){
               return {
                   ...val,
                   newCat: val.cat.map((sc, ii) => {
                      if(sc.name == c.name){
                          return{
                              ...sc,
                              subCat:sc.subCat.map(subC => {
                                  if(subC.name == v.name){
                                      return{
                                          ...subC,
                                          active: true
                                      }
                                  }else{
                                      return {
                                          ...subC,
                                          active: false
                                      }
                                  }
                              } )
                          }
                      }else{
                          return sc
                      }
               })
          }
          }else{
              return val
          }
      })
      setResourceResult({resourceList:list})
  }

  return(
    <>
      {/*<div className={ResultStyle.searchbox_outer}>*/}
        {/*<input */}
          {/*type='search' */}
          {/*ref={textSearch} */}
          {/*name='searchtext' */}
          {/*placeholder='Search'*/}
          {/*onChange={(e) => {*/}
            {/*handleSearch(e.target.value)*/}
          {/*}}*/}
        {/*/>*/}
        {/*<button*/}
          {/*onClick={() => {*/}
            {/*handleSearch(textSearch.current.value)*/}
          {/*}}*/}
        {/*>*/}
          {/*<i className='bx bx-search'/>*/}
        {/*</button>*/}
      {/*</div>*/}
      {
        productResult && productResult.length ?
          productResult.map((types, index)=>{
          return (
            <React.Fragment key={index}>
              {
                types && types.cat && types.cat.length ?
                <div className={ResultStyle.product_headingbox}>
                  <h2>{types.name}</h2>
                </div> : null
              }
              <Row className={ResultStyle.innovation}>
                {types && types.newCat && types.newCat.length ?
                   types.newCat.map((cat, index)=>{
                    return (
                      <Col lg={4} md={6} key={index}>
                        <div className={ResultStyle.product_inner}>
                          <img src={cat.image} width="400" height="500" className="img-fluid" alt={cat.name} />
                          <div className={ResultStyle.product_info}>
                            <h3>{cat.name}</h3>
                            <p>{cat.catDescription.substr(0,60)}{cat.catDescription.length > 60 && "..."}</p>
                            <Link href="/discover-the-rotator-brick-oven">
                              <a className="mf_btn" title="The Rotator">Explore more</a>
                            </Link>
                          </div>
                        </div>
                      </Col>
                    )
                  }) : null
                }
              </Row>
              {
                types && types.newCat && types.newCat.length ?
                <Row>
                  <Col md={12}>
                    <ul className={ResultStyle.pagination}>
                      {types &&
                      types.paginationArr &&
                      types.paginationArr.length &&
                      types.paginationArr.map((val, i) => {
                        return (
                          <li key={i}>
                            <button
                              onClick ={() => handlePagination(val, types.id, 'product', types)}
                              className={ val.activeProduct ? ResultStyle.activepagination : ''}
                              key={i}>{val.name}</button>
                          </li>
                        )
                      })
                      }
                    </ul>
                  </Col>
                </Row> : null
              }
            </React.Fragment>
          )
        }) :
          null
      }

      { resourceResult &&
        resourceResult.resourceList &&
        resourceResult.resourceList.length ?
          resourceResult.resourceList.map((item, idx) =>{
              return (
                  <div key={idx}>
                      { item &&
                        item.newCat &&
                        item.newCat.length ?
                          <div className={ResultStyle.product_headingbox}>
                              <h2>{item.name}</h2>
                          </div>
                          :
                          null
                      }
                      <Row>
                          { item &&
                            item.newCat &&
                            item.newCat.length ?
                              item.newCat.map((c,i) => {
                                  return(
                                      <Col lg={4} md={6} key={i}>
                                          <div className={ResultStyle.inner}>
                                              <ul>
                                                  <li><Link href="/"><a title="Rotator Gas" target="_blank">{c.name}</a></Link></li>
                                                  <Row>
                                                      <Col md={12}>
                                                          <ul className={ResultStyle.gallerytabs}>
                                                          {
                                                              c &&
                                                              c.subCat &&
                                                              c.subCat.length ?
                                                                c.subCat.map((v,indx) => {
                                                                    return(
                                                                        <li key={indx} className={ResultStyle.btn_active} style={{width: `${100/c.subCat.length}%`}}>
                                                                            <button
                                                                                onClick={() => handleCat(v, c, item, indx)}
                                                                                className={
                                                                                    v.active ? ResultStyle.btn_active : ''
                                                                                }
                                                                            >
                                                                                {v.name}
                                                                            </button>
                                                                        </li>
                                                                    )
                                                                })
                                                              : 'No result found'
                                                          }
                                                          </ul>
                                                      </Col>
                                                  </Row>
                                                  { c && c.subCat && c.subCat.length && c.subCat.filter(t => t.active).map((v,indx) => (
                                                      v &&
                                                      v.sCat &&
                                                      v.sCat.length ?
                                                          v.sNewCat.map((vv, idxx) => {
                                                                  return (
                                                                      <li key={idxx}>
                                                                          <a title="RT90G" target="_blank"
                                                                             href={vv.url}>{vv.name}</a>
                                                                      </li>
                                                                  )
                                                          })
                                                          :null
                                                      )
                                                   )
                                                  }
                                              </ul>
                                          </div>
                                      </Col>
                                  )
                              })

                              : null
                          }
                      </Row>
                      <Row>
                          <Col md={12}>
                              <ul className={ResultStyle.pagination}>
                                  { item &&
                                    item.paginationArr &&
                                    item.paginationArr.length ?
                                      item.paginationArr.map((page, pIdx) => {
                                          return(
                                              <li key={pIdx}>
                                                  <button
                                                      onClick ={() => handlePagination(page, item.id, 'resource', item)}
                                                      className={page.activeProduct ? ResultStyle.activepagination : ''}
                                                  >{page.name}</button>
                                              </li>
                                          )
                                      })
                                      : null
                                  }
                              </ul>
                          </Col>
                      </Row>
                  </div>
              )
          })
         : null
      }

      <div className={ResultStyle.product_headingbox}>
        <h2>Videos</h2>
      </div>
      <Row>
        <Col lg={4} md={6}>
          <div className={ResultStyle.gallery_inner}>
              <a>
                  <iframe title="Rotator Double Mouth" width="1060" height="355" src="https://www.youtube.com/embed/AbPpq3K54ww?feature=oembed" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                <div className={ResultStyle.gallery_overlay}>
                  <div className={ResultStyle.info_box}>
                    <span><i className='bx bx-play-circle'></i></span>
                    <p>Chef Tony Gemignani Live!</p>
                  </div>
                </div>
                <div className={ResultStyle.gallery_coloroverlay}>
                  <div className={ResultStyle.info_box}>
                    <span><i className='bx bx-play-circle'></i></span>
                  </div>
                </div>
              </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ul className={ResultStyle.pagination}>
            <li><button className={ResultStyle.activepagination}>1</button></li>
          </ul>
        </Col>
      </Row>
      {/*blog filter*/}
      <div className={ResultStyle.product_headingbox}>
          {blogResult.blogList ? <h2>Blogs</h2> : null }
      </div>
      <Row className={ResultStyle.innovation}>
       { blogResult.blogList && blogResult.blogList && blogResult.blogList.length ?
           blogResult.blogList.map((blog,i) => {
             return(
               <Col lg={4} md={6} key={i}>
                   <div className={ResultStyle.blog_inner}>
                       <img src={`${blog.bannerWebpImageUrl}`} width="400"
                            height="500" className="img-fluid" alt=""/>
                       <div className={ResultStyle.blog_info}>
                           <h3 title={blog.title}>{blog.title.substr(0, 50)}{blog.title.length > 50 && "..."}</h3>
                           <p>{blog.blogDescription.substr(0, 100)}{blog.blogDescription.length > 100 && "..."}</p>
                           <Link href={`/blog/${blog.uniqueUrl}`}>
                               <a className="mf_btn" title="The Rotator">View more</a>
                           </Link>
                       </div>
                   </div>
               </Col>
             )
           })
        :
          null
       }
      </Row>

      <Row>
          <Col md={12}>
              <ul className={ResultStyle.pagination}>
                  { blogResult &&
                  blogResult.paginationArr &&
                  blogResult.paginationArr.length ?
                      blogResult.paginationArr.map((val, i) => {
                          return (
                              <li key={i}>
                                  <button
                                      onClick = {() => {
                                          handlePagination(val, val.id, 'blog')
                                          setActiveBlog(i+1)
                                      }}
                                      className={ activeBlog === i+1 ? ResultStyle.activepagination : ''}
                                      key={i}>{val}</button>
                              </li>
                          )
                      })
                      : null
                  }
              </ul>
          </Col>
      </Row>

        <div className={ResultStyle.product_headingbox}>
            {caseStudyResult.allCaseStudyList ? <h2>Case Study</h2> : null }
        </div>
        <Row className={ResultStyle.innovation}>
            { caseStudyResult.allCaseStudyList && caseStudyResult.allCaseStudyList && caseStudyResult.allCaseStudyList.length ?
                caseStudyResult.allCaseStudyList.map((caseStudy,i) => {
                    return(
                        <Col lg={4} md={6} key={i}>
                            <div className={ResultStyle.blog_inner}>
                                <img src={caseStudy.caseStudyImageUrl}
                                     width="400"
                                     height="500"
                                     className="img-fluid"
                                     alt="caseStudy.caseStudyImageUrl"/>
                                <div className={ResultStyle.blog_info}>
                                    <h3 title={caseStudy.title}>{caseStudy.title.substr(0, 50)}{caseStudy.title.length > 50 && "..."}</h3>
                                    <p>{caseStudy.description.substr(0, 100)}{caseStudy.description.length > 100 && "..."}</p>
                                     <a href={`${caseStudy.fileUrl}`} target='_blank' className="mf_btn" title="">View more</a>
                                </div>
                            </div>
                        </Col>
                    )
                })
                :
                null
            }
        </Row>
        {/*Case study section*/}
        <Row>
            <Col md={12}>
                <ul className={ResultStyle.pagination}>
                    { caseStudyResult &&
                    caseStudyResult.paginationArr &&
                    caseStudyResult.paginationArr.length ?
                        caseStudyResult.paginationArr.map((val, i) => {
                            return (
                                <li key={i}>
                                    <button
                                        onClick = {() => {
                                            handlePagination(val, val.id, 'caseStudy')
                                            setActiveCaseStudy(i+1)
                                        }}
                                        className={ activeCaseStudy === i+1 ? ResultStyle.activepagination : ''}
                                        key={i}>{val}</button>
                                </li>
                            )
                        })
                        : null
                    }
                </ul>
            </Col>
        </Row>
    </>
   )
  }


const mapDispatchToProps = dispatch => {
    return {
        productActions: bindActionCreators(productActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(withRouter(FiltersResult))