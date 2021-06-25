import React, {useEffect, useState} from 'react'
import BlogContentStyle from './BlogContent.module.css'
import Link from 'next/link';
import {Container} from 'react-bootstrap'
import {withRouter} from 'next/router'
import {useRouter} from "next/router";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as blogActions from '../../../actions/blog'
import axios from "axios";
import {API_HOST} from "../../../env";

const BlogContent = (props) => {
    const router = useRouter()
    const tag = router.query.tag
    const name = router.query.name
    const queryIndex = router.query.queryIndex
    const [blog, setBlog] = useState([])
    const [filter, setFilter] = useState([])
    const [category, setCategory] = useState([])
    const [activeValue, setActiveValue] = useState(0)

    useEffect(() => {
        props.productActions.getAllPost()
    }, [])

    useEffect(() => {
        if (props && props.blog && props.blog.blog && props.blog.blog.result && props.blog.blog.result.content) {
            const allBlogs = props.blog.blog.result.content;
            let renderedHtml = convertDataToHtml(allBlogs)
            let blog = {...allBlogs, blogData:renderedHtml}
            setBlog(blog)
            if (!name && !tag) {
                setFilter(allBlogs)
            } else {
                const updateData = props.blog.blog.result.content.filter((catItem) => {
                    return catItem.category === name || catItem.tags === tag;
                })
                setFilter(updateData)
                setActiveValue(queryIndex)
            }
        }
    }, [props.blog])

    useEffect(() => {
        axios.get(`${API_HOST}blog/getCategoryList`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status) {
                setCategory(res.data)
            }
        }).catch((error) => {

        })
    }, [])


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
    const filterItem = (cat) => {
        const updateData = blog.filter((catItem) => {
            return catItem.category === cat;
        })
        setFilter(updateData)
    }

    const convertDataToHtml = (blocks) => {
        if(blocks.includes('<p>&lt;iframe')){
            return blocks.replace('&lt;','<')
        }
    }

    return (
        <Container fluid className='mb-5 mt-5'>
            {(category && category.length) ?
                <ul className={BlogContentStyle.catfilter}>
                    <li>
                        <button
                            className={ activeValue == 0 ? BlogContentStyle.activecatfilter : null}
                            onClick={() => {
                                setFilter(blog)
                                setActiveValue(0)
                            }}>All
                        </button>
                    </li>
                    {category.map((item, i) => (
                        <li key={item}>
                            <button
                                className= {`${i+1 == activeValue ? BlogContentStyle.activecatfilter : ''}`}
                                onClick={() => {
                                    filterItem(`${item}`)
                                    setActiveValue(i+1)
                                }}>{item}</button>
                        </li>
                    ))}
                </ul> : null
            }

            <div className={'blog_outer'}>
                {(filter && filter.length) ? filter.map((item, i) => (
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
                                <div className={BlogContentStyle.blog_date}>April 30, 2021</div>
                                <p>{item.blogDescription.substr(0,150)}</p>
                                {/*<div dangerouslySetInnerHTML={{__html: item.renderedHtmlPreview}}></div>*/}
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