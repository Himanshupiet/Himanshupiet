import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap';
import ResultStyle from './FiltersResult.module.css'

const FiltersResult = (props) => {
  const[ productResult, setProductResult ] = useState([])

  const{product} = props

  useEffect(() => {
    setProductResult(product)
    //console.log(productResult)
  },[productResult])

  return(
    <>
      <div className={ResultStyle.searchbox_outer}>
        <input type='search' name='searchtext' placeholder='Search' />
        <button><i className='bx bx-search'></i></button>
      </div>

      {
        productResult.map((types, index)=>{
          return (
            <React.Fragment key={index}>
              <div className={ResultStyle.product_headingbox}>
                <h2>{types.name}</h2>
              </div>
              <Row className={ResultStyle.innovation}>
                {
                  types.cat.map((cat, index)=>{
                    return (
                      <Col lg={4} md={6} key={index}>
                        <div className={ResultStyle.product_inner}>
                          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/${cat.image}`} width="400" height="500" className="img-fluid" alt={cat.name} />
                          <div className={ResultStyle.product_info}>
                            <h3>{cat.name}</h3>
                            <p>{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s").substr(0,60)}{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").length > 60 && "..."}</p>
                            <Link href="/discover-the-rotator-brick-oven">
                              <a className="mf_btn" title="The Rotator">Explore more</a>
                            </Link>
                          </div>
                        </div>
                      </Col>
                    )
                  })
                }
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
            </React.Fragment>
          )
        })
      }

      {/* <div className={ResultStyle.product_headingbox}>
        <h2>Ovens</h2>
      </div>

      <Row className={ResultStyle.innovation}>
        <Col lg={4} md={6}>
          <div className={ResultStyle.product_inner}>
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/stainless_facade_square_black.webp`} width="400" height="500" className="img-fluid" alt="The Rotator" />
            <div className={ResultStyle.product_info}>
              <h3>The Rotator</h3>
              <p>{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s").substr(0,60)}{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").length > 60 && "..."}</p>
              <Link href="/discover-the-rotator-brick-oven">
                <a className="mf_btn" title="The Rotator">Explore more</a>
              </Link>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className={ResultStyle.product_inner}>
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Blu-Penny-NP.webp`} width="400" height="500" className="img-fluid" alt="The Neapolitan" />
            <div className={ResultStyle.product_info}>
              <h3>The Neapolitan</h3>
              <p>{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s").substr(0,60)}{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").length > 60 && "..."}</p>
              <Link href="/neapolitan">
                <a className="mf_btn" title="The Neapolitan">Explore more</a>
              </Link>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className={ResultStyle.product_inner}>
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Due_Bocche_White_Broken.webp`} width="400" height="500" className="img-fluid" alt="Due Bocche" />
            <div className={ResultStyle.product_info}>
              <h3>Due Bocche</h3>
              <p>{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s").substr(0,60)}{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").length > 60 && "..."}</p>
              <Link href="/due-bocche">
                <a className="mf_btn" title="Due Bocche">Explore more</a>
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



      <div className={ResultStyle.product_headingbox}>
        <h2>Ventilation</h2>
      </div>
      <Row className={ResultStyle.innovation}>
          <Col lg={4} md={6}>
            <div className={ResultStyle.product_inner}>
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Marra-Forni-Full-Length-integrated-Venting-Pipes.webp`} width="400" height="500" className="img-fluid" alt="The Rotator" />
              <div className={ResultStyle.product_info}>
                <h3>Venting System</h3>
                <p>{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s").substr(0,60)}{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").length > 60 && "..."}</p>
                <Link href="/discover-the-rotator-brick-oven">
                  <a className="mf_btn" title="The Rotator">Explore more</a>
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
      <div className={ResultStyle.product_headingbox}>
        <h2>Prep Tables</h2>
      </div>
      <Row className={ResultStyle.innovation}>
        <Col lg={4} md={6}>
          <div className={ResultStyle.product_inner}>
            <img src={`https://marraforni.com/wp/wp-content/uploads/2017/11/Marra-Forni-Three-Door-Pizza-Prep-Table-without-Rail.jpg`} width="400" height="500" className="img-fluid" alt="The Rotator" />
            <div className={ResultStyle.product_info}>
              <h3>Refrigerated Prep Table</h3>
              <p>{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s").substr(0,60)}{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").length > 60 && "..."}</p>
              <Link href="/discover-the-rotator-brick-oven">
                <a className="mf_btn" title="The Rotator">Explore more</a>
              </Link>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className={ResultStyle.product_inner}>
            <img src={`https://marraforni.com/wp/wp-content/uploads/2017/11/Marra-Forni-Three-Door-Pizza-Prep-Table-with-Rail.jpg`} width="400" height="500" className="img-fluid" alt="The Rotator" />
            <div className={ResultStyle.product_info}>
              <h3>Refrigerated Condiment Rail</h3>
              <p>{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s").substr(0,60)}{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").length > 60 && "..."}</p>
              <Link href="/discover-the-rotator-brick-oven">
                <a className="mf_btn" title="The Rotator">Explore more</a>
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
      <div className={ResultStyle.product_headingbox}>
        <h2>Mixers</h2>
      </div>
      <Row className={ResultStyle.innovation}>
        <Col lg={4} md={6}>
          <div className={ResultStyle.product_inner}>
            <img src={`https://marraforni.com/wp/wp-content/uploads/2017/11/Marra-Forni-Spiral-Dough-Mixer-IM-model.jpg`} width="400" height="500" className="img-fluid" alt="The Rotator" />
            <div className={ResultStyle.product_info}>
              <h3>Spiral Dough Mixers</h3>
              <p>{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s").substr(0,60)}{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").length > 60 && "..."}</p>
              <Link href="/discover-the-rotator-brick-oven">
                <a className="mf_btn" title="The Rotator">Explore more</a>
              </Link>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className={ResultStyle.product_inner}>
            <img src={`https://marraforni.com/wp/wp-content/uploads/2017/11/Marra-Forni-Forked-Dough-Mixer.jpg`} width="400" height="500" className="img-fluid" alt="The Rotator" />
            <div className={ResultStyle.product_info}>
              <h3>Fork Dough Mixers</h3>
              <p>{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s").substr(0,60)}{("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").length > 60 && "..."}</p>
              <Link href="/discover-the-rotator-brick-oven">
                <a className="mf_btn" title="The Rotator">Explore more</a>
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
    </Row>*/}


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