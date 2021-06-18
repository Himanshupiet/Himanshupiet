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
    const [data, setData] = useState(false)
    const [paragraph, setParagraph] = useState(false)
    console.log('data ',data)
    console.log('paragraph', paragraph)

    const convertDataToHtml = (blocks) =>{
        var convertedHtml = "";
        blocks.map(block => {
            switch (block.type) {
                case "header":
                    convertedHtml += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
                    break;
                case "embded":
                    convertedHtml += `<div><iframe width="560" height="315" src="${block.data.embed}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
                    break;
                case "paragraph":
                    convertedHtml += `<p>${block.data.text}</p>`;
                    break;
                case "delimiter":
                    convertedHtml += "<hr />";
                    break;
                case "image":
                    convertedHtml += `<img class="img-fluid" src="${block.data.file.url}" title="${block.data.caption}" /><br /><em>${block.data.caption}</em>`;
                    break;
                case "list":
                    convertedHtml += "<ul>";
                    block.data.items.forEach(function(li) {
                        convertedHtml += `<li>${li}</li>`;
                    });
                    convertedHtml += "</ul>";
                    break;
                default:
                    console.log("Unknown block type", block.type);
                    break;
            }
        });
        return convertedHtml;
    }

    useEffect(() => {
        axios.get(`${API_HOST}blog/getBlogById?id=` + id, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status) {
                const singleBlog = res.data;
                // const renderedBlogs = ()=>{
                //     const value = singleBlog;
                //     let jsonFormat = JSON.parse(value.blogData)
                //     let previewData = jsonFormat[0]
                //     let renderedHtml = convertDataToHtml(jsonFormat)
                //     let renderedHtmlPreview = convertDataToHtml([previewData])
                //     return {...value, renderedHtml, previewData, renderedHtmlPreview}
                // }
                // setData(renderedBlogs)
                // setParagraph(renderedBlogs)
                setData(singleBlog)
            }
        }).catch((error) => {

        })
    }, [id])

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