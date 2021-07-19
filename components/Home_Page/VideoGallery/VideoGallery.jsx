import React from 'react'
import Link from 'next/link'
import {Col, Container, Row} from 'react-bootstrap'
import VideoGalleryStyle from './VideoGallery.module.css'

const VideoGallery = (props) => {
    return (
        <Container fluid className={VideoGalleryStyle.videogallery_outer}>
            <Row>
                <Col lg={1}></Col>
                <Col lg={10}>
                    <div className={VideoGalleryStyle.title_box}>
                        <h4>Video Gallery</h4>
                        <h1>WE LOVE WHAT WE DO</h1>
                    </div>
                </Col>
                <Col lg={1}></Col>
            </Row>
            <Row className='pb-5'>
                <Col lg={3} md={6}>
                    <div className="card border-0">
                        <iframe className={VideoGalleryStyle.video_section} height="215" src="https://www.youtube.com/embed/NK6JrAA61gw"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        <div className={`${VideoGalleryStyle.youtube_section} card-body text-center p-0`}>
                            <p className="card-title pt-2">Subscribe To Our Youtube Channel</p>
                            <button href="#" className="mf_btn">
                                Youtube
                            </button>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6}>
                    <div className="card border-0">
                        <iframe className={VideoGalleryStyle.video_section} height="215" src="https://www.youtube.com/embed/ZPE9bTwdn9U"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        <div className={`${VideoGalleryStyle.youtube_section} card-body text-center p-0`}>
                            <p className="card-title pt-2">Subscribe To Our Youtube Channel</p>
                            <button href="#" className="mf_btn">
                                Youtube
                            </button>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6}>
                    <div className="card border-0">
                        <iframe className={VideoGalleryStyle.video_section} height="215" src="https://www.youtube.com/embed/NK6JrAA61gw"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        <div className={`${VideoGalleryStyle.youtube_section} card-body text-center p-0`}>
                            <p className="card-title pt-2">Subscribe To Our Youtube Channel</p>
                            <button href="#" className="mf_btn">
                                Youtube
                            </button>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6}>
                    <div className="card border-0">
                        <iframe className={VideoGalleryStyle.video_section} height="215" src="https://www.youtube.com/embed/NK6JrAA61gw"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        <div className={`${VideoGalleryStyle.youtube_section} card-body text-center p-0`}>
                            <p className="card-title pt-2">Subscribe To Our Youtube Channel</p>
                            <button href="#" className="mf_btn">
                                Youtube
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default VideoGallery