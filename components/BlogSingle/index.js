import React, {useEffect, useState} from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import {Container, Row, Col} from 'react-bootstrap'
import BlogSingleMainStyle from './index.module.css'
import BlogSidebar from './../Blog_Page/BlogSidebar/BlogSidebar';
import BlogSingleContent from './BlogSingleContent/BlogSingleContent'
import {useRouter} from "next/router";
import axios from "axios";
import {API_HOST} from '../../env'
import ContactStyle from "../ContactUs_Page/contact.module.css";


const BlogSingleMain = (props) => {
    const router = useRouter()
    const {id} = router.query
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`${API_HOST}blog/getBlogDetailsByUniqueURL?alias=false&blogUrl=` + id, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status) {
                const singleBlog = res.data.blogData;
                let renderedHtml = convertDataToHtml(singleBlog)
                let blog = {...res.data, blogData:renderedHtml}
                setData(blog)
            }
        }).catch((error) => {

        })
    }, [id])

    const convertDataToHtml = (blocks) => {
        let snippet = document.createElement("div")
        snippet.innerHTML=blocks;
        let links = snippet.getElementsByTagName("a")
        if(blocks.match(links)){
             Array.prototype.slice.call( links ).map((val,i) => {
                if(val.href.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/g)){
                    blocks =  blocks.replace(
                        links[links.length - i].outerHTML,
                          `<iframe
                            src=${val.href}
                            width="560"
                            height="315"
                            title="YouTube video player"
                            frameBorder="0"
                            rel="0"
                            allowFullScreen></iframe>`
                        )
                }

            })
        }
        return blocks
    }


    return (
        <>
            <Header/>
            <Container fluid className={ContactStyle.contact_banner}>
                <h1>Blog</h1>
            </Container>
            <Container fluid className={BlogSingleMainStyle.blog_outer}>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <Row>
                            <Col lg={9}>
                                <BlogSingleContent data={data}/>
                            </Col>
                            <Col lg={3}>
                                <BlogSidebar/>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )

}

export default BlogSingleMain