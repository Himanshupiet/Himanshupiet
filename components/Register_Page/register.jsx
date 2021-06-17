import React, {useState} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import RegistrationStyle from './register.module.css'
import Header from "../header/header";
import axios from "axios";
import {API_HOST} from "../../env";
import Footer from "../footer/footer";
import headerStyle from "../header/header.module.css";


const Register = (props) => {
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
        },
    ]
    const initialValues = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        role: '',
        errors: {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            role: '',
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
            firstName,
            lastName,
            password,
            // roles,
            errors
        } = gformData;
        console.log(gformData.roles)
        if (email === '' || !validEmailRegex.test(email)) {
            formIsValid = false;
            errors.email = 'Please enter your valid email';
        } else {
            errors.email = '';
        }
        if (firstName === '') {
            formIsValid = false;
            errors.firstName = 'Please enter your first name';
        } else {
            errors.firstName = '';
        }
        if (lastName === '') {
            formIsValid = false;
            errors.lastName = 'Please enter your last name';
        } else {
            errors.lastName = '';
        }
        if (password === '') {
            formIsValid = false;
            errors.password = 'Please enter your password';
        } else {
            errors.password = '';
        }
        // if (role === '') {
        //     formIsValid = false;
        //     errors.role = 'Please enter your Roles';
        // } else {
        //     errors.role = '';
        // }
        setGformData({...gformData, errors});
        return formIsValid;
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        setButtonIsDisable(true);

        if (chackFormValidate()) {
            const userData = JSON.stringify(gformData)
            console.log(gformData)
            axios.post(`${API_HOST}api/user/registration`, userData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((res) => {
                if (res.status) {
                    // window.location.href = '/';
                } else {
                    toast['error'](res.data.message)
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
            {/*<section*/}
            {/*    className={`${RegistrationStyle.section_outer} mt-5 pb-5`}>*/}
            {/*    <Container fluid className={RegistrationStyle.section_container}>*/}
            {/*        <Row>*/}
            {/*            <Col md={2}></Col>*/}
            {/*            <Col md={8} className={`${RegistrationStyle.main_form} bg-white p-4`}>*/}
            {/*                <Row>*/}
            {/*                    <Col md={6} className={`${RegistrationStyle.main} main`}>*/}
            {/*                        <div className='pt-3'>*/}
            {/*                            <i className="fa fa-check"></i>*/}
            {/*                            <h4>Quick and free sign-up</h4>*/}
            {/*                            <h5>Enter your email address to create an account</h5>*/}
            {/*                        </div>*/}
            {/*                        <div className='pt-2'>*/}
            {/*                            <i className="fa fa-check"></i>*/}
            {/*                            <h4>Cross-platform solution</h4>*/}
            {/*                            <h5>*/}
            {/*                                Preview your newsletters on any device before sending them out*/}
            {/*                            </h5>*/}
            {/*                        </div>*/}
            {/*                        <div className='pt-2'>*/}
            {/*                            <i className="fa fa-check"></i>*/}
            {/*                            <h4>Start sending emails</h4>*/}
            {/*                            <h5>Use our API or pick our pre-built templates</h5>*/}
            {/*                        </div>*/}
            {/*                    </Col>*/}
            {/*                    <Col md={6} className="p-4">*/}
            {/*                        <h2 className="text-center">Register Form</h2>*/}
            {/*                        <form className={`${RegistrationStyle.form_style} mt-3`}>*/}
            {/*                            <div class={`${RegistrationStyle.form_label} form-group mb-0`}>*/}
            {/*                                <label htmlFor="exampleFormControlInput1">Email address</label>*/}
            {/*                                <input*/}
            {/*                                    type='email'*/}
            {/*                                    name='email'*/}
            {/*                                    id='g_email'*/}
            {/*                                    value={gformData.email}*/}
            {/*                                    placeholder='Email'*/}
            {/*                                    onChange={handleChange}*/}
            {/*                                    className={gformData.errors.email.length > 0 ? RegistrationStyle.input_error : ''}*/}
            {/*                                />*/}
            {/*                                {gformData.errors.email.length > 0 && <span>{gformData.errors.email}</span>}*/}
            {/*                            </div>*/}
            {/*                            <div class="form-group mb-0">*/}
            {/*                                <label htmlFor="fName">First Name</label>*/}
            {/*                                <input*/}
            {/*                                    type='text'*/}
            {/*                                    name='firstName'*/}
            {/*                                    id='g_fname'*/}
            {/*                                    value={gformData.firstName}*/}
            {/*                                    placeholder='First Name'*/}
            {/*                                    onChange={handleChange}*/}
            {/*                                    className={gformData.errors.firstName.length > 0 ? RegistrationStyle.input_error : ''}*/}
            {/*                                />*/}
            {/*                                {gformData.errors.firstName.length > 0 &&*/}
            {/*                                <span>{gformData.errors.firstName}</span>}*/}
            {/*                            </div>*/}
            {/*                            <div class="form-group mb-0">*/}
            {/*                                <label htmlFor="lName">Last Name</label>*/}
            {/*                                <input*/}
            {/*                                    type='text'*/}
            {/*                                    name='lastName'*/}
            {/*                                    id='g_lname'*/}
            {/*                                    value={gformData.lastName}*/}
            {/*                                    placeholder='Last Name'*/}
            {/*                                    onChange={handleChange}*/}
            {/*                                    className={gformData.errors.lastName.length > 0 ? RegistrationStyle.input_error : ''}*/}
            {/*                                />*/}
            {/*                                {gformData.errors.lastName.length > 0 &&*/}
            {/*                                <span>{gformData.errors.lastName}</span>}*/}
            {/*                            </div>*/}
            {/*                            <div class="form-group mb-0">*/}
            {/*                                <label htmlFor="password">Password</label>*/}
            {/*                                <input*/}
            {/*                                    type='password'*/}
            {/*                                    name='password'*/}
            {/*                                    id='g_lname'*/}
            {/*                                    value={gformData.password}*/}
            {/*                                    placeholder='Password'*/}
            {/*                                    onChange={handleChange}*/}
            {/*                                    className={gformData.errors.password.length > 0 ? RegistrationStyle.input_error : ''}*/}
            {/*                                />*/}
            {/*                                {gformData.errors.password.length > 0 &&*/}
            {/*                                <span>{gformData.errors.password}</span>}*/}
            {/*                            </div>*/}
            {/*                            <div className="form-group mb-0">*/}
            {/*                                <label htmlFor="Select Role">Select Role</label>*/}
            {/*                                <select*/}
            {/*                                    name='role'*/}
            {/*                                    id='g_product'*/}
            {/*                                    value={gformData.role}*/}
            {/*                                    onChange={handleChange}*/}
            {/*                                    // className={gformData.errors.product.length > 0 ? RegistrationStyle.input_error : ''}*/}
            {/*                                >*/}
            {/*                                    {getRoles.map((item, id) => {*/}
            {/*                                        return (*/}
            {/*                                            <option value={item.roleName} key={id} >{item.roleName}</option>*/}
            {/*                                        )*/}
            {/*                                    })}*/}
            {/*                                </select>*/}
            {/*                            </div>*/}
            {/*                            <button*/}
            {/*                                title='Submit'*/}
            {/*                                className={`${RegistrationStyle.btn} btn form-control`}*/}
            {/*                                disabled={buttonIsDisable}*/}
            {/*                                onClick={handleSubmit}*/}
            {/*                            >*/}
            {/*                                Submit*/}
            {/*                            </button>*/}
            {/*                        </form>*/}
            {/*                    </Col>*/}
            {/*                </Row>*/}
            {/*            </Col>*/}
            {/*            <Col md={2}></Col>*/}
            {/*        </Row>*/}
            {/*    </Container>*/}
            {/*</section>*/}
            <section className={RegistrationStyle.main_registration}>
                <div className={RegistrationStyle.user_ragistration}>
                    <div className={`${RegistrationStyle.register} container`}>
                        <div className="row">
                            <div className={`${RegistrationStyle.register_left} col-md-3`}>
                                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                                <h3 className='text-white'>Welcome</h3>
                                <p className='text-white'>You are 30 seconds away from earning your own money!</p>
                                <input type="submit" name="" value="Login"/><br/>
                            </div>
                            <div className={`${RegistrationStyle.register_right} col-md-9`}>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel"
                                         aria-labelledby="home-tab">
                                        <h3 className={`${RegistrationStyle.register_heading}`}>Registration Page</h3>
                                        <div className={`${RegistrationStyle.register_form} row`}>
                                            <div className="col-md-8 m-auto">
                                                <div className="form-group">
                                                    <input type="email" className="form-control"
                                                           placeholder="Email *" value=""/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control"
                                                           placeholder="First Name *" value=""/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control"
                                                           placeholder="Last Name *" value=""/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control"
                                                           placeholder="Password *" value=""/>
                                                </div>
                                                <div className="form-group">
                                                    <select className="form-control">
                                                        <option className="hidden" selected disabled>Please select your
                                                            Sequrity Question
                                                        </option>
                                                        <option>What is your Birthdate?</option>
                                                        <option>What is Your old Phone Number</option>
                                                        <option>What is your Pet Name?</option>
                                                    </select>
                                                </div>
                                                <input type="submit" className={RegistrationStyle.btnRegister}
                                                       value="Register"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}


export default Register