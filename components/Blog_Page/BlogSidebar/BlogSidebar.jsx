import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import BlogSidebarStyle from './BlogSidebar.module.css'
import {bindActionCreators} from "redux";
import * as blogActions from "../../../actions/blog";
import {connect} from "react-redux";
import {withRouter} from "next/router";


const BlogSidebar = (props) => {
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
                    <li className="cat-item">
                        <Link href={{
                            pathname: "/blog",
                            query: { name: "Press" },
                        }}><a title='CookingVersatility'>CookingVersatility</a></Link>
                    </li>
                    <li className="cat-item">
                        <Link href={{
                            pathname: "/blog",
                            query: { name: "Marketing" },
                        }}><a title='Awesome Chefs'>Awesome Chefs</a></Link>
                    </li>
                    <li className="cat-item">
                        <Link href={{
                            pathname: "/blog",
                            query: { name: "Entertainment" },
                        }}><a title='Marra Friends'>Marra Friends</a></Link>
                    </li>
                    <li className="cat-item">
                        <Link href={{
                            pathname: "/blog",
                            query: { name: "Team Marra" },
                        }}><a title='Marra Innovations'>Marra Innovations</a></Link>
                    </li>
                    <li className="cat-item">
                        <Link href={{
                            pathname: "/blog",
                            query: { name: "Press" },
                        }}><a title='Holidays'>Pizza Industry News</a></Link>
                    </li>
                </ul>
            </div>
            <div className={`${BlogSidebarStyle.card_item} card mb-3 p-3`}>
                <h4 className='text-center'>Recent Highlight</h4>
                <ul className='text-center m-0'>
                    {blog && blog.length ? blog.map((item, i) => (
                        <li className='cat-item mb-2' key={item.id}>
                            <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/blog/${item.id}`}>
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
                        {blog && blog.length ? blog.map((item, i) => (
                            <Link href={{
                                pathname: "/blog",
                                query: { tag: "TEST" },
                            }} key={item.id}>
                                <a title='amy riolo' className='pl-1'>
                                    <u>{item.tags}</u>
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