import { faFacebookF, faFacebookSquare, faInstagram, faLinkedinIn, faPinterestP, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footerStyle from './footer.module.css';

/**
* @author
* @function Footer
**/

const Footer = (props) => {

  const [backtotopshow, setBacktotopshow] = useState(false);

  function checkbacktotop(){
      if(window.scrollY > 250){
        setBacktotopshow(true);
      }
      else{
        setBacktotopshow(false);
      }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkbacktotop, {passive: true});
    checkbacktotop();

    return () => window.removeEventListener("scroll", checkbacktotop, {passive: true});
  },[]);

  return(
    <>
      <footer className={footerStyle.footer}>
        <Container>
          <div className={footerStyle.top_footer}>
            <p><b>★★★★★ Google Reviews • Exceptional Customer Experience • International Shipping</b></p>
            <p>Marra Forni is the premier manufacturer of brick oven cooking solutions to the global commercial foodservice industry. We continue to exceed customer expectations through our handcrafted workmanship, innovative technology, and a continued commitment to achieving best-in-class quality, performance, and service.</p>
            <p>Each oven is built brick-by-brick using the same tried and tested process used by Italian masons hundreds of years ago. Our flagship Rotator Smart oven gives you full control of crucial functions such as temperature, deck rotation speed, direction, and auto on/off. Enjoy labor and energy savings thanks to better heat absorption, retention, and faster, more consistent cooking. Every oven is tiled to order, offering you abundant color choices to complement your dream kitchen.</p>
            <p>Our product line includes a full line of brick-oven cooking solutions, <Link href="/marra-forni-prep-tables"><a>refrigerated prep tables</a></Link>, <Link href="/mixers"><a>mixers</a></Link>, slicers, and <Link href="/ventilation"><a>direct venting</a></Link>. Marra Forni currently sells and supports its products in 5 continents and 23 countries worldwide.</p>
          </div>
          <Row>
            <Col lg={3} md={6} className={footerStyle.footer_inner}>
              <h3>Our Company</h3>
              <ul>
                <li>
                  <Link href="/about-marra-forni">
                    <a title="About Us">About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/gallery">
                    <a title="Client Gallery">Client Gallery</a>
                  </Link>
                </li>
                <li>
                  <Link href="/press">
                    <a title="Press Coverage">Press Coverage</a>
                  </Link>
                </li>
                <li>
                  <Link href="/events">
                    <a title="Marra Forni Events">Marra Forni Events</a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy">
                    <a title="Privacy Policy">Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a title="Terms and Conditions">Terms and Conditions</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a title="Warrantee information">Warrantee information</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a title="Careers">Careers</a>
                  </Link>
                </li>
              </ul>
              <div>
                10310 Southard Dr.<br />
                Beltsville MD 20705<br /><br />
                Ph. <Link href="tel:8882390575"><a title="888.239.0575">888.239.0575</a></Link><br />
                Fax. 240.667.7991<br /><br />
                <Link href="mailto:inquiries@marraforni.com"><a title="inquiries@marraforni.com">inquiries@marraforni.com</a></Link>
              </div>
              <img alt="Marra Forni Logo" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/LogoRed.png`}  width="226" height="60" className="img-fluid" />
            </Col>
            <Col lg={3} md={6} className={footerStyle.footer_inner}>
              <h3>Products</h3>
              <ul>
                <li>
                  <Link href="/discover-the-rotator-brick-oven">
                    <a title="Rotator Series">Rotator Series</a>
                  </Link>
                </li>
                <li>
                  <Link href="/neapolitan">
                    <a title="Neapolitan Series">Neapolitan Series</a>
                  </Link>
                </li>
                <li>
                  <Link href="/metal-square">
                    <a title="MS Series">MS Series</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a title="ELECTRO Series">ELECTRO Series</a>
                  </Link>
                </li>
                <li>
                  <Link href="/electric">
                    <a title="Stackable Electric Series">Stackable Electric Series</a>
                  </Link>
                </li>
                <li>
                  <Link href="/enclosed-facade">
                    <a title="Enclosed Facade Series">Enclosed Facade Series</a>
                  </Link>
                </li>
                <li>
                  <Link href="/mobile">
                    <a title="Mobile Solutions">Mobile Solutions</a>
                  </Link>
                </li>
                <li>
                  <Link href="/due-bocche">
                    <a title="Due Bocche">Due Bocche</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ventilation">
                    <a title="Direct Ventilation">Direct Ventilation</a>
                  </Link>
                </li>
                <li>
                  <Link href="/marra-forni-prep-tables">
                    <a title="Refrigerated Prep Tables">Refrigerated Prep Tables</a>
                  </Link>
                </li>
                <li>
                  <Link href="/mixers">
                    <a title="Dough Mixers">Dough Mixers</a>
                  </Link>
                </li>
                <li>
                  <Link href="/pizza-oven-tools-and-accessories">
                    <a title="Tools & Accessories">Tools & Accessories</a>
                  </Link>
                </li>
                <li>
                  <Link href="/demo-ovens">
                    <a title="Demo Ovens">Demo Ovens</a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} className={footerStyle.footer_inner}>
              <h3>Resources</h3>
              <ul>
                <li>
                  <Link href="/resources">
                    <a title="Spec Sheets, CAD Blocks, Manuals">Spec Sheets, CAD Blocks, Manuals</a>
                  </Link>
                </li>
                <li>
                  <Link href="/connect">
                    <a title="Get A Quote">Get A Quote</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faqs">
                    <a title="FAQs">FAQs</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.pizzauniversity.org/">
                    <a target="_blank" rel="noreferrer" title="Pizza University">Pizza University</a>
                  </Link>
                </li>
                <li>
                  <Link href="/mock-up-request">
                    <a title="Request A Mock-Up">Request A Mock-Up</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a title="Recurso español">Recurso español</a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} className={footerStyle.footer_inner}>
              <h3>Let's Connect</h3>
              <ul>
                <li>
                  <Link href="/connect">
                    <a title="Contact Us!">Contact Us!</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a title="Our Blog">Our Blog</a>
                  </Link>
                </li>
              </ul>
              <div className={footerStyle.social_outer}>
                <Link href="https://www.facebook.com/marraforni">
                  <a target="_blank" rel="noopener" title="Facebook"><span><FontAwesomeIcon icon={faFacebookF} /></span></a>
                </Link>
                <Link href="https://twitter.com/MarraForni">
                  <a target="_blank" rel="noopener" title="Twitter"><span><FontAwesomeIcon icon={faTwitter} /></span></a>
                </Link>
                <Link href="https://www.instagram.com/marraforni">
                  <a target="_blank" rel="noopener" title="Instagram"><span><FontAwesomeIcon icon={faInstagram} /></span></a>
                </Link>
                <Link href="https://www.linkedin.com/company/marraforni/">
                  <a target="_blank" rel="noopener" title="Linkedin"><span><FontAwesomeIcon icon={faLinkedinIn} /></span></a>
                </Link>
                <Link href="https://www.pinterest.com/marraforni/">
                  <a target="_blank" rel="noopener" title="Pinterest"><span><FontAwesomeIcon icon={faPinterestP} /></span></a>
                </Link>
                <Link href="https://www.youtube.com/user/marraforni">
                  <a target="_blank" rel="noopener" title="Our Videos"><span><FontAwesomeIcon icon={faYoutube} /></span></a>
                </Link>
              </div>
              <Link href="/">
                <a className="mf_btn" title="Rep portal">Rep portal</a>
              </Link>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className={`${footerStyle.back_to_top} ${ backtotopshow ? footerStyle.back_to_top_active : ""}`} onClick={ ()=> window.scrollTo({top: 0, behavior: 'smooth'}) }><i className='bx bxs-chevron-up'></i></div>
    </>
   )
  }


export default Footer;