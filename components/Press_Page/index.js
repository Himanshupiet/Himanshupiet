import React, { useEffect, useState } from 'react'

import Header from '../header/header'
import Footer from '../footer/footer'
import VideoSlider from './VideoSlider/VideoSlider'
import PressContent from './PressContent/PressContent'
import TopBannerSlider from './TopBannerSlider/TopBannerSlider'

import axios from 'axios'
import { API_HOST } from '../../env'

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
            <Footer/>
        </>
    )

}

export default PressMain