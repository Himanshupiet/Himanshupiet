import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {Col, Container, Dropdown, DropdownButton, Modal, Row, Tab, Tabs} from 'react-bootstrap'
import ActiveLink from './ActiveLink';
import headerStyle from './header.module.css';
import CountryList from "../common/GetAQuote/CountryList";
import {withRouter} from 'next/router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as productActions from '../../actions/product'


/**
 * @author
 * @function Header
 **/

const Header = (props) => {
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
        file: '',
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
            file: '',
            message: '',
        }
    };
    const options = [
        {
            id: 1,
            label: "Red",
            value: "Red",
        },
        {
            id: 2,
            label: "Blue",
            value: "Blue",
        },
        {
            id: 3,
            label: "White",
            value: "White",
        },
        {
            id: 4,
            label: "Brown",
            value: "Brown",
        },
        {
            id: 5,
            label: "Black",
            value: "Black",
        },
    ];
    const facadeOption = [
        {
            id: 1,
            label: "Black - Standard for RT Models",
            value: "Black",
        },
        {
            id: 2,
            label: "Stainless Steel",
            value: "Stainless",
        },

    ];
    const tilesOption = [
        {
            id: 1,
            label: "Square",
            value: "Square",
        },
        {
            id: 2,
            label: "Penny Round",
            value: "Penny",
        },
        {
            id: 3,
            label: "Broken",
            value: "Broken",
        },
        {
            id: 4,
            label: "Custom Tiles",
            value: "Custom",
        },
    ]
    const legsOption = [
        {
            id: 1,
            label: 'Black',
            value: 'Black'
        },
        {
            id: 2,
            label: 'Stainless Steel',
            value: 'Stainless Steel'

        },
    ];
    const [fixedHeaderClass, setFixedHeaderClass] = useState("");
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [mobileProductOpen, setMobileProductOpen] = useState(false);
    const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
    const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);
    const [mobileContactOpen, setMobileContactOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [facade, setFacade] = useState('Black')
    const [color, setColors] = useState('Red')
    const [legs, setLegs] = useState('Black')
    const [tiles, setTiles] = useState('Penny')
    const [gformData, setGformData] = useState(initialValues);
    const [buttonIsDisable, setButtonIsDisable] = useState(false);
    const [product, setProduct] = useState([])

    useEffect(() => {
        window.addEventListener('scroll', checkStickyHeader, {passive: true});
        checkStickyHeader();

        return () => window.removeEventListener("scroll", checkStickyHeader, {passive: true});
    }, []);
    useEffect(() => {
        props.productActions.getAllProduct()
    }, [])

    useEffect(() => {
        setProduct(props.product.product)
    }, [props.product])
    // console.log(product)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const checkStickyHeader = () => {
        if (window.innerWidth > 991) {
            if (window.scrollY > 150) {
                setFixedHeaderClass(headerStyle.active_sticky_header);
            } else {
                setFixedHeaderClass("");
            }
        }
    }
    const handleColor = (e) => {
        setColors(e)

    }
    const handleFacade = (e) => {
        setFacade(e)
    }
    const handleLegs = (e) => {
        setLegs(e)

    }
    const handleTiles = (e) => {
        setTiles(e)

    }
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
            file,
            message,
            errors
        } = gformData;

        if (firstName == '') {
            formIsValid = false;
            errors.firstName = 'Please enter your first name';
        } else {
            errors.firstName = '';
        }
        if (lastName == '') {
            formIsValid = false;
            errors.lastName = 'Please enter your last name';
        } else {
            errors.lastName = '';
        }
        if (email == '' || !validEmailRegex.test(email)) {
            formIsValid = false;
            errors.email = 'Please enter your valid email';
        } else {
            errors.email = '';
        }
        if (cemail == '' || !validEmailRegex.test(cemail)) {
            formIsValid = false;
            errors.cemail = 'Please enter your confirm email';
        } else {
            if (email != cemail) {
                formIsValid = false;
                errors.cemail = 'Confirm email is not same with email';
            } else {
                errors.cemail = '';
            }
        }
        if (phone == '' || !validPhoneRegex.test(phone)) {
            formIsValid = false;
            errors.phone = 'Enter valid phone format: (###) ###-####';
        } else {
            errors.phone = '';
        }
        if (streetAddress == '') {
            formIsValid = false;
            errors.streetAddress = 'Please enter your Street Address';
        } else {
            errors.streetAddress = '';
        }
        if (City == '') {
            formIsValid = false;
            errors.City = 'Please enter your City';
        } else {
            errors.City = '';
        }
        if (StateProvince == '') {
            formIsValid = false;
            errors.StateProvince = 'Please enter your State / Province';
        } else {
            errors.StateProvince = '';
        }
        if (Country == '') {
            formIsValid = false;
            errors.Country = 'Please select a Country';
        } else {
            errors.Country = '';
        }
        if (product == '') {
            formIsValid = false;
            errors.product = 'Please select a product';
        } else {
            errors.product = '';
        }
        if (file == '') {
            formIsValid = false;
            errors.file = 'Please select an option';
        } else {
            errors.hearAbout = '';
        }
        if (message == '') {
            formIsValid = false;
            errors.message = 'Please enter your message';
        } else {
            errors.message = '';
        }
        setGformData({...gformData, errors});
        return formIsValid;
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('document', JSON.stringify(gformData));
        setButtonIsDisable(true);
        if (chackFormValidate()) {
            setGformData(initialValues);
            setButtonIsDisable(false);
        }
        setButtonIsDisable(false);
    }
    return (
        <>
            <header
                className={`${headerStyle.custom_header} ${fixedHeaderClass} ${headerStyle.mobile_navbar} container-fluid`}>
                <Row>
                    <Col xl={1}></Col>
                    <Col xl={10}>
                        {/*=================== Modal Section ==============================*/}
                        <Modal show={show} onHide={handleClose} size='xl' className={`${headerStyle.my_model}`}>
                            <Modal.Body className={`${headerStyle.my_model_body} show-grid`}>
                                <Container>
                                    <Row>
                                        <Col md={6}>
                                            <h2 className={`${headerStyle.title} text-center`}>Visualize Your Oven!</h2>
                                            <p className={`${headerStyle.sub_title} text-center`}>Hey there! We're happy
                                                to see you! Let us help
                                                you achieve your dream
                                                kitchen. Play around with the options below to get an idea of how you
                                                want to customize your oven. Once you're happy with your design, snap a
                                                screenshot and attach it to the quote form on the right. We'll talk to
                                                you soon.</p>
                                            <div style={{display: 'flex'}}>
                                                <DropdownButton id="dropdown-item-button" title='Tiles'
                                                                onSelect={handleTiles} variant='light'>
                                                    <Dropdown.ItemText className={headerStyle.main_title}>
                                                        Standard Tile Options</Dropdown.ItemText>
                                                    {tilesOption &&
                                                    tilesOption.length &&
                                                    tilesOption.map((option) => (
                                                        <Dropdown.Item
                                                            eventKey={option.value}
                                                            key={option.id}>
                                                            {option.value}
                                                        </Dropdown.Item>
                                                    ))}
                                                </DropdownButton>
                                                {/*<DropdownButton id="dropdown-item-button" title={color} onSelect={handleChange}>*/}
                                                <DropdownButton id="dropdown-item-button" title='Colors'
                                                                onSelect={handleColor} variant='light'>
                                                    <Dropdown.ItemText className={headerStyle.main_title}>Standard Title
                                                        Color</Dropdown.ItemText>
                                                    {options &&
                                                    options.length &&
                                                    options.map((option) => (
                                                        <Dropdown.Item
                                                            eventKey={option.value}
                                                            key={option.id}>
                                                            {option.label}
                                                        </Dropdown.Item>
                                                    ))}
                                                </DropdownButton>
                                                <DropdownButton id="dropdown-item-button" title='Facade'
                                                                onSelect={handleFacade} variant='light'>
                                                    <Dropdown.ItemText></Dropdown.ItemText>
                                                    {facadeOption &&
                                                    facadeOption.length &&
                                                    facadeOption.map((option) => (
                                                        <Dropdown.Item
                                                            eventKey={option.value}
                                                            key={option.id}>
                                                            {option.value}
                                                        </Dropdown.Item>
                                                    ))}
                                                </DropdownButton>
                                                <DropdownButton id="dropdown-item-button" title='Legs'
                                                                onSelect={handleLegs} variant='light'>
                                                    <Dropdown.ItemText></Dropdown.ItemText>
                                                    {legsOption &&
                                                    legsOption.length &&
                                                    legsOption.map((option) => (
                                                        <Dropdown.Item
                                                            eventKey={option.value}
                                                            key={option.id}>
                                                            {option.value}
                                                        </Dropdown.Item>
                                                    ))}
                                                </DropdownButton>
                                            </div>
                                            {/*<div className="select-container">*/}
                                            {/*  <select value={color} onChange={handleChange}>*/}
                                            {/*    {options.map((option) => (*/}
                                            {/*        <option value={option.value} key={option.id}>{option.label}</option>*/}
                                            {/*    ))}*/}
                                            {/*  </select>*/}
                                            {/*</div>*/}
                                            <div className="position-relative"
                                                 style={{width: '500px'}}>
                                                <img className='oven-image-tile position-absolute'
                                                     src={`https://marraforni.com/wp/wp-content/themes/ultima-child/assets/s3/make/${tiles}_${color}.png`}
                                                     alt="Penny Red" style={{zIndex: '2'}}/>
                                                <img className="oven-image-grout position-absolute"
                                                     src="https://marraforni.com/wp/wp-content/themes/ultima-child/assets/s3/make/Grout_Red.png"
                                                     alt="Grout Red" style={{zIndex: '1'}}/>
                                                <img className="oven-image-facade position-absolute"
                                                     src={`https://marraforni.com/wp/wp-content/themes/ultima-child/assets/s3/make/Facade_${facade}.png`}
                                                     alt="Facade Black"/>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <button className='float-right' onClick={handleClose}>CANCEL</button>
                                            <h2 className={`${headerStyle.title} text-center mt-5`}>Drop Us A Line!</h2>
                                            <form className='mt-4'>
                                                <div className="form-row">
                                                    <div className={`${headerStyle.section_inner} form-group col-md-6`}>
                                                        <input
                                                            type='text'
                                                            name='firstName'
                                                            id='g_fname'
                                                            value={gformData.firstName}
                                                            placeholder='First Name'
                                                            onChange={handleChange}
                                                            className={gformData.errors.firstName.length > 0 ? headerStyle.input_error : ''}
                                                        />
                                                        {gformData.errors.firstName.length > 0 &&
                                                        <span>{gformData.errors.firstName}</span>}
                                                    </div>
                                                    <div className={`${headerStyle.section_inner} form-group col-md-6`}>
                                                        <input
                                                            type='text'
                                                            name='lastName'
                                                            id='g_lname'
                                                            value={gformData.lastName}
                                                            placeholder='Last Name'
                                                            onChange={handleChange}
                                                            className={gformData.errors.lastName.length > 0 ? headerStyle.input_error : ''}
                                                        />
                                                        {gformData.errors.lastName.length > 0 &&
                                                        <span>{gformData.errors.lastName}</span>}
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className={`${headerStyle.section_inner} form-group col-md-6`}>
                                                        <input
                                                            type='text'
                                                            name='email'
                                                            id='g_email'
                                                            value={gformData.email}
                                                            placeholder='Email'
                                                            onChange={handleChange}
                                                            className={gformData.errors.email.length > 0 ? headerStyle.input_error : ''}
                                                        />
                                                        {gformData.errors.email.length > 0 &&
                                                        <span>{gformData.errors.email}</span>}
                                                    </div>
                                                    <div className={`${headerStyle.section_inner} form-group col-md-6`}>
                                                        <input
                                                            type='text'
                                                            name='cemail'
                                                            id='g_cemail'
                                                            value={gformData.cemail}
                                                            placeholder='Confirm Email'
                                                            onChange={handleChange}
                                                            className={gformData.errors.cemail.length > 0 ? headerStyle.input_error : ''}
                                                        />
                                                        {gformData.errors.cemail.length > 0 &&
                                                        <span>{gformData.errors.cemail}</span>}
                                                    </div>
                                                </div>
                                                <div className={`${headerStyle.section_inner} form-group`}>
                                                    <input
                                                        type='text'
                                                        name='phone'
                                                        id='g_phone'
                                                        value={gformData.phone}
                                                        placeholder='Phone Number'
                                                        onChange={handleChange}
                                                        className={gformData.errors.phone.length > 0 ? headerStyle.input_error : ''}
                                                    />
                                                    {gformData.errors.phone.length > 0 &&
                                                    <span>{gformData.errors.phone}</span>}
                                                </div>
                                                <div className={`${headerStyle.section_inner} form-group`}>
                                                    <input
                                                        type='text'
                                                        name='streetAddress'
                                                        id='g_sAddress'
                                                        value={gformData.streetAddress}
                                                        placeholder='Street Address'
                                                        onChange={handleChange}
                                                        className={gformData.errors.streetAddress.length > 0 ? headerStyle.input_error : ''}
                                                    />
                                                    {gformData.errors.streetAddress.length > 0 &&
                                                    <span>{gformData.errors.streetAddress}</span>}
                                                </div>
                                                <div className="form-row">
                                                    <div className={`${headerStyle.section_inner} form-group col-md-6`}>
                                                        <input
                                                            type='text'
                                                            name='City'
                                                            id='g_City'
                                                            value={gformData.City}
                                                            placeholder='City'
                                                            onChange={handleChange}
                                                            className={gformData.errors.City.length > 0 ? headerStyle.input_error : ''}
                                                        />
                                                        {gformData.errors.City.length > 0 &&
                                                        <span>{gformData.errors.City}</span>}
                                                    </div>
                                                    <div className={`${headerStyle.section_inner} form-group col-md-6`}>
                                                        <input
                                                            type='text'
                                                            name='StateProvince'
                                                            id='g_StateProvince'
                                                            value={gformData.StateProvince}
                                                            placeholder='State / Province'
                                                            onChange={handleChange}
                                                            className={gformData.errors.StateProvince.length > 0 ? headerStyle.input_error : ''}
                                                        />
                                                        {gformData.errors.StateProvince.length > 0 &&
                                                        <span>{gformData.errors.StateProvince}</span>}
                                                    </div>
                                                </div>
                                                <div className={`${headerStyle.section_inner} form-row`}>
                                                    <div className={`${headerStyle.select_wrapper} col-md-6`}>
                                                        <select
                                                            name='Country'
                                                            id='g_Country'
                                                            value={gformData.Country}
                                                            onChange={handleChange}
                                                            className={gformData.errors.Country.length > 0 ? headerStyle.input_error : ''}
                                                        >
                                                            <option value=''>Select Country</option>
                                                            {CountryList.map((country, index) => {
                                                                return <option value={country}
                                                                               key={index}>{country}</option>
                                                            })}
                                                        </select>
                                                        {gformData.errors.Country.length > 0 &&
                                                        <span>{gformData.errors.Country}</span>}
                                                    </div>
                                                </div>
                                                <div className={`${headerStyle.section_inner} form-row`}>
                                                    <div className={`${headerStyle.select_wrapper} col-md-6`}>
                                                        <select
                                                            name='product'
                                                            id='g_product'
                                                            value={gformData.product}
                                                            onChange={handleChange}
                                                            className={gformData.errors.product.length > 0 ? headerStyle.input_error : ''}
                                                        >
                                                            <option value=''>Select Product</option>
                                                            <option value='Rotator Brick Oven'>Rotator Brick Oven
                                                            </option>
                                                            <option value='Neapolitan Brick Oven'>Neapolitan Brick Oven
                                                            </option>
                                                            <option value='Electric Brick Oven'>Electric Brick Oven
                                                            </option>
                                                            <option value='Due Bocche Brick Oven'>Due Bocche Brick Oven
                                                            </option>
                                                            <option value='Enclosed Facade Brick Oven'>Enclosed Facade
                                                                Brick
                                                                Oven
                                                            </option>
                                                            <option value='MS Series Brick Oven'>MS Series Brick Oven
                                                            </option>
                                                            <option value='MarraForni Mixers'>MarraForni Mixers</option>
                                                            <option value='Marraforni Prep Table'>Marraforni Prep Table
                                                            </option>
                                                            <option value='Marraforni Slicers'>Marraforni Slicers
                                                            </option>
                                                            <option value='Plug & Play Ventilation'>Plug & Play
                                                                Ventilation
                                                            </option>
                                                        </select>
                                                        {gformData.errors.product.length > 0 &&
                                                        <span>{gformData.errors.product}</span>}
                                                    </div>

                                                </div>
                                                <div className={`${headerStyle.section_inner}`}
                                                     style={{backgroundColor: 'rgba( 246, 247, 252, 1.00 )'}}>
                                                    <label htmlFor="exampleFormControlFile1"
                                                           className='font-weight-bold'>Attach Your Screenshots
                                                        :</label>
                                                    <input
                                                        name='file'
                                                        type="file"
                                                        id='g_file'
                                                        value={gformData.file}
                                                        // className="form-control-file"
                                                        onChange={handleChange}
                                                        className={gformData.errors.message.length > 0 ? headerStyle.input_error : ''}
                                                    />
                                                    {gformData.errors.file.length > 0 &&
                                                    <span>{gformData.errors.file}</span>}
                                                </div>
                                                <div className={`${headerStyle.section_inner} form-group`}>
                                                    <input
                                                        name='message'
                                                        type='text'
                                                        id='g_message'
                                                        value={gformData.message}
                                                        placeholder='Your Message'
                                                        onChange={handleChange}
                                                        className={gformData.errors.message.length > 0 ? headerStyle.input_error : ''}
                                                    />
                                                    {gformData.errors.message.length > 0 &&
                                                    <span>{gformData.errors.message}</span>}
                                                </div>
                                                <button title='Submit'
                                                        className={'mf_btn'}
                                                        disabled={buttonIsDisable}
                                                        onClick={handleSubmit}>Submit
                                                </button>
                                            </form>
                                        </Col>
                                    </Row>
                                </Container>
                            </Modal.Body>
                        </Modal>
                        {/*======================== End Modal Section ==============================*/}
                        <nav className={`${headerStyle.custom_navbar}`}>
                            <div className={headerStyle.site_logo}>
                                <div className={`${headerStyle.mobile_show} ${headerStyle.menu_icon}`}>
                                    <button onClick={() => {
                                        setMobileNavOpen(!mobileNavOpen);
                                        setMobileProductOpen(false);
                                        setMobileBlogOpen(false);
                                        setMobileGalleryOpen(false);
                                        setMobileContactOpen(false);
                                    }
                                    }>
                                        <i className={mobileNavOpen ? "bx bx-window-close" : "bx bx-menu-alt-left"}></i>
                                    </button>
                                </div>
                                <Link href="/">
                                    <a title="MarraForni"><img alt="Marra Forni"
                                                               src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/LogoRed.png`}
                                                               width="226" height="60"/></a>
                                </Link>
                                <div className={headerStyle.mobile_slbox}>
                                    <div className={`${headerStyle.searchicon} ${headerStyle.mobile_show}`}>
                                        <button><i className='bx bx-search-alt-2'></i></button>
                                    </div>
                                    <div className={headerStyle.mobile_show}>
                                        <img alt="Language Flag"
                                             src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/en.png`} width="18"
                                             height="12"/>
                                    </div>
                                </div>
                            </div>
                            <div className={`${headerStyle.site_nav} ${mobileNavOpen ? headerStyle.mob_nav_open : ""}`}>
                                <div>
                                    <ActiveLink activeClassName="active_menu" href="/about-marra-forni">
                                        <a title="About Us" data-title="About Us"><span>About Us</span></a>
                                    </ActiveLink>
                                </div>
                                <div className={headerStyle.product_menu_outer}>
                                    <ActiveLink activeClassName="active_menu" href="/product">
                                        <a title="Products" data-title="Products"><span>Products</span></a>
                                    </ActiveLink>
                                    <button className={headerStyle.mobile_show} onClick={() => {
                                        setMobileProductOpen(!mobileProductOpen);
                                        setMobileBlogOpen(false);
                                        setMobileGalleryOpen(false);
                                        setMobileContactOpen(false);
                                    }
                                    }>
                                        <i className={mobileProductOpen ? "bx bxs-chevron-down" : "bx bxs-chevron-up"}></i>
                                    </button>
                                    <div
                                        className={`${headerStyle.product_sub_menu} ${mobileProductOpen ? headerStyle.product_sub_menu_active : ""}`}>
                                        <Tabs defaultActiveKey={product[0]} id="uncontrolled-tab-example">
                                            {(product && product.length) ? product.map((item, id) => (
                                                <Tab eventKey={item.name} title={item.name}
                                                     key={id}>
                                                    <Row>
                                                        {item.categoryList.map((res, id) => (
                                                            <>
                                                                {res.id == 1 ?
                                                                    <Col sm={3}>
                                                                        <div className={headerStyle.special_product}>
                                                                            <Link
                                                                                href="/product/discover-the-rotator-brick-oven">
                                                                                <a title="">
                                                                                    <img
                                                                                        src={res.imageUrl}
                                                                                        width="200" height="200"
                                                                                        alt="Top Product"/>
                                                                                    <p>Rotator Brick Oven</p>
                                                                                </a>
                                                                            </Link>
                                                                        </div>
                                                                    </Col> :
                                                                    <Col sm={9}>
                                                                        <div className={headerStyle.rest_product}>
                                                                            <ul>
                                                                                <li>
                                                                                    <Link href="/">
                                                                                        <a title="">
                                                                                            <img
                                                                                                src={res.imageUrl}
                                                                                                width="100" height="100"
                                                                                                alt="Top Product"/>
                                                                                            <p>The Neapolitan</p>
                                                                                        </a>
                                                                                    </Link>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </Col>
                                                                }
                                                            </>
                                                        ))}
                                                    </Row>
                                                </Tab>
                                            )) : null}
                                        </Tabs>
                                    </div>
                                </div>
                                <div>
                                    <ActiveLink activeClassName="active_menu" href="/tools-and-accessories">
                                        <a title="Tools" data-title="Tools"><span>Tools</span></a>
                                    </ActiveLink>
                                </div>
                                <div>
                                    <ActiveLink activeClassName="active_menu" href="/resources">
                                        <a title="Resources" data-title="Resources"><span>Resources</span></a>
                                    </ActiveLink>
                                </div>
                                <div className={headerStyle.sub_menu_outer}>
                                    <ActiveLink activeClassName="active_menu" href="/blog">
                                        <a title="Blog" data-title="Blog"><span>Blog</span></a>
                                    </ActiveLink>
                                    <button className={headerStyle.mobile_show} onClick={() => {
                                        setMobileProductOpen(false);
                                        setMobileBlogOpen(!mobileBlogOpen);
                                        setMobileGalleryOpen(false);
                                        setMobileContactOpen(false);
                                    }
                                    }>
                                        <i className={mobileBlogOpen ? "bx bxs-chevron-down" : "bx bxs-chevron-up"}></i>
                                    </button>
                                    <div
                                        className={`${headerStyle.sub_menu} ${mobileBlogOpen ? headerStyle.sub_menu_active : ""}`}>
                                        <ul>
                                            <li>
                                                <Link href="/">
                                                    <a title="Case Studies"><span>Case Studies</span></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={headerStyle.sub_menu_outer}>
                                    <ActiveLink activeClassName="active_menu" href="/gallery">
                                        <a title="Gallery" data-title="Gallery"><span>Gallery</span></a>
                                    </ActiveLink>
                                    <button className={headerStyle.mobile_show} onClick={() => {
                                        setMobileProductOpen(false);
                                        setMobileBlogOpen(false);
                                        setMobileGalleryOpen(!mobileGalleryOpen);
                                        setMobileContactOpen(false);
                                    }
                                    }>
                                        <i className={mobileGalleryOpen ? "bx bxs-chevron-down" : "bx bxs-chevron-up"}></i>
                                    </button>
                                    <div
                                        className={`${headerStyle.sub_menu} ${mobileGalleryOpen ? headerStyle.sub_menu_active : ""}`}>
                                        <ul>
                                            <li>
                                                <Link href="/market-segment-gallery">
                                                    <a title="Market Segment Gallery"><span>Market Segment Gallery</span></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/gallery">
                                                    <a title="Product Gallery"><span>Product Gallery</span></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={headerStyle.sub_menu_outer}>
                                    <ActiveLink activeClassName="active_menu" href="/contact">
                                        <a title="Contact Us" data-title="Contact Us"><span>Contact Us</span></a>
                                    </ActiveLink>
                                    <button className={headerStyle.mobile_show} onClick={() => {
                                        setMobileProductOpen(false);
                                        setMobileBlogOpen(false);
                                        setMobileGalleryOpen(false);
                                        setMobileContactOpen(!mobileContactOpen);
                                    }
                                    }>
                                        <i className={mobileContactOpen ? "bx bxs-chevron-down" : "bx bxs-chevron-up"}></i>
                                    </button>
                                    <div
                                        className={`${headerStyle.sub_menu} ${mobileContactOpen ? headerStyle.sub_menu_active : ""}`}>
                                        <ul>
                                            <li>
                                                <Link href="/">
                                                    <a title="HQ"><span>HQ</span></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a title="Tech Support"><span>Tech Support</span></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a title="Find a Sales Rep"><span>Find a Sales Rep</span></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/culinary-support">
                                                    <a title="Culinary Support"><span>Culinary Support</span></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <button className="mf_btn" style={{padding: "8px"}} onClick={handleShow}>Build Your
                                        Brick Oven
                                    </button>
                                </div>
                                <div className={`${headerStyle.searchicon} ${headerStyle.desktop_show}`}>
                                    <i className='bx bx-search-alt-2'></i>
                                </div>
                                <div className={headerStyle.desktop_show}>
                                    <img alt="Language Flag" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/en.png`}
                                         width="18" height="12"/>
                                </div>
                            </div>
                        </nav>
                    </Col>
                    <Col xl={1}></Col>
                </Row>
            </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))

// export default Header;