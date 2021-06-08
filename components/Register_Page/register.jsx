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
        role:'',
        errors: {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            role:'',
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
            <section
                className={`${RegistrationStyle.section_outer} mt-5 pb-5`}>
                <Container fluid className={RegistrationStyle.section_container}>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8} className={`${RegistrationStyle.main_form} bg-white p-4`}>
                            <Row>
                                <Col md={6} className={`${RegistrationStyle.main} main p-3`}>
                                    <img
                                        className={`${RegistrationStyle.side_img} img-fluid`}
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/firedupbrewing-banner.webp`}
                                        alt='Commercial Brick Oven'
                                        width='480'
                                        height='540'
                                    />
                                </Col>
                                <Col md={6} className="p-4">
                                    <h2 className="text-center">Register Form</h2>
                                    <form className={`${RegistrationStyle.form_style} mt-3`}>
                                        <div>
                                            <input
                                                type='email'
                                                name='email'
                                                id='g_email'
                                                value={gformData.email}
                                                placeholder='Email'
                                                onChange={handleChange}
                                                className={gformData.errors.email.length > 0 ? RegistrationStyle.input_error : ''}
                                            />
                                            {gformData.errors.email.length > 0 && <span>{gformData.errors.email}</span>}
                                        </div>
                                        <div>
                                            <input
                                                type='text'
                                                name='firstName'
                                                id='g_fname'
                                                value={gformData.firstName}
                                                placeholder='First Name'
                                                onChange={handleChange}
                                                className={gformData.errors.firstName.length > 0 ? RegistrationStyle.input_error : ''}
                                            />
                                            {gformData.errors.firstName.length > 0 &&
                                            <span>{gformData.errors.firstName}</span>}
                                        </div>
                                        <div>
                                            <input
                                                type='text'
                                                name='lastName'
                                                id='g_lname'
                                                value={gformData.lastName}
                                                placeholder='Last Name'
                                                onChange={handleChange}
                                                className={gformData.errors.lastName.length > 0 ? RegistrationStyle.input_error : ''}
                                            />
                                            {gformData.errors.lastName.length > 0 &&
                                            <span>{gformData.errors.lastName}</span>}
                                        </div>
                                        <div>
                                            <input
                                                type='password'
                                                name='password'
                                                id='g_lname'
                                                value={gformData.password}
                                                placeholder='Password'
                                                onChange={handleChange}
                                                className={gformData.errors.password.length > 0 ? RegistrationStyle.input_error : ''}
                                            />
                                            {gformData.errors.password.length > 0 &&
                                            <span>{gformData.errors.password}</span>}
                                        </div>
                                        <div className="form-group">
                                            <select
                                                name='role'
                                                id='g_product'
                                                value={gformData.role}
                                                onChange={handleChange}
                                                // className={gformData.errors.product.length > 0 ? RegistrationStyle.input_error : ''}
                                            >
                                                {getRoles.map((item, id) => {
                                                    return (
                                                        <option value={item.roleName} key={id} >{item.roleName}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <button
                                            title='Submit'
                                            className={`${RegistrationStyle.btn} btn form-control`}
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


export default Register