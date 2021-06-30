/** @format */

import React from 'react';
import {FormGroup, Label, Input, Button} from 'reactstrap';
import {Modal} from "react-bootstrap";
import CountryList from "../common/GetAQuote/CountryList";
import StepStyle from './Step3.module.css'
import {Col, Container, Row} from 'react-bootstrap'

const Step3 = (props) => {
    if (props.currentStep !== 3) {
        return null;
    }

    const getProduct = [
        {
            id: 0,
            product: 'Product 1'
        },
        {
            id: 1,
            product: 'Product 2'
        },
        {
            id: 2,
            product: 'Product 3'
        },
        {
            id: 3,
            product: 'Product 4'
        }
    ];
    return (
        <>
            <Container>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10} className='m-auto'>
                        <h4 className='pt-4 text-center pb-3'>Step 3</h4>
                        <FormGroup>
                            <div className={`${StepStyle.section_inner} form-row`}>
                                <div className={`${StepStyle.select_wrapper} col-md-12`}>
                                    <select
                                        name='product'
                                        id='product'
                                        value={props.product}
                                        onChange={props.handleChange}
                                    >
                                        <option value=''>Select Product</option>
                                        <option value='Rotator Brick Oven'>Rotator Brick Oven
                                        </option>
                                        <option value='Neapolitan Brick Oven'>Neapolitan Brick Oven
                                        </option>
                                        <option value='Electric Brick Oven'>Electric Brick Oven
                                        </option>
                                        <option value='Due Bocche Brick Oven'>Due Bocche Brick Oven
                                        </option>
                                        <option value='Enclosed Facade Brick Oven'>Enclosed Facade
                                            Brick
                                            Oven
                                        </option>
                                        <option value='MS Series Brick Oven'>MS Series Brick Oven
                                        </option>
                                        <option value='MarraForni Mixers'>MarraForni Mixers</option>
                                        <option value='Marraforni Prep Table'>Marraforni Prep Table
                                        </option>
                                        <option value='Marraforni Slicers'>Marraforni Slicers
                                        </option>
                                        <option value='Plug & Play Ventilation'>Plug & Play
                                            Ventilation
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className={`${StepStyle.section_inner} form-row`}>
                                <div className={`${StepStyle.select_wrapper} col-md-12`}>
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
                            </div>
                            <Label for='fname'>Attach Your ScreenShot</Label>
                            <Input
                                type='file'
                                name='choosefile'
                                id='choosefile'
                                placeholder='Chose File'
                                value={props.choosefile}
                                onChange={props.handleChange}
                            />
                            <div className={`form-group`}>
                                <input
                                    type='textarea'
                                    name='message'
                                    id='message'
                                    placeholder='Message'
                                    value={props.message} // Prop: The username input data
                                    onChange={props.handleChange} // Prop: Puts data into the state
                                />
                            </div>
                        </FormGroup>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
        </>
    );
};

export default Step3;
