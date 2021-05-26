import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {Col, Container, Dropdown, DropdownButton, Modal, Row, Tab, Tabs} from 'react-bootstrap'
import ActiveLink from './ActiveLink';
import headerStyle from './header.module.css';

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
    const options = [
        {
            label: "Red",
            value: "Red",
        },
        {
            label: "Blue",
            value: "Blue",
        },
        {
            label: "White",
            value: "White",
        },
        {
            label: "Brown",
            value: "Brown",
        },
        {
            label: "Black",
            value: "Black",
        },
    ];
    const facadeOption = [
        {
            label: "Black - Standard for RT Models",
            value: "Black",
        },
        {
            label: "Stainless Steel",
            value: "Stainless",
        },

    ];
    const tilesOption = [
        {
            label: "Square",
            value: "Square",
        },
        {
            label: "Penny Round",
            value: "Penny",
        },
        {
            label: "Broken",
            value: "Broken",
        },
        {
            label: "Custom Tiles",
            value: "Custom",
        },
    ]
    const legsOption = [
        {
            label: 'Black',
            value: 'Black'
        },
        {
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
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        confirmEmail:'',
        phone:'',
        address:'',
        city:'',
        state:'',
        country:'',
        product:'',
        file:'',
        message:''
    });

    useEffect(() => {
        window.addEventListener('scroll', checkStickyHeader, {passive: true});
        checkStickyHeader();

        return () => window.removeEventListener("scroll", checkStickyHeader, {passive: true});
    }, []);

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
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('document',JSON.stringify(values));
        // setValues('')
    };
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
                                                    <Dropdown.ItemText>Tile Options</Dropdown.ItemText>
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
                                                    <Dropdown.ItemText>Title Color</Dropdown.ItemText>
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
                                                    <Dropdown.ItemText>select</Dropdown.ItemText>
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
                                                    <Dropdown.ItemText>select</Dropdown.ItemText>
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
                                            <form className='mt-4' onSubmit={handleSubmit} method='POST'>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <input type="text" className="form-control" id="inputFirstName"
                                                               placeholder="First Name" name='firstName' onChange={handleInputChange} value={values.firstName}/>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <input type="text" className="form-control"
                                                               id="inputLastName" placeholder="Last Name" name='lastName' onChange={handleInputChange} value={values.lastName}/>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <input type="email" className="form-control" id="inputEmail"
                                                               placeholder='Enter Email' name='email' onChange={handleInputChange} value={values.email}/>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <input type="email" className="form-control"
                                                               id="inputConfirmEmail" placeholder='Confirm Email' name='confirmEmail' onChange={handleInputChange} value={values.confirmEmail}/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <input type="number" className="form-control" id="phoneNumber"
                                                           placeholder="Phone" name='phone' onChange={handleInputChange} value={values.phone}/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="inputAddress2"
                                                           placeholder="Street Address" name='address' onChange={handleInputChange} value={values.address}/>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <input type="text" className="form-control" id="inputCity"
                                                               placeholder='City' name='city' onChange={handleInputChange} value={values.city}/>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <input type="text" className="form-control"
                                                               id="inputState" placeholder='State/Prov' name='state' onChange={handleInputChange} value={values.state}/>
                                                    </div>
                                                </div>
                                                <div className='form-row'>
                                                    <div className={`${headerStyle.select_wrapper} col-md-6`}>
                                                        <select className={`${headerStyle.select} select`} onChange={handleInputChange} value={values.country} name='country'>
                                                            <option value="Country">Country</option>
                                                            <option value="Canada">Canada</option>
                                                            <option value="Estonia">Estonia</option>
                                                            <option value="India">India</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='form-row'>
                                                    <div className={`${headerStyle.select_wrapper} col-md-6`}>
                                                        <select className={`${headerStyle.select} select`} onChange={handleInputChange} value={values.product} name='product'>
                                                            <option value="grapefruit">Select Product</option>
                                                            <option value="Rotator Brick Oven">Rotator Brick Oven</option>
                                                            <option selected value="Neapolitan Brick Oven">Neapolitan Brick Oven</option>
                                                            <option value="Electric Brick Oven">Electric Brick Oven</option>
                                                            <option value="Due Bocche Brick Oven">Due Bocche Brick Oven</option>
                                                            <option value="Enclosed Facade Brick Oven">Enclosed Facade Brick Oven</option>
                                                            <option value="Marraforni Slicers">Marraforni Slicers</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div style={{backgroundColor: 'rgba( 246, 247, 252, 1.00 )'}}>
                                                    <label htmlFor="exampleFormControlFile1"
                                                           className='font-weight-bold'>Attach Your Screenshots
                                                        :</label>
                                                    <input type="file" className="form-control-file"
                                                           id="exampleFormControlFile1" name='file' onChange={handleInputChange} value={values.file}/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="inputAddress2"
                                                           placeholder="Your Message Here!" name='message' onChange={handleInputChange} value={values.message}/>
                                                </div>
                                                <button type="submit" className={`${headerStyle.button}`}>Submit
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
                                        <Tabs defaultActiveKey="Ovens" id="uncontrolled-tab-example">
                                            <Tab eventKey="Ovens" title="Ovens">
                                                <Row>
                                                    <Col sm={3}>
                                                        <div className={headerStyle.special_product}>
                                                            <Link href="/product/discover-the-rotator-brick-oven">
                                                                <a title="">
                                                                    <img
                                                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/stainless_facade_square_black.webp`}
                                                                        width="200" height="200" alt="Top Product"/>
                                                                    <p>Rotator Brick Oven</p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col sm={9}>
                                                        <div className={headerStyle.rest_product}>
                                                            <ul>
                                                                <li>
                                                                    <Link href="/">
                                                                        <a title="">
                                                                            <img
                                                                                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Blu-Penny-NP.webp`}
                                                                                width="100" height="100"
                                                                                alt="Top Product"/>
                                                                            <p>The Neapolitan</p>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/">
                                                                        <a title="">
                                                                            <img
                                                                                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Due_Bocche_White_Broken.webp`}
                                                                                width="100" height="100"
                                                                                alt="Top Product"/>
                                                                            <p>Due Bocche</p>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/">
                                                                        <a title="">
                                                                            <img
                                                                                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/EL_Square_Blue.webp`}
                                                                                width="100" height="100"
                                                                                alt="Top Product"/>
                                                                            <p>Electric Oven</p>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/">
                                                                        <a title="">
                                                                            <img
                                                                                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Big-Enclosed-BrIck-Oven-Rendering.webp`}
                                                                                width="100" height="100"
                                                                                alt="Top Product"/>
                                                                            <p>Enclosed Facade</p>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/">
                                                                        <a title="">
                                                                            <img
                                                                                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Webp.net-resizeimage-1.webp`}
                                                                                width="100" height="100"
                                                                                alt="Top Product"/>
                                                                            <p>Mobile Trailer</p>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/">
                                                                        <a title="">
                                                                            <img
                                                                                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MS_42-31.webp`}
                                                                                width="100" height="100"
                                                                                alt="Top Product"/>
                                                                            <p>Metal Square</p>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Tab>
                                            <Tab eventKey="Ventilation" title="Ventilation">
                                                <Row>
                                                    <Col sm={3}>
                                                        <div className={headerStyle.special_product}>
                                                            <Link href="/">
                                                                <a title="">
                                                                    <img
                                                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Marra-Forni-Full-Length-integrated-Venting-Pipes.webp`}
                                                                        width="200" height="200" alt="Top Product"/>
                                                                    <p>Venting System</p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col sm={9}>
                                                        <div className={headerStyle.rest_product}>
                                                            <ul>

                                                            </ul>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Tab>
                                            <Tab eventKey="PrepTables" title="Prep Tables">
                                                <Row>
                                                    <Col sm={3}>
                                                        <div className={headerStyle.special_product}>
                                                            <Link href="/">
                                                                <a title="">
                                                                    <img
                                                                        src={`https://marraforni.com/wp/wp-content/uploads/2017/11/Marra-Forni-Three-Door-Pizza-Prep-Table-without-Rail.jpg`}
                                                                        width="200" height="200" alt="Top Product"/>
                                                                    <p>Refrigerated Prep Table</p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col sm={9}>
                                                        <div className={headerStyle.rest_product}>
                                                            <ul>
                                                                <li>
                                                                    <Link href="/">
                                                                        <a title="">
                                                                            <img
                                                                                src={`https://marraforni.com/wp/wp-content/uploads/2017/11/Marra-Forni-Three-Door-Pizza-Prep-Table-with-Rail.jpg`}
                                                                                width="100" height="100"
                                                                                alt="Top Product"/>
                                                                            <p>Refrigerated Condiment Rail</p>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Tab>
                                            <Tab eventKey="Mixers" title="Mixers">
                                                <Row>
                                                    <Col sm={3}>
                                                        <div className={headerStyle.special_product}>
                                                            <Link href="/">
                                                                <a title="">
                                                                    <img
                                                                        src={`https://marraforni.com/wp/wp-content/uploads/2017/11/Marra-Forni-Spiral-Dough-Mixer-IM-model.jpg`}
                                                                        width="200" height="200" alt="Top Product"/>
                                                                    <p>Spiral Dough Mixers</p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col sm={9}>
                                                        <div className={headerStyle.rest_product}>
                                                            <ul>
                                                                <li>
                                                                    <Link href="/">
                                                                        <a title="">
                                                                            <img
                                                                                src={`https://marraforni.com/wp/wp-content/uploads/2017/11/Marra-Forni-Forked-Dough-Mixer.jpg`}
                                                                                width="100" height="100"
                                                                                alt="Top Product"/>
                                                                            <p>Fork Dough Mixers</p>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Tab>
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
                                    <ActiveLink activeClassName="active_menu" href="/connect">
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


export default Header;