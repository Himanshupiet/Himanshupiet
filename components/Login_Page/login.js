import React, {useState} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import LoginStyle from './login.module.css'
import Header from "../header/header";
import axios from "axios";
import {API_HOST} from "../../env";
import Footer from "../footer/footer";
import headerStyle from "../header/header.module.css";


const Login = (props) => {
    const initialValues = {
        email: '',
        password: '',
        errors: {
            email: '',
            password: '',
        }
    };

    const [gformData, setGformData] = useState(initialValues);
    const [buttonIsDisable, setButtonIsDisable] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setGformData((preValues) => {
            return {...preValues, [name]: value}
        });
    }

    const chackFormValidate = () => {
        let formIsValid = true;
        let validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        let validPhoneRegex = RegExp(/^[(]{1}[0-9]{3}[)]{1}[ ]{1}[0-9]{3}[-]{1}[0-9]{4}$/);

        const {
            email,
            password,
            errors
        } = gformData;
        console.log(gformData.roles)
        if (email === '' || !validEmailRegex.test(email)) {
            formIsValid = false;
            errors.email = 'Please enter your valid email';
        } else {
            errors.email = '';
        }
        if (password === '') {
            formIsValid = false;
            errors.password = 'Please enter your password';
        } else {
            errors.password = '';
        }
        setGformData({...gformData, errors});
        return formIsValid;
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        setButtonIsDisable(true);

        if (chackFormValidate()) {
            const userData = JSON.stringify(gformData)
            console.log(gformData)
            axios.post(`${API_HOST}/api/auth/login`, userData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((res) => {
                if (res.status) {
                    // window.location.href = '/';
                    alert('Logged Successfully')
                } else {
                    // toast['error'](res.data.message)
                }
            }, (err) => {

            });
            setGformData(initialValues);
            setButtonIsDisable(false);
        }
        setButtonIsDisable(false);
    }

    return (
        <>
            <Header/>
            <section
                className={`${LoginStyle.section_outer} mt-5 pb-5`}>
                <Container fluid className={LoginStyle.section_container}>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8} className={`${LoginStyle.main_form} bg-white p-4`}>
                            <Row>
                                <Col md={6} className={`${LoginStyle.main} main p-3`}>
                                    <div className='pt-3'>
                                        <i className="fa fa-check"></i>
                                        <h4>Quick and free sign-up</h4>
                                        <h5>Enter your email address to create an account</h5>
                                    </div>
                                    <div className='pt-2'>
                                        <i className="fa fa-check"></i>
                                        <h4>Cross-platform solution</h4>
                                        <h5>
                                            Preview your newsletters on any device before sending them out
                                        </h5>
                                    </div>
                                </Col>
                                <Col md={6} className="p-4">
                                    <h2 className="text-center">Login Page</h2>
                                    <form className={`${LoginStyle.form_style} mt-3`}>
                                        <div className='form-group mb-0'>
                                            <label htmlFor="exampleFormControlInput1">Email</label>
                                            <input
                                                type='email'
                                                name='email'
                                                id='g_email'
                                                value={gformData.email}
                                                placeholder='Email'
                                                onChange={handleChange}
                                                className={gformData.errors.email.length > 0 ? LoginStyle.input_error : ''}
                                            />
                                            {gformData.errors.email.length > 0 && <span>{gformData.errors.email}</span>}
                                        </div>
                                        <div className='form-group mb-0'>
                                            <label htmlFor="examplePassword">Password</label>
                                            <input
                                                type='password'
                                                name='password'
                                                id='g_lname'
                                                value={gformData.password}
                                                placeholder='Password'
                                                onChange={handleChange}
                                                className={gformData.errors.password.length > 0 ? LoginStyle.input_error : ''}
                                            />
                                            {gformData.errors.password.length > 0 &&
                                            <span>{gformData.errors.password}</span>}
                                        </div>
                                        <button
                                            title='Submit'
                                            className={`${LoginStyle.btn} btn form-control`}
                                            disabled={buttonIsDisable}
                                            onClick={handleSubmit}
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                </Container>
            </section>
            <Footer/>
        </>
    )
}


export default Login