import React from 'react';
import {Col, Container, Row} from 'react-bootstrap'


const FormPage = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg={6} style={{backgroundColor: '#e31422'}}>
                        <div className="pt-5 pb-5">
                            <h3 className="pl-4 text-white">Drop Us a Line</h3>
                            <p className="pl-4 text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                                mollitia
                            </p>
                            <form className="p-4">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword4"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="inputPassword4"
                                            placeholder="Confirm Email"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputAddress"
                                        placeholder="Phone Number"
                                    />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder="Street Address"
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword4"
                                            placeholder="City"
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control" id="inputEmail4"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputAddress"
                                        placeholder="1234 Main St"
                                    />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control" id="inputEmail4"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="textarea"
                                        className="form-control"
                                        id="inputAddress"
                                        placeholder="Message"
                                    />
                                </div>
                                <button type="submit" className="mf_btn">Submit</button>
                            </form>
                        </div>
                    </Col>
                    <Col lg={6} className='p-0'>
                        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/form_banner.jpg`} style={{height:'100%'}}/>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default FormPage