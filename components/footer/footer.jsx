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
  },[]);

  return(
    <>
      <footer className={footerStyle.footer}>
        <Container>
          <Row>
            <Col lg={3} md={6} className={footerStyle.footer_inner}>
              <h3>Our Company</h3>
              <ul>
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
            </Col>
            <Col lg={3} md={6} className={footerStyle.footer_inner}>
              <h3>Resources</h3>
            </Col>
            <Col lg={3} md={6} className={footerStyle.footer_inner}>
              <h3>Let's Connect</h3>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className={`${footerStyle.back_to_top} ${ backtotopshow ? footerStyle.back_to_top_active : ""}`} onClick={ ()=> window.scrollTo({top: 0, behavior: 'smooth'}) }><i className='bx bxs-chevron-up'></i></div>
    </>
   )
  }


export default Footer;