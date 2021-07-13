import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import Link from 'next/link'
import {Col, Container, Row} from 'react-bootstrap'
import OurTeamStyle from './OurTeam.module.css'

const OurTeam = (props) => {
    const teamData = props.userData
    const ourTeam = teamData.content
    console.log('ourTeam ', ourTeam)

    return (
        <Container fluid>
            <Row>
                <Col lg={1}></Col>
                <Col lg={10} className={OurTeamStyle.team_section_outer}>
                    <h2>Our Awesome Team</h2>
                    <Row>
                        {(ourTeam && ourTeam.length) ? ourTeam.map((data, i) => (
                            <Col xl={3} lg={4} sm={6} key={data.id}>
                                <div className={OurTeamStyle.team_outer}>
                                    <img className='img-fluid'
                                        // src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/PIC_7775.jpg`}
                                         src={data.imageUrl}
                                         alt='Our Team' width='1500' height='1500'/>
                                    <div className={OurTeamStyle.team_overlay}>
                                        <h4>{data.firstName}</h4>
                                        <p>{data.designation}</p>
                                        {/*<Link href='https://www.linkedin.com/in/francesco-marra-aa204518/'>*/}
                                        <Link href={`${data.linkedinUrl}`}>
                                            <a target='_blank' rel='noopener' title='Linked In'>
                                                <span><FontAwesomeIcon icon={faLinkedinIn}/></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        )) : null}

                        {/*<Col xl={3} lg={4} sm={6}>*/}
                        {/*  <div className={OurTeamStyle.team_outer}>*/}
                        {/*    <img className='img-fluid' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/PIC_7591-1.jpg`} alt='Our Team' width='1500' height='1500' />*/}
                        {/*    <div className={OurTeamStyle.team_overlay}>*/}
                        {/*      <h4>ENZO MARRA</h4>*/}
                        {/*      <p>COO & CO-FOUNDER</p>*/}
                        {/*      <Link href='https://www.linkedin.com/in/vincenzo-marra-coo/'>*/}
                        {/*        <a target='_blank' rel='noopener' title='Linked In'>*/}
                        {/*          <span><FontAwesomeIcon icon={faLinkedinIn} /></span>*/}
                        {/*        </a>*/}
                        {/*      </Link>*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</Col>*/}
                        {/*<Col xl={3} lg={4} sm={6}>*/}
                        {/*  <div className={OurTeamStyle.team_outer}>*/}
                        {/*    <img className='img-fluid' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/Todd-1.png`} alt='Our Team' width='1500' height='1500' />*/}
                        {/*    <div className={OurTeamStyle.team_overlay}>*/}
                        {/*      <h4>TODD GRIFFITH</h4>*/}
                        {/*      <p>VP SALES & MARKETING</p>*/}
                        {/*      <Link href='https://www.linkedin.com/in/todd-griffith-1a00b34/'>*/}
                        {/*        <a target='_blank' rel='noopener' title='Linked In'>*/}
                        {/*          <span><FontAwesomeIcon icon={faLinkedinIn} /></span>*/}
                        {/*        </a>*/}
                        {/*      </Link>*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</Col>*/}
                        {/*<Col xl={3} lg={4} sm={6}>*/}
                        {/*  <div className={OurTeamStyle.team_outer}>*/}
                        {/*    <img className='img-fluid' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/PIC_7625.jpg`} alt='Our Team' width='1500' height='1500' />*/}
                        {/*    <div className={OurTeamStyle.team_overlay}>*/}
                        {/*      <h4>URSULA JOHNSON</h4>*/}
                        {/*      <p>CONTROLLER</p>*/}
                        {/*      <Link href='https://www.linkedin.com/in/ursula-p-johnson-62b75340/'>*/}
                        {/*        <a target='_blank' rel='noopener' title='Linked In'>*/}
                        {/*          <span><FontAwesomeIcon icon={faLinkedinIn} /></span>*/}
                        {/*        </a>*/}
                        {/*      </Link>*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</Col>*/}
                        {/*<Col xl={3} lg={4} sm={6}>*/}
                        {/*  <div className={OurTeamStyle.team_outer}>*/}
                        {/*    <img className='img-fluid' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/David-copy.png`} alt='Our Team' width='1500' height='1500' />*/}
                        {/*    <div className={OurTeamStyle.team_overlay}>*/}
                        {/*      <h4>DAVID DORSEY</h4>*/}
                        {/*      <p>ASSISTANT PROJECT MANAGER</p>*/}
                        {/*      <Link href='https://www.linkedin.com/in/david-dorsey-b6948798/'>*/}
                        {/*        <a target='_blank' rel='noopener' title='Linked In'>*/}
                        {/*          <span><FontAwesomeIcon icon={faLinkedinIn} /></span>*/}
                        {/*        </a>*/}
                        {/*      </Link>*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</Col>*/}
                        {/*<Col xl={3} lg={4} sm={6}>*/}
                        {/*  <div className={OurTeamStyle.team_outer}>*/}
                        {/*    <img className='img-fluid' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/PIC_7673.jpg`} alt='Our Team' width='1500' height='1500' />*/}
                        {/*    <div className={OurTeamStyle.team_overlay}>*/}
                        {/*      <h4>JESSIE MACOLA</h4>*/}
                        {/*      <p>METAL FABRICATION MANAGER</p>*/}
                        {/*      <Link href='/'>*/}
                        {/*        <a target='_blank' rel='noopener' title='Linked In'>*/}
                        {/*          <span><FontAwesomeIcon icon={faLinkedinIn} /></span>*/}
                        {/*        </a>*/}
                        {/*      </Link>*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</Col>*/}
                        {/*<Col xl={3} lg={4} sm={6}>*/}
                        {/*  <div className={OurTeamStyle.team_outer}>*/}
                        {/*    <img className='img-fluid' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/PIC_1116-min-e1550695784172.jpg`} alt='Our Team' width='1500' height='1500' />*/}
                        {/*    <div className={OurTeamStyle.team_overlay}>*/}
                        {/*      <h4>JEFF GAWRYK</h4>*/}
                        {/*      <p>WESTERN REGIONAL SALES MANAGER</p>*/}
                        {/*      <Link href='https://www.linkedin.com/in/jeff-gawryk-b0894847/'>*/}
                        {/*        <a target='_blank' rel='noopener' title='Linked In'>*/}
                        {/*          <span><FontAwesomeIcon icon={faLinkedinIn} /></span>*/}
                        {/*        </a>*/}
                        {/*      </Link>*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</Col>*/}
                        {/*<Col xl={3} lg={4} sm={6}>*/}
                        {/*  <div className={OurTeamStyle.team_outer}>*/}
                        {/*    <img className='img-fluid' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/Maykell-1.png`} alt='Our Team' width='1500' height='1500' />*/}
                        {/*    <div className={OurTeamStyle.team_overlay}>*/}
                        {/*      <h4>MAYKELL MERINO</h4>*/}
                        {/*      <p>Sr.Staff Accountant</p>*/}
                        {/*      <Link href='/'>*/}
                        {/*        <a target='_blank' rel='noopener' title='Linked In'>*/}
                        {/*          <span><FontAwesomeIcon icon={faLinkedinIn} /></span>*/}
                        {/*        </a>*/}
                        {/*      </Link>*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</Col>*/}
                        {/*<Col xl={3} lg={4} sm={6}>*/}
                        {/*  <div className={OurTeamStyle.team_outer}>*/}
                        {/*    <img className='img-fluid' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/PIC_7647.jpg`} alt='Our Team' width='1500' height='1500' />*/}
                        {/*    <div className={OurTeamStyle.team_overlay}>*/}
                        {/*      <h4>JOSE A. MONTOYA</h4>*/}
                        {/*      <p>PLANT MANAGER</p>*/}
                        {/*      <Link href='/'>*/}
                        {/*        <a target='_blank' rel='noopener' title='Linked In'>*/}
                        {/*          <span><FontAwesomeIcon icon={faLinkedinIn} /></span>*/}
                        {/*        </a>*/}
                        {/*      </Link>*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</Col>*/}
                        {/*<Col xl={3} lg={4} sm={6}>*/}
                        {/*  <div className={OurTeamStyle.team_outer}>*/}
                        {/*    <img className='img-fluid' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/PIC_7632.jpg`} alt='Our Team' width='1500' height='1500' />*/}
                        {/*    <div className={OurTeamStyle.team_overlay}>*/}
                        {/*      <h4>NATALIE THOMAS</h4>*/}
                        {/*      <p>MARKETING MANAGER | DESIGNER</p>*/}
                        {/*      <Link href='https://www.linkedin.com/in/natalie-thomas-3667937/'>*/}
                        {/*        <a target='_blank' rel='noopener' title='Linked In'>*/}
                        {/*          <span><FontAwesomeIcon icon={faLinkedinIn} /></span>*/}
                        {/*        </a>*/}
                        {/*      </Link>*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</Col>*/}
                        {/*<Col xl={3} lg={4} sm={6}>*/}
                        {/*  <div className={OurTeamStyle.team_outer}>*/}
                        {/*    <img className='img-fluid' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/P1366250-min.jpg`} alt='Our Team' width='1500' height='1500' />*/}
                        {/*    <div className={OurTeamStyle.team_overlay}>*/}
                        {/*      <h4>FELICE COLUCCI</h4>*/}
                        {/*      <p>CULINARY DIRECTOR</p>*/}
                        {/*      <Link href='https://www.linkedin.com/in/felice-colucci-9b8776123/'>*/}
                        {/*        <a target='_blank' rel='noopener' title='Linked In'>*/}
                        {/*          <span><FontAwesomeIcon icon={faLinkedinIn} /></span>*/}
                        {/*        </a>*/}
                        {/*      </Link>*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</Col>*/}
                        {/*<Col xl={3} lg={4} sm={6}>*/}
                        {/*  <div className={OurTeamStyle.team_outer}>*/}
                        {/*    <img className='img-fluid' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/PIC_7606.jpg`} alt='Our Team' width='1500' height='1500' />*/}
                        {/*    <div className={OurTeamStyle.team_overlay}>*/}
                        {/*      <h4>ANTHONY PEREZ</h4>*/}
                        {/*      <p>EXECUTIVE PURCHASER</p>*/}
                        {/*      <Link href='https://www.linkedin.com/in/anthony-perez-21680018b/'>*/}
                        {/*        <a target='_blank' rel='noopener' title='Linked In'>*/}
                        {/*          <span><FontAwesomeIcon icon={faLinkedinIn} /></span>*/}
                        {/*        </a>*/}
                        {/*      </Link>*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</Col>*/}
                        {/*<Col xl={3} lg={4} sm={6}>*/}
                        {/*  <div className={OurTeamStyle.team_outer}>*/}
                        {/*    <img className='img-fluid' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/Girish.png`} alt='Our Team' width='1500' height='1500' />*/}
                        {/*    <div className={OurTeamStyle.team_overlay}>*/}
                        {/*      <h4>GIRISH SARASWAT</h4>*/}
                        {/*      <p>DIGITAL MARKETING SPECIALIST</p>*/}
                        {/*      <Link href='https://www.linkedin.com/in/girishsaraswat/'>*/}
                        {/*        <a target='_blank' rel='noopener' title='Linked In'>*/}
                        {/*          <span><FontAwesomeIcon icon={faLinkedinIn} /></span>*/}
                        {/*        </a>*/}
                        {/*      </Link>*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</Col>*/}
                        {/*<Col xl={3} lg={4} sm={6}>*/}
                        {/*  <div className={OurTeamStyle.team_outer}>*/}
                        {/*    <img className='img-fluid' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/Michael.png`} alt='Our Team' width='1500' height='1500' />*/}
                        {/*    <div className={OurTeamStyle.team_overlay}>*/}
                        {/*      <h4>MICHAEL KELLY</h4>*/}
                        {/*      <p>Regional Sales Manager - Midwest, Northeast and Eastern Canada</p>*/}
                        {/*      <Link href='https://www.linkedin.com/in/michael-kelly-2b8783159/'>*/}
                        {/*        <a target='_blank' rel='noopener' title='Linked In'>*/}
                        {/*          <span><FontAwesomeIcon icon={faLinkedinIn} /></span>*/}
                        {/*        </a>*/}
                        {/*      </Link>*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</Col>*/}
                        {/*<Col xl={3} lg={4} sm={6}>*/}
                        {/*  <div className={OurTeamStyle.team_outer}>*/}
                        {/*    <img className='img-fluid' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/Alex-min-min-1-1-scaled.jpg`} alt='Our Team' width='1500' height='1500' />*/}
                        {/*    <div className={OurTeamStyle.team_overlay}>*/}
                        {/*      <h4>ALEXANDRA EMGE</h4>*/}
                        {/*      <p>Graphic Designer</p>*/}
                        {/*      <Link href='https://www.linkedin.com/in/candace-mccrea-bibb-5025a1124/'>*/}
                        {/*        <a target='_blank' rel='noopener' title='Linked In'>*/}
                        {/*          <span><FontAwesomeIcon icon={faLinkedinIn} /></span>*/}
                        {/*        </a>*/}
                        {/*      </Link>*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</Col>*/}
                        {/*<Col xl={3} lg={4} sm={6}>*/}
                        {/*  <div className={OurTeamStyle.team_outer}>*/}
                        {/*    <img className='img-fluid' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/PIC_1127-2-min-e1550696193993.jpg`} alt='Our Team' width='1500' height='1500' />*/}
                        {/*    <div className={OurTeamStyle.team_overlay}>*/}
                        {/*      <h4>DIEGO FIORALDI</h4>*/}
                        {/*      <p>Regional Sales Manager EMEA REGION (SPAIN)</p>*/}
                        {/*      <Link href='https://www.linkedin.com/in/dfioraldi/'>*/}
                        {/*        <a target='_blank' rel='noopener' title='Linked In'>*/}
                        {/*          <span><FontAwesomeIcon icon={faLinkedinIn} /></span>*/}
                        {/*        </a>*/}
                        {/*      </Link>*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</Col>*/}
                        {/*<Col xl={3} lg={4} sm={6}>*/}
                        {/*  <div className={OurTeamStyle.team_outer}>*/}
                        {/*    <img className='img-fluid' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/PIC_1125-min-e1550696279460.jpg`} alt='Our Team' width='1500' height='1500' />*/}
                        {/*    <div className={OurTeamStyle.team_overlay}>*/}
                        {/*      <h4>OMAR AGUIRRE</h4>*/}
                        {/*      <p>Regional Sales Manager Mexico & Latin America</p>*/}
                        {/*      <Link href='https://www.linkedin.com/in/omar-israel-aguirre-molina-101051188/'>*/}
                        {/*        <a target='_blank' rel='noopener' title='Linked In'>*/}
                        {/*          <span><FontAwesomeIcon icon={faLinkedinIn} /></span>*/}
                        {/*        </a>*/}
                        {/*      </Link>*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</Col>*/}
                        {/*<Col xl={3} lg={4} sm={6}>*/}
                        {/*  <div className={OurTeamStyle.team_outer}>*/}
                        {/*    <img className='img-fluid' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/Tito-copy.png`} alt='Our Team' width='1500' height='1500' />*/}
                        {/*    <div className={OurTeamStyle.team_overlay}>*/}
                        {/*      <h4>TITO RODRIGUEZ</h4>*/}
                        {/*      <p>Southeast Regional Sales Manager</p>*/}
                        {/*      <Link href='https://www.linkedin.com/in/medardo-%E2%80%9Ctito%E2%80%9D-rodriguez-46716667/'>*/}
                        {/*        <a target='_blank' rel='noopener' title='Linked In'>*/}
                        {/*          <span><FontAwesomeIcon icon={faLinkedinIn} /></span>*/}
                        {/*        </a>*/}
                        {/*      </Link>*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</Col>*/}
                        {/*<Col xl={3} lg={4} sm={6}>*/}
                        {/*  <div className={OurTeamStyle.team_outer}>*/}
                        {/*    <img className='img-fluid' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/Obi.png`} alt='Our Team' width='1500' height='1500' />*/}
                        {/*    <div className={OurTeamStyle.team_overlay}>*/}
                        {/*      <h4>OBIORA IGBO</h4>*/}
                        {/*      <p>Social media Specialist | Content Creator</p>*/}
                        {/*      <Link href='/'>*/}
                        {/*        <a target='_blank' rel='noopener' title='Linked In'>*/}
                        {/*          <span><FontAwesomeIcon icon={faLinkedinIn} /></span>*/}
                        {/*        </a>*/}
                        {/*      </Link>*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</Col>*/}
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div className={OurTeamStyle.team_banner_outer}>
                                <img className='img-fluid'
                                     src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/PIC_7716.jpg`}
                                     alt='Our Team' width='1500' height='1000'/>
                                <h4>METAL FABRICATION TEAM</h4>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className={OurTeamStyle.team_banner_outer}>
                                <img className='img-fluid'
                                     src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/AboutUs_Timeline/PIC_7747.jpg`}
                                     alt='Our Team' width='1500' height='1000'/>
                                <h4>WAREHOUSE TEAM</h4>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={1}></Col>
            </Row>
        </Container>
    )
}


export default OurTeam