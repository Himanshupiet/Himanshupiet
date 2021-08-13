import React, {useEffect, useState} from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import Testimonials from './../ProductSingle/Testimonials/Testimonials';
import RestaurentGallery from './RestaurentGallery/RestaurentGallery';
import {useRouter} from "next/router";
import axios from "axios";
import {API_HOST} from "../../env";

const RestaurentMain = (props) => {
    const router = useRouter()
    const {id} = router.query
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`${API_HOST}gallery/getGalleryById?id=` + id, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status) {
                setData(res.data)
            }
        }).catch((error) => {

        })
    }, [id])

    return (
        <>
            <Header/>
            <RestaurentGallery data={data}/>
            <Testimonials/>
            <Footer/>
        </>
    )

}

export default RestaurentMain