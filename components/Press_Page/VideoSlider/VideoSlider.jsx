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
        debugger
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
                                                    height='250'></iframe>
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
                        {/*<div>*/}
                        {/*  <div className={VideoSliderStyle.slider_inner_main}>*/}
                        {/*    <div className={VideoSliderStyle.slider_inner}>*/}
                        {/*      <img alt='Videos' width='500' height='250' src={'https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F1624444%252Ffec3bb46-a019-4545-957e-ad25f777275f.png%252F400x225.png'} className='img-fluid' />*/}
                        {/*      <div className={VideoSliderStyle.icon_overlay}>*/}
                        {/*        <span><i className="bx bx-play-circle"></i></span>*/}
                        {/*      </div>*/}
                        {/*    </div>*/}
                        {/*    <h6>The Daily Show</h6>*/}
                        {/*  </div>*/}
                        {/*</div>*/}
                        {/*  <div className={VideoSliderStyle.slider_inner_main}>*/}
                        {/*    <div className={VideoSliderStyle.slider_inner}>*/}
                        {/*      <img alt='Videos' width='500' height='250' src={'https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F1624444%252Ffec3bb46-a019-4545-957e-ad25f777275f.png%252F400x225.png'} className='img-fluid' />*/}
                        {/*      <div className={VideoSliderStyle.icon_overlay}>*/}
                        {/*        <span><i className="bx bx-play-circle"></i></span>*/}
                        {/*      </div>*/}
                        {/*    </div>*/}
                        {/*    <h6>Rai Italia</h6>*/}
                        {/*  </div>*/}
                        {/*</div>*/}
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
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </Row>

                    <iframe width="420" height="345" src={youtubeUrl} frameborder="0" allowfullscreen></iframe>
                </Modal>
            </Row>
        </Container>
    )
}


export default VideoSlider