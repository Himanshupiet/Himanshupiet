import React from 'react'
import {useRouter} from 'next/router'

import NextHead from 'next/head'

const Head = props => {
    const {
        title,
        description,
        keywords ,
        image,
        imageAlt,
        canonical
    } = props

    const {pathname} = useRouter()

    return (
        <NextHead>
            <meta name="title" content={ title || 'MarraForni | Artisan Commercial Brick Oven | Stone Hearth Oven' }/>
            <meta name="description" content={ description || 'Authentic Commercial Brick Ovens: Welcome To The Marra Forni Nation! Where Artisan intersects with Technology and Innovation to build these Commercial Pizza Oven Cooking Solutions.' }/>
            <meta name="robots" content='follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large'/>
            <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}/${canonical}` || '' }/>
            <meta name="keywords" content={ keywords || ''}/>
            { image && <meta name="image" content={ image || '' }/> }
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={ title || "MarraForni | Artisan Commercial Brick Oven | Stone Hearth Oven"} />
            <meta property="og:description" content={ description || "Authentic Commercial Brick Ovens: Welcome To The Marra Forni Nation! Where Artisan intersects with Technology and Innovation to build these Commercial Pizza Oven Cooking Solutions." }/>
            <meta property="og:url" content="https://marraforni.com/" />
            <meta property="og:site_name" content="MarraForni" />
            { image && <meta property="og:image" content={ image || ''} /> }
            { image && <meta property="og:image:secure_url" content={ image || ''} /> }
            { image && <meta property="og:image:width" content="372" /> }
            { image && <meta property="og:image:height" content="500" /> }
            { image && <meta property="og:image:alt" content={ imageAlt || ''} /> }
            { image && <meta property="og:image:type" content="image/png" /> }
            <meta name="twitter:card" content='summary_large_image' />
            <meta name="twitter:title" content={ title || 'MarraForni | Artisan Commercial Brick Oven | Stone Hearth Oven'} />
            <meta name="twitter:description" content={ description || 'Authentic Commercial Brick Ovens: Welcome To The Marra Forni Nation! Where Artisan intersects with Technology and Innovation to build these Commercial Pizza Oven Cooking Solutions.'} />
            { image && <meta name="twitter:image" content={ image || '' }/> }
        </NextHead>
    )
}
export default Head
