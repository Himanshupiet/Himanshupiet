import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap';
import ResultStyle from './FiltersResult.module.css'

const FiltersResult = (props) => {
  const{ product, handleSearch } = props
  const[ productResult, setProductResult ] = useState([])
  const[ productPerPage, setProductPerPage ] = useState(3)
  const[ currentPage, setCurrentPage ] = useState(1)

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
    setProductResult(currentProduct)
  },[product])

  const handlePagination = (value, typeId) => {
    let indexOfLastTodo = value * productPerPage
    let indexOfFirstTodo = indexOfLastTodo - productPerPage

    let currentProduct = productResult.map(val => {
      let indexOfLast = val.catCurrentPage * productPerPage
      let indexOfFirst = indexOfLast - productPerPage
      let pagination = Math.ceil((val && val.cat && val.cat.length) / productPerPage)
      if(val.id == typeId) {
        return {
          ...val,
          paginationArr: pagination ?
            Array(pagination - 1 + 1).fill().map((_, idx) => 1 + idx) :
            [],
          catCurrentPage:value,
          newCat: val && val.cat && val.cat.length && val.cat.slice(indexOfFirstTodo, indexOfLastTodo)
        }
      }else{
        return {
          ...val,
          paginationArr: pagination ?
            Array(pagination - 1 + 1).fill().map((_, idx) => 1 + idx) :
            [],
          catCurrentPage:val.catCurrentPage,
         newCat: val && val.cat && val.cat.length && val.cat.slice(indexOfFirst, indexOfLast)
        }
      }

    })
    setProductResult(currentProduct)
  }

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
                          <li>
                            <button
                              onClick = {() => handlePagination(val, types.id)}
                              className={ResultStyle.activepagination}
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
        <h2>Blogs</h2>
      </div>
      <Row className={ResultStyle.innovation}>
        <Col lg={4} md={6}>
          <div className={ResultStyle.blog_inner}>
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Marra-Stone-min.jpg`} width="400" height="500" className="img-fluid" alt="The Rotator" />
            <div className={ResultStyle.blog_info}>
              <h3 title='5 Ways MarraStone Revolutionizes The Brick Oven'>{("5 Ways MarraStone Revolutionizes The Brick Oven").substr(0,50)}{("5 Ways MarraStone Revolutionizes The Brick Oven,").length > 50 && "..."}</h3>
              <p>{("Food enthusiasts have been fired up about brick ovens since the beginning of written history. Did you know that sundried bricks are the first known manufactured material?").substr(0,100)}{("Food enthusiasts have been fired up about brick ovens since the beginning of written history. Did you know that sundried bricks are the first known manufactured material?,").length > 100 && "..."}</p>
              <Link href="/">
                <a className="mf_btn" title="The Rotator">View more</a>
              </Link>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className={ResultStyle.blog_inner}>
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Sous-Vide-Blog-2.png`} width="400" height="500" className="img-fluid" alt="The Rotator" />
            <div className={ResultStyle.blog_info}>
              <h3 title='All You Need To Know About Sous Vide To Brick Oven Cooking'>{("All You Need To Know About Sous Vide To Brick Oven Cooking").substr(0,50)}{("All You Need To Know About Sous Vide To Brick Oven Cooking,").length > 50 && "..."}</h3>
              <p>{("Over the years, One of our resident chefs and sales manager has developed delicious, easy, environmentally friendly ways of combining Sous Vide techniques with brick oven cooking.").substr(0,100)}{("Over the years, One of our resident chefs and sales manager has developed delicious, easy, environmentally friendly ways of combining Sous Vide techniques with brick oven cooking.,").length > 100 && "..."}</p>
              <Link href="/">
                <a className="mf_btn" title="The Rotator">View more</a>
              </Link>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className={ResultStyle.blog_inner}>
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Rep-Chef-Blog.png`} width="400" height="500" className="img-fluid" alt="The Rotator" />
            <div className={ResultStyle.blog_info}>
              <h3 title='7 Ways Rep Chefs Make Purchasing The Best Kitchen Solutions Easy'>{("7 Ways Rep Chefs Make Purchasing The Best Kitchen Solutions Easy").substr(0,50)}{("7 Ways Rep Chefs Make Purchasing The Best Kitchen Solutions Easy").length > 50 && "..."}</h3>
              <p>{("We consistently hear feedback on how Chef Representatives in our test kitchens helped clients’ businesses succeed. In addition to providing valuable tips and strategies to help them choose the best ovens").substr(0,100)}{("We consistently hear feedback on how Chef Representatives in our test kitchens helped clients’ businesses succeed. In addition to providing valuable tips and strategies to help them choose the best ovens,").length > 100 && "..."}</p>
              <Link href="/">
                <a className="mf_btn" title="The Rotator">View more</a>
              </Link>
            </div>
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
    </>
   )
  }


export default FiltersResult