import React, { useState } from 'react'
import Link from 'next/link'
import Slider from 'react-slick'
import { Container, Row, Col } from 'react-bootstrap'

import VideoModal from '../../common/VideoModal/videoModal'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import VideoSliderStyle from './VideoSlider.module.css'

const VideoSlider = (props) => {
    const pressData = props.data
    const AllPressData = pressData && pressData.content && pressData.content.length ? pressData.content : []

    const [open, setOpen] = useState(false)
    const [youtubeUrl, setYoutubeUrl] = useState()

    let VideoSliderSettings = {
        speed: 1500,
        arrows: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    const openModal = (url) => {
        setOpen(true)
        setYoutubeUrl(url)
    }

    const closeModal = () => {
        setOpen(false)
    }

    return (
        <Container fluid className={VideoSliderStyle.slider_outer}>
            <Row>
                <Col lg={1}></Col>
                <Col lg={10}>
                    <h2>Videos</h2>
                    <Slider {...VideoSliderSettings}>
                        {(AllPressData && AllPressData.length) ? AllPressData.map((data, i) => (
                            <div key={data.id}>
                                <div className={VideoSliderStyle.slider_inner_main} onClick={() => openModal(data.videoUrl)}>

                                    <a title={data.title} data-toggle="modal" data-target="#exampleModal">
                                        <div className={VideoSliderStyle.slider_inner}>
                                            <div className="embed-responsive embed-responsive-16by9">
                                                <iframe className="embed-responsive-item"
                                                    src={data.videoUrl}
                                                    width='500'
                                                    height='250'
                                                ></iframe>
                                            </div>

                                            <div className={VideoSliderStyle.icon_overlay}>
                                                <span><i className="bx bx-play-circle"></i></span>
                                            </div>
                                        </div>
                                    </a>
                                    <Link href={data.videoUrl}>
                                        <a title={data.title}>
                                            <h6>{data.title}</h6>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        )) : null}
                    </Slider>
                </Col>
                <Col lg={1}></Col>
                <VideoModal
                    open={ open }
                    closeModal={ closeModal }
                    youtubeUrl={ youtubeUrl }
                />
            </Row>
        </Container>
    )
}


export default VideoSlider