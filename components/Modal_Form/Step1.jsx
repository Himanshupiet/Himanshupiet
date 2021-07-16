/** @format */
//
// import React from 'react';
// import {Col, Container, Row} from 'react-bootstrap'
// import {FormGroup, Label, Input} from 'reactstrap';
// import StepStyle from "./step1.module.css";
// import CountryList from "../common/GetAQuote/CountryList";
//
// const Step1 = (props) => {
//     console.log(props);
//     const {tiles, legs, color, facade} = props;
//     if (props.currentStep !== 1) {
//         return null;
//     }
//     const colors = [
//         {
//             id: 1,
//             label: 'Red',
//             value: 'Red'
//         },
//         {
//             id: 2,
//             label: 'Blue',
//             value: 'Blue'
//         },
//         {
//             id: 3,
//             label: 'White',
//             value: 'White'
//         },
//         {
//             id: 4,
//             label: 'Brown',
//             value: 'Brown'
//         },
//         {
//             id: 5,
//             label: 'Black',
//             value: 'Black'
//         }
//     ];
//     const facadeOption = [
//         {
//             id: 1,
//             label: 'Black - Standard for RT Models',
//             value: 'Black'
//         },
//         {
//             id: 2,
//             label: 'Stainless Steel',
//             value: 'Stainless'
//         }
//     ];
//     const tilesOption = [
//         {
//             id: 1,
//             label: 'Square',
//             value: 'Square'
//         },
//         {
//             id: 2,
//             label: 'Penny Round',
//             value: 'Penny'
//         },
//         {
//             id: 3,
//             label: 'Broken',
//             value: 'Broken'
//         },
//         {
//             id: 4,
//             label: 'Custom Tiles',
//             value: 'Custom'
//         }
//     ];
//     const legsOption = [
//         {
//             id: 1,
//             label: 'Black',
//             value: 'Black'
//         },
//         {
//             id: 2,
//             label: 'Stainless Steel',
//             value: 'Stainless Steel'
//         }
//     ];
//
//     return (
//         <>
//             <Container>
//                 <Row>
//                     <Col lg={12} className='m-auto'>
//                         <h2 className='text-center pt-3' style={{color: '#e31422'}}>
//                             Visualize Your Oven!
//                         </h2>
//                         <FormGroup>
//                             <div
//                                 className='main'
//                                 style={{
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     justifyContent: 'center'
//                                 }}>
//                                 <div className={`${StepStyle.section_inner} form-row`}>
//                                     <div className={`${StepStyle.select_wrapper} col-md-12`}>
//                                         <select
//                                             name='tiles'
//                                             id='tiles'
//                                             value={props.tiles}
//                                             onChange={props.handleChange}
//                                         >
//                                             {/*<option value='' selected disabled hidden>*/}
//                                             {/*    Tiles*/}
//                                             {/*</option>*/}
//                                             {tilesOption.map((item, id) => {
//                                                 return (
//                                                     <option value={item.value} key={id}>
//                                                         {item.value}
//                                                     </option>
//                                                 );
//                                             })}
//                                         </select>
//                                     </div>
//                                 </div>
//                                 <div className={`${StepStyle.section_inner} form-row`}>
//                                     <div className={`${StepStyle.select_wrapper} col-md-12`}>
//                                         <select
//                                             name='color'
//                                             id='color'
//                                             value={props.color}
//                                             onChange={props.handleChange}
//                                         >
//                                             {/*<option value='' selected disabled hidden>*/}
//                                             {/*    Colors*/}
//                                             {/*</option>*/}
//                                             {colors.map((item, id) => {
//                                                 return (
//                                                     <option value={item.value} key={id}>
//                                                         {item.value}
//                                                     </option>
//                                                 );
//                                             })}
//                                         </select>
//                                     </div>
//                                 </div>
//                                 <div className={`${StepStyle.section_inner} form-row`}>
//                                     <div className={`${StepStyle.select_wrapper} col-md-12`}>
//                                         <select
//                                             name='facade'
//                                             id='facade'
//                                             value={props.facade}
//                                             onChange={props.handleChange}
//                                         >
//                                             {/*<option value='' selected disabled hidden>*/}
//                                             {/*    Facade*/}
//                                             {/*</option>*/}
//                                             {facadeOption.map((item, id) => {
//                                                 return (
//                                                     <option value={item.value} key={id}>
//                                                         {item.value}
//                                                     </option>
//                                                 );
//                                             })}
//                                         </select>
//                                     </div>
//                                 </div>
//                                 <div className={`${StepStyle.section_inner} form-row`}>
//                                     <div className={`${StepStyle.select_wrapper} col-md-12`}>
//                                         <select
//                                             name='legs'
//                                             id='legs'
//                                             value={props.legs}
//                                             onChange={props.handleChange}
//                                         >
//                                             {legsOption.map((item, id) => {
//                                                 return (
//                                                     <option value={item.value} key={id}>
//                                                         {item.value}
//                                                     </option>
//                                                 );
//                                             })}
//                                         </select>
//                                     </div>
//                                 </div>
//                             </div>
//                         </FormGroup>
//                     </Col>
//                 </Row>
//             </Container>
//             <Container>
//                 <Row>
//                     <Col lg={5} className='mx-auto'>
//                         <div style={{width: '700px',marginTop:'-61px'}}>
//                             <img
//                                 className='oven-image-tile position-absolute'
//                                 src={`https://marraforni.com/wp/wp-content/themes/ultima-child/assets/s3/make/${tiles}_${color}.png`}
//                                 alt='Penny Red'
//                                 style={{zIndex: '2', width: '550px'}}
//                             />
//                             <img
//                                 className='oven-image-grout position-absolute'
//                                 src='https://marraforni.com/wp/wp-content/themes/ultima-child/assets/s3/make/Grout_Red.png'
//                                 alt='Grout Red'
//                                 style={{zIndex: '1', width: '550px'}}
//                             />
//                             <img
//                                 className='oven-image-facade position-absolute'
//                                 src={`https://marraforni.com/wp/wp-content/themes/ultima-child/assets/s3/make/Facade_${facade}.png`}
//                                 alt='Facade Black'
//                                 style={{width: '550px'}}
//                             />
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     );
// };
import React from 'react';
import './step1.module.css';
import {Dropdown,DropdownButton} from 'react-bootstrap'
import {FormGroup, Label, Input} from 'reactstrap';
import StepStyle from "./Step3.module.css";
// import {image} from "html2canvas/dist/types/css/types/image";

