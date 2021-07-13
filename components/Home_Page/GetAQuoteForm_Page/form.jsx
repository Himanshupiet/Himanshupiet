import React from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import FormStyle from './form.module.css'


const FormPage = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg={6} style={{backgroundColor: '#e31422'}}>
                        <div className="pt-5 pb-5">
                            <h2 className="pl-4 text-white">Drop Us a Line</h2>
                            <p className="pl-4 text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                                mollitia
                            </p>
                            <form className="p-4">
                                <div className="form-row">
                                    <div className="form-group col-md-6 mb-0">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className="form-group col-md-6 mb-0">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword4"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6 mb-0">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="form-group col-md-6 mb-0">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="inputPassword4"
                                            placeholder="Confirm Email"
                                        />
                                    </div>
                                </div>
                                <div className="form-group mb-0">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputAddress"
                                        placeholder="Street Address"
                                    />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6 mb-0">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder="City"
                                        />
                                    </div>
                                    <div className="form-group col-md-6 mb-0">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword4"
                                            placeholder="State/Province"
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6 mb-0">
                                        <input type="text" className="form-control" placeholder='Country' id="inputEmail4"/>
                                    </div>
                                </div>
                                <div className="form-grou mb-0">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputAddress"
                                        placeholder="Phone"
                                    />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6 mb-0">
                                        <input type="email" placeholder="How did you hear about us" className="form-control" id="inputEmail4"/>
                                    </div>
                                </div>
                                <div className="form-group mb-0">
                                    <input
                                        type="textarea"
                                        className="form-control"
                                        id="inputAddress"
                                        placeholder="Your message Here"
                                    />
                                </div>
                                <button type="submit" className="mf_btn">Submit</button>
                            </form>
                        </div>
                    </Col>
                    <Col lg={6} className='p-0'>
                        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/form_banner.jpg`} style={{height:'100%',width:'100%',objectFit:'cover',objectPosition:'left'}}/>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default FormPage