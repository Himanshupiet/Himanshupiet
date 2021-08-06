import React from 'react'
import Header from '../header/header';
import Footer from '../footer/footer';
import Styles from './thankyou.module.css'
import {Col, Container, Row} from 'react-bootstrap';
const Thankyou = (props) => {
    return(
        <>
            <Header />
            <div
                style={{
                    height:'300px',
                    background:`#eee`,
                    backgroundRepeat:'no-repeat',
                    backgroundAttachment:'fixed',
                    backgroundSize:'cover',
                    backgroundPosition: 'center',
                    textAlign:'center'
                 }}>
                <h1 className='' style={{paddingTop:'7rem'}}>Thank You</h1>
            </div>
            <section className={Styles.section_outer} style={{background:'#fff'}}>
                <Container fluid>
                    <Row>
                        <Col lg={1}/>
                        <Col lg={10} className={Styles.imgcss}>
                           <img width='640' height='500' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/thanks/WELCOME-TO-MARRA.webp` }/>
                           <div className={Styles.paraline}>
                               <p>Thank you for your interest!</p>
                               <p >We are so happy to have you join the Marra Forni family.
                               <br/>We are a trusted brand and well known for building innovative,
                               customizable, durable, energy-efficient, and handcrafted brick ovens.</p>
                               <p>Thanks for your interest in staying in touch with us and we promise you will be
                               the first to know all about our latest innovative products, brand, events, promotions, and updates
                               in the industry.</p>
                               <p>We look forward to helping you find the right oven product for your business!</p>
                               <p>Marra Forni.</p>
                           <div>
                           <button className={Styles.linkbutton}>
                             <a href='https://marraforni.com/' target='_self' className={Styles.linkstyle}> Learn More </a>
                           </button>
                           </div>
                        </div>
                        </Col>
                        <Col lg={1}/>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )

}

export default Thankyou