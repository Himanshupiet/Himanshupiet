import React, { useState, useEffect } from 'react'

import { useRouter } from 'next/router'
import axios from 'axios'
import { API_HOST } from '../../../env'

import Head from '../../../components/common/Head'
import Footer from '../../../components/footer/footer'
import Header from '../../../components/header/header'
import Loader from '../../../components/Loading/loading'
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

const SingleProduct = (props) => {
    const router = useRouter()
    const {id} = router.query
    const [data, setData] = useState(false)
    const [loading, setLoader] = useState(false)
    const [byboShow, setByboShow] = useState(false)

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
        if(id)
        axios.get(`${API_HOST}product-page/getPageByCategoryName?categoryName=`+ id, {headers:{
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

    const onCheckOut = () => {
        let objDiv = document.getElementById("resources_model");
        objDiv.scrollIntoView(false)
    }

    return(
        <>
            <Head
                title={`${data.productCategory} - MarraForni`}
                description={data.productDescription}
                canonical={`product/${data.aliasUrl}`}
            />
            <Header byboShow={byboShow}/>
            <Loader data={loading}/>
            <TopBanner data={data} />
            <Overview
                data={data}
                onCheckOut={onCheckOut}
            />
            <Modals data={data}/>
            { data.enableTouchScreenSection ?
                <Touchscreen /> :
                null
            }
            <ProductInfo data={data && data.productPitchInfo.length ? data.productPitchInfo : []}/>
            <Features data={data} />
            <Resources data={data} />
            <HighLight
                setByboShow={setByboShow}
                highlightData={highlightData}
            />
            <VideoPart data={data}/>
            { data.enableCategorySection ?
                <KitchenNearYou/> :
                null
            }
            { data.enableReviewSection ?
                <Testimonials/> :
                null
            }
            <Footer data={data}/>
        </>
    )

}

export default SingleProduct;


