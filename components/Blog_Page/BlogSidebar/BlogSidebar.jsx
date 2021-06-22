import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import BlogSidebarStyle from './BlogSidebar.module.css'
import {bindActionCreators} from "redux";
import * as blogActions from "../../../actions/blog";
import {connect} from "react-redux";
import {withRouter} from "next/router";
import axios from "axios";
import {API_HOST} from "../../../env";


const BlogSidebar = (props) => {
    const [blog, setBlog] = useState([])
    const [tags, setTags] = useState([])
    const [category, setCategory] = useState([])


    useEffect(() => {
        props.productActions.getAllPost()
    }, [])

    useEffect(() => {
        if (props && props.blog && props.blog.blog && props.blog.blog.result && props.blog.blog.result.content) {
            setBlog(props.blog.blog.result.content)
        }
    }, [props.blog])

    useEffect(() => {
        axios.get(`${API_HOST}blog/getTagsList`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status) {
                setTags(res.data)
            }
        }).catch((error) => {

        })
    }, [])

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
    return (
        <>
            <div className={BlogSidebarStyle.searchbox}>
                <input type="search" name="blogsearch" placeholder="Search"/>
                <button><i className="bx bx-search"></i></button>
            </div>
            <div className="card mb-3">
                <div className="card-body text-center">
                    <h4 className="card-title">About Me</h4>
                    <img alt='About me' height='157' width='157'
                         src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-sidebar-img-1.png`}/>
                    <h5 className="card-text pt-3">
                        With supporting text below as a natural lead-in to additional
                        content.
                    </h5>
                </div>
            </div>
            <div className={`${BlogSidebarStyle.card_item} card mb-3 p-3`}>
                <h4 className='text-center'>Categories</h4>
                <ul className='text-center m-0'>
                    {(category && category.length) ? category.map((item, i) => (
                        <li className="cat-item">
                            <Link href={{
                                pathname: "/blog",
                                query: {name: `${item}`},
                            }} key={i}>
                                <a title={item}>{item}</a>
                            </Link>
                        </li>
                    )) : null}
                    {/*<li className="cat-item">*/}
                    {/*    <Link href={{*/}
                    {/*        pathname: "/blog",*/}
                    {/*        query: {name: "Marketing"},*/}
                    {/*    }}><a title='Awesome Chefs'>Awesome Chefs</a></Link>*/}
                    {/*</li>*/}
                </ul>
            </div>
            <div className={`${BlogSidebarStyle.card_item} card mb-3 p-3`}>
                <h4 className='text-center'>Recent Highlight</h4>
                <ul className='text-center m-0'>
                    {blog && blog.length ? blog.map((item, i) => (
                        <li className='cat-item mb-2' key={item.id}>
                            <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/blog/${item.uniqueUrl}`}>
                                <a title='5 Ways MarraStone Revolutionizes the Brick Oven'>{item.title}</a>
                            </Link>
                        </li>
                    )) : null}
                </ul>
            </div>
            <div className="card mb-3">
                <div className="card-body text-center">
                    <h4 className="card-title">Tags</h4>
                    <div className='pl-2 pr-1'>
                        {tags && tags.length ? tags.map((item, i) => (
                            <Link href={{
                                pathname: "/blog",
                                query: {tag: `${item}`},
                            }} key={item}>
                                <a title='amy riolo' className='pl-1'>
                                    <u>{`${item},`}</u>
                                </a>
                            </Link>
                        )) : null}
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BlogSidebar))

// export default BlogSidebar