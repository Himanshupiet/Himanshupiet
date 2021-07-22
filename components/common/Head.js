import React from 'react'
import {useRouter} from 'next/router'

import NextHead from 'next/head'

const Head = props => {
    const {
        title,
        description,
        keywords,
        image,
        imageAlt
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
            <meta name="title" content={title || ''}/>
            <meta name="keywords" content={keywords || ''}/>
            <meta name="image"
                  content={image || ''} alt={imageAlt || ''}/>
            <meta name="description"
                  content={description || ''}/>
            <meta property="og:type" content="article"/>
            <meta property="og:locale" content="en_us"/>
            <meta property="og:title" content={title || ''}/>
            <meta property="og:url"
                  content="https://www.decipherzone.com/blog-detail/the-future-of-banking-technology"/>
            <meta property="og:image:width" content="1024" data-dynamic="true"/>
            <meta property="og:image:height" content="576" data-dynamic="true"/>
            <meta property="og:image"
                  content={image}/>
            <meta property="og:description"
                  content={description || ''}/>
            <meta property="og:type" content="article"/>
            <meta property="og:site_name" content="decipherzone.com"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@DecipherZone"/>
            <meta name="twitter:creator" content="@DecipherZone"/>
            <meta name="twitter:image"
                  content={image}/>
            <meta name="twitter:title" content={title || ''}/>
            <meta name="twitter:description"
                  content={description || ''}/>
        </NextHead>
    )
}
export default Head
