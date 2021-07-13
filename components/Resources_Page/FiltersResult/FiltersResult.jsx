import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap';
import ResultStyle from './FiltersResult.module.css'

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
  const[ activeProduct, setActiveProduct ] = useState(1)
  const[ activeCaseStudy, setActiveCaseStudy ] = useState(1)

  let textSearch = React.createRef();

  useEffect(() => {
    let indexOfLastTodo = currentPage * productPerPage
    let indexOfFirstTodo = indexOfLastTodo - productPerPage
    let currentProduct = product.map(val => {
       let pagination = Math.ceil((val && val.cat && val.cat.length)/ productPerPage)
       return {
         ...val,
         paginationArr: pagination ?
           Array(pagination - 1 + 1).fill().map((_, idx) => 1 + idx) :
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


    let rsPagination = Math.ceil((resourceList && resourceList && resourceList.length)/ productPerPage)
    let currentResourceList = {
        resourceList:resourceList && resourceList.length && resourceList.slice(indexOfFirstTodo, indexOfLastTodo),
          paginationArr: rsPagination ?
              Array(rsPagination - 1 + 1).fill().map((_, idx) => 1 + idx) :
              [],
          catCurrentPage: 1
    }


    setProductResult(currentProduct)
    setBlogResult(currentBlog)
    setCaseStudyResult(currentCaseStudy)
    setResourceResult(currentResourceList)
  },[product, blogList, allCaseStudyList ])

  const handlePagination = (value, typeId, cat) => {
    if(cat == 'product') {
        let indexOfLastTodo = value * productPerPage
        let indexOfFirstTodo = indexOfLastTodo - productPerPage
        let currentProduct = productResult.map(val => {
            let indexOfLast = val.catCurrentPage * productPerPage
            let indexOfFirst = indexOfLast - productPerPage
            let pagination = Math.ceil((val && val.cat && val.cat.length) / productPerPage)
            if (val.id == typeId) {
                return {
                    ...val,
                    paginationArr: pagination ?
                        Array(pagination - 1 + 1).fill().map((_, idx) => 1 + idx) :
                        [],
                    catCurrentPage: value,
                    newCat: val && val.cat && val.cat.length && val.cat.slice(indexOfFirstTodo, indexOfLastTodo)
                }
            } else {
                return {
                    ...val,
                    paginationArr: pagination ?
                        Array(pagination - 1 + 1).fill().map((_, idx) => 1 + idx) :
                        [],
                    catCurrentPage: val.catCurrentPage,
                    newCat: val && val.cat && val.cat.length && val.cat.slice(indexOfFirst, indexOfLast)
                }
            }

        })
        setProductResult(currentProduct)
    }

    if(cat == 'blog') {
        let indexOfLast = blogResult.catCurrentPage * productPerPage
        let indexOfFirst = indexOfLast - productPerPage
        let pagination = Math.ceil((blogList && blogList.length) / productPerPage)
        let currentBlog = {
                    paginationArr: pagination ?
                        Array(pagination - 1 + 1).fill().map((_, idx) => 1 + idx) :
                        [],
                    catCurrentPage: value,
                    blogList: blogList && blogList.length && blogList.slice(indexOfFirst, indexOfLast)
            }
        setBlogResult(currentBlog)
    }

    if(cat == 'caseStudy') {
        let indexOfLast = caseStudyResult.catCurrentPage * productPerPage
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
console.log(resourceResult)
  return(
    <>
      <div className={ResultStyle.searchbox_outer}>
        <input 
          type='search' 
          ref={textSearch} 
          name='searchtext' 
          placeholder='Search'
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
        />
        <button
          onClick={() => {
            handleSearch(textSearch.current.value)
          }}
        >
          <i className='bx bx-search'></i>
        </button>
      </div>
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
                              onClick ={() => {
                                       handlePagination(val, types.id)
                                       setActiveProduct(i+1)
                                     }
                              }
                              className={ activeProduct === i+1 ? ResultStyle.activepagination : ''}

                              key={i}>{val}</button>
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
          <div>No result found</div>
      }

      <div className={ResultStyle.product_headingbox}>
        <h2>Spec Sheets</h2>
      </div>
      <Row>
        <Col lg={4} md={6}>
          <div className={ResultStyle.inner}>
            <ul>
              <li><Link href="/"><a title="Rotator Gas" target="_blank">Rotator</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">RT90 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">RT 110 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">RT130 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">RT150 Brick Oven</a></Link></li>
            </ul>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className={ResultStyle.inner}>
            <ul>
              <li><Link href="/"><a title="Rotator Gas" target="_blank">Electric</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">ELMS 25-20 Brick Oven </a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">ELMR 39-43 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">ELNP 39-43 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">ELNP 56-43 Brick Oven</a></Link></li>
            </ul>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className={ResultStyle.inner}>
            <ul>
              <li><Link href="/"><a title="Rotator Gas" target="_blank">Enclosed Facade</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">EF70 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">EF80 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">EF90 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">EF110 Brick Oven</a></Link></li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ul className={ResultStyle.pagination}>
            <li><button className={ResultStyle.activepagination}>1</button></li>
            <li><button>2</button></li>
            <li><button>3</button></li>
            <li><button>4</button></li>
            <li><button>5</button></li>
          </ul>
        </Col>
      </Row>
      <div className={ResultStyle.product_headingbox}>
        <h2>CAD Drawings</h2>
      </div>
      <Row>
        <Col lg={4} md={6}>
          <div className={ResultStyle.inner}>
            <ul>
              <li><Link href="/"><a title="Rotator Gas" target="_blank">Rotator</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">RT90 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">RT 110 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">RT130 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">RT150 Brick Oven</a></Link></li>
            </ul>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className={ResultStyle.inner}>
            <ul>
              <li><Link href="/"><a title="Rotator Gas" target="_blank">Electric</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">ELNP 56-43 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">ELMS 68-32 Brick Oven</a></Link></li>
            </ul>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className={ResultStyle.inner}>
            <ul>
              <li><Link href="/"><a title="Rotator Gas" target="_blank">Enclosed Facade: Wood/Gas</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">EF70 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">EF80 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">EF90 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">EF110 Brick Oven</a></Link></li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ul className={ResultStyle.pagination}>
            <li><button className={ResultStyle.activepagination}>1</button></li>
            <li><button>2</button></li>
            <li><button>3</button></li>
            <li><button>4</button></li>
            <li><button>5</button></li>
          </ul>
        </Col>
      </Row>
      <div className={ResultStyle.product_headingbox}>
        <h2>Revit Files</h2>
      </div>
      <Row>
        <Col lg={4} md={6}>
          <div className={ResultStyle.inner}>
            <ul>
              <li><Link href="/"><a title="Rotator Gas" target="_blank">Rotator</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">RT90 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">RT 110 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">RT130 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">RT150 Brick Oven</a></Link></li>
            </ul>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className={ResultStyle.inner}>
            <ul>
              <li><Link href="/"><a title="Rotator Gas" target="_blank">Electric</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">ELMS 25-20 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">ELMR 39-43 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">ELNP 39-43 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">ELNP 56-43 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">ELMS 68-32 Brick Oven</a></Link></li>
            </ul>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className={ResultStyle.inner}>
            <ul>
              <li><Link href="/"><a title="Rotator Gas" target="_blank">Enclosed Facade: Wood/Gas</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">EF70 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">EF80 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">EF90 Brick Oven</a></Link></li>
              <li><Link href="/"><a title="RT90G" target="_blank">EF110 Brick Oven</a></Link></li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ul className={ResultStyle.pagination}>
            <li><button className={ResultStyle.activepagination}>1</button></li>
            <li><button>2</button></li>
            <li><button>3</button></li>
            <li><button>4</button></li>
            <li><button>5</button></li>
          </ul>
        </Col>
      </Row>
      <div className={ResultStyle.product_headingbox}>
        <h2>Videos</h2>
      </div>
      <Row>
        <Col lg={4} md={6}>
          <div className={ResultStyle.gallery_inner}>
            <Link href='/'>
              <a title='Gallery Image'>
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                  width='550'
                  height='533'
                  className='img-fluid'
                />
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
            </Link>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className={ResultStyle.gallery_inner}>
            <Link href='/'>
              <a title='Gallery Image'>
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                  width='550'
                  height='533'
                  className='img-fluid'
                />
                <div className={ResultStyle.gallery_overlay}>
                  <div className={ResultStyle.info_box}>
                    <span><i className='bx bx-play-circle'></i></span>
                    <p>Amazing Innovations, Services, And Passion</p>
                  </div>
                </div>
                <div className={ResultStyle.gallery_coloroverlay}>
                  <div className={ResultStyle.info_box}>
                    <span><i className='bx bx-play-circle'></i></span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className={ResultStyle.gallery_inner}>
            <Link href='/'>
              <a title='Gallery Image'>
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/lines-at-pico.jpg`}
                  width='550'
                  height='533'
                  className='img-fluid'
                />
                <div className={ResultStyle.gallery_overlay}>
                  <div className={ResultStyle.info_box}>
                    <span><i className='bx bx-play-circle'></i></span>
                    <p>We Are Here For You!</p>
                  </div>
                </div>
                <div className={ResultStyle.gallery_coloroverlay}>
                  <div className={ResultStyle.info_box}>
                    <span><i className='bx bx-play-circle'></i></span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ul className={ResultStyle.pagination}>
            <li><button className={ResultStyle.activepagination}>1</button></li>
            <li><button>2</button></li>
            <li><button>3</button></li>
            <li><button>4</button></li>
            <li><button>5</button></li>
          </ul>
        </Col>
      </Row>
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
           <div>No result found</div>
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
                                <img src={`https://marraforni.com/wp/wp-content/uploads/2021/06/UB.png`} width="400"
                                     height="500" className="img-fluid" alt=""/>
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
                <div>No result found</div>
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


export default FiltersResult