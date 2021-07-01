/** @format */

import React from 'react';
import {FormGroup, Label, Input} from 'reactstrap';
import {Modal} from "react-bootstrap";
import headerStyle from '../header/header.module.css'
import {Col, Container, Row} from 'react-bootstrap'
import StepStyle from "./Step3.module.css";
import CountryList from "../common/GetAQuote/CountryList";

const Step2 = (props) => {
    if (props.currentStep !== 2) {
        return null;
    }

    return (
        <>
            <Container>
                <Row>
                    <Col lg={10} className='m-auto'>
                        <h4 className='pt-4 text-center'>Step 2</h4>
                        <FormGroup>
                            <div className="form-row">
                                <div className={`form-group col-md-6`}>
                                    <input
                                        type='text'
                                        name='fname'
                                        id='fname'
                                        placeholder='First Name'
                                        value={props.fname}
                                        onChange={props.handleChange}
                                    />
                                </div>
                                <div className={`form-group col-md-6`}>
                                    <input
                                        type='text'
                                        name='lname'
                                        id='lname'
                                        placeholder='Last Name'
                                        value={props.lname}
                                        onChange={props.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className={`form-group col-md-6`}>
                                    <input
                                        type='email'
                                        name='email'
                                        id='email'
                                        placeholder='Email'
                                        value={props.email}
                                        onChange={props.handleChange}
                                    />
                                </div>
                                <div className={`form-group col-md-6`}>
                                    <input
                                        type='email'
                                        name='cemail'
                                        id='cemail'
                                        placeholder='Confirm Email'
                                        value={props.cemail} // Prop: The username input data
                                        onChange={props.handleChange} // Prop: Puts data into the state
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className={`form-group col-md-6`}>
                                    <input
                                        type='input'
                                        name='pnumber'
                                        id='pnumber'
                                        placeholder='Phone Number'
                                        value={props.pnumber}
                                        onChange={props.handleChange}
                                    />
                                </div>
                                <div className={`form-group col-md-6`}>
                                    <input
                                        type='text'
                                        name='staddress'
                                        id='staddress'
                                        placeholder='Street Address'
                                        value={props.staddress}
                                        onChange={props.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className={`${StepStyle.select_wrapper} col-md-6`}>
                                    <select
                                        name='country'
                                        id='country'
                                        value={props.country}
                                        onChange={props.handleChange}
                                    >
                                        <option value=''>Select Country</option>
                                        {CountryList.map((country, index) => {
                                            return <option value={country}
                                                           key={index}>{country}</option>
                                        })}
                                    </select>
                                </div>
                                <div className={`form-group col-md-6`}>
                                    <input
                                        type='text'
                                        name='staddress'
                                        id='staddress'
                                        placeholder='Street Address'
                                        value={props.staddress}
                                        onChange={props.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className={`form-group col-md-6`}>
                                    <input
                                        type='text'
                                        name='city'
                                        id='city'
                                        placeholder='City'
                                        value={props.city}
                                        onChange={props.handleChange}
                                    />
                                </div>
                                <div className={`form-group col-md-6`}>
                                    <input
                                        type='text'
                                        name='state'
                                        id='state'
                                        placeholder='State/Provience'
                                        value={props.state}
                                        onChange={props.handleChange}
                                    />
                                </div>
                            </div>
                        </FormGroup>
                    </Col>
                </Row>
            </Container>


        </>
    )

};

export default Step2;
