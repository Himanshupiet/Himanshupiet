import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-bootstrap';
import VideoSliderStyle from './VideoSlider.module.css'
import Link from "next/link";
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '62%',
    },
};

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
    };

    const openModal = (url) => {
        setOpen(true);
        setYoutubeUrl(url)
    }
    const closeModal = () => {
        setOpen(false);
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
                <Modal
                    isOpen={open}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <Row classNames={VideoSliderStyle.close_Button}>
                        <button type="button" onClick={closeModal} class="close" aria-label="Close">
                            <span aria-hidden="true" className={`${VideoSliderStyle.cross} text-white`}>&times;</span>
                        </button>
                    </Row>

                    <iframe width="790" height="345" src={youtubeUrl} frameborder="0" allowfullscreen></iframe>
                </Modal>
            </Row>
        </Container>
    )
}


export default VideoSlider