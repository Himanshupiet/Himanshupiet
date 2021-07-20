import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {Col, Container, Modal, Row, Tab, Tabs} from 'react-bootstrap'
import ActiveLink from './ActiveLink';
import headerStyle from './header.module.css';
import CountryList from "../common/GetAQuote/CountryList";
import {withRouter} from 'next/router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as productActions from '../../actions/product'
import * as blogActions from "../../actions/blog";
import MasterForm from "../Modal_Form/MasterForm";


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

    const [fixedHeaderClass, setFixedHeaderClass] = useState("");
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [mobileProductOpen, setMobileProductOpen] = useState(false);
    const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
    const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);
    const [mobileContactOpen, setMobileContactOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [gformData, setGformData] = useState(initialValues);
    const [buttonIsDisable, setButtonIsDisable] = useState(false);
    const [product, setProduct] = useState([])
    const [img, setImage] = useState('')

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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const checkStickyHeader = () => {
        if (window.innerWidth > 991) {
            if (window.scrollY > 150) {
                setFixedHeaderClass(headerStyle.active_sticky_header);
                setImage(`${process.env.NEXT_PUBLIC_BASE_PATH}/images/LogoRed.png`)
            } else {
                setFixedHeaderClass("");
                setImage(`${process.env.NEXT_PUBLIC_BASE_PATH}/images/LogoWhite.png`)
            }
        }
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
                                <MasterForm/>
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
                                                               src={img}
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
                                        <Tabs defaultActiveKey={product.id} id="uncontrolled-tab-example">
                                            {(product && product.length) ? product.map((item, id) => (
                                                <Tab eventKey={item.name} title={item.name}
                                                     key={id}>
                                                    <Row>
                                                        {item.categoryList.map((res, id) => (
                                                            <>
                                                                {
                                                                    id === 0 &&
                                                                    <Col sm={3}>
                                                                        <div className={headerStyle.special_product}>
                                                                            <Link
                                                                                href={`/product/${res.categoryName}`}>
                                                                                <a title="">
                                                                                    <img
                                                                                        src={res.imageUrl}
                                                                                        width="200" height="200"
                                                                                        alt="Top Product"/>
                                                                                    <p>{res.categoryName}</p>
                                                                                </a>
                                                                            </Link>
                                                                        </div>
                                                                    </Col>
                                                                }
                                                            </>
                                                        ))}
                                                        <Col sm={9}>
                                                            <div className={headerStyle.rest_product}>
                                                                <ul>
                                                                    {item.categoryList.map((res, id) => (
                                                                        <>
                                                                            { id !== 0 &&
                                                                                <li key={id}>
                                                                                    <Link href={`/product/${res.categoryName}`}>
                                                                                        <a title={res.categoryName}>
                                                                                            <img
                                                                                                src={res.imageUrl}
                                                                                                width="100" height="100"
                                                                                                alt="Top Product"/>
                                                                                            <p>{res.categoryName}</p>
                                                                                        </a>
                                                                                    </Link>
                                                                                </li>
                                                                            }
                                                                        </>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </Col>
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
                                    {/*<ActiveLink activeClassName="active_menu" href="">*/}
                                        <a title="Contact Us" data-title="Contact Us"><span>Contact Us</span></a>
                                    {/*</ActiveLink>*/}
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
                                                <Link href="/contact">
                                                    <a title="ContactUs"><span>Contact Us</span></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a title="HQ"><span>HQ</span></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a title="Find a Sales Rep"><span>Find a Sales Rep</span></a>
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