const Step1 = (props) => {
    const images = props.choosefile
    const data = `${images}`

    console.log('data img ', data)
    console.log('img ',images)
    const {tiles, legs, color, facade} = props;
    if (props.currentStep !== 1) {
        return null;
    }
    const getRoles = [
        {
            id: 0,
            roleName: 'Content Manager'
        },
        {
            id: 1,
            roleName: 'Sales Manager'
        },
        {
            id: 2,
            roleName: 'Sales Representative'
        },
        {
            id: 3,
            roleName: 'Admin'
        }
    ];
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
            <h1 className='text-center mt-3' style={{color: '#e31422'}}>
                Visualize Your Oven!
            </h1>
            <FormGroup>
                <div
                    className='main mt-3'
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        // justifyContent: 'center'
                    }}>
                    <div className={`${StepStyle.select_wrapper} select-dropdown`}>
                        {/*<div className={`${StepStyle.select_wrapper}`}>*/}
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
                        {/*</div>*/}
                    </div>
                    <div className={`${StepStyle.select_wrapper} select-dropdown`}>
                        <select
                            name='tiles'
                            id='tiles'
                            value={props.tiles}
                            onChange={props.handleChange}>

                            <option value="" disabled selected>Tiles</option>
                            {tilesOption.map((item, id) => {
                                return (
                                    <option value={item.value} key={id}>
                                        {item.value}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className={`${StepStyle.select_wrapper} select-dropdown`}>
                        <select
                            name='color'
                            id='color'
                            value={props.color}
                            onChange={props.handleChange}>
                            {/*<option default>Colors</option>*/}
                            <option selected="selected">Colors</option>
                            {colors.map((item, id) => {
                                return (
                                    <option value={item.value} key={id}>
                                        {item.value}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    {/*<div className={`${StepStyle.select_wrapper} select-dropdown`}>*/}
                    {/*    <select*/}
                    {/*        name='facade'*/}
                    {/*        id='facade'*/}
                    {/*        value={props.facade}*/}
                    {/*        onChange={props.handleChange}>*/}
                    {/*        <option default>Colors</option>*/}
                    {/*        {facadeOption.map((item, id) => {*/}
                    {/*            return (*/}
                    {/*                <option value={item.value} key={id}>*/}
                    {/*                    {item.value}*/}
                    {/*                </option>*/}
                    {/*            );*/}
                    {/*        })}*/}
                    {/*    </select>*/}
                    {/*</div>*/}
                    <DropdownButton
                        id="dropdown-basic-button"
                        title="Dropdown button"
                        name='facade'
                        value={props.facade}
                        onSelect={(e) => props.handleOnChange(e, 'facade')}>
                        {facadeOption.map((item, id) => {
                            return (
                                <Dropdown.Item
                                    eventKey={item.value}
                                    key={item.id}
                                >
                                    {item.label}
                                </Dropdown.Item>
                            );
                          })
                        }
                    </DropdownButton>
                    <div className={`${StepStyle.select_wrapper} select-dropdown`}>
                        <select
                            name='legs'
                            id='legs'
                            value={props.legs}
                            onChange={props.handleChange}>
                            <option value='' selected disabled hidden>
                                Legs
                            </option>
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
                <div className={`form-group col-md-6`}>
                    <Input
                        type='file'
                        name='choosefile'
                        id='choosefile'
                        // placeholder='Chose File'
                        // value={props.choosefile}
                        onChange={props.handleFile}
                    />
                </div>
                <div className='position-relative' style={{height:'40%',textAlign:'center',paddingRight:'380px',marginTop:'-35px'}}>
                    {images &&
                    <img
                        className='oven-image-tile position-absolute'
                        src={data}
                        height='110'
                        width='200'
                        style={{paddingTop:'111px',zIndex:'100',marginLeft:'100px'}}

                    />
                    }

                    <img
                        className='oven-image-tile position-absolute'
                        src={`https://marraforni.com/wp/wp-content/themes/ultima-child/assets/s3/make/${tiles}_${color}.png`}
                        alt='Penny Red'
                        style={{zIndex: '2', width: '395px'}}
                    />
                    <img
                        className='oven-image-grout position-absolute'
                        src='https://marraforni.com/wp/wp-content/themes/ultima-child/assets/s3/make/Grout_Red.png'
                        alt='Grout Red'
                        style={{zIndex: '1', width: '395px'}}
                    />
                    <img
                        className='oven-image-facade position-absolute'
                        src={`https://marraforni.com/wp/wp-content/themes/ultima-child/assets/s3/make/Facade_${facade}.png`}
                        alt='Facade Black'
                        style={{width: '395px'}}
                    />
                </div>
            </FormGroup>
        </>
    );
};

export default Step1;



