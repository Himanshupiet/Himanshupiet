import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import Link from 'next/link'
import {Col, Container, Row} from 'react-bootstrap'
import OurTeamStyle from './OurTeam.module.css'

const OurTeam = (props) => {
    const teamData = props.userData
    const ourTeam = teamData.content

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
                                         src={data.imageUrl}
                                         alt='Our Team' width='1500' height='1500'/>
                                    <div className={OurTeamStyle.team_overlay}>
                                        <h4>{data.firstName}</h4>
                                        <p>{data.designation}</p>
                                        <Link href={`${data.linkedinUrl}`}>
                                            <a target='_blank' rel='noopener' title='Linked In'>
                                                <span><FontAwesomeIcon icon={faLinkedinIn}/></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        )) : null}
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