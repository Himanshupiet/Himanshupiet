import React, {useEffect, useState} from 'react'
import PressContentStyle from './PressContent.module.css'
import Link from 'next/link';
import {Container} from 'react-bootstrap'
import {bindActionCreators} from "redux";
import * as blogActions from "../../../actions/blog";
import {connect} from "react-redux";
import {useRouter, withRouter} from "next/router";
import Masonry from 'react-masonry-css'
import BlogContentStyle from "../../Blog_Page/BlogContent/BlogContent.module.css";

const PressContent = (props) => {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        props.productActions.getAllPost()
    }, [])

    useEffect(() => {
        if (props && props.blog && props.blog.blog && props.blog.blog.result && props.blog.blog.result.content) {
            const allBlogs = props.blog.blog.result.content;
            let renderedHtml = convertDataToHtml(allBlogs)
            let blog = {...allBlogs, blogData: renderedHtml}
            setBlog(allBlogs)
        }
    }, [props.blog])

    useEffect(() => {
        resizeAllGridItems();
        window.addEventListener("resize", resizeAllGridItems);
    }, [])

    const resizeGridItem = (item) => {
        let grid = document.getElementsByClassName("blog_outer")[0];
        let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
        let rowSpan = Math.ceil((item.querySelector('.blog_inner_main').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
        item.style.gridRowEnd = "span " + rowSpan;
    }
    const resizeAllGridItems = () => {
        let allItems = document.getElementsByClassName("blog_inner");
        for (let x = 0; x < allItems.length; x++) {
            resizeGridItem(allItems[x]);
        }
    }

    const convertDataToHtml = (blocks) => {
        if (blocks.includes('<p>&lt;iframe')) {
            return blocks.replace('&lt;', '<')
        }
    }

    const breakpointColumnsObj = {
        default: 5,
        2000: 3,
        1200: 4,
        700: 2,
        500: 1
    };

    const items = (blog && blog.length) ? blog.map((item, i) => {
        if (item.category === 'Press') {
            return (
                <div key={item.id}>
                    <div className='blog_inner_main'>
                        <Link href={`/blog/${item.uniqueUrl}`}>
                            <a title={item.title}>
                                <div className={BlogContentStyle.blog_image}>
                                    <img
                                        src={item.bannerWebpImageUrl}
                                        alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920"
                                        height="600"
                                        className="img-fluid"/>
                                    <div className={BlogContentStyle.blogimg_hover}>
                                        <div className={BlogContentStyle.blog_tag}>{item.category}</div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <div className={BlogContentStyle.blog_info}>
                            <Link href={`/blog/${item.uniqueUrl}`}>
                                <a title={item.aliasUrl}>
                                    <h2>{item.title}</h2>
                                </a>
                            </Link>
                            <div className={BlogContentStyle.blog_date}>{item.date}</div>
                            <p>{item.blogDescription.substr(0, 150)}</p>
                            {/*<div dangerouslySetInnerHTML={{__html: item.renderedHtmlPreview}}></div>*/}
                            <div className={BlogContentStyle.meta_box}>
                                <img alt='Author' width='42' height='42'
                                     src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`}/>
                                <span>{item.createdBy}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }) : null

    return (
        <Container fluid className='mb-5 mt-5'>
            <div className={BlogContentStyle.main_section}>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className={`${BlogContentStyle.my_masonry_grid} main_section`}
                    columnClassName={`${BlogContentStyle.my_masonry_grid_column}`}
                >
                    {items}
                </Masonry>
            </div>
        </Container>
    )
}
const mapStateToProps = ({blog}) => {
    return {blog}
}

const mapDispatchToProps = dispatch => {
    return {
        productActions: bindActionCreators(blogActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PressContent))
