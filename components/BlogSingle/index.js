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
                let blog = {...singleBlog, blogData:renderedHtml}
                setData(blog)
            }
        }).catch((error) => {

        })
    }, [])

    const convertDataToHtml = (blocks) => {
        if(blocks.includes('<p>&lt;iframe')){
            return blocks.replace('&lt;','<')
        }
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