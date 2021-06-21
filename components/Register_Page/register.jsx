import React, {useState} from 'react'
import RegistrationStyle from './register.module.css'
import Header from "../header/header";
import axios from "axios";
import {API_HOST} from "../../env";
import Footer from "../footer/footer";


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
            <div className={RegistrationStyle.main_section}>
                <section className={RegistrationStyle.main_registration}>
                    <div className={RegistrationStyle.user_ragistration}>
                        <div className={`${RegistrationStyle.register} container`}>
                            <div className="row">
                                <div className={`${RegistrationStyle.register_left} col-md-3`}>
                                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                                    <h3 className='text-white'>Welcome</h3>
                                    <p className='text-white'>You are 30 seconds away from earning your own money!</p>
                                    {/*<input type="submit" name="" value="Login"/><br/>*/}
                                </div>
                                <div className={`${RegistrationStyle.register_right} col-md-9`}>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home" role="tabpanel"
                                             aria-labelledby="home-tab">
                                            <h2 className={`${RegistrationStyle.register_heading}`}>Registration
                                                Page</h2>
                                            <div className={`${RegistrationStyle.register_form} row`}>
                                                <div className="col-md-9 m-auto">
                                                    <div className="form-group m-0">
                                                        <input
                                                            type="email"
                                                            name='email'
                                                            placeholder="Email *"
                                                            onChange={handleChange}
                                                            value={gformData.email}
                                                            className={gformData.errors.email.length > 0 ? RegistrationStyle.input_error : ''}
                                                        />
                                                        {gformData.errors.email.length > 0 &&
                                                        <span>{gformData.errors.email}</span>}
                                                    </div>
                                                    <div className="form-group m-0">
                                                        <input
                                                            type='text'
                                                            name='firstName'
                                                            value={gformData.firstName}
                                                            placeholder='First Name *'
                                                            onChange={handleChange}
                                                            className={gformData.errors.firstName.length > 0 ? RegistrationStyle.input_error : ''}
                                                        />
                                                        {gformData.errors.firstName.length > 0 &&
                                                        <span>{gformData.errors.firstName}</span>}
                                                    </div>
                                                    <div className="form-group m-0">
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
                                                    <div className="form-group m-0">
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
                                                    <div className="form-group m-0">
                                                        <select
                                                            name='role'
                                                            id='g_product'
                                                            value={gformData.role}
                                                            onChange={handleChange}
                                                            // className={gformData.errors.product.length > 0 ? RegistrationStyle.input_error : ''}
                                                        >
                                                            {getRoles.map((item, id) => {
                                                                return (
                                                                    <option value={item.roleName}
                                                                            key={id}>{item.roleName}</option>
                                                                )
                                                            })}
                                                        </select>
                                                    </div>
                                                    <input
                                                        type="submit"
                                                        className={RegistrationStyle.btnRegister}
                                                        onClick={handleSubmit}
                                                        value="Register"
                                                        disabled={buttonIsDisable}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}


export default Register