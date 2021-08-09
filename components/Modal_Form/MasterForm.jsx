import React, {Component} from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import {
    Button,
} from 'reactstrap';

import Step1 from './Step1';
import Step2 from './Step2';
// import Step3 from './Step3';
import MultiStepProgressBar from './MultiStepProgressBar';
import Router from 'next/router';
import axios from "axios";
import {API_HOST} from "../../env";

class MasterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            tiles: 'Penny',
            color: 'Blue',
            facade: 'Black',
            grout:'',
            legs: '',
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
            message: ''
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
        console.log(event)
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
            legs,
            grout,
            fname,
            lname,
            email,
            cemail,
            pnumber,
            staddress,
            city,
            state,
            country,
            product,
            choosefile,
            message
        } = this.state


        let ovenData = {
            city: "Jaipur",
            colorsName: "Red",
            country: "India",
            email: "devtest@gmail.com",
            facadeColor: "Blue",
            facadeColorImageUrl: "https://jdev.decipherzone.com/mfback/blog-image/Penny_Blue.png",
            firstName: "dev",
            groutColor: "Black",
            groutColorImageUrl: "https://jdev.decipherzone.com/mfback/blog-image/Penny_Blue.png",
            lastName: "Dev2",
            legsId: 1,
            logoImaeUrl: "https://jdev.decipherzone.com/mfback/blog-image/Penny_Blue.png",
            message: "Hii Dev",
            phoneNumber: "8852698745",
            productCategory: "Oven",
            state: "Rajasthan",
            streetAddress: "New Colony",
            tilesColor: "Yellow",
            tilesColorImageUrl: "https://jdev.decipherzone.com/mfback/blog-image/Penny_Blue.png",
            tilesNumber: "25669"
        }

        axios({
            url: `${API_HOST}oven/createOven`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: ovenData,
            method: 'post'
        })
          .then(response =>
            console.log(response, response.status, 'sfdgdg')
          )
          .catch(error => {
              return error
          })
        // Router.push('/thankyou');
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
                                    legs={this.state.legs}
                                    color={this.state.color}
                                    tiles={this.state.tiles}
                                    facade={this.state.facade}
                                    grout={this.state.grout}
                                    product={this.state.product}
                                    choosefile={this.state.choosefile}
                                    handleOnChange={this.handleOnChange}
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
