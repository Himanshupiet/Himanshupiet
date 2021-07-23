import React, {useState,useEffect} from 'react'

import Head from '../../../components/common/Head'
import Footer from '../../../components/footer/footer'
import Header from '../../../components/header/header'
import TopBanner from '../../../components/ProductSingle/TopBanner/TopBanner'
import Overview from '../../../components/ProductSingle/Overview/Overview'
import Modals from '../../../components/ProductSingle/Modals/Modals'
import Touchscreen from '../../../components/ProductSingle/Touchscreen/Touchscreen'
import ProductInfo from '../../../components/ProductSingle/ProductInfo/ProductInfo'
import Features from '../../../components/ProductSingle/Features/Features'
import HighLight from '../../../components/Home_Page/HighLightSection/HighLight'
import Resources from '../../../components/ProductSingle/Resources/Resources'
import VideoPart from '../../../components/ProductSingle/VideoPart/VideoPart'
import KitchenNearYou from '../../../components/ProductSingle/KitchenNearYou/KitchenNearYou'
import Testimonials from '../../../components/ProductSingle/Testimonials/Testimonials'
import {useRouter} from "next/router";
import axios from "axios";
import {API_HOST} from "../../../env";
import Loader from "../../../components/Loading/loading";


const SingleProduct = (props) => {
    const router = useRouter()
    const {id} = router.query
    const [data, setData] = useState(false)

    const [loading, setLoader] = useState(false)
    console.log(data)
    let highlightData = {
        Heading: '',
        subHeading: 'You are a few clicks away from owning the most durable, energy-efficient, customizable and feature pack brick oven in the world.',
        buttonText: 'Build Your Own Oven!',
        backgroundImage: {
			IsImage: false,
			imagePath: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/PaintBrush_Slider/painthouse-three.jpg`
		}
    }
    useEffect(() => {
        setLoader(true)
        axios.get(`${API_HOST}category/getCategoryByName?name=`+ id, {headers:{
                'Content-Type': 'application/json',
            }
        }).then((res)=>{
            setLoader(false)
            if(res.status){
                setData(res.data)
            }
        }).catch((error) => {
            setLoader(false)
        })
    }, [id])
    return(
        <>
            <Head
                title='Rotator Brick Oven - MarraForni'
                description='Marra Forni offers a one-stop-shop for restaurant oven and oven equipment and appliances and other foodservice businesses. Our innovative solutions range from'
            />
            <Header />
            <Loader data={loading}/>
            <TopBanner data={data} />
            <Overview data={data}/>
            <Modals />
            <Touchscreen />
            <ProductInfo />
            <Features />
            <Resources data={data} />
            <HighLight highlightData={highlightData} />
            <VideoPart />
            <KitchenNearYou />
            <Testimonials />
            <Footer />
        </>
    )

}

export default SingleProduct;


