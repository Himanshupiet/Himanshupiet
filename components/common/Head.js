import React from 'react'
import {useRouter} from 'next/router'

import NextHead from 'next/head'

const Head = props => {
    const {
        title,
        description
    } = props

    const {pathname} = useRouter()

    return (
        <NextHead>
            {/*<meta charSet='UTF-8' />*/}
            {/*<title>{title || 'Products - MarraForni'}</title>*/}
            {/*<meta name='og:title' content={title || 'Products - MarraForni'} />*/}
            {/*<meta name='og:description' content={description || ''} />*/}
            {/*<meta name='description' content={description || ''} />*/}
            {/*<meta name='twitter:title' content={title || 'Products - MarraForni'} />*/}
            {/*<meta name='twitter:description' content={description || ''} />*/}
            {/*<meta name='viewport' content='width=device-width, initial-scale=1' />*/}
            {/*<link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}${pathname}`} />*/}
            {/*<meta property="og:locale" content="en_US" />*/}
            {/*<meta property="og:type" content="website" />*/}
            {/*<meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}${pathname}`} />*/}
            {/*<meta property="og:site_name" content="MarraForni" />*/}
            {/*<meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}/images/Rotator-Penny-Red.png`} />*/}
            {/*<meta property="og:image:secure_url" content={`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}/images/Rotator-Penny-Red.png`} />*/}
            {/*<meta property="og:image:width" content="372" />*/}
            {/*<meta property="og:image:height" content="500" />*/}
            {/*<meta property="og:image:alt" content="Marra Forni Rotator Penny Red" />*/}
            {/*<meta property="og:image:type" content="image/png" />*/}
            {/*<meta name="twitter:card" content="summary_large_image" />*/}
            {/*<meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}/images/Rotator-Penny-Red.png`} />*/}
            <meta name="title" content="The Future of Banking with the Growth of Technology"/>
            <meta name="keywords" content="The Future of Banking,Technology, Banks vs. Fintech, Banking"/>
            <meta name="image"
                  content="https://ares.decipherzone.com/blog-manager/uploads/banner_80ffb230-0ac5-4a62-9b7a-633221db615f.jpg"/>
            <meta name="description"
                  content="The Future of Banking with the Growth of Technology. Banks vs. Fintech. Banks' Responses to Fintech. Tech companies in the banking space will be the biggest threat to traditional banking."/>
            <meta property="og:type" content="article"/>
            <meta property="og:locale" content="en_us"/>
            <meta property="og:title" content="The Future of Banking with the Growth of Technology"/>
            <meta property="og:url"
                  content="https://www.decipherzone.com/blog-detail/the-future-of-banking-technology"/>
            <meta property="og:image:width" content="1024" data-dynamic="true"/>
            <meta property="og:image:height" content="576" data-dynamic="true"/>
            <meta property="og:image"
                  content="https://ares.decipherzone.com/blog-manager/uploads/banner_80ffb230-0ac5-4a62-9b7a-633221db615f.jpg"/>
            <meta property="og:description"
                  content="The Future of Banking with the Growth of Technology. Banks vs. Fintech. Banks' Responses to Fintech. Tech companies in the banking space will be the biggest threat to traditional banking."/>
            <meta property="og:type" content="article"/>
            <meta property="og:site_name" content="decipherzone.com"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@DecipherZone"/>
            <meta name="twitter:creator" content="@DecipherZone"/>
            <meta name="twitter:image"
                  content="https://ares.decipherzone.com/blog-manager/uploads/banner_80ffb230-0ac5-4a62-9b7a-633221db615f.jpg"/>
            <meta name="twitter:title" content="The Future of Banking with the Growth of Technology"/>
            <meta name="twitter:description"
                  content="The Future of Banking with the Growth of Technology. Banks vs. Fintech. Banks' Responses to Fintech. Tech companies in the banking space will be the biggest threat to traditional banking."/>
        </NextHead>
    )
}
export default Head
