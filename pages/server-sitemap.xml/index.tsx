import {getServerSideSitemap} from 'next-sitemap'
import {GetServerSideProps} from 'next'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_HOST} from "../../env";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    // Method to source urls from cms
    // const urls = await fetch('https//example.com/api')


    // useEffect(() => {
    //     axios.get(`${API_HOST}blog/getAllBlogs`, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     }).then((res) => {
    //         if (res && res.data) {
    //             setBlog(res.data)
    //         }
    //     }).catch((error) => {
    //     })
    // }, [])

        const data =  fetch(`${API_HOST}blog/getAllBlogs`)
            .then((response) => response.json())
            .then((data) => console.log(data))
        console.log(data)

    const fields = [
        {
            loc: `${data}`, // Absolute url
            lastmod: new Date().toISOString(),
            // changefreq
            // priority
        },
        {
            loc: 'https://jdev.decipherzone.com/marraforni', // Absolute url
            lastmod: new Date().toISOString(),
            // changefreq
            // priority
        },
    ]

    return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default () => {
}

