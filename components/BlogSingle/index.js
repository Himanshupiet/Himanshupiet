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

const BlogSingleMain = (props) => {
    const router = useRouter()
    const {id} = router.query
    const [data, setData] = useState(false)
    useEffect(() => {
          axios.get(`${API_HOST}blog/getBlogById?id=`+id, {headers:{
                  'Content-Type': 'application/json',
              }
          }).then((res)=>{
               if(res.status){
                   setData(res.data)
               }
          }).catch((error) => {

        })
    }, [id])

    return (
        <>
            <Header/>
            <Container fluid className={BlogSingleMainStyle.top_banner}>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <h1>Blog</h1>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
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