/** @format */

import React from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import {FormGroup, Label, Input} from 'reactstrap';
import StepStyle from "./step1.module.css";
import CountryList from "../common/GetAQuote/CountryList";

const Step1 = (props) => {
    console.log(props);
    const {tiles, legs, color, facade} = props;
    if (props.currentStep !== 1) {
        return null;
    }
    const colors = [
        {
            id: 1,
            label: 'Red',
            value: 'Red'
        },
        {
            id: 2,
            label: 'Blue',
            value: 'Blue'
        },
        {
            id: 3,
            label: 'White',
            value: 'White'
        },
        {
            id: 4,
            label: 'Brown',
            value: 'Brown'
        },
        {
            id: 5,
            label: 'Black',
            value: 'Black'
        }
    ];
    const facadeOption = [
        {
            id: 1,
            label: 'Black - Standard for RT Models',
            value: 'Black'
        },
        {
            id: 2,
            label: 'Stainless Steel',
            value: 'Stainless'
        }
    ];
    const tilesOption = [
        {
            id: 1,
            label: 'Square',
            value: 'Square'
        },
        {
            id: 2,
            label: 'Penny Round',
            value: 'Penny'
        },
        {
            id: 3,
            label: 'Broken',
            value: 'Broken'
        },
        {
            id: 4,
            label: 'Custom Tiles',
            value: 'Custom'
        }
    ];
    const legsOption = [
        {
            id: 1,
            label: 'Black',
            value: 'Black'
        },
        {
            id: 2,
            label: 'Stainless Steel',
            value: 'Stainless Steel'
        }
    ];

    return (
        <>
            <Container>
                <Row>
                    <Col lg={12} className='m-auto'>
                        <h2 className='text-center pt-3' style={{color: '#e31422'}}>
                            Visualize Your Oven!
                        </h2>
                        <FormGroup>
                            <div
                                className='main'
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <div className={`${StepStyle.section_inner} form-row`}>
                                    <div className={`${StepStyle.select_wrapper} col-md-12`}>
                                        <select
                                            name='tiles'
                                            id='tiles'
                                            value={props.tiles}
                                            onChange={props.handleChange}
                                        >
                                            {/*<option value='' selected disabled hidden>*/}
                                            {/*    Tiles*/}
                                            {/*</option>*/}
                                            {tilesOption.map((item, id) => {
                                                return (
                                                    <option value={item.value} key={id}>
                                                        {item.value}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className={`${StepStyle.section_inner} form-row`}>
                                    <div className={`${StepStyle.select_wrapper} col-md-12`}>
                                        <select
                                            name='color'
                                            id='color'
                                            value={props.color}
                                            onChange={props.handleChange}
                                        >
                                            {/*<option value='' selected disabled hidden>*/}
                                            {/*    Colors*/}
                                            {/*</option>*/}
                                            {colors.map((item, id) => {
                                                return (
                                                    <option value={item.value} key={id}>
                                                        {item.value}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className={`${StepStyle.section_inner} form-row`}>
                                    <div className={`${StepStyle.select_wrapper} col-md-12`}>
                                        <select
                                            name='facade'
                                            id='facade'
                                            value={props.facade}
                                            onChange={props.handleChange}
                                        >
                                            {/*<option value='' selected disabled hidden>*/}
                                            {/*    Facade*/}
                                            {/*</option>*/}
                                            {facadeOption.map((item, id) => {
                                                return (
                                                    <option value={item.value} key={id}>
                                                        {item.value}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className={`${StepStyle.section_inner} form-row`}>
                                    <div className={`${StepStyle.select_wrapper} col-md-12`}>
                                        <select
                                            name='legs'
                                            id='legs'
                                            value={props.legs}
                                            onChange={props.handleChange}
                                        >
                                            {legsOption.map((item, id) => {
                                                return (
                                                    <option value={item.value} key={id}>
                                                        {item.value}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </FormGroup>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={5} className='mx-auto'>
                        <div style={{width: '700px',marginTop:'-61px'}}>
                            <img
                                className='oven-image-tile position-absolute'
                                src={`https://marraforni.com/wp/wp-content/themes/ultima-child/assets/s3/make/${tiles}_${color}.png`}
                                alt='Penny Red'
                                style={{zIndex: '2', width: '550px'}}
                            />
                            <img
                                className='oven-image-grout position-absolute'
                                src='https://marraforni.com/wp/wp-content/themes/ultima-child/assets/s3/make/Grout_Red.png'
                                alt='Grout Red'
                                style={{zIndex: '1', width: '550px'}}
                            />
                            <img
                                className='oven-image-facade position-absolute'
                                src={`https://marraforni.com/wp/wp-content/themes/ultima-child/assets/s3/make/Facade_${facade}.png`}
                                alt='Facade Black'
                                style={{width: '550px'}}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Step1;
