import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import BlogStyle from './Blog.module.css'


const Blog = (props) => {
    return (
        <>
            <div style={{
                height:'300px',
                backgroundImage:`url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/resource_banner.png)`,
                backgroundRepeat:'no-repeat',
                backgroundAttachment:'fixed',
                backgroundSize:'cover',
                backgroundPosition: 'center'
            }}/>
            {/*<Container fluid className='bg-light'>*/}
            {/*    <Row>*/}
            {/*        <Col md={12}>*/}
            {/*            <div className="title text-center">*/}
            {/*                <h1>Blog Standard</h1>*/}
            {/*                <p>Home > Blog Standard</p>*/}
            {/*            </div>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</Container>*/}
            <Container fluid className='mb-5 mt-5'>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <Row>
                            <Col lg={9}>
                                <div className="card border-0">
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-img-1.jpg`}
                                        className={BlogStyle.blog_img}
                                    />
                                    <div className={`${BlogStyle.blog_content} card-body p-4 border`}>
                                        <h2 className={`${BlogStyle.card_title} card-title`}>What Your Browser Says About You</h2>
                                        <span className={BlogStyle.sub_heading}>29 September 2016 | By Admin</span>
                                        <p className="card-text mt-3">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                            diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                            nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                                            aliquip ex ea commodo....
                                        </p>
                                        <a href="#" className={`${BlogStyle.blog_btn} btn text-white rounded-0`}>
                                            Read More
                                        </a>
                                    </div>
                                </div>
                                <div className="card border-0 mt-4">
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-img-2.jpg`}
                                        className={BlogStyle.blog_img}
                                    />
                                    <div className={`${BlogStyle.blog_content} card-body p-4 border`}>
                                        <h2 className={`${BlogStyle.card_title} card-title`}>What Your Browser Says About You</h2>
                                        <span className={BlogStyle.sub_heading}>29 September 2016 | By Admin</span>
                                        <p className="card-text mt-3">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                            diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                            nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                                            aliquip ex ea commodo....
                                        </p>
                                        <a href="#" className={`${BlogStyle.blog_btn} btn text-white rounded-0`}>
                                            Read More
                                        </a>
                                    </div>
                                </div>
                                <div className="card border-0 mt-4">
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-img-3.jpg`}
                                        className={BlogStyle.blog_img}
                                    />
                                    <div className={`${BlogStyle.blog_content} card-body p-4 border`}>
                                        <h2 className={`${BlogStyle.card_title} card-title`}>What Your Browser Says About You</h2>
                                        <span className={BlogStyle.sub_heading}>29 September 2016 | By Admin</span>
                                        <p className="card-text mt-3">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                            diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                            nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                                            aliquip ex ea commodo....
                                        </p>
                                        <a href="#" className={`${BlogStyle.blog_btn} btn text-white rounded-0`}>
                                            Read More
                                        </a>
                                    </div>
                                </div>
                                <div className="pagination d-flex justify-content-between mt-4">
                                    <div className={BlogStyle.pagination_icon}>
                                        <a href='#'>
                                            <i className="fa fa-arrow-left pr-3"></i>
                                            Previous Page
                                        </a>
                                    </div>
                                    <div className={BlogStyle.pagination_number}>
                                <span>
                                    <a href="#">1</a>
                                </span>
                                        <span>2</span>
                                        <span>3</span>
                                    </div>
                                    <div className={BlogStyle.pagination_icon}>
                                        <a href="#">
                                            Next Page
                                            <i className="fa fa-arrow-right pl-3"></i>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h6 className="card-title">About Me</h6>
                                        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-sidebar-img-1.png`}/>
                                        <p className="card-text pt-3">
                                            With supporting text below as a natural lead-in to additional
                                            content.
                                        </p>
                                    </div>
                                </div>
                                <div className={`${BlogStyle.card_item} card mt-3 p-3`}>
                                    <h4 className='text-center'>Categories</h4>
                                    <ul className='text-center'>
                                        <li className="cat-item"><a
                                            href="#">Beauty</a>
                                        </li>
                                        <li className="cat-item"><a
                                            href="#">Furniture</a>
                                        </li>
                                        <li className="cat-item"><a
                                            href="#">Ideas</a>
                                        </li>
                                        <li className="cat-item"><a
                                            href="#">Innovation</a>
                                        </li>
                                        <li className="cat-item"><a
                                            href="#">Interview</a>
                                        </li>
                                        <li className="cat-item"><a
                                            href="#">Tech</a>
                                        </li>
                                        <li className="cat-item"><a
                                            href="#">Travel</a>
                                        </li>
                                        <li className="cat-item"><a
                                            href="#">Trending</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card mt-3">
                                    <div className="card-body text-center">
                                        <h4 className="card-title">Recent Stories</h4>
                                        <div className={BlogStyle.stories}>
                                            <div className='d-flex justify-content-between'>
                                                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-img-7.jpg`}/>
                                                <div>
                                                    <p>10 Tips For Traveling With Friends</p>
                                                    <span>fdfdfdfd</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-3">
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Tags</h5>
                                        <a href='#'>Design</a>
                                        <a href='#'>Design</a>
                                        <a href='#'>Design</a>
                                        <a href='#'>Design</a>
                                        <a href='#'>Design</a>
                                        <a href='#'>Design</a>
                                        <a href='#'>Design</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1}></Col>
                </Row>

            </Container>
        </>
    )
}
export default Blog