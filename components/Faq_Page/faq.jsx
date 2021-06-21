import React, {useState} from 'react';
import {Col, Container, Row, Accordion, Card} from 'react-bootstrap'
import Header from "../header/header";
import Footer from "../footer/footer";
import TermsConditionsStyle from "../TermsAndConditions/TermsAndConditionsContent/TermsAndConditionsContent.module.css";
import GetAQuote from "../common/GetAQuote/GetAQuote";
import FaqStyle from './faq.module.css'
import BlogSidebarStyle from "../Blog_Page/BlogSidebar/BlogSidebar.module.css";
import MainHomePageStyle from "../Home_Page/index.module.css";
import ContactStyle from "../ContactUs_Page/contact.module.css";


const Faq = () => {
    const faqData = [
        {
            id: 1,
            question: 'What Does Marra Forni Mean?',
            answer: 'Forni means oven in Italian, and Marra is the last name of the owners and founders.'
        },
        {
            id: 2,
            question: 'Where are Marra Forni Ovens Built?',
            answer: 'All Marra Forni ovens are built, fully assembled and stocked in the United States, which means a faster shipment time for our customers.'
        },
        {
            id: 3,
            question: 'Does Marra Forni Sell Direct?',
            answer: 'Our products are all sold through our highly knowledgeable and experienced regional dealers.'
        },
        {
            id: 4,
            question: 'What is The Factory Warranty For Ovens?',
            answer: 'Marra Forni offers a 3-year deck and dome warranty for static ovens and 2-year deck and dome warranty for rotating deck ovens, as well as a 1-year parts and labor warranty. Find out more under Terms & Conditions for Sale.'
        },
        {
            id: 5,
            question: 'How Much Maintenance is Required?',
            answer: 'Our wood-burning ovens require very little maintenance. with the gas assist option, you will need to clean the burner as needed.'
        },
        {
            id: 6,
            question: 'What Kind of Services Do You Offer?',
            answer: 'We strive to offer top-notch, nationwide customer service and tech support throughout the life of your oven and venting system. Whether you’re troubleshooting an issue, scheduling service with a qualified technician, or order a replacement part, we’re here to help.'
        },
        {
            id: 7,
            question: 'Do you ship here?',
            answer: 'Yes. We ship nationwide and internationally.'
        },
        {
            id: 8,
            question: 'Can I Use Wood In A Gas Oven?',
            answer: 'All Marra Forni brick ovens are wood-burning ovens. Gas assist is an option and installed upon request.in'
        },
        {
            id: 9,
            question: 'Where Do I Go To Demo An Oven?',
            answer: 'We currently have 11 test kitchens in the US, including one at our headquarters in Beltsville, MD, one in Mexico, and one in Dubai. Visit the homepage to find a test kitchen near you.'
        },
        {
            id: 10,
            question: 'What size are your ovens?',
            answer: 'We do our best to provide an oven to accommodate all of our customers needs. Our ovens range in size from our smallest NP70 to our large metal square ovens. You can speak with a qualified business developer to help choose the best oven for your space and needs. You may also want to refer to the Resources page on our website for the latest spec sheets/CAD files and Revit files.'
        },
        {
            id: 11,
            question: 'Can I use wood in a gas oven ?',
            answer: 'All our static ovens are born as a wood oven by default. By adding the gas burner and the control allows you to use the gas as another heat source or the only heat source. The rotator, on the other hand, has to be specifically built as wood and gas. The gas-only unit is not designed with the intent to use wood.'
        },
        {
            id: 12,
            question: 'Who services your oven?',
            answer: 'Professionally trained technicians'
        },
        {
            id: 13,
            question: 'What happens if my burner goes down?',
            answer: 'Follow the manual information for troubleshooting. Call manufacturing factory for tech support on 888.239.0575'
        },
    ]
    const [selected, setSelected] = useState('+')
    const changeToggle = (i) => {
        if (selected === i) {
            setSelected(null);
        } else {
            setSelected(i);
        }
    }
    return (
        <>
            <Header/>
            <Container fluid className={FaqStyle.faq_banner}>
                <h1>FAQs</h1>
            </Container>
            <Container fluid className={FaqStyle.main}>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={7}>
                        <div className='mt-5 mb-5'>
                            <h2>Frequently Asked Questions (FAQs)</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy.</p>
                            <Accordion className='mt-4'>
                                {faqData.map((item, i) => {
                                    return (
                                        <Card className={`${FaqStyle.border} mt-2`} key={item.id}>
                                            <Accordion.Toggle as={Card.Header} eventKey={item.id}
                                                              className={`${FaqStyle.title}`}
                                                              onClick={() => changeToggle(i)}>
                                                <p className='d-flex'><span
                                                    className='mr-2'>{selected === i ? "-" : "+"}</span>
                                                    {item.question}
                                                </p>
                                            </Accordion.Toggle>

                                            <Accordion.Collapse eventKey={item.id}>
                                                <Card.Body className={FaqStyle.answer}>{item.answer}</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    )
                                })}
                            </Accordion>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className={`${BlogSidebarStyle.searchbox} mt-5`}>
                            <input type="search" name="blogsearch" placeholder="Search"/>
                            <button><i className="bx bx-search"></i></button>
                        </div>
                        <div className={`${BlogSidebarStyle.card_item} card mb-3 p-3`}>
                            <div className={FaqStyle.phone_number}>
                                <i className="fa fa-phone-square"></i>
                                <span>+ (123) 456 - 7890</span>
                            </div>
                        </div>
                        <div className={`${BlogSidebarStyle.card_item} card mb-3 p-3`}>
                            <div className={FaqStyle.icon_list}>
                                <i className="fa fa-facebook-f fa-1x"></i>
                                <i className="fa fa-twitter"></i>
                                <i className="fa fa-instagram"></i>
                                <i className="fa fa-youtube"></i>
                                <i className="fa fa-skype"></i>
                                <i className="fa fa-github-alt"></i>
                                <i className="fa fa-github-square"></i>
                            </div>
                        </div>
                        <div className={`${BlogSidebarStyle.card_item} card mb-3 p-3`}>
                            <div>
                                <img
                                    src="https://ultima.qodeinteractive.com/wp-content/uploads/2016/10/faq-sidebar.jpg"
                                    width='600'/>
                            </div>
                        </div>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <Container fluid className={MainHomePageStyle.quoteform_outer}>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <GetAQuote/>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}
export default Faq