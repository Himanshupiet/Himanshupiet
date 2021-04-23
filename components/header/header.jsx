import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
      <header className={`${headerStyle.custom_header} ${fixedHeaderClass} ${headerStyle.mobile_navbar}`}>
        <nav className={`${headerStyle.custom_navbar} container`}>
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
              <a title="MarraForni"><img alt="Marra Forni" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/LogoBlack.png`} width="226" height="60" /></a>
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
            <div className={headerStyle.sub_menu_outer}>
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
              <div className={`${headerStyle.sub_menu} ${ mobileProductOpen ? headerStyle.sub_menu_active : ""}`}>
                <ul>
                  <li>
                    <Link href="/home">
                      <a title="Rotator Series"><span>Rotator Series</span></a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a title="Neapolitan Series"><span>Neapolitan Series</span></a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/home">
                      <a title="MS Series"><span>MS Series</span></a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a title="ELECTRO Series"><span>ELECTRO Series</span></a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a title="Stackable Electric Series"><span>Stackable Electric Series</span></a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a title="Enclosed Facade Series"><span>Enclosed Facade Series</span></a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a title="Mobile Solutions"><span>Mobile Solutions</span></a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a title="Due Bocche"><span>Due Bocche</span></a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a title="Direct Ventilation"><span>Direct Ventilation</span></a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a title="Refrigerated Prep Tables"><span>Refrigerated Prep Tables</span></a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a title="Dough Mixers"><span>Dough Mixers</span></a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a title="Tools & Accessories"><span>Tools & Accessories</span></a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a title="Demo Ovens"><span>Demo Ovens</span></a>
                    </Link>
                  </li>
                </ul>
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
      </header>
    </>
   )
  }


export default Header;