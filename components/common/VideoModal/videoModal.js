import React from 'react'

import Modal from 'react-modal'
import { Row } from 'react-bootstrap'

import VideoSliderStyle from '../../Press_Page/VideoSlider/VideoSlider.module.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '62%'
    },
}

const VideoModal = (props) => {
    const {
        open,
        closeModal,
        youtubeUrl
    } = props

    return (
        <Modal
            isOpen={ open }
            onRequestClose={ closeModal }
            style={ customStyles }
            contentLabel='Example Modal'
        >
            <Row classNames={VideoSliderStyle.close_Button}>
                <button
                    type='button'
                    onClick={ closeModal }
                    className='close'
                    aria-label='Close'>
                    <span
                        aria-hidden='true'
                        className={`${VideoSliderStyle.cross} text-white`}>
                        &times;
                    </span>
                </button>
            </Row>
            <iframe
                width='100%'
                height='400'
                src={youtubeUrl}
                frameborder='0'
                allowfullscreen/>
        </Modal>
    )
}
export default VideoModal