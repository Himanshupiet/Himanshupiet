// import React, {useState} from 'react';
// import {Col, Container, Row, Accordion, Card} from 'react-bootstrap'
// import ServiceStyle from './service.module.css'
//
// const Service = () => {
//     return (
//         <>
//           {/*  <div id={ServiceStyle.servies}>
//                 <Container fluid>
//                     <Row id={ServiceStyle.default} className={ServiceStyle.senith_slider}>
//                         <Col lg={1}></Col>
//                         <Col lg={10}>
//                             <Row>
//                                 <Col lg={4}>
//                                     <ul className={ServiceStyle.services_left}>
//                                         <li className={ServiceStyle.highlight} data-index="0">
//                                             <i className={`${ServiceStyle.effect_1} fa fa-edit`}></i>
//                                             <div className={ServiceStyle.fl_inner}>
//                                                 <h4>Wordpress installations</h4>
//                                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting
//                                                     industry.
//                                                     Lorem Ipsum is simply dummy text of the printing and typesetting
//                                                     industry.
//                                                 </p>
//                                             </div>
//                                         </li>
//                                         <li className={ServiceStyle.highlight} data-index="1">
//                                             <i className={`${ServiceStyle.effect_1} fa fa-edit`}></i>
//                                             <div className={ServiceStyle.fl_inner}>
//                                                 <h4>Browser Servies</h4>
//                                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting
//                                                     industry.
//                                                     Lorem Ipsum is simply dummy text of the printing and typesetting
//                                                     industry.
//                                                 </p>
//                                             </div>
//                                         </li>
//                                         <li className={ServiceStyle.highlight} data-index="2">
//                                             <i className={`${ServiceStyle.effect_1} fa fa-edit`}></i>
//                                             <div className={ServiceStyle.fl_inner}>
//                                                 <h4></h4>
//                                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting
//                                                     industry.
//                                                     Lorem Ipsum is simply dummy text of the printing and typesetting
//                                                     industry.
//                                                 </p>
//                                             </div>
//                                         </li>
//                                     </ul>
//                                 </Col>
//                                 <Col lg={4} className={ServiceStyle.highlights_phone}>
//                                     <div className={ServiceStyle.phone_bolder}>
//                                         <div id={ServiceStyle.fon}>
//                                             <div className={`${ServiceStyle.high_linear} ${ServiceStyle.hgi}`} data-index='0'>
//                                                 <img src='https://www.decipherzone.com/assets/mediaset/homepage13/home13-img02.png'/>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </Col>
//                                 <Col lg={4}></Col>
//                             </Row>
//                         </Col>
//                         <Col lg={1}></Col>
//                     </Row>
//                 </Container>*/}
//             {/*</div>*/}
//             <section id={ServiceStyle.page_content}>
//                 <div className={ServiceStyle.page_content_1}>
//                     <div className="container mt-80">
//                         <div className="dg-title22 size-xl">
//                             <h2 className="title">Custom Web App<span> Development Services</span><span
//                                 className="line"></span></h2>
//                         </div>
//                         <p className="width-60 text-center mb-30">We offer easy to scale custom web application
//                             development for all types of businesses with which companies scan automate their work
//                             process and enhance customer experience.</p>
//                         <div className="row col-vertical-center">
//                             <div className="col-md-4 mt-60">
//                                 <div className="dg-iconbox04"><span className="dg-ico05 size-xxl right"> <i
//                                     className="fa fa-user-lock" title="LDAP web app development Company"></i></span>
//                                     <div className="box-left mb-30 mt-10">
//                                         <h5 className="title">LDAP Solution</h5>
//                                         <p><a
//                                             href="https://www.decipherzone.com/light-weight-directory-access-protocol-solutions"
//                                             title="LDAP web app development">VIEW MORE <span
//                                             className="fa fa-angle-double-right"></span></a></p>
//                                     </div>
//                                 </div>
//                                 <div className="dg-iconbox04"><span className="dg-ico05 size-xxl right"> <i
//                                     className="fa fa-chart-growth" title="ERP web app development Company"></i></span>
//                                     <div className="box-left mb-30 mt-10">
//                                         <h5 className="title">(Enterprise Resource Planning) ERP</h5>
//                                         <p><a href="https://www.decipherzone.com/erp-solutions"
//                                               title="ERP web app development">VIEW MORE <span
//                                             className="fa fa-angle-double-right"></span></a></p>
//                                     </div>
//                                 </div>
//                                 <div className="dg-iconbox04"><span className="dg-ico05 size-xxl right"> <i
//                                     className="fa fa-handshake-o" title="CRM web app development Company"></i></span>
//                                     <div className="box-left mb-30 mt-10">
//                                         <h5 className="title">(Customer Relation Management) CRM</h5>
//                                         <p><a href="https://www.decipherzone.com/crm-solutions"
//                                               title="CRM web app development">VIEW MORE <span
//                                             className="fa fa-angle-double-right"></span></a></p>
//                                     </div>
//                                 </div>
//                                 <div className="dg-iconbox04"><span className="dg-ico05 size-xxl right"> <i
//                                     className="fa fa-cog2" title="CMS web app development Company"></i></span>
//                                     <div className="box-left mb-30 mt-10">
//                                         <h5 className="title">CMS (Open Source)</h5>
//                                         <p><a href="https://www.decipherzone.com/cms-solutions"
//                                               title="CMS web app development">VIEW MORE <span
//                                             className="fa fa-angle-double-right"></span></a></p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-md-4 text-center">
//                                 <div className="home13-images-water"><img alt="Web App Development Company"
//                                                                           src="https://www.decipherzone.com/assets/mediaset/homepage13/home13-img02.png"
//                                                                           className="img-responsive"/>
//                                     <div className="water">
//                                         <div className="dot"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-md-4 mt-60">
//                                 <div className="dg-iconbox04"><span className="dg-ico05 size-xxl left"> <i
//                                     className="fa fa-pie-chart2" title="data analytics web app development Company"></i></span>
//                                     <div className="box-right mb-30 mt-10">
//                                         <h5 className="title">Data Analytics</h5>
//                                         <p><a href="https://www.decipherzone.com/data-analytic-solutions"
//                                               title="data analytics web app development">VIEW MORE <span
//                                             className="fa fa-angle-double-right"></span></a></p>
//                                     </div>
//                                 </div>
//                                 <div className="dg-iconbox04"><span className="dg-ico05 size-xxl left"> <i
//                                     className="fa fa-wrench" title="On Demand web app development Company"></i></span>
//                                     <div className="box-right mb-30 mt-10">
//                                         <h5 className="title">On Demand Solution</h5>
//                                         <p><a href="https://www.decipherzone.com/on-demand-solutions"
//                                               title="On Demand web app development">VIEW MORE <span
//                                             className="fa fa-angle-double-right"></span></a></p>
//                                     </div>
//                                 </div>
//                                 <div className="dg-iconbox04"><span className="dg-ico05 size-xxl left"> <i
//                                     className="fa fa-network" title="Social Networking web app development Company"></i></span>
//                                     <div className="box-right mb-30 mt-10">
//                                         <h5 className="title">Social Networking</h5>
//                                         <p><a href="https://www.decipherzone.com/social-networking-solutions"
//                                               title="Social Networking web app development">VIEW MORE <span
//                                             className="fa fa-angle-double-right"></span></a></p>
//                                     </div>
//                                 </div>
//                                 <div className="dg-iconbox04"><span className="dg-ico05 size-xxl left"> <i
//                                     className="fa fa-ticket"
//                                     title="Event Ticketing web app development Company"></i></span>
//                                     <div className="box-right mb-30 mt-10">
//                                         <h5 className="title">Event &amp; Tickets</h5>
//                                         <p><a href="https://www.decipherzone.com/event-tickets-solutions"
//                                               title="Event Ticketing web app development">VIEW MORE <span
//                                             className="fa fa-angle-double-right"></span></a></p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="home15-newslist row-display-table clearfix">
//                     <div className="col-sm-4">
//                         <div className="newsbox">
//                             <div className="number">01</div>
//                             <h4 className="pb-10">Multilingual Ready</h4>
//                             <p className="mb-20">Web applications can be made multilingual ready just like standalone
//                                 software. In web application development developers can check geographical location or
//                                 client system’s language preference to load the appropriate language version of web
//                                 application.</p>
//                             <p><a href="https://www.decipherzone.com/#" className="dg-btn-2 btn-accent radius-3px"
//                                   title="Web App Development Company India">LEARN MORE</a></p>
//                         </div>
//                     </div>
//                     <div className="col-sm-4">
//                         <div className="newsbox">
//                             <div className="number">02</div>
//                             <h4 className="pb-10">Extensive Functions</h4>
//                             <p className="mb-20">Usually web applications offer extensive functions and features than
//                                 standalone software because these are easily scalable. The responsive design, continuous
//                                 development and deployment process keeps on extending the features of web apps to stay
//                                 competitive. </p>
//                             <p><a href="https://www.decipherzone.com/#" className="dg-btn-2 btn-accent radius-3px"
//                                   title="Web App Development Company India">LEARN MORE</a></p>
//                         </div>
//                     </div>
//                     <div className="col-sm-4">
//                         <div className="newsbox">
//                             <div className="number">03</div>
//                             <h4 className="pb-10">Uncluttered Layout</h4>
//                             <p className="mb-20">Creating uncluttered responsive web designs with HTML5, CSS3, material
//                                 design for bootstrap and many more. Following KISS (Keep it stupid simple) principle in
//                                 our web application development process to reduce the learning curve for consumers at
//                                 all levels.</p>
//                             <p><a href="https://www.decipherzone.com/#" className="dg-btn-2 btn-accent radius-3px"
//                                   title="Web App Development Company India">LEARN MORE</a></p>
//                         </div>
//                     </div>
//                 </div>
//
//                 <ul className="home06-area color-white">
//                     <li className="bg-accent3  bg-accent3-a">
//                         <div className="dg-title10">
//                             <small>Making Your workplace efficient with custom web applications.</small>
//                             <h3>Describing Decipher Zone's Web App Development Team!</h3>
//                         </div>
//                         <p className="mb-20">Our brain storming thought process, improvisation with agile scrum
//                             principles,
//                             extensive experience in java development and front end development makes us a frontline
//                             custom web application development company.
//                         </p>
//                         <p className="mb-30">Our IT Professional service is committed to undertake projects based on web
//                             development technology competence and know-how abilities.
//                             We strive to improve your capability, help you achieve your objectives in minimum time
//                             possible, in a cost effective way and by providing a well responsive Quality web
//                             applications.
//                         </p>
//                         <p><a className="dg-btn-2 radius-3px btn-white hover-black"
//                               href="https://www.decipherzone.com/hire-java-developer" title="Hire Web app developers">LEARN
//                             MORE</a></p>
//                     </li>
//                     <li className="bg-accent4">
//                         <div className="dg-iconbox04"><span className="dg-ico02 size-xs left color-white"><i
//                             className="fa fa-users22" title="Solid web app development team"></i></span>
//                             <div className="box-right">
//                                 <h6 className="title color-white">Solid team</h6>
//                                 <p>Experienced team of web designers and developers who are the creator of the
//                                     successfully
//                                     delivered mobile and web applications.</p>
//                             </div>
//                         </div>
//                         <div className="dg-iconbox04"><span className="dg-ico02 size-xs left color-white"><i
//                             className="fa fa-cog22" title="Web app development Service"></i></span>
//                             <div className="box-right">
//                                 <h6 className="title color-white">Best Service</h6>
//                                 <p>With our java web application development services we solve the problems for our
//                                     clients help them in finding their niche.</p>
//                             </div>
//                         </div>
//                         <div className="dg-iconbox04"><span className="dg-ico02 size-xs left color-white"><i
//                             className="fa fa-trophy22" title="Web app development Solutions for business"></i></span>
//                             <div className="box-right">
//                                 <h6 className="title color-white">Business Solutions &amp; High loyalty</h6>
//                                 <p>We are adamant to deliver high quality code which draws the best performance out of
//                                     mobile and web applications. Our hard work consequences in having long term
//                                     relationship with our clients and brings the
//                                     loyalty as a prime feature.</p>
//                             </div>
//                         </div>
//                     </li>
//                     <li className="imgbg-cover"
//                         style={{backgroundImage: zurl(&quot;https://www.decipherzone.com/assets/mediaset/pages-images/m-bg.png&quot;);">
//                         <div className="dg-iconbox04"><span className="dg-ico02 size-xs left color-white"><i
//                             className="fa fa-users" title="Hire Web app development Company"></i></span>
//                             <div className="box-right">
//                                 <h6 className="title color-white">HIRE US</h6>
//                                 <p><em>For Complete Project</em></p>
//                                 <p><a className="dg-btn-2 radius-3px btn-white hover-black"
//                                       href="https://www.decipherzone.com/contact-IT-company">CONTACT US
//                                 </a></p>
//                             </div>
//                         </div>
//
//                         <div className="dg-iconbox04"><span className="dg-ico02 size-xs left color-white"><i
//                             className="fa fa-product-hunt" title="Hire Web app developers"></i></span>
//                             <div className="box-right">
//                                 <h6 className="title color-white">HAVE THE</h6>
//                                 <p><em>Full Control Hire Developer</em></p>
//                                 <p><a className="dg-btn-2 radius-3px btn-white hover-black"
//                                       href="https://www.decipherzone.com/hire-developer"
//                                       title="Hire Web app developers">HIRE DEVELOPERS
//                                 </a></p>
//                             </div>
//                         </div>
//                     </li>
//                 </ul>
//
//                 <div className="container pt-80">
//                     <div className="dg-title07 text-center">
//                         <h3 className="title">TAKE YOUR BUSINESS TO NEXT LEVEL WITH CUSTOM WEB APPLICATION DEVELOPMENT
//                             COMPANY</h3>
//                         <small>Only few web apps are designed good, With us you can make sure yours's is one among
//                             them.</small></div>
//                     <div className="row pt-30">
//                         <div className="col-md-6">
//                             <div className="dg-iconbox06"><span className="dg-ico-max color-accent size-xs left"> <i
//                                 className="fa fa-menu3" title="Web app development Company India"></i></span>
//                                 <div className="box-right">
//                                     <h6 className="title">Web Design &amp; UI</h6>
//                                     <p>Our modus operandi is gorgeous web designs in web application development with
//                                         Clean, responsive and user friendly UI which plays key role in gaining and
//                                         retaining customers.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-6">
//                             <div className="dg-iconbox06"><span className="dg-ico-max color-accent size-xs left"> <i
//                                 className="fa fa-register" title="Web app development Company India"></i></span>
//                                 <div className="box-right">
//                                     <h6 className="title">Web Development &amp; CMS</h6>
//                                     <p>The Content management system is an inevitable part in modern web application
//                                         development which allows the administrator to customize the content and design
//                                         anytime with ease.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-6">
//                             <div className="dg-iconbox06"><span className="dg-ico-max color-accent size-xs left"> <i
//                                 className="fa fa-hammer-wrench" title="Web app development Company India"></i></span>
//                                 <div className="box-right">
//                                     <h6 className="title">Easy Installation</h6>
//                                     <p className="mt-5 mb-10">For web applications, the deployment and configuration are
//                                         done on web server by developers but it is a one-time task. The updates are
//                                         patched on the web server so the end user always have the latest version to
//                                         use.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-6">
//                             <div className="dg-iconbox06"><span className="dg-ico-max color-accent size-xs left"> <i
//                                 className="fa  fa-star2" title="Web app development Company India"></i></span>
//                                 <div className="box-right">
//                                     <h6 className="title">Trusted Expert Support</h6>
//                                     <p>Our well versed highly experienced web application developers are available round
//                                         the clock for support. Whether you want full-stack, back end, front end
//                                         developer or a Quality analyst you just name it we have it.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="home01-imginfo text-center pb-80 pt-80">
//                     <div className="imginfo">
//                         <div className="container">
//                             <div className="dg-title42 text-center mb-10">RESPONSIVE DESIGN</div>
//                             <p>
//                                 <span className="fa fa-smartphone"></span>
//                                 <span className="fa fa-tablet22"></span>
//                                 <span className="fa fa-laptop2"></span>
//                             </p>
//                             <p className="width-75">Our website’s theme is 100% ultra-responsive built on cutting-edge
//                                 twitter bootstrap framework,
//                                 which absolutely makes our site look fantastic and work well on any high pixel density
//                                 devices.
//                                 You can incorporate these features into your web application too.
//                                 A progressive and responsive web app can work as good as a native application in most of
//                                 the cases on a fraction of the cost.
//                                 Why to spend extra bucks on native software applications?</p>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="home02-bg01 pt-60">
//                     <div className="container clearfix pb-80">
//                         <div className="row">
//                             <div className="col-md-12 pr-50">
//                                 <h2 className="dg-title30">What makes us perfect web application development partner for
//                                     you?</h2>
//                                 <p className="pb-20">Web application development is not just a process it is a journey
//                                     which can never be enjoyed without a perfect partner.
//                                     If you want the following qualities in your partner then choose us:</p>
//                                 <div className="col-md-6 col-sm-12">
//                                     <div className="dg-iconbox04 dg-iconbox"><span className="dg-ico01 size-xs left"><i
//                                         className="fa fa-palette" title="Web app development Company India"></i> </span>
//                                         <div className="box-right">
//                                             <h3 className="title">Niche Web Designers</h3>
//                                             <p>Our designers have more than 5 years of experience in web designing, they
//                                                 have hands on experience of
//                                                 HTML5, CSS3, JavaScript, jQuery, bootstrap, material layout, Adobe
//                                                 Photoshop, Illustrator and many more.</p>
//                                         </div>
//                                     </div>
//                                     <div className="dg-iconbox04 dg-iconbox"><span className="dg-ico01 size-xs left"><i
//                                         className="fa fa-thumbs-up2"
//                                         title="Web app development Company India"></i> </span>
//                                         <div className="box-right">
//                                             <h3 className="title">Extensive focus on UX</h3>
//                                             <p>Whether it is clean UI for goal clarification, colour psychology for user
//                                                 interaction, level of pages, fault tolerant system or performance over
//                                                 presentation we take care of everything in web application development
//                                                 that can hinder the user experience.</p>
//                                         </div>
//                                     </div>
//                                     <div className="dg-iconbox04 dg-iconbox"><span className="dg-ico01 size-xs left"><i
//                                         className="fa fa-hdd-down"
//                                         title="Web app development Company India"></i> </span>
//                                         <div className="box-right">
//                                             <h3 className="title">Use of latest tech stack</h3>
//                                             <p>Being a web application development company derives the sense of
//                                                 responsibility on our shoulders to derive the best performance, support
//                                                 to latest software and hardware.
//                                                 Therefore, we prefer to use the latest versions of web development
//                                                 frameworks and new proven web technologies in our projects.</p>
//                                         </div>
//                                     </div>
//                                 </div>
//
//                                 <div className="col-md-6 col-sm-12">
//                                     <div className="dg-iconbox04 dg-iconbox"><span className="dg-ico01 size-xs left"><i
//                                         className="fa fa-palette" title="Web app development Company India"></i> </span>
//                                         <div className="box-right">
//                                             <h3 className="title">Highly optimized Code</h3>
//                                             <p>Every web developer can write code in web application development process
//                                                 but our developers focus on writing optimized code and suitable
//                                                 deployment that draws the best performance and user experience from a
//                                                 web application.</p>
//                                         </div>
//                                     </div>
//                                     <div className="dg-iconbox04 dg-iconbox"><span className="dg-ico01 size-xs left"><i
//                                         className="fa fa-thumbs-up2"
//                                         title="Web app development Company India"></i> </span>
//                                         <div className="box-right">
//                                             <h3 className="title">3 months warranty</h3>
//                                             <p>We offer 3 months of warranty on complete web application development
//                                                 done by us. Within this warranty we cover bug fixation in the delivered
//                                                 product free of cost, only the development of further extension of
//                                                 features will be charged.</p>
//                                         </div>
//                                     </div>
//                                     <div className="dg-iconbox04 dg-iconbox"><span className="dg-ico01 size-xs left"><i
//                                         className="fa fa-hdd-down"
//                                         title="Web app development Company India"></i> </span>
//                                         <div className="box-right">
//                                             <h3 className="title">5-Star tech Support</h3>
//                                             <p>Our web application development team consisting web app developers, dev
//                                                 ops engineers, software architects, business analysts, project managers
//                                                 and quality analysts are available for all the time zones to solve
//                                                 problems with your existing web applications and 5-star tech support in
//                                                 terms of technical consultation.</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="home13-bg06 pt-60 pb-50 color-white" style="margin-top: -20px">
//                     <div className="container">
//                         <h2 className="mb-20 text-center">Quick Connect, Let us know your IT needs!!</h2>
//                         <form id="coNn3ct74Dz19TouChAg21n" method="POST">
//                             <ul className="dg-form-content08">
//                                 <li>
//                                     <div className="form-row">
//                                         <input id="name" type="text" name="flvname" className="flvname"
//                                                placeholder="Your Name"/>
//                                     </div>
//                                 </li>
//                                 <li>
//                                     <div className="form-row">
//                                         <input id="Email" type="text" name="flvemail" className="flvname"
//                                                placeholder="Your Email"/>
//                                     </div>
//                                 </li>
//                                 <li>
//                                     <div className="form-row">
//                                         <input id="message" type="text" name="flvmessage" className="flvname"
//                                                placeholder="Your Message"/>
//                                     </div>
//                                 </li>
//                                 <li>
//                                     <div className="form-row">
//                                         <div className="g-recaptcha brochure__form__captcha"
//                                              data-sitekey="6LeYlLEZAAAAAOslI3bUOpZp1JtrB5TQBbt10nQp"
//                                              data-callback="onSubmit">
//                                             <div style="width: 304px; height: 78px;">
//                                                 <div>
//                                                     <iframe title="reCAPTCHA"
//                                                             src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeYlLEZAAAAAOslI3bUOpZp1JtrB5TQBbt10nQp&amp;co=aHR0cHM6Ly93d3cuZGVjaXBoZXJ6b25lLmNvbTo0NDM.&amp;hl=en&amp;v=TbD3vPFlUWKZD-9L4ZxB0HJI&amp;size=normal&amp;cb=5hprmrtn5ax8"
//                                                             width="304" height="78" role="presentation"
//                                                             name="a-s4oc3ibkm3k" frameBorder="0" scrolling="no"
//                                                             sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
//                                                 </div>
//                                                 <textarea id="g-recaptcha-response" name="g-recaptcha-response"
//                                                           className="g-recaptcha-response"
//                                                           style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </li>
//                                 <li>
//                                     <input type="submit" name="submit" title="SUBSCRIBE" value="GET IN TOUCH"
//                                            className="btn dg-btn-1" id="subMail" disabled="disabled"/>
//                                 </li>
//                             </ul>
//                             <p className="text-center"><i>**Join us as business partners and get many benefits.**</i>
//                             </p>
//                         </form>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }
// export default Service

