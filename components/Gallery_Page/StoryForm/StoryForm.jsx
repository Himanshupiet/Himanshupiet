import React, {useEffect, useState} from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Col, Container, Row } from 'react-bootstrap'
import CountryList from './CountryList'
import StoryFormStyle from './StoryForm.module.css'

const StoryForm = (props) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    cemail: '',
    phone: '',
    streetAddress: '',
    City: '',
    StateProvince: '',
    Country: '',
    product: '',
    ovenPicture: '',
    message: '',
    errors: {
      firstName: '',
      lastName: '',
      email: '',
      cemail: '',
      phone: '',
      streetAddress: '',
      City: '',
      StateProvince: '',
      Country: '',
      product: '',
      ovenPicture: '',
      message: '',
    }
  };

  const [gformData, setGformData] = useState(initialValues);
  const [buttonIsDisable, setButtonIsDisable] = useState(false);

  const handleChange = (event) => {
    const {name, value, files} = event.target;
    setGformData((preValues)=>{
      if(name=='ovenPicture')
      {
        return {...preValues, [name]: files[0]}
      }
      return {...preValues, [name]: value}
    });
  }

  const chackFormValidate = () => {
    let formIsValid = true;
    let validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    let validPhoneRegex = RegExp(/^[(]{1}[0-9]{3}[)]{1}[ ]{1}[0-9]{3}[-]{1}[0-9]{4}$/);

    const {
      firstName, 
      lastName, 
      email, 
      cemail, 
      phone, 
      streetAddress, 
      City, 
      StateProvince, 
      Country, 
      product, 
      ovenPicture, 
      message, 
      errors
    } = gformData;

    if(firstName == ''){
      formIsValid = false;
      errors.firstName = 'Please enter your first name';
    }
    else{
      errors.firstName = '';
    }
    if(lastName == ''){
      formIsValid = false;
      errors.lastName = 'Please enter your last name';
    }
    else{
      errors.lastName = '';
    }
    if(email == '' || !validEmailRegex.test(email)){
      formIsValid = false;
      errors.email = 'Please enter your valid email';
    }
    else{
      errors.email = '';
    }
    if(cemail == '' || !validEmailRegex.test(cemail)){
      formIsValid = false;
      errors.cemail = 'Please enter your confirm email';
    }
    else{
      if(email != cemail){
        formIsValid = false;
        errors.cemail = 'Confirm email is not same with email';
      }
      else{
        errors.cemail = '';
      }
    }    
    if(phone == '' || !validPhoneRegex.test(phone)){
      formIsValid = false;
      errors.phone = 'Enter valid phone format: (###) ###-####';
    }
    else{
      errors.phone = '';
    }
    if(streetAddress == ''){
      formIsValid = false;
      errors.streetAddress = 'Please enter your Street Address';
    }
    else{
      errors.streetAddress = '';
    }
    if(City == ''){
      formIsValid = false;
      errors.City = 'Please enter your City';
    }
    else{
      errors.City = '';
    }
    if(StateProvince == ''){
      formIsValid = false;
      errors.StateProvince = 'Please enter your State / Province';
    }
    else{
      errors.StateProvince = '';
    }    
    if(Country == ''){
      formIsValid = false;
      errors.Country = 'Please select a Country';
    }
    else{
      errors.Country = '';
    }
    if(product == ''){
      formIsValid = false;
      errors.product = 'Please select a product';
    }
    else{
      errors.product = '';
    }
    if(ovenPicture == ''){
      formIsValid = false;
      errors.ovenPicture = 'Upload picture of your oven';
    }
    else{
      errors.ovenPicture = '';
    }
    if(message == ''){
      formIsValid = false;
      errors.message = 'Please enter your message';
    }
    else{
      errors.message = '';
    }
    setGformData({...gformData, errors});
    return formIsValid;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonIsDisable(true);
    if(chackFormValidate()){
      console.log(gformData);
      setGformData(initialValues);
      setButtonIsDisable(false);
    }
    setButtonIsDisable(false);
  }

  return(
    <section 
      className={StoryFormStyle.section_outer}>
      <Container fluid className={StoryFormStyle.section_container}>
        <ScrollAnimation
          animateIn='zoomIn'
          animateOnce={true}
          duration={1}
        >
          <div 
            className={StoryFormStyle.section_inner}>
            <h2>Are You A Marra Forni Owner? Tell Us Your Story!</h2>
            <Row>
              <Col
                md={6}
              >
                <input 
                  type='text' 
                  name='firstName' 
                  id='g_fname' 
                  value={gformData.firstName} 
                  placeholder='First Name' 
                  onChange={handleChange} 
                  className={gformData.errors.firstName.length > 0 ? StoryFormStyle.input_error : ''}
                />
                {gformData.errors.firstName.length > 0 && <span>{gformData.errors.firstName}</span>}
              </Col>
              <Col
                md={6}
              >
                <input 
                  type='text' 
                  name='lastName' 
                  id='g_lname' 
                  value={gformData.lastName} 
                  placeholder='Last Name'
                  onChange={handleChange} 
                  className={gformData.errors.lastName.length > 0 ? StoryFormStyle.input_error : ''}
                />
                {gformData.errors.lastName.length > 0 && <span>{gformData.errors.lastName}</span>}
              </Col>
            </Row>
            <Row>
              <Col
                md={4}
              >
                <input 
                  type='text' 
                  name='email' 
                  id='g_email' 
                  value={gformData.email} 
                  placeholder='Email' 
                  onChange={handleChange} 
                  className={gformData.errors.email.length > 0 ? StoryFormStyle.input_error : ''}
                />
                {gformData.errors.email.length > 0 && <span>{gformData.errors.email}</span>}
              </Col>
              <Col
                md={4}
              >
                <input 
                  type='text' 
                  name='cemail' 
                  id='g_cemail' 
                  value={gformData.cemail} 
                  placeholder='Confirm Email' 
                  onChange={handleChange} 
                  className={gformData.errors.cemail.length > 0 ? StoryFormStyle.input_error : ''}
                />
                {gformData.errors.cemail.length > 0 && <span>{gformData.errors.cemail}</span>}
              </Col>
              <Col
                md={4}
              >
                <input 
                  type='text' 
                  name='phone' 
                  id='g_phone' 
                  value={gformData.phone} 
                  placeholder='Phone Number' 
                  onChange={handleChange} 
                  className={gformData.errors.phone.length > 0 ? StoryFormStyle.input_error : ''}
                />
                {gformData.errors.phone.length > 0 && <span>{gformData.errors.phone}</span>}
              </Col>
            </Row>
            <Row>
              <Col
                md={4}
              >
                <input 
                  type='text' 
                  name='streetAddress' 
                  id='g_sAddress' 
                  value={gformData.streetAddress} 
                  placeholder='Street Address' 
                  onChange={handleChange} 
                  className={gformData.errors.streetAddress.length > 0 ? StoryFormStyle.input_error : ''}
                />
                {gformData.errors.streetAddress.length > 0 && <span>{gformData.errors.streetAddress}</span>}
              </Col>
              <Col
                md={4}
              >
                <input 
                  type='text' 
                  name='City' 
                  id='g_City' 
                  value={gformData.City} 
                  placeholder='City' 
                  onChange={handleChange} 
                  className={gformData.errors.City.length > 0 ? StoryFormStyle.input_error : ''}
                />
                {gformData.errors.City.length > 0 && <span>{gformData.errors.City}</span>}
              </Col>
              <Col
                md={4}
              >
                <input 
                  type='text' 
                  name='StateProvince' 
                  id='g_StateProvince' 
                  value={gformData.StateProvince} 
                  placeholder='State / Province' 
                  onChange={handleChange} 
                  className={gformData.errors.StateProvince.length > 0 ? StoryFormStyle.input_error : ''}
                />
                {gformData.errors.StateProvince.length > 0 && <span>{gformData.errors.StateProvince}</span>}
              </Col>
            </Row>
            <Row>
              <Col
                md={4}
              >
                <select 
                  name='Country' 
                  id='g_Country' 
                  value={gformData.Country} 
                  onChange={handleChange}
                  className={gformData.errors.Country.length > 0 ? StoryFormStyle.input_error : ''}
                >
                  <option value=''>Select Country</option>
                  {CountryList.map((country, index)=>{
                    return <option value={country} key={index}>{country}</option>
                  })}
                </select>
                {gformData.errors.Country.length > 0 && <span>{gformData.errors.Country}</span>}
              </Col>
              <Col
                md={4}
              >
                <select 
                  name='product' 
                  id='g_product' 
                  value={gformData.product} 
                  onChange={handleChange}
                  className={gformData.errors.product.length > 0 ? StoryFormStyle.input_error : ''}
                >
                  <option value=''>Select Product</option>
                  <option value='Rotator Brick Oven'>Rotator Brick Oven</option>
                  <option value='Neapolitan Brick Oven'>Neapolitan Brick Oven</option>
                  <option value='Electric Brick Oven'>Electric Brick Oven</option>
                  <option value='Due Bocche Brick Oven'>Due Bocche Brick Oven</option>
                  <option value='Enclosed Facade Brick Oven'>Enclosed Facade Brick Oven</option>
                  <option value='MS Series Brick Oven'>MS Series Brick Oven</option>
                  <option value='MarraForni Mixers'>MarraForni Mixers</option>
                  <option value='Marraforni Prep Table'>Marraforni Prep Table</option>
                  <option value='Marraforni Slicers'>Marraforni Slicers</option>
                  <option value='Plug & Play Ventilation'>Plug & Play Ventilation</option>
                </select>
                {gformData.errors.product.length > 0 && <span>{gformData.errors.product}</span>}
              </Col>
              <Col
                md={4}
              >
                <div className={`${StoryFormStyle.picture_upload} ${gformData.errors.ovenPicture.length > 0 ? StoryFormStyle.input_error : ''}`}>
                  <label>Beautiful Pictures Of Your Oven</label>
                  <input
                    name='ovenPicture'
                    id='g_ovenPicture'
                    type='file'
                    onChange={handleChange}
                    accept='image/png, image/jpeg, image/jpg, image/webp'
                  />
                </div>
                {gformData.errors.ovenPicture.length > 0 && <span>{gformData.errors.ovenPicture}</span>}
              </Col>
            </Row>  
            <input 
              name='message' 
              type='text' 
              id='g_message' 
              value={gformData.message} 
              placeholder='Your Message' 
              onChange={handleChange} 
              className={gformData.errors.message.length > 0 ? StoryFormStyle.input_error : ''}
            />
            {gformData.errors.message.length > 0 && <span>{gformData.errors.message}</span>}
            <div className={StoryFormStyle.button_outer}>
              <button 
                title='Submit' 
                className={'mf_btn'} 
                disabled={buttonIsDisable} 
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </Container>
    </section>
   )
  }


export default StoryForm