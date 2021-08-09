import React, {useEffect, useState} from 'react';
import './step1.module.css';
import {Dropdown, DropdownButton} from 'react-bootstrap'
import {FormGroup, Label, Input} from 'reactstrap';
import StepStyle from "./Step3.module.css";
import axios from "axios";
import {API_HOST} from "../../env";
import {bindActionCreators} from "redux";
import * as productActions from "../../actions/product";
import {connect} from "react-redux";
import {withRouter} from "next/router";

const Step1 = (props) => {
    const images = props.choosefile
    const data = `${images}`
    const {tiles, color, facade,grout} = props;
    const [tilesShape, settilesShape] = useState([])
    const [facades, setFacades] = useState([])
    const [tilesColor, setTilesColor] = useState([])
    const [grouts, setGrouts] = useState([])
    const [imageUrl, setImageUrl] = useState([])
    const [facadeUrl, setFacadeUrl] = useState([])
    const [groutUrl, setGroutUrl] = useState([])

    console.log('groutUrl', groutUrl)

    useEffect(() => {
        props.productActions.getAllProduct()
    },[])

    useEffect(() => {
console.log(props.product,'hhyhhhghh')
    },[props.product])

    useEffect(() => {
        axios.get(`${API_HOST}Tiles/gettitleShape`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status) {
                settilesShape(res.data)
            }
        }).catch((error) => {

        })
    }, [])

    useEffect(() => {
        axios.get(`${API_HOST}Tiles/getTileImage?tileColour=${color}&tileShape=${tiles}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status) {
                setImageUrl(res.data)
            }
        }).catch((error) => {

        })
    }, [tiles,color])

    useEffect(() => {
        axios.get(`${API_HOST}facade/getFacadeByName?facadeName=${facade}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status) {
                setFacadeUrl(res.data)
            }
        }).catch((error) => {

        })
    }, [facade])

    useEffect(() => {
        axios.get(`${API_HOST}grout/getGroutByColor?color=${grout}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status) {
                setGroutUrl(res.data)
            }
        }).catch((error) => {

        })
    }, [grout])


    useEffect(() => {
        axios.get(`${API_HOST}facade/getAllFacade`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status) {
                setFacades(res.data)
            }
        }).catch((error) => {

        })
    }, [])

    useEffect(() => {
        axios.get(`${API_HOST}Tiles/getAllColors`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status) {
                setTilesColor(res.data)
            }
        }).catch((error) => {

        })
    }, [])

    useEffect(() => {
        axios.get(`${API_HOST}grout/getAllGrout`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status) {
                setGrouts(res.data)
            }
        }).catch((error) => {

        })
    }, [])

    if (props.currentStep !== 1) {
        return null;
    }
    const productOption = [
        {
            id: 1,
            label: 'Rotator Brick Oven',
            value: 'Rotator Brick Oven'
        },
        {
            id: 2,
            label: 'Neapolitan Brick Oven',
            value: 'Neapolitan Brick Oven'
        },
        {
            id: 3,
            label: 'Electric Brick Oven',
            value: 'Electric Brick Oven'
        },
        {
            id: 4,
            label: 'Due Bocche Brick Oven',
            value: 'Due Bocche Brick Oven'
        },
        {
            id: 5,
            label: 'Enclosed Facade Brick Oven',
            value: 'Enclosed Facade Brick Oven'
        },
        {
            id: 6,
            label: 'MS Series Brick Oven',
            value: 'MS Series Brick Oven'
        },
        {
            id: 7,
            label: 'MarraForni Mixers',
            value: 'MarraForni Mixers'
        },
        {
            id: 8,
            label: 'Marraforni Prep Table',
            value: 'Marraforni Prep Table'
        },
        {
            id: 9,
            label: 'Marraforni Slicers',
            value: 'Marraforni Slicers'
        },
        {
            id: 10,
            label: 'Plug & Play Ventilation',
            value: 'Plug & Play Ventilation'
        }
    ]

    return (
        <>
            {/*<h1 className='text-center mt-3' style={{color: '#e31422'}}>*/}
            {/*    Visualize Your Oven!*/}
            {/*</h1>*/}
            <FormGroup>
                <div
                    className={`${StepStyle.main_btn_section} main`}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <DropdownButton
                        id="product"
                        title="Select Product"
                        name='product'
                        variant="secondary"
                        value={props.product}
                        onSelect={(e) => props.handleOnChange(e, 'product')}>
                        {productOption.map((item, id) => {
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
                    <DropdownButton
                        id="tiles"
                        title="Tile No"
                        name='tiles'
                        variant="secondary"
                        value={props.tiles}
                        onSelect={(e) => props.handleOnChange(e, 'tiles')}>
                        {(tilesShape && tilesShape.length) ? tilesShape.map((item, id) => {
                            return (
                                <Dropdown.Item
                                    eventKey={item}
                                    key={item}
                                >
                                    {item}
                                </Dropdown.Item>
                            );
                        }) : null}
                    </DropdownButton>
                    <DropdownButton
                        id="tiles"
                        title="Tiles"
                        name='tiles'
                        variant="secondary"
                        value={props.tiles}
                        onSelect={(e) => props.handleOnChange(e, 'tiles')}>
                        {(tilesShape && tilesShape.length) ? tilesShape.map((item, id) => {
                            return (
                                <Dropdown.Item
                                    eventKey={item}
                                    key={item}
                                >
                                    {item}
                                </Dropdown.Item>
                            );
                        }) : null}
                    </DropdownButton>
                    <DropdownButton
                        id="color"
                        title="Color"
                        name='color'
                        variant="secondary"
                        value={props.color}
                        onSelect={(e) => props.handleOnChange(e, 'color')}>
                        {(tilesColor && tilesColor.length) ? tilesColor.map((item, id) => {
                            return (
                                <Dropdown.Item
                                    eventKey={item.colorsName}
                                    key={item.id}
                                >
                                    {item.colorsName}
                                </Dropdown.Item>
                            );
                        }):null
                        }
                    </DropdownButton>
                    <DropdownButton
                        id="dropdown-basic-button"
                        title="Grout"
                        name='grout'
                        variant="secondary"
                        value={props.grout}
                        onSelect={(e) => props.handleOnChange(e, 'grout')}>
                        {(grouts && grouts.length) ? grouts.map((item, id) => {
                            return (
                                <Dropdown.Item
                                    eventKey={item.groutColor}
                                    key={item.id}
                                >
                                    {item.groutColor}
                                </Dropdown.Item>
                            );
                        }):null
                        }
                    </DropdownButton>
                    <DropdownButton
                        id="dropdown-basic-button"
                        title="Facade"
                        name='facade'
                        variant="secondary"
                        value={props.facade}
                        onSelect={(e) => props.handleOnChange(e, 'facade')}>
                        {(facades && facades.length) ? facades.map((item, id) => {
                            return (
                                <Dropdown.Item
                                    eventKey={item.facadeName}
                                    key={item.id}
                                >
                                    {item.facadeName}
                                </Dropdown.Item>
                            );
                        }):null
                        }
                    </DropdownButton>
                    <div className={`form-group col-md-3`}>
                        <Input
                            type='file'
                            name='choosefile'
                            id='choosefile'
                            // placeholder='Chose File'
                            // value={props.choosefile}
                            onChange={props.handleFile}
                        />
                    </div>
                </div>
                <div className={`${StepStyle.main_image} position-relative`}
                     style={{height: '40%', textAlign: 'center', paddingRight: '380px', marginTop: '-35px'}}>
                    {images &&
                    <img
                        className='oven-image-tile position-absolute'
                        src={data}
                        // height='110'
                        // width='200'
                        style={{
                            paddingTop: '111px',
                            zIndex: '100',
                            marginLeft: '100px',
                            height: '150px',
                            width: '150px'
                        }}

                    />
                    }

                    <img
                        className='oven-image-tile position-absolute'
                        // src={`https://marraforni.com/wp/wp-content/themes/ultima-child/assets/s3/make/${tiles}_${color}.png`}
                        src={imageUrl.tileImageUrl}
                        alt='Penny Red'
                        style={{zIndex: '2', width: '400px'}}
                    />
                    {/*{imageUrl ?*/}
                    {/*    <img*/}
                    {/*        className='oven-image-grout position-absolute'*/}
                    {/*        // src='https://marraforni.com/wp/wp-content/themes/ultima-child/assets/s3/make/Grout_Green.png'*/}
                    {/*        src={groutUrl.fileUrl}*/}
                    {/*        alt='Grout Red'*/}
                    {/*        style={{zIndex: '1', width: '395px'}}*/}
                    {/*    />:*/}
                        <img
                            className='oven-image-grout position-absolute'
                            src='https://marraforni.com/wp/wp-content/themes/ultima-child/assets/s3/make/Grout_Red.png'
                            alt='Grout Red'
                            style={{zIndex: '1', width: '400px'}}
                        />

                    <img
                        className='oven-image-facade position-absolute'
                        // src={`https://marraforni.com/wp/wp-content/themes/ultima-child/assets/s3/make/Facade_Black.png`}
                        src={facadeUrl.facadeFileUrl}
                        alt='Facade Black'
                        style={{width: '400px'}}
                    />
                </div>
            </FormGroup>
        </>
    );
};


const mapStateToProps = ({product}) => {
    return {product}
}

const mapDispatchToProps = dispatch => {
    return {
        productActions: bindActionCreators(productActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Step1))