import React, {useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import ServiceStyle from './service.module.css'
import MainHomePageStyle from "../index.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import {TabProvider, Tab, TabPanel, TabList} from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';

const Service = () => {
    return (
        <>
            <Container fluid className={MainHomePageStyle.quoteform_outer}>
                {/*<Row>*/}
                {/*    <Col lg={1}></Col>*/}
                {/*    <Col lg={10}>*/}
                {/*        <div className='text-center'>*/}
                {/*            <h1 className='text-white pb-5'>HIRE DEVELOPERS TECHNOLOGIES</h1>*/}
                {/*        </div>*/}
                {/*    </Col>*/}
                {/*    <Col lg={1}></Col>*/}
                {/*</Row>*/}
                {/*<Row>*/}
                {/*    <Col lg={1}></Col>*/}
                {/*    <Col lg={10}>*/}
                {/*        <Row>*/}
                {/*            <Col lg={12}>*/}
                {/*                <Row className={ServiceStyle.sidebar}>*/}
                {/*                    /!*<Col lg={4} className='pr-0'>*!/*/}
                {/*                    /!*    <ul className="list-group rounded-0">*!/*/}
                {/*                    /!*        <li className="list-group-item border-right-0"*!/*/}
                {/*                    /!*            style={{borderLeft: '3px solid #e31422',backgroundColor:'white'}}>*!/*/}
                {/*                    /!*            <span className='fa fa-desktop fa-1x'></span>*!/*/}
                {/*                    /!*            <span className='pl-3'>Web Technologies</span>*!/*/}
                {/*                    /!*        </li>*!/*/}
                {/*                    /!*        <li className="list-group-item">*!/*/}
                {/*                    /!*            <span className='fa fa-paper-plane'></span>*!/*/}
                {/*                    /!*            <span className='pl-3'>JAVASCRIPT FRAMEWORK</span>*!/*/}
                {/*                    /!*        </li>*!/*/}
                {/*                    /!*        <li className="list-group-item">*!/*/}
                {/*                    /!*            <i className='fa fa-database'></i>*!/*/}
                {/*                    /!*            <span className='pl-3'>DATABASE</span>*!/*/}
                {/*                    /!*        </li>*!/*/}
                {/*                    /!*        <li className="list-group-item">*!/*/}
                {/*                    /!*            <i className='fa fa-paint-brush'></i>*!/*/}
                {/*                    /!*            <span className='pl-3'>UI/UX</span>*!/*/}
                {/*                    /!*        </li>*!/*/}
                {/*                    /!*        <li className="list-group-item">*!/*/}
                {/*                    /!*            <i className='fa fa-mobile fa-1x'></i>*!/*/}
                {/*                    /!*            <span className='pl-3'>MOBILE TECHNOLOGIES</span>*!/*/}
                {/*                    /!*        </li>*!/*/}
                {/*                    /!*        <li className="list-group-item">*!/*/}
                {/*                    /!*            <i className='fa fa-wrench'></i>*!/*/}
                {/*                    /!*            <span className='pl-3'>MANAGEMENT TOOLS</span>*!/*/}
                {/*                    /!*        </li>*!/*/}
                {/*                    /!*        /!*<li className="list-group-item">*!/*!/*/}
                {/*                    /!*        /!*    <span></span>*!/*!/*/}
                {/*                    /!*        /!*</li>*!/*!/*/}
                {/*                    /!*        /!*<li className="list-group-item">*!/*!/*/}
                {/*                    /!*        /!*    <span></span>*!/*!/*/}
                {/*                    /!*        /!*</li>*!/*!/*/}
                {/*                    /!*    </ul>*!/*/}
                {/*                    /!*</Col>*!/*/}
                {/*                    /!*<ScrollAnimation*!/*/}
                {/*                    /!*    duration={1}*!/*/}
                {/*                    /!*    animateIn='fadeInUp'*!/*/}
                {/*                    /!*    animateOnce={true}*!/*/}
                {/*                    /!*>*!/*/}
                {/*                    /!*    <Col lg={12} style={{backgroundColor: 'white'}}>*!/*/}
                {/*                    /!*        <Row>*!/*/}
                {/*                    /!*            <Col lg={12} className='p-0'>*!/*/}
                {/*                    /!*                <div className={ServiceStyle.main_style}>*!/*/}
                {/*                    /!*                    <TabProvider defaultTab="one">*!/*/}
                {/*                    /!*                        <section className="my-tabs">*!/*/}
                {/*                    /!*                            <TabList className="my-tablist">*!/*/}
                {/*                    /!*                                /!*<Tab tabFor="Ovens">Ovens</Tab>*!/*!/*/}
                {/*                    /!*                                <Tab tabFor="Prep Tables">Prep Tables</Tab>*!/*/}
                {/*                    /!*                                <Tab tabFor="Rotation Timer">Rotation Timer</Tab>*!/*/}
                {/*                    /!*                                <Tab tabFor="Ventilation">Ventilation</Tab>*!/*/}
                {/*                    /!*                                <Tab tabFor="Mixers">Mixers</Tab>*!/*/}
                {/*                    /!*                                <Tab tabFor="Flywheel Slicer">Flywheel Slicer</Tab>*!/*/}
                {/*                    /!*                                /!*<Tab tabFor="Flywheel Slicer" className="my-tab">Flywheel Slicer</Tab>*!/*!/*/}
                {/*                    /!*                            </TabList>*!/*/}
                {/*                    /!*                            <div className="wrapper">*!/*/}
                {/*                    /!*                                /!*<TabPanel tabId="Ovens">*!/*!/*/}
                {/*                    /!*                                /!*    /!*<p>Tab 1 content</p>*!/*!/*!/*/}
                {/*                    /!*                                /!*</TabPanel>*!/*!/*/}
                {/*                    /!*                                <TabPanel tabId="Prep Tables">*!/*/}
                {/*                    /!*                                    /!*<p>Tab 2 content</p>*!/*!/*/}
                {/*                    /!*                                </TabPanel>*!/*/}
                {/*                    /!*                                <TabPanel tabId="Rotation Timer">*!/*/}
                {/*                    /!*                                    /!*<p>Tab 3 content</p>*!/*!/*/}
                {/*                    /!*                                </TabPanel>*!/*/}
                {/*                    /!*                                <TabPanel tabId="Ventilation">*!/*/}
                {/*                    /!*                                    /!*<p>Tab 3 content</p>*!/*!/*/}
                {/*                    /!*                                </TabPanel>*!/*/}
                {/*                    /!*                                <TabPanel tabId="Mixers">*!/*/}
                {/*                    /!*                                    /!*<p>Tab 3 content</p>*!/*!/*/}
                {/*                    /!*                                </TabPanel>*!/*/}
                {/*                    /!*                                <TabPanel tabId="Flywheel Slicer">*!/*/}
                {/*                    /!*                                    /!*<p>Tab 3 content</p>*!/*!/*/}
                {/*                    /!*                                </TabPanel>*!/*/}
                {/*                    /!*                            </div>*!/*/}
                {/*                    /!*                        </section>*!/*/}
                {/*                    /!*                    </TabProvider>*!/*/}
                {/*                    /!*                </div>*!/*/}
                {/*                    /!*            </Col>*!/*/}
                {/*                    /!*        </Row>*!/*/}
                {/*                            <Row className='pl-4 pr-4 pt-3'>*/}
                {/*                                <Col lg={3}>*/}
                {/*                                    <div*/}
                {/*                                        className={`${ServiceStyle.panel}  ${ServiceStyle.panel_flat} ${ServiceStyle.border_accent} ${ServiceStyle.panel_border_bottom}`}>*/}
                {/*                                        <div className={ServiceStyle.panel_heading}>Rigid Touchscreen*/}
                {/*                                        </div>*/}
                {/*                                        <div className={ServiceStyle.panel_body}><img*/}
                {/*                                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>*/}
                {/*                                        </div>*/}
                {/*                                    </div>*/}
                {/*                                </Col>*/}
                {/*                                <Col lg={3}>*/}
                {/*                                    <div*/}
                {/*                                        className={`${ServiceStyle.panel}  ${ServiceStyle.panel_flat} ${ServiceStyle.border_accent} ${ServiceStyle.panel_border_bottom}`}>*/}
                {/*                                        <div className={ServiceStyle.panel_heading}>Rotation Timer</div>*/}
                {/*                                        <div className={ServiceStyle.panel_body}><img*/}
                {/*                                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>*/}
                {/*                                        </div>*/}
                {/*                                    </div>*/}
                {/*                                </Col>*/}
                {/*                                <Col lg={3}>*/}
                {/*                                    <div*/}
                {/*                                        className={`${ServiceStyle.panel}  ${ServiceStyle.panel_flat} ${ServiceStyle.border_accent} ${ServiceStyle.panel_border_bottom}`}>*/}
                {/*                                        <div className={ServiceStyle.panel_heading}>Fallsafe Levers*/}
                {/*                                        </div>*/}
                {/*                                        <div className={ServiceStyle.panel_body}>*/}
                {/*                                            <img*/}
                {/*                                                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>*/}
                {/*                                        </div>*/}
                {/*                                    </div>*/}
                {/*                                </Col>*/}
                {/*                                <Col lg={3}>*/}
                {/*                                    <div*/}
                {/*                                        className={`${ServiceStyle.panel}  ${ServiceStyle.panel_flat} ${ServiceStyle.border_accent} ${ServiceStyle.panel_border_bottom}`}>*/}
                {/*                                        <div className={ServiceStyle.panel_heading}>Rotating Dock</div>*/}
                {/*                                        <div className={ServiceStyle.panel_body}><img*/}
                {/*                                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>*/}
                {/*                                        </div>*/}
                {/*                                    </div>*/}
                {/*                                </Col>*/}
                {/*                            </Row>*/}
                {/*                            <Row className='pt-2 pl-4 pr-4'>*/}
                {/*                                <Col lg={3}>*/}
                {/*                                    <div*/}
                {/*                                        className={`${ServiceStyle.panel}  ${ServiceStyle.panel_flat} ${ServiceStyle.border_accent} ${ServiceStyle.panel_border_bottom}`}>*/}
                {/*                                        <div className={ServiceStyle.panel_heading}>Plug & Play</div>*/}
                {/*                                        <div className={ServiceStyle.panel_body}><img*/}
                {/*                                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>*/}
                {/*                                        </div>*/}
                {/*                                    </div>*/}
                {/*                                </Col>*/}
                {/*                                <Col lg={3}>*/}
                {/*                                    <div*/}
                {/*                                        className={`${ServiceStyle.panel}  ${ServiceStyle.panel_flat} ${ServiceStyle.border_accent} ${ServiceStyle.panel_border_bottom}`}>*/}
                {/*                                        <div className={ServiceStyle.panel_heading}>Made of Bricks</div>*/}
                {/*                                        <div className={ServiceStyle.panel_body}><img*/}
                {/*                                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>*/}
                {/*                                        </div>*/}
                {/*                                    </div>*/}
                {/*                                </Col>*/}
                {/*                                <Col lg={3}>*/}
                {/*                                    <div*/}
                {/*                                        className={`${ServiceStyle.panel}  ${ServiceStyle.panel_flat} ${ServiceStyle.border_accent} ${ServiceStyle.panel_border_bottom}`}>*/}
                {/*                                        <div className={ServiceStyle.panel_heading}>25 years warrenty*/}
                {/*                                        </div>*/}
                {/*                                        <div className={ServiceStyle.panel_body}><img*/}
                {/*                                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>*/}
                {/*                                        </div>*/}
                {/*                                    </div>*/}
                {/*                                </Col>*/}
                {/*                                <Col lg={3}>*/}
                {/*                                    <div*/}
                {/*                                        className={`${ServiceStyle.panel}  ${ServiceStyle.panel_flat} ${ServiceStyle.border_accent} ${ServiceStyle.panel_border_bottom}`}>*/}
                {/*                                        <div className={ServiceStyle.panel_heading}>Hybrid Fuel System*/}
                {/*                                        </div>*/}
                {/*                                        <div className={ServiceStyle.panel_body}><img*/}
                {/*                                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>*/}
                {/*                                        </div>*/}
                {/*                                    </div>*/}
                {/*                                </Col>*/}
                {/*                            </Row>*/}
                {/*                        </Col>*/}
                {/*                    </ScrollAnimation>*/}
                {/*                </Row>*/}
                {/*            </Col>*/}
                {/*            <Col lg={1}></Col>*/}
                {/*        </Row>*/}
                {/*    </Col>*/}
                {/*    /!*<Col lg={1}></Col>*!/*/}
                {/*</Row>*/}
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <ScrollAnimation duration={1}
                                         animateIn='fadeInUp'
                                         animateOnce={true}>
                            <Row>
                                <Col lg={3} className={`${ServiceStyle.side_set} pr-0`}>
                                    <ul className="list-group rounded-0">
                                        <li className="list-group-item"
                                            // style={{borderLeft: '3px solid #e31422', backgroundColor: 'white'}}
                                        >
                                            <i className='fa fa-desktop fa-1x'></i>
                                            <span className='pl-3'>Ovens</span>
                                        </li>
                                        <li className="list-group-item">
                                            <i className='fa fa-paper-plane'></i>
                                            <span className='pl-3'>Prep Tables</span>
                                        </li>
                                        {/*<li className="list-group-item">*/}
                                        {/*    <i className='fa fa-database'></i>*/}
                                        {/*    <span className='pl-3'>Rotation Timer</span>*/}
                                        {/*</li>*/}
                                        <li className="list-group-item">
                                            <i className='fa fa-paint-brush'></i>
                                            <span className='pl-3'>Ventilation</span>
                                        </li>
                                        <li className="list-group-item">
                                            <i className='fa fa-mobile fa-1x'></i>
                                            <span className='pl-3'>Mixers</span>
                                        </li>
                                        <li className="list-group-item">
                                            <i className='fa fa-wrench'></i>
                                            <span className='pl-3'>Slicers</span>
                                        </li>
                                        <li className="list-group-item">
                                            <i className='fa fa-database'></i>
                                            <span className='pl-3'>Tools</span>
                                        </li>
                                    </ul>
                                </Col>
                                <Col lg={9} style={{backgroundColor: 'white'}} className='pl-0'>
                                    <Row className='pt-5 pl-4 pr-4'>
                                        <Col lg={3}>
                                            <div
                                                className={`${ServiceStyle.panel}  ${ServiceStyle.panel_flat} ${ServiceStyle.border_accent} ${ServiceStyle.panel_border_bottom}`}>
                                                <div className={ServiceStyle.panel_heading}>Rigid Touchscreen
                                                </div>
                                                <div className={ServiceStyle.panel_body}><img
                                                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div
                                                className={`${ServiceStyle.panel}  ${ServiceStyle.panel_flat} ${ServiceStyle.border_accent} ${ServiceStyle.panel_border_bottom}`}>
                                                <div className={ServiceStyle.panel_heading}>Rotation Timer</div>
                                                <div className={ServiceStyle.panel_body}><img
                                                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div
                                                className={`${ServiceStyle.panel}  ${ServiceStyle.panel_flat} ${ServiceStyle.border_accent} ${ServiceStyle.panel_border_bottom}`}>
                                                <div className={ServiceStyle.panel_heading}>Fallsafe Levers
                                                </div>
                                                <div className={ServiceStyle.panel_body}>
                                                    <img
                                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div
                                                className={`${ServiceStyle.panel}  ${ServiceStyle.panel_flat} ${ServiceStyle.border_accent} ${ServiceStyle.panel_border_bottom}`}>
                                                <div className={ServiceStyle.panel_heading}>Rotating Dock</div>
                                                <div className={ServiceStyle.panel_body}><img
                                                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className='pt-2 pl-4 pr-4'>
                                        <Col lg={3}>
                                            <div
                                                className={`${ServiceStyle.panel}  ${ServiceStyle.panel_flat} ${ServiceStyle.border_accent} ${ServiceStyle.panel_border_bottom}`}>
                                                <div className={ServiceStyle.panel_heading}>Plug & Play
                                                </div>
                                                <div className={ServiceStyle.panel_body}><img
                                                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div
                                                className={`${ServiceStyle.panel}  ${ServiceStyle.panel_flat} ${ServiceStyle.border_accent} ${ServiceStyle.panel_border_bottom}`}>
                                                <div className={ServiceStyle.panel_heading}>Made of Bricks</div>
                                                <div className={ServiceStyle.panel_body}><img
                                                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div
                                                className={`${ServiceStyle.panel}  ${ServiceStyle.panel_flat} ${ServiceStyle.border_accent} ${ServiceStyle.panel_border_bottom}`}>
                                                <div className={ServiceStyle.panel_heading}>25 years warrenty
                                                </div>
                                                <div className={ServiceStyle.panel_body}>
                                                    <img
                                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div
                                                className={`${ServiceStyle.panel}  ${ServiceStyle.panel_flat} ${ServiceStyle.border_accent} ${ServiceStyle.panel_border_bottom}`}>
                                                <div className={ServiceStyle.panel_heading}>Hybrid Fuel System</div>
                                                <div className={ServiceStyle.panel_body}><img
                                                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/MF-Brand-Layout-Designs.png`}/>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </ScrollAnimation>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
        </>
    )
}
export default Service
