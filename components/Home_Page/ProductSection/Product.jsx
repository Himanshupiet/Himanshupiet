import Link from 'next/link'
import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import ProductStyle from './Product.module.css'

const Product = (props) => {
    return (
        // <section
        //   className={ProductStyle.section_outer}>
        //   <Container fluid>
        //     <Row>
        //       <Col lg={1}></Col>
        //       <Col lg={10}>
        //         <Row>
        //           <Col
        //             lg={3}
        //             md={6}
        //           >
        //             <ScrollAnimation
        //               duration={1}
        //               animateIn='fadeInLeft'
        //               animateOnce={true}
        //             >
        //               <div
        //                   className={ProductStyle.product_inner}>
        //                 <img
        //                     className='img-fluid'
        //                     alt='Card image cap'
        //                     src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/WholeFoods.webp`}
        //                     width='376'
        //                     height='498'
        //                 />
        //                 <div
        //                     className={ProductStyle.product_info}>
        //                   <h3>Rotator</h3>
        //                       <p>{('High-performance, high-efficiency, user-friendly for unskilled labor').substr(0,80)}
        //                       {('High-performance, high-efficiency, user-friendly for unskilled labor').length > 80 && '...'}</p>
        //                   <Link
        //                       href='/neapolitan'>
        //                     <a
        //                         className='mf_btn'
        //                         title='Discover the Neapolitan'
        //                     >
        //                       Discover the Neapolitan
        //                     </a>
        //                   </Link>
        //                 </div>
        //               </div>
        //             </ScrollAnimation>
        //           </Col>
        //           <Col
        //             lg={3}
        //             md={6}
        //           >
        //             <ScrollAnimation
        //               duration={1}
        //               animateIn='fadeInUp'
        //               animateOnce={true}
        //             >
        //               <div
        //                 className={ProductStyle.product_inner}>
        //                 <img
        //                   className='img-fluid'
        //                   alt='Card image cap'
        //                   src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Neapolitan_Broken_Red.webp`}
        //                   width='376'
        //                   height='498'
        //                 />
        //                 <div
        //                   className={ProductStyle.product_info}>
        //                   <h3>Neapolitan</h3>
        //                   <p>{('The “Classic” brick oven solution for static and mobile applications. Available in Wood, Gas, and Combination').substr(0,80)}
        //                   {('The “Classic” brick oven solution for static and mobile applications. Available in Wood, Gas, and Combination').length > 80 && '...'}</p>
        //                   <Link
        //                     href='/neapolitan'>
        //                     <a
        //                       className='mf_btn'
        //                       title='Discover the Neapolitan'
        //                     >
        //                       Discover the Neapolitan
        //                     </a>
        //                   </Link>
        //                 </div>
        //               </div>
        //             </ScrollAnimation>
        //           </Col>
        //           <Col
        //             lg={3}
        //             md={6}
        //           >
        //             <ScrollAnimation
        //               duration={1}
        //               animateIn='fadeInUp'
        //               animateOnce={true}
        //             >
        //               <div
        //                 className={ProductStyle.product_inner}>
        //                 <img
        //                   className='img-fluid'
        //                   alt='Card image cap'
        //                   src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/bice-500.webp`}
        //                   width='376'
        //                   height='498'
        //                 />
        //                 <div
        //                   className={ProductStyle.product_info}>
        //                   <h3>Electric</h3>
        //                   <p>{('The look of a Traditional wood or gas-fired oven with Top and bottom heat controls').substr(0,80)}
        //                   {('The look of a Traditional wood or gas-fired oven with Top and bottom heat controls').length > 80 && '...'}</p>
        //                   <Link
        //                     href='/electric'>
        //                     <a
        //                       className='mf_btn'
        //                       title='Discover The Electric'
        //                     >
        //                       Discover The Electric
        //                     </a>
        //                   </Link>
        //                 </div>
        //               </div>
        //             </ScrollAnimation>
        //           </Col>
        //           <Col
        //             lg={3}
        //             md={6}
        //           >
        //             <ScrollAnimation
        //               duration={1}
        //               animateIn='fadeInRight'
        //               animateOnce={true}
        //             >
        //               <div
        //                 className={ProductStyle.product_inner}>
        //                 <img
        //                   className='img-fluid'
        //                   alt='Card image cap'
        //                   src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Due_Bocche_White_Broken.webp`}
        //                   width='376'
        //                   height='498'
        //                 />
        //                 <div
        //                   className={ProductStyle.product_info}>
        //                   <h3>Due Bocche</h3>
        //                   <p>{('All of the benefits of the Classic Neapolitan or the Rotator in a Pass-Thru configuration').substr(0,80)}
        //                   {('All of the benefits of the Classic Neapolitan or the Rotator in a Pass-Thru configuration').length > 80 && '...'}</p>
        //                   <Link
        //                     href='/due-bocche'>
        //                     <a
        //                       className='mf_btn'
        //                       title='Discover the Passthrough'>
        //                         Discover the Passthrough
        //                     </a>
        //                   </Link>
        //                 </div>
        //               </div>
        //             </ScrollAnimation>
        //           </Col>
        //         </Row>
        //       </Col>
        //       <Col lg={1}></Col>
        //     </Row>
        //   </Container>
        // </section>
        <section
            className={ProductStyle.section_outer}>
            <Container fluid>
                <div className={`${ProductStyle.dg_title12} size-xl pt-5`}>
                    <h2 className="title text-uppercase">Customize Your Commercial Brick Oven</h2>
                    {/*<small>Hire developers who are seasoned to foster business growth.</small>*/}
                </div>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <Row>
                            <Col lg={6}>
                                <Row>
                                    <Col lg={6}>
                                        <div className={ProductStyle.panel_bg_accent}>
                                            <div
                                                className={`${ProductStyle.panel_heading} text-center pl-2 pr-2`}>Customize
                                                Your Commercial Brick Oven
                                            </div>
                                            <div className={`${ProductStyle.panel_body} pt-0 text-center`}>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s.
                                            </div>
                                        </div>
                                        <div className={ProductStyle.panel_bg_accent}>
                                            <div
                                                className={`${ProductStyle.panel_heading} text-center pl-2 pr-2`}>Your Success Is Our Inspiration
                                            </div>
                                            <div className={`${ProductStyle.panel_body} pt-0 text-center`}>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book.
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className={ProductStyle.panel_bg_accent}>
                                            <div className={`${ProductStyle.panel_heading} text-center pl-2 pr-2`}>Low
                                                Operational Risk
                                            </div>
                                            <div className={`${ProductStyle.panel_body} pt-0 text-center`}>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever.
                                            </div>
                                        </div>
                                        <div className={ProductStyle.panel_bg_accent}>
                                            <div className={`${ProductStyle.panel_heading} text-center`}>Low Operational
                                                Risk
                                            </div>
                                            <div className={`${ProductStyle.panel_body} pt-0 text-center`}>
                                                Businesses need a wide set of technical expertise but a blooming
                                                business
                                                doesn’t have the economical capacity to hire full time developers. You
                                                can
                                                hire developers by paying per hour for low operational risks.to hire
                                                full time developers.
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6}>
                                <div className={ProductStyle.hire_developer_page}>
                                    <img src="https://marraforni.com/wp/wp-content/uploads/2020/02/PIC_7194-scaled.jpg"
                                         alt="Hire Developers Who Code Smartly"/>
                                    <div className={ProductStyle.hire_developer_page_para}>
                                        <h3 className={ProductStyle.dg_title31}>High-Volume Pizza Making.</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. It has survived not only five centuries, but also
                                            the leap into electronic typesetting.</p>


                                        <ul className={ProductStyle.list_ico}>
                                            <li><span className="fa fa-check"></span>24*7 Support</li>
                                            <li><span className="fa fa-check"></span>Global Quality Standards</li>
                                            <li><span className="fa fa-check"></span>Time-Zone Compatibility</li>
                                            <li><span className="fa fa-check"></span>Resource backup for absence and
                                                replacement policies
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
        </section>
    )
}


export default Product