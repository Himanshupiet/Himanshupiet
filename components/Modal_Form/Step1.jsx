import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Dropdown, DropdownButton } from 'react-bootstrap'
import { FormGroup, Input } from 'reactstrap'
import {API_HOST} from '../../env'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { bindActionCreators } from 'redux'
import * as productActions from '../../actions/product'

import './step1.module.css'
import StepStyle from './Step3.module.css'

const Step1 = (props) => {
    const images = props.choosefile
    const data = `${images}`
    const {tiles, color, facade,grout} = props

    const [tileShape, setTileShape] = useState([])
    const [tilesNo, setTilesNo] = useState([])
    const [facades, setFacades] = useState([])
    const [tilesColor, setTilesColor] = useState([])
    const [grouts, setGrouts] = useState([])
    console.log(grouts)

    const [productOption, setProductOption] = useState([])

    useEffect(() => {
        getTileShape()
        getAllFacade()
        getAllColors()
        getAllGrout()
        getTilesNumber()
        props.productActions.getAllProduct()
    }, [])

    useEffect(() => {
        if(props && props.product && props.product.product && props.product.product.length){
            let prod = props.product.product.find(v => v.name == 'Ovens')
            setProductOption(prod.categoryList)
        }
    }, [props.product])

    useEffect(() => {
        getFacadeByNameImgUrl()
    }, [facade])

    useEffect(() => {
        getTileImage()
    }, [tiles,color])

    const getTileShape = () => {
        axios.get(`${API_HOST}Tiles/gettitleShape`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status) {
                setTileShape(res.data)
            }
        }).catch((error) => {

        })
    }

    const getFacadeByNameImgUrl = () => {
        axios.get(`${API_HOST}facade/getFacadeByName?facadeName=${facade}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status) {
                props.setFacadeUrl(res.data)
            }
        }).catch((error) => {

        })
    }

    const getTileImage = () => {
        axios.get(`${API_HOST}Tiles/getTileImage?tileColour=${color}&tileShape=${tiles}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status) {
                props.setImageUrl(res.data)
            }
        }).catch((error) => {

        })
    }

    const getAllFacade = () => {
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
    }

    const getAllColors = () => {
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
    }

    const getAllGrout = () => {
        axios.get(`${API_HOST}grout/getAllGroutColors`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status) {
                setGrouts(res.data)
            }
        }).catch((error) => {

        })
    }

    const getTilesNumber = () => {
        axios.get(`${API_HOST}/Tiles/getTilesNumber`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status) {
                setTilesNo(res.data)
            }
        }).catch((error) => {

        })
    }

    if (props.currentStep !== 1) {
        return null;
    }

    return (
      <>
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
                      {(productOption && productOption.length) ? productOption.map((item, id) => {
                          return (
                            <Dropdown.Item
                              eventKey={item.categoryName}
                              key={item.id}
                            >
                                {item.categoryName}
                            </Dropdown.Item>
                          );
                      }) : null
                      }
                  </DropdownButton>
                  <DropdownButton
                    id="tilesNo"
                    title="Tile No"
                    name='tilesNo'
                    variant="secondary"
                    value={props.tilesNo}
                    onSelect={(e) => props.handleOnChange(e, 'tilesNo')}>
                      {(tilesNo && tilesNo.length) ? tilesNo.map((item, id) => {
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
                      {(tileShape && tileShape.length) ?
                        tileShape.map((item, index) => {
                          return (
                            <Dropdown.Item
                              eventKey={item}
                              key={index}
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
                              eventKey={item}
                              key={item}
                            >
                                {item}
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
                    src={props.imageUrl && props.imageUrl.tileImageUrl}
                    alt=''
                    style={{zIndex: '2', width: '400px'}}
                  />
                  <img
                    className='oven-image-grout position-absolute'
                    src='https://marraforni.com/wp/wp-content/themes/ultima-child/assets/s3/make/Grout_Red.png'
                    alt='Grout Red'
                    style={{zIndex: '1', width: '400px'}}
                  />

                  <img
                    className='oven-image-facade position-absolute'
                    src={props.facadeUrl.facadeFileUrl}
                    alt=''
                    style={{width: '400px'}}
                  />
              </div>
          </FormGroup>
      </>
    )
}

const mapStateToProps = ({product}) => {
    return {product}
}

const mapDispatchToProps = dispatch => {
    return {
        productActions: bindActionCreators(productActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Step1))


