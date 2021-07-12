import React, {useEffect, useState} from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import TopBannerSlider from './TopBannerSlider/TopBannerSlider'
import VideoSlider from './VideoSlider/VideoSlider'
import PressContent from './PressContent/PressContent'
import axios from "axios";
import {API_HOST} from "../../env";

const PressMain = (props) => {
    const [data, setData] = useState([])
    const [slider, setSlider] = useState([])

    useEffect(() => {
        axios.get(`${API_HOST}press/getAllPressData`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status) {
                setData(res.data.result)
            }
        }).catch((error) => {

        })
    }, [])

    useEffect(() => {
            axios.get(`${API_HOST}slider/getSliderBySliderName?sliderName=Press`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((res) => {
                if (res.status) {
                    let updatedSlider = res.data.map((item, i) => {
                        let createTime = (new Date(item.createdAt)).toLocaleDateString()
                        return (
                            {...item, createdAt: createTime}
                        )
                    })
                    setSlider(updatedSlider)
                    // setSlider(res.data)
                }
            }).catch((error) => {

            })
        },
        []
    )

    return (
        <>
            <Header/>
            <TopBannerSlider slider={slider}/>
            <VideoSlider data={data}/>
            <PressContent/>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/r0-q0YIHxO4?controls=0&rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            <Footer/>
        </>
    )

}

export default PressMain