import React, {Component} from 'react';
import MasterFormStuyle from './MasterForm.module.css'
import {Col, Container, Row} from 'react-bootstrap'
import {
    Button,
} from 'reactstrap';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import MultiStepProgressBar from './MultiStepProgressBar';

class MasterForm extends Component {
    constructor(props) {
        super(props);

        // Set the intiial input values
        this.state = {
            currentStep: 1,
            tiles: 'Penny',
            color: 'Blue',
            facade: 'Black',
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
        };

        // Bind the submission to handleChange()
        this.handleChange = this.handleChange.bind(this);

        // Bind new functions for next and previous
        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
    }

    // The "next" and "previous" button functions
    get previousButton() {
        let currentStep = this.state.currentStep;

        // If the current step is not 1, then render the "previous" button
        if (currentStep !== 1) {
            return (
                <Button className='mf_btn' onClick={this._prev}>
                    Previous
                </Button>
            );
        }

        // ...else return nothing
        return null;
    }

    get nextButton() {
        let currentStep = this.state.currentStep;
        // If the current step is not 3, then render the "next" button
        if (currentStep < 3) {
            return (
                <Button className='mf_btn' onClick={this._next}>
                    Next
                </Button>
            );
        }
        // ...else render nothing
        return null;
    }

    // Test current step with ternary

    get submitButton() {
        let currentStep = this.state.currentStep;

        // If the current step is the last step, then render the "submit" button
        if (currentStep > 2) {
            return <Button color='primary float-right'>Submit</Button>;
        }
        // ...else render nothing
        return null;
    }

    // Use the submitted data to set the state
    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    // Trigger an alert on form submission
    handleSubmit = (event) => {
        event.preventDefault();
        const {
            tiles,
            color,
            facade,
            legs,
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
            // password
        } = this.state;
        console.log(`Your registration detail: \n 
      tiles: ${tiles}\n
      facade: ${facade}\n
      legs: ${legs}\n
      color: ${color} \n 
      FirstName: ${fname} \n
      LastName: ${lname}\n
      Email: ${email}\n
      ConfirmEmail: ${cemail}\n
      PhoneNumber: ${pnumber}\n
      StreetAddress: ${staddress}\n
      City: ${city}\n
      State/Provience: ${state}\n
      Country: ${country}\n
      Product: ${product}\n
      File: ${choosefile}\n
      Message: ${message}`);
    };

    // _next and _previous functions will be called on button click
    _next() {
        let currentStep = this.state.currentStep;

        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        this.setState({
            currentStep: currentStep
        });
    }

    _prev() {
        let currentStep = this.state.currentStep;
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        this.setState({
            currentStep: currentStep
        });
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col lg={12} className='m-auto'>
                            <form onSubmit={this.handleSubmit}>
                                <div style={{backgroundColor: 'rgba( 246, 247, 252, 1.00 )'}}>
                                    <div>
                                        <header>
                                            <MultiStepProgressBar currentStep={this.state.currentStep}/>
                                        </header>
                                        <div>
                                            <Step1
                                                currentStep={this.state.currentStep}
                                                handleChange={this.handleChange}
                                                legs={this.state.legs}
                                                color={this.state.color}
                                                tiles={this.state.tiles}
                                                facade={this.state.facade}
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
                                                country={this.state.country}
                                            />
                                            <Step3
                                                currentStep={this.state.currentStep}
                                                handleChange={this.handleChange}
                                                product={this.state.product}
                                                choosefile={this.state.choosefile}
                                                message={this.state.message}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} className='m-auto'>
                            <div>
                                {this.previousButton}
                                {this.nextButton}
                                {this.submitButton}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default MasterForm;
