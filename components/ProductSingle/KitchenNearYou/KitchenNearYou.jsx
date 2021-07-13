import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {Container, Row, Col} from 'react-bootstrap';
import KitchenNearYouStyle from './KitchenNearYou.module.css';

/**
 * @author
 * @function KitchenNearYou
 **/

const KitchenNearYou = (props) => {
    return (
        <section className={KitchenNearYouStyle.outer}>
            <Container fluid>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8}>
                        <div className='text-center'>
                            <h1>Oven Category</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
                <Row>
                    <Col lg={1}></Col>
                    <Col md={3} className='pt-5 text-right'>
                        <ScrollAnimation duration={2} animateIn="fadeInLeft" animateOnce={true}>
                            <div className={KitchenNearYouStyle.left_side}>
                                <div className="box-left mb-30 mt-10">
                                    <h5 className="title">The Rotator</h5>
                                    <p>View More</p>
                                </div>
                                <span className={`${KitchenNearYouStyle.icon} right ml-4`}>
                            <i className="fa fa-wrench" title="LDAP web app development Company"></i>
                          </span>
                            </div>
                            <div className={KitchenNearYouStyle.left_side}>
                                <div className="box-left mb-30 mt-10">
                                    <h5 className="title">The Neopoliton</h5>
                                    <p>View More</p>
                                </div>
                                <span className={`${KitchenNearYouStyle.icon} right ml-3`}>
                            <i className="fa fa-globe" title="LDAP web app development Company"></i>
                          </span>
                            </div>
                            <div className={KitchenNearYouStyle.left_side}>
                                <div className="box-left mb-30 mt-10">
                                    <h5 className="title">Mobile Trailer</h5>
                                    <p>View More</p>
                                </div>
                                <span className={`${KitchenNearYouStyle.icon} right ml-3`}>
                            <i className="fa fa-cog" title="LDAP web app development Company"></i>
                          </span>
                            </div>
                        </ScrollAnimation>
                    </Col>
                    <Col md={4} className={`${KitchenNearYouStyle.main_img} pt-5`}>
                        <img alt="TouchScreen"
                             src='https://marraforni.com/wp/wp-content/uploads/2020/09/firedupbrewing-banner.png'
                             height='900'/>
                    </Col>
                    <Col md={3} className='pt-5'>
                        <ScrollAnimation duration={2} animateIn="fadeInRight" animateOnce={true}>
                            <div className={KitchenNearYouStyle.right_side}>
                         <span className={`${KitchenNearYouStyle.icon} right mr-3`}>
                           <i className="fa fa-user" title="LDAP web app development Company"></i>
                        </span>
                                <div className="box-left mb-30 mt-10">
                                    <h5 className="title">Metal Square</h5>
                                    <p>View More</p>
                                </div>
                            </div>
                            <div className={KitchenNearYouStyle.right_side}>
                         <span className={`${KitchenNearYouStyle.icon} right mr-3`}>
                           <i className="fa fa-file" title="LDAP web app development Company"></i>
                         </span>
                                <div className="box-left mb-30 mt-10">
                                    <h5 className="title">Electric</h5>
                                    <p>View More</p>
                                </div>
                            </div>
                            <div className={KitchenNearYouStyle.right_side}>
                          <span className={`${KitchenNearYouStyle.icon} right mr-3`}>
                            <i className="fa fa-twitch" title="LDAP web app development Company"></i>
                          </span>
                                <div className="box-left mb-30 mt-10">
                                    <h5 className="title">Pass Through</h5>
                                    <p>View More</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
        </section>
    )
}


export default KitchenNearYou;
{/*<ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={1}>*/
}
{/*  <h3>Want To Try Our Brick Ovens?</h3>*/
}
{/*  <h2>VISIT A TEST KITCHEN NEAR YOU</h2>*/
}
{/*  <p>Marra Forni has multiple test kitchens located across the country. You can take your next authentic Italian wood, gas, and electric brick oven for a spin anytime. Schedule a visit now</p>*/
}
{/*</ScrollAnimation>*/
}
{/*<ScrollAnimation animateOnce={true} animateIn="zoomIn" duration={1}>*/
}
{/*  <ul>*/
}
{/*    <li><button>Washington, DC</button></li>*/
}
{/*    <li><button>Downey, CA</button></li>*/
}
{/*    <li><button>Los Angeles, CA</button></li>*/
}
{/*    <li><button>Denver, CO</button></li>*/
}
{/*    <li><button>Miami, FL</button></li>*/
}
{/*    <li><button>Acworth, GA</button></li>*/
}
{/*    <li><button>Atlanta, GA</button></li>*/
}
{/*    <li><button>Norcross, GA</button></li>*/
}
{/*    <li><button>Southfield, MI</button></li>*/
}
{/*    <li><button>Charlotte, NC</button></li>*/
}
{/*    <li><button>Houston, TX</button></li>*/
}
{/*    <li><button>Fort Erie, ON</button></li>*/
}
{/*    <li><button>Mexico City, MX</button></li>*/
}
{/*    <li><button>Cardano Al Campo (Va), Italy</button></li>*/
}
{/*    <li><button>Dubai, UAE</button></li>*/
}
{/*  </ul>*/
}
{/*</ScrollAnimation>*/
}