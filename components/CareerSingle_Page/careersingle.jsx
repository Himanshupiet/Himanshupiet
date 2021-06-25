import React, {useState} from 'react';
import {Col, Container, Row, Accordion, Card} from 'react-bootstrap'
import Header from "../header/header";
import Footer from "../footer/footer";
import CarrerSingle from './careersingle.module.css'
import CareerStyle from "../Careers_page/careers.module.css";


const CareerSingle = () => {
    return (
        <>
            <Header/>
            <Container fluid className={CareerStyle.career_banner}>
                <h2>Careers at Marraforni</h2>
                <h3>We always have room for great talent.</h3>
            </Container>
            <Container>
                <Row>
                    {/*<Col lg={1}></Col>*/}
                    <Col lg={12}>
                        <div className={CarrerSingle.main}>
                            <h5 className='mt-3 mb-3'>Job openings > <span>Senior Content Strategist</span></h5>
                        </div>
                        <hr/>
                        <Row>
                            <Col lg={9} className='border-right mt-4'>
                                <div className={CarrerSingle.job_desc}>
                                    <h3>Senior Content Strategist</h3>
                                    <h4>Job description</h4>
                                    <p className='pt-2'>In case we've never met before, we're WebMechanix - an award-winning digital
                                        marketing agency based in Columbia, MD. We run high-impact performance marketing
                                        programs for over 60+ clients, which means we manage a lot of PPC campaigns, SEO
                                        initiatives, and more.</p>
                                    <p>We service clients in the tech, software, education, and healthcare industries.
                                        To
                                        continue to fuel our growth, we're looking for someone to manage WebMechanix's
                                        own
                                        content and interact with our followers. You're a person who feels comfortable
                                        reaching out and networking with marketers/executives in our industry every day.
                                        You'll be joining a team of 60+ marketers, developers, and designers who love
                                        digital, get excited about new Google Ads developments, and love to look at
                                        great
                                        Facebook ads. If you're into those sorts of things, you're just what we're
                                        looking
                                        for.</p>
                                </div>
                                <div className={`${CarrerSingle.job} pt-3`}>
                                    <h3>Here’s what you’ll do:</h3>
                                    <p>The Senior Content Strategist at WebMechanix will take full control of the
                                        production, formatting, distribution, and management of WebMechanix content
                                        across multiple channels. Their main focus is to engage, retain & grow our
                                        audience of followers, fans & clients through content. They will ensure the
                                        content being produced is compelling, clear, properly distributed across
                                        platforms, and consistently adheres to WebMechanix’s brand. The Senior Content
                                        Strategist will spearhead WebMechanix’s content output. The person in this
                                        position will be responsible for generating inbound traffic, demand, and
                                        opportunities for WebMechanix through content.</p>
                                    <ul className={`${CareerStyle.list_style} pl-2`}>
                                        <li>Develop a strategy to create compelling, one-of-a-kind content that our
                                            ideal prospects will want to engage with. Then, develop the tactical
                                            approach to get that content in front of our ideal clients.
                                        </li>
                                        <li>Use data, research, and strategy to create compelling content to target
                                            audience
                                        </li>
                                        <li>Manage distribution of content across social media, monitor engagement,
                                            analyze data, manage content, implement SEO best practices and build
                                            strategic partnerships
                                        </li>
                                        <li>Write, format, and distribute content across multiple platforms (blog,
                                            website, email, social, other websites, etc.)
                                        </li>
                                        <li>Drive (qualified/engaged) traffic, demand & pipeline through inbound
                                            channels
                                        </li>
                                        <li>Work closely with the business development team</li>
                                        <li>Stay abreast of industry development and trends</li>
                                    </ul>
                                </div>
                                <div className={CarrerSingle.job_req}>
                                    <h3>Requirements</h3>
                                    <h4>Here’s what you’ll have</h4>
                                    <ul>
                                        <li>Experience with Digital Marketing, especially hands-on experience with SEO
                                        </li>
                                        <li>A proven track record of generating inbound traffic, demand, lead &
                                            opportunities through content.
                                        </li>
                                        <li>Experience managing & distributing a podcast</li>
                                        <li>Specific experience growing a B2B brand or digital marketing agency through
                                            content & inbound channels
                                        </li>
                                        <li>Excellent writing skills</li>
                                        <li>Ability to create content that engages a target audience</li>
                                        <li>Understanding of how to tailor content for different digital and social
                                            platforms
                                        </li>
                                        <li>Have in-depth working knowledge of digital concepts and technologies</li>
                                    </ul>
                                </div>
                                <div className={CarrerSingle.offer}>
                                    <h3>Here’s what we offer:</h3>
                                    <ul>
                                        <li>Unlimited Vacation Time</li>
                                        <li>8 Weeks Paid Family Leave</li>
                                        <li>Health Insurance options w/ Employer Contribution</li>
                                        <li>401(k) Retirement Plan w/ Employer Matching</li>
                                        <li>Flexible Work Hours</li>
                                        <li>12.5 Paid Holidays</li>
                                        <li>Weekly Training</li>
                                        <li>Monthly Mentorship Meetings</li>
                                        <li>Casual Dress Code</li>
                                        <li>...and more! Ask us about our favorite benefits!</li>
                                    </ul>
                                </div>
                                <div>
                                    <p>WebMechanix is committed to the principles of Equal Employment Opportunity for
                                        all employees and applicants for employment without regard to race, color,
                                        religion, age, sex, national origin, disability, genetic information, sexual
                                        orientation, or any other category covered by law.</p>
                                    <p>Disclaimer: This position is flexible and we will consider contractors (1099) or
                                        full-time employees (W2). The type of relationship may change the details of the
                                        position, as well as the benefits and compensation package.</p>
                                    <h5>U.S. Citizens Only</h5>
                                    <button>Apply for this job</button>
                                </div>
                            </Col>
                            <Col lg={3} className={`${CarrerSingle.sidebar}`}>
                                <button className={CarrerSingle.apply_btn}>Apply for this job</button>
                                <button className={CarrerSingle.btn_indeed}>
                                    <img src='https://d7cxvscusq782.cloudfront.net/assets/careers/indeed-d7605c81b26861a6697ff4f1a1138498b26d6dc93675c4b8307f1ce9f998a819.png' width='25'/>
                                    Apply with Indeed</button>
                                <div className="card">
                                    <h6 className='text-center pt-2'>SHARE THIS JOB OPENING</h6>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    {/*<Col lg={1}></Col>*/}
                </Row>
            </Container>
            <Footer/>
        </>
    )
}
export default CareerSingle