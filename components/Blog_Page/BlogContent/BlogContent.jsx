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
import Masonry from 'react-masonry-css'

import Loader from "../../Loading/loading";
const BlogContent = (props) => {
    const router = useRouter()
    const tag = router.query.tag
    const name = router.query.name
    const queryIndex = router.query.queryIndex
    const [blog, setBlog] = useState([])
    const [filter, setFilter] = useState([])
    const [category, setCategory] = useState([])
    const [activeValue, setActiveValue] = useState(0)
    const [loading, setLoader] = useState(false)
    useEffect(() => {
        setLoader(true)
        props.productActions.getAllPost().then(() => {
            setLoader(false)
        }).catch(()=>{
            setLoader(false)
        })
    }, [])

    useEffect(() => {
        if (props && props.blog && props.blog.blog && props.blog.blog.result && props.blog.blog.result.content) {
            const allBlogs = props.blog.blog.result.content;
            setBlog(props.blog.blog.result.content)
            if (!name && !tag) {
                setFilter(allBlogs.filter(val => val.status === 'ACTIVE'))
                setActiveValue(0)
            } else {
                const updateData = props.blog.blog.result.content.filter((catItem) => {
                    return catItem.category === name || catItem.tags === tag;
                })
                setFilter(
                    router.query.queryIndex ? updateData && updateData.length && updateData.filter(val => val.status === 'ACTIVE')
                        :allBlogs.filter(val => val.status === 'ACTIVE')
                )
                setActiveValue(router.query.queryIndex ? queryIndex: 0)
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

    const filterItem = (cat) => {
        const updateData = blog && blog.length && blog.filter((catItem) => {
            return catItem.category === cat;
        })
        setFilter(updateData && updateData.length && updateData.filter(val => val.status === 'ACTIVE'))
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

    const items = (filter && filter.length) ? filter.map((item, i) => (
        <div key={item.id}>
            <div className='blog_inner_main'>
                <Link href={`/blog/${item.uniqueUrl}`}>
                    <a title={item.title}>
                        <div className={BlogContentStyle.blog_image}>
                            <img
                                src={item.bannerWebpImageUrl}
                                alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920" height="600"
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
    )) : null

    return (
    <>
        <Loader data={loading}/>
        <Container fluid className='mb-5 mt-5'>
              
            {(category && category.length) ?
                <ul className={BlogContentStyle.catfilter}>
                    <li>
                        <button
                            className={activeValue == 0 ? BlogContentStyle.activecatfilter : null}
                            onClick={() => {
                                setFilter(blog.filter(val => val.status === 'ACTIVE'))
                                setActiveValue(0)
                            }}>All
                        </button>
                    </li>
                    {category.map((item, i) => (
                        <li key={item}>
                            <button
                                className={`${i + 1 == activeValue ? BlogContentStyle.activecatfilter : ''}`}
                                onClick={() => {
                                    filterItem(`${item}`)
                                    setActiveValue(i + 1)
                                }}>{item}</button>
                        </li>
                    ))}
                </ul> : null
            }
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
    </> 
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
