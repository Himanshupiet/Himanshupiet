import React, {useEffect, useState} from 'react';
import GetAQuoteStyle from './GetAQuote.module.css';

/**
* @author
* @function GetAQuote
**/

const GetAQuote = (props) => {
  let initialValues = {
    fullName: "",
    email: "",
    phone: "",
    product: "",
    hearAbout: "",
    message: "",
    errors: {
      fullName: "",
      email: "",
      phone: "",
      product: "",
      hearAbout: "",
      message: "",
    }
  };

  const [gformData, setGformData] = useState(initialValues);
  const [buttonIsDisable, setButtonIsDisable] = useState(false);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setGformData((preValues)=>{
      return {...preValues, [name]: value}
    });
  }

  const chackFormValidate = () => {
    let formIsValid = true;
    let validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    let validPhoneRegex = RegExp(/^[(]{1}[0-9]{3}[)]{1}[ ]{1}[0-9]{3}[-]{1}[0-9]{4}$/);

    const {fullName, email, phone, product, hearAbout, message, errors} = gformData;

    if(fullName == ""){
      formIsValid = false;
      errors.fullName = "Please enter your full name";
    }
    else{
      errors.fullName = "";
    }
    if(email == "" || !validEmailRegex.test(email)){
      formIsValid = false;
      errors.email = "Please enter your valid email";
    }
    else{
      errors.email = "";
    }
    if(phone == "" || !validPhoneRegex.test(phone)){
      formIsValid = false;
      errors.phone = "Enter valid phone format: (###) ###-####";
    }
    else{
      errors.phone = "";
    }
    if(product == ""){
      formIsValid = false;
      errors.product = "Please select a product";
    }
    else{
      errors.product = "";
    }
    if(hearAbout == ""){
      formIsValid = false;
      errors.hearAbout = "Please select an option";
    }
    else{
      errors.hearAbout = "";
    }
    if(message == ""){
      formIsValid = false;
      errors.message = "Please enter your message";
    }
    else{
      errors.message = "";
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
    <>
      <h2>Get A Quote</h2>
      <input type="text" name="fullName" id="g_name" value={gformData.fullName} placeholder="Full Name" onChange={handleChange} />
      {gformData.errors.fullName.length > 0 && <span>{gformData.errors.fullName}</span>}
      <input type="text" name="email" id="g_email" value={gformData.email} placeholder="Email" onChange={handleChange} />
      {gformData.errors.email.length > 0 && <span>{gformData.errors.email}</span>}
      <input type="text" name="phone" id="g_phone" value={gformData.phone} placeholder="Phone Number" onChange={handleChange} />
      {gformData.errors.phone.length > 0 && <span>{gformData.errors.phone}</span>}

      <select name="product" id="g_product" value={gformData.product} onChange={handleChange}>
        <option value="">Select Product</option>
        <option value="Rotator Brick Oven">Rotator Brick Oven</option>
        <option value="Neapolitan Brick Oven">Neapolitan Brick Oven</option>
        <option value="Electric Brick Oven">Electric Brick Oven</option>
        <option value="Due Bocche Brick Oven">Due Bocche Brick Oven</option>
        <option value="Enclosed Facade Brick Oven">Enclosed Facade Brick Oven</option>
        <option value="MS Series Brick Oven">MS Series Brick Oven</option>
        <option value="MarraForni Mixers">MarraForni Mixers</option>
        <option value="Marraforni Prep Table">Marraforni Prep Table</option>
        <option value="Marraforni Slicers">Marraforni Slicers</option>
        <option value="Plug & Play Ventilation">Plug & Play Ventilation</option>
      </select>
      {gformData.errors.product.length > 0 && <span>{gformData.errors.product}</span>}

      <select name="hearAbout" id="g_hearus" value={gformData.hearAbout} onChange={handleChange}>
        <option value="">How did you hear about us?</option>
        <option value="Social Media Channels">Social Media Channels</option>
        <option value="Friends / Family">Friends / Family</option>
        <option value="Advertisement">Advertisement</option>
        <option value="Google">Google</option>
        <option value="MarraForni Team Member">MarraForni Team Member</option>
      </select>
      {gformData.errors.hearAbout.length > 0 && <span>{gformData.errors.hearAbout}</span>}

      <input name="message" type="text" id="g_message" value={gformData.message} placeholder="Your Message" onChange={handleChange} />
      {gformData.errors.message.length > 0 && <span>{gformData.errors.message}</span>}

      <button title="Submit" disabled={buttonIsDisable} onClick={handleSubmit}>Submit</button>
    </>
   )
  }


export default GetAQuote;