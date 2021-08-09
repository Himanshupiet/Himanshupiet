import React, {Component, useState} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {
    Button,
} from 'reactstrap'

import Step1 from './Step1'
import Step2 from './Step2'
import MultiStepProgressBar from './MultiStepProgressBar'
import Router from 'next/router'
import axios from 'axios'
import {API_HOST} from '../../env'

class MasterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            tiles: 'Penny',
            color: 'Blue',
            facade: 'Black',
            grout:'',
            fname: '',
            lname: '',
            email: '',
            cemail: '',
            pnumber: '',
            staddress: '',
            city: '',
            state: '',
            product: '',
            choosefile: '',
            message: '',
            tilesNo:'',
            imageUrl:{},
            facadeUrl:{}
        }
    }

    get previousButton () {
        let currentStep = this.state.currentStep
        if (currentStep !== 1) {
            return (
              <Button className='mf_btn ml-5' onClick={this._prev}>
                  Previous
              </Button>
            )
        }
        return null;
    }

    get nextButton () {
        let currentStep = this.state.currentStep;
        if (currentStep < 2) {
            return (
              <Button className='mf_btn' onClick={this._next} style={{marginTop:'500px',textAlign:'center',marginLeft:'48%'}}>
                  Next
              </Button>
            )
        }
        return null
    }

    get submitButton () {
        let currentStep = this.state.currentStep
        if (currentStep > 1) {
            return <Button className='mf_btn mr-5 float-right'>Submit</Button>
        }
        return null
    }

    handleChange= (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        });
    }

    handleOnChange = (value,name) => {
        this.setState({
            [name] : value
        })
    }

    fileUploaded = ev => {
        const reader = new FileReader()
        reader.readAsDataURL(ev.target.files[0])
        reader.onloadend = ev => {
            this.setState({ choosefile: reader.result })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {
            tiles,
            color,
            facade,
            tilesNo,
            grout,
            fname,
            lname,
            email,
            pnumber,
            staddress,
            city,
            state,
            country,
            product,
            choosefile,
            message,
            imageUrl,
            facadeUrl
        } = this.state

        let ovenData = {
            city: city,
            colorsName: color,
            country: country,
            email: email,
            facadeColor: facade,
            facadeColorImageUrl: facadeUrl.facadeFileUrl,
            firstName: fname,
            groutColor: grout,
            groutColorImageUrl: 'https://marraforni.com/wp/wp-content/themes/ultima-child/assets/s3/make/Grout_Red.png',
            lastName: lname,
            logoImaeUrl: "https://jdev.decipherzone.com/mfback/blog-image/Penny_Blue.png",
            message: message,
            phoneNumber: pnumber,
            productCategory: product,
            state: state,
            streetAddress:staddress,
            tilesColor:tiles,
            tilesColorImageUrl: imageUrl.tileImageUrl,
            tilesNumber: tilesNo
        }

        axios({
            url: `${API_HOST}oven/createOven`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: ovenData,
            method: 'post'
        })
          .then(response => {
                Router.push('/thankyou')
            }
          )
          .catch(error => {
              return error
          })
    };

    _next = () =>  {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        this.setState({
            currentStep: currentStep
        })
    }

    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    setImageUrl = (data) => {
      this.setState({
          imageUrl:data
      })
    }

    setFacadeUrl = (data) => {
        this.setState({
            facadeUrl:data
        })
    }
    render() {
        return (
          <>
              <Container>
                  <Row>
                      <Col lg={12}>
                          <form onSubmit={this.handleSubmit}>
                              <div>
                                  <MultiStepProgressBar currentStep={this.state.currentStep}/>
                              </div>
                              <div>
                                  <Step1
                                    currentStep={this.state.currentStep}
                                    handleChange={this.handleChange}
                                    handleFile={this.fileUploaded}
                                    color={this.state.color}
                                    tiles={this.state.tiles}
                                    facade={this.state.facade}
                                    grout={this.state.grout}
                                    product={this.state.product}
                                    choosefile={this.state.choosefile}
                                    tilesNo={this.state.tilesNo}
                                    handleOnChange={this.handleOnChange}
                                    imageUrl={this.state.imageUrl}
                                    facadeUrl={this.state.facadeUrl}
                                    setFacadeUrl={this.setFacadeUrl}
                                    setImageUrl={this.setImageUrl}
                                  />
                                  <Step2
                                    currentStep={this.state.currentStep}
                                    handleChange={this.handleChange}
                                    fname={this.state.fname}
                                    lname={this.state.lname}
                                    email={this.state.email}
                                    cemail={this.state.cemail}
                                    pnumber={this.state.pnumber}
                                    staddress={this.state.staddress}
                                    city={this.state.city}
                                    state={this.state.state}
                                    message={this.state.message}
                                    country={this.state.country}
                                  />
                              </div>
                              <div>
                                  {this.previousButton}
                                  {this.nextButton}
                                  {this.submitButton}
                              </div>
                          </form>
                      </Col>
                  </Row>
              </Container>
          </>
        )
    }
}

export default MasterForm
