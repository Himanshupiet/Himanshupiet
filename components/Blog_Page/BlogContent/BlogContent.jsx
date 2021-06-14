import React, {useEffect, useState} from 'react'
import BlogContentStyle from './BlogContent.module.css'
import Link from 'next/link';
import {Container} from 'react-bootstrap'
import {withRouter} from 'next/router'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as blogActions from '../../../actions/blog'

const BlogContent = (props) => {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        props.productActions.getAllPost()
    }, [])

    useEffect(() => {
        if (props && props.blog && props.blog.blog && props.blog.blog.result && props.blog.blog.result.content) {
            setBlog(props.blog.blog.result.content)
        }
    }, [props.blog])
    console.log(blog)

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

    return (
        <Container fluid className='mb-5 mt-5'>
            <ul className={BlogContentStyle.catfilter}>
                <li>
                    <button className={BlogContentStyle.activecatfilter}>All</button>
                </li>
                <li>
                    <button>Marra Innovations</button>
                </li>
                <li>
                    <button>Pizza Industry News</button>
                </li>
                <li>
                    <button>Team Marra</button>
                </li>
                <li>
                    <button>Marra Friends</button>
                </li>
                <li>
                    <button>#CookingVersatility</button>
                </li>
                <li>
                    <button>Awesome Chefs</button>
                </li>
            </ul>
            <div className={'blog_outer'}>
                {(blog && blog.length) ? blog.map((item, i) => (
                    <div className={`${BlogContentStyle.main_style} blog_inner`} key={item.id}>
                        <div className={'blog_inner_main'}>
                            <Link href='/'>
                                <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
                                    <div className={BlogContentStyle.blog_image}>
                                        <img
                                            src={item.bannerImageUrl}
                                            alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920"
                                            width='300' className="img-fluid"/>
                                        <div className={BlogContentStyle.blogimg_hover}>
                                            <div className={BlogContentStyle.blog_tag}>{item.title}</div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                            <div className={BlogContentStyle.blog_info}>
                                <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/blog/${item.id}`}>
                                    <a title={item.aliasUrl}>
                                        <h2>{item.metaKeyword}</h2>
                                    </a>
                                </Link>
                                <div className={BlogContentStyle.blog_date}>April 30, 2021</div>
                                <p>{item.blogData}</p>
                                <div className={BlogContentStyle.meta_box}>
                                    <img alt='Author' width='42' height='42'
                                         src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`}/>
                                    <span>{item.createdBy}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BlogContent))

// export default BlogContent