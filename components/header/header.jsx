import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import ActiveLink from './ActiveLink';
import headerStyle from './header.module.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  const [fixedHeaderClass, setFixedHeaderClass] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);

  function checkStickyHeader(){
    if(window.innerWidth > 991){
      if(window.scrollY > 150){
        setFixedHeaderClass(headerStyle.active_sticky_header);
      }
      else{
        setFixedHeaderClass("");
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkStickyHeader, {passive: true});
    checkStickyHeader();

    return () => window.removeEventListener("scroll", checkStickyHeader, {passive: true});
  },[]);
  return(
    <>
      <header className={`${headerStyle.custom_header} ${fixedHeaderClass} ${headerStyle.mobile_navbar} container-fluid`}>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <nav className={`${headerStyle.custom_navbar}`}>
              <div className={headerStyle.site_logo}>
                <div className={`${headerStyle.mobile_show} ${headerStyle.menu_icon}`}>
                  <button onClick={()=>{
                    setMobileNavOpen(!mobileNavOpen);
                    setMobileProductOpen(false);
                    setMobileBlogOpen(false);
                    setMobileGalleryOpen(false);
                    setMobileContactOpen(false);
                    }
                  }>
                    <i className={mobileNavOpen ? "bx bx-window-close" : "bx bx-menu-alt-left"}></i>
                  </button>
                </div>
                <Link href="/">
                  <a title="MarraForni"><img alt="Marra Forni" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/LogoRed.png`} width="226" height="60" /></a>
                </Link>
                <div className={headerStyle.mobile_slbox}>
                  <div className={`${headerStyle.searchicon} ${headerStyle.mobile_show}`}>
                    <button><i className='bx bx-search-alt-2'></i></button>
                  </div>
                  <div className={headerStyle.mobile_show}>
                    <img alt="Language Flag" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/en.png`} width="18" height="12" />
                  </div>
                </div>
              </div>
              <div className={`${headerStyle.site_nav} ${ mobileNavOpen ? headerStyle.mob_nav_open : ""}`}>
                <div>
                  <ActiveLink activeClassName="active_menu" href="/about-marra-forni">
                    <a title="About Us" data-title="About Us"><span>About Us</span></a>
                  </ActiveLink>
                </div>
                <div className={headerStyle.product_menu_outer}>
                  <ActiveLink activeClassName="active_menu" href="/product">
                    <a title="Products" data-title="Products"><span>Products</span></a>
                  </ActiveLink>
                  <button className={headerStyle.mobile_show} onClick={()=>{
                    setMobileProductOpen(!mobileProductOpen);
                    setMobileBlogOpen(false);
                    setMobileGalleryOpen(false);
                    setMobileContactOpen(false);
                    }
                  }>
                    <i className={mobileProductOpen ? "bx bxs-chevron-down" : "bx bxs-chevron-up"}></i>
                  </button>
                  <div className={`${headerStyle.product_sub_menu} ${ mobileProductOpen ? headerStyle.product_sub_menu_active : ""}`}>
                    <Tabs defaultActiveKey="Ovens" id="uncontrolled-tab-example">
                      <Tab eventKey="Ovens" title="Ovens">
                        <Row>
                          <Col sm={3}>
                            <div className={headerStyle.special_product}>
                              <Link href="/">
                                <a title="">
                                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/stainless_facade_square_black.webp`} width="200" height="200" alt="Top Product" />
                                  <p>Rotator Brick Oven</p>
                                </a>
                              </Link>
                            </div>
                          </Col>
                          <Col sm={9}>
                            <div className={headerStyle.rest_product}>
                              <ul>
                                <li>
                                  <Link href="/">
                                    <a title="">
                                      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Blu-Penny-NP.webp`} width="100" height="100" alt="Top Product" />
                                      <p>The Neapolitan</p>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/">
                                    <a title="">
                                      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Due_Bocche_White_Broken.webp`} width="100" height="100" alt="Top Product" />
                                      <p>Due Bocche</p>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/">
                                    <a title="">
                                      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/EL_Square_Blue.webp`} width="100" height="100" alt="Top Product" />
                                      <p>Electric Oven</p>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/">
                                    <a title="">
                                      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Big-Enclosed-BrIck-Oven-Rendering.webp`} width="100" height="100" alt="Top Product" />
                                      <p>Enclosed Facade</p>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/">
                                    <a title="">
                                      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Webp.net-resizeimage-1.webp`} width="100" height="100" alt="Top Product" />
                                      <p>Mobile Trailer</p>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/">
                                    <a title="">
                                      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MS_42-31.webp`} width="100" height="100" alt="Top Product" />
                                      <p>Metal Square</p>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                        </Row>
                      </Tab>
                      <Tab eventKey="Ventilation" title="Ventilation">
                        <Row>
                          <Col sm={3}>
                            <div className={headerStyle.special_product}>
                              <Link href="/">
                                <a title="">
                                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Marra-Forni-Full-Length-integrated-Venting-Pipes.webp`} width="200" height="200" alt="Top Product" />
                                  <p>Venting System</p>
                                </a>
                              </Link>
                            </div>
                          </Col>
                          <Col sm={9}>
                            <div className={headerStyle.rest_product}>
                              <ul>
                                <li>
                                  <Link href="/">
                                    <a title="">
                                      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Blu-Penny-NP.webp`} width="100" height="100" alt="Top Product" />
                                      <p>Venting</p>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/">
                                    <a title="">
                                      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Due_Bocche_White_Broken.webp`} width="100" height="100" alt="Top Product" />
                                      <p>Venting</p>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/">
                                    <a title="">
                                      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/EL_Square_Blue.webp`} width="100" height="100" alt="Top Product" />
                                      <p>Venting</p>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/">
                                    <a title="">
                                      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Big-Enclosed-BrIck-Oven-Rendering.webp`} width="100" height="100" alt="Top Product" />
                                      <p>Venting</p>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/">
                                    <a title="">
                                      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Webp.net-resizeimage-1.webp`} width="100" height="100" alt="Top Product" />
                                      <p>Venting</p>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                        </Row>
                      </Tab>
                      <Tab eventKey="PrepTables" title="Prep Tables">
                        <Row>
                          <Col sm={3}>
                            <div className={headerStyle.special_product}>
                              <Link href="/">
                                <a title="">
                                  <img src={`https://marraforni.com/wp/wp-content/uploads/2017/11/Marra-Forni-Three-Door-Pizza-Prep-Table-without-Rail.jpg`} width="200" height="200" alt="Top Product" />
                                  <p>Refrigerated Prep Table</p>
                                </a>
                              </Link>
                            </div>
                          </Col>
                          <Col sm={9}>
                            <div className={headerStyle.rest_product}>
                              <ul>
                                <li>
                                  <Link href="/">
                                    <a title="">
                                      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Blu-Penny-NP.webp`} width="100" height="100" alt="Top Product" />
                                      <p>Prep Table</p>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/">
                                    <a title="">
                                      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Due_Bocche_White_Broken.webp`} width="100" height="100" alt="Top Product" />
                                      <p>Prep Table</p>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/">
                                    <a title="">
                                      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/EL_Square_Blue.webp`} width="100" height="100" alt="Top Product" />
                                      <p>Prep Table</p>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                        </Row>
                      </Tab>
                      <Tab eventKey="Mixers" title="Mixers">
                        <Row>
                          <Col sm={3}>
                            <div className={headerStyle.special_product}>
                              <Link href="/">
                                <a title="">
                                  <img src={`https://marraforni.com/wp/wp-content/uploads/2017/11/Marra-Forni-Spiral-Dough-Mixer-IM-model.jpg`} width="200" height="200" alt="Top Product" />
                                  <p>Spiral Dough Mixers</p>
                                </a>
                              </Link>
                            </div>
                          </Col>
                          <Col sm={9}>
                            <div className={headerStyle.rest_product}>
                              <ul>
                                <li>
                                  <Link href="/">
                                    <a title="">
                                      <img src={`https://marraforni.com/wp/wp-content/uploads/2017/11/Marra-Forni-Forked-Dough-Mixer.jpg`} width="100" height="100" alt="Top Product" />
                                      <p>Fork Dough Mixers</p>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/">
                                    <a title="">
                                      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Due_Bocche_White_Broken.webp`} width="100" height="100" alt="Top Product" />
                                      <p>Mixers</p>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/">
                                    <a title="">
                                      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/EL_Square_Blue.webp`} width="100" height="100" alt="Top Product" />
                                      <p>Mixers</p>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                        </Row>
                      </Tab>
                      <Tab eventKey="Slicers" title="Slicers">
                        <Row>
                          <Col sm={3}>
                            <div className={headerStyle.special_product}>
                              <Link href="/">
                                <a title="">
                                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/stainless_facade_square_black.webp`} width="200" height="200" alt="Top Product" />
                                  <p>Slicers</p>
                                </a>
                              </Link>
                            </div>
                          </Col>
                          <Col sm={9}>
                            <div className={headerStyle.rest_product}>
                              <ul>
                                <li>
                                  <Link href="/">
                                    <a title="">
                                      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Blu-Penny-NP.webp`} width="100" height="100" alt="Top Product" />
                                      <p>Slicers</p>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/">
                                    <a title="">
                                      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Due_Bocche_White_Broken.webp`} width="100" height="100" alt="Top Product" />
                                      <p>Slicers</p>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/">
                                    <a title="">
                                      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/EL_Square_Blue.webp`} width="100" height="100" alt="Top Product" />
                                      <p>Slicers</p>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/">
                                    <a title="">
                                      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Big-Enclosed-BrIck-Oven-Rendering.webp`} width="100" height="100" alt="Top Product" />
                                      <p>Slicers</p>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                        </Row>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
                <div>
                  <ActiveLink activeClassName="active_menu" href="/resources">
                    <a title="Resources" data-title="Resources"><span>Resources</span></a>
                  </ActiveLink>
                </div>
                <div className={headerStyle.sub_menu_outer}>
                  <ActiveLink activeClassName="active_menu" href="/blog">
                    <a title="Blog" data-title="Blog"><span>Blog</span></a>
                  </ActiveLink>
                  <button className={headerStyle.mobile_show} onClick={()=>{
                    setMobileProductOpen(false);
                    setMobileBlogOpen(!mobileBlogOpen);
                    setMobileGalleryOpen(false);
                    setMobileContactOpen(false);
                    }
                  }>
                    <i className={mobileBlogOpen ? "bx bxs-chevron-down" : "bx bxs-chevron-up"}></i>
                  </button>
                  <div className={`${headerStyle.sub_menu} ${ mobileBlogOpen ? headerStyle.sub_menu_active : ""}`}>
                    <ul>
                      <li>
                        <Link href="/">
                          <a title="Case Studies"><span>Case Studies</span></a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={headerStyle.sub_menu_outer}>
                  <ActiveLink activeClassName="active_menu" href="/gallery">
                    <a title="Gallery" data-title="Gallery"><span>Gallery</span></a>
                  </ActiveLink>
                  <button className={headerStyle.mobile_show} onClick={()=>{
                    setMobileProductOpen(false);
                    setMobileBlogOpen(false);
                    setMobileGalleryOpen(!mobileGalleryOpen);
                    setMobileContactOpen(false);
                    }
                  }>
                    <i className={mobileGalleryOpen ? "bx bxs-chevron-down" : "bx bxs-chevron-up"}></i>
                  </button>
                  <div className={`${headerStyle.sub_menu} ${ mobileGalleryOpen ? headerStyle.sub_menu_active : ""}`}>
                    <ul>
                      <li>
                        <Link href="/">
                          <a title="Market Segment Gallery"><span>Market Segment Gallery</span></a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <a title="Product Gallery"><span>Product Gallery</span></a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={headerStyle.sub_menu_outer}>
                  <ActiveLink activeClassName="active_menu" href="/connect">
                    <a title="Contact Us" data-title="Contact Us"><span>Contact Us</span></a>
                  </ActiveLink>
                  <button className={headerStyle.mobile_show} onClick={()=>{
                    setMobileProductOpen(false);
                    setMobileBlogOpen(false);
                    setMobileGalleryOpen(false);
                    setMobileContactOpen(!mobileContactOpen);
                    }
                  }>
                    <i className={mobileContactOpen ? "bx bxs-chevron-down" : "bx bxs-chevron-up"}></i>
                  </button>
                  <div className={`${headerStyle.sub_menu} ${ mobileContactOpen ? headerStyle.sub_menu_active : ""}`}>
                    <ul>
                      <li>
                        <Link href="/">
                          <a title="HQ"><span>HQ</span></a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <a title="Tech Support"><span>Tech Support</span></a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <a title="Find a Sales Rep"><span>Find a Sales Rep</span></a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <button className="mf_btn">Build Your Brick Oven</button>
                </div>
                <div className={`${headerStyle.searchicon} ${headerStyle.desktop_show}`}>
                  <i className='bx bx-search-alt-2'></i>
                </div>
                <div className={headerStyle.desktop_show}>
                  <img alt="Language Flag" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/en.png`} width="18" height="12" />
                </div>
              </div>
            </nav>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </header>
    </>
   )
  }


export default Header;