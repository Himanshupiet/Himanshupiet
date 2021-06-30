import React, {useEffect, useState} from 'react'
import PressContentStyle from './PressContent.module.css'
import Link from 'next/link';
import {Container} from 'react-bootstrap'
import {bindActionCreators} from "redux";
import * as blogActions from "../../../actions/blog";
import {connect} from "react-redux";
import {useRouter, withRouter} from "next/router";
import BlogContentStyle from "../../Blog_Page/BlogContent/BlogContent.module.css";

const PressContent = (props) => {
    const [blog, setBlog] = useState([])

    console.log('filter data ', blog)

    useEffect(() => {
        props.productActions.getAllPost()
    }, [])

    useEffect(() => {
        if (props && props.blog && props.blog.blog && props.blog.blog.result && props.blog.blog.result.content) {
            const allBlogs = props.blog.blog.result.content;
            let renderedHtml = convertDataToHtml(allBlogs)
            let blog = {...allBlogs, blogData:renderedHtml}
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
        if(blocks.includes('<p>&lt;iframe')){
            return blocks.replace('&lt;','<')
        }
    }

    return (
        <Container fluid className='mb-5 mt-5'>
            <div className={'blog_outer'}>
                {(blog && blog.length) ? blog.map((item, i) => (
                    <div className={'blog_inner'} key={item.id}>
                        <div className={'blog_inner_main'}>
                            <Link href={`/blog/${item.uniqueUrl}`}>
                                <a title={item.title}>
                                    <div className={BlogContentStyle.blog_image}>
                                        <img
                                            src={item.bannerImageUrl}
                                            alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920" height="600"
                                            className="img-fluid"/>
                                        <div className={BlogContentStyle.blogimg_hover}>
                                            <div className={BlogContentStyle.blog_tag}>{item.category}</div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                            <div className={PressContentStyle.blog_info}>
                                <Link href={`/blog/${item.uniqueUrl}`}>
                                    <a title={item.aliasUrl}>
                                        <h2>{item.title}</h2>
                                    </a>
                                </Link>
                                <div className={PressContentStyle.blog_date}>April 30, 2021</div>
                                <p>{item.blogDescription.substr(0,150)}</p>
                                <div className={PressContentStyle.meta_box}>
                                    <img alt='Author' width='42' height='42'
                                         src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`}/>
                                    <span>By Admin</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : null}
                {/*<div className={'blog_inner'}>*/}
                {/*    <div className={'blog_inner_main'}>*/}
                {/*        <Link href='/'>*/}
                {/*            <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                <div className={PressContentStyle.blog_image}>*/}
                {/*                    <img*/}
                {/*                        src={`https://blog.marraforni.com/wp/wp-content/uploads/2021/04/Sous-Vide-Blog-2.png`}*/}
                {/*                        alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920"*/}
                {/*                        height="1080" className="img-fluid"/>*/}
                {/*                    <div className={PressContentStyle.blogimg_hover}>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </a>*/}
                {/*        </Link>*/}
                {/*        <div className={PressContentStyle.blog_info}>*/}
                {/*            <Link href='/'>*/}
                {/*                <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                    <h2>Pittsburg brewery plans fine beer, pizza</h2>*/}
                {/*                </a>*/}
                {/*            </Link>*/}
                {/*            <div className={PressContentStyle.blog_date}>April 30, 2021</div>*/}
                {/*            <p>Food enthusiasts have been fired up about brick ovens since the beginning of written*/}
                {/*                history. Did you know that sundried bricks are the first known manufactured*/}
                {/*                material?</p>*/}
                {/*            <div className={PressContentStyle.meta_box}>*/}
                {/*                <img alt='Author' width='42' height='42'*/}
                {/*                     src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`}/>*/}
                {/*                <span>By Admin</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={'blog_inner'}>*/}
                {/*    <div className={'blog_inner_main'}>*/}
                {/*        <Link href='/'>*/}
                {/*            <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                <div className={PressContentStyle.blog_image}>*/}
                {/*                    <img*/}
                {/*                        src={`https://blog.marraforni.com/wp/wp-content/uploads/2021/03/Rep-Chef-Blog.png`}*/}
                {/*                        alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920"*/}
                {/*                        height="1080" className="img-fluid"/>*/}
                {/*                    <div className={PressContentStyle.blogimg_hover}>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </a>*/}
                {/*        </Link>*/}
                {/*        <div className={PressContentStyle.blog_info}>*/}
                {/*            <Link href='/'>*/}
                {/*                <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                    <h2>Giada De Laurentiis’ New Baltimore Restaurant Is Here</h2>*/}
                {/*                </a>*/}
                {/*            </Link>*/}
                {/*            <div className={PressContentStyle.blog_date}>April 30, 2021</div>*/}
                {/*            <p>Food enthusiasts have been fired up about brick ovens since the beginning of written*/}
                {/*                history. Did you know that sundried bricks are the first known manufactured*/}
                {/*                material?</p>*/}
                {/*            <div className={PressContentStyle.meta_box}>*/}
                {/*                <img alt='Author' width='42' height='42'*/}
                {/*                     src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`}/>*/}
                {/*                <span>By Admin</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={'blog_inner'}>*/}
                {/*    <div className={'blog_inner_main'}>*/}
                {/*        <Link href='/'>*/}
                {/*            <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                <div className={PressContentStyle.blog_image}>*/}
                {/*                    <img*/}
                {/*                        src={`https://blog.marraforni.com/wp/wp-content/uploads/2020/12/cookie-blog-13-scaled.jpg`}*/}
                {/*                        alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920"*/}
                {/*                        height="1080" className="img-fluid"/>*/}
                {/*                    <div className={PressContentStyle.blogimg_hover}>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </a>*/}
                {/*        </Link>*/}
                {/*        <div className={PressContentStyle.blog_info}>*/}
                {/*            <Link href='/'>*/}
                {/*                <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                    <h2>Dwyane Wade and Udonis Haslem to Open 800° Woodfired Kitchen in Aventura</h2>*/}
                {/*                </a>*/}
                {/*            </Link>*/}
                {/*            <div className={PressContentStyle.blog_date}>April 30, 2021</div>*/}
                {/*            <p>Food enthusiasts have been fired up about brick ovens since the beginning of written*/}
                {/*                history. Did you know that sundried bricks are the first known manufactured*/}
                {/*                material?</p>*/}
                {/*            <div className={PressContentStyle.meta_box}>*/}
                {/*                <img alt='Author' width='42' height='42'*/}
                {/*                     src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`}/>*/}
                {/*                <span>By Admin</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={'blog_inner'}>*/}
                {/*    <div className={'blog_inner_main'}>*/}
                {/*        <Link href='/'>*/}
                {/*            <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                <div className={PressContentStyle.blog_image}>*/}
                {/*                    <img*/}
                {/*                        src={`https://blog.marraforni.com/wp/wp-content/uploads/2021/01/It-En-US-Man-copy.png`}*/}
                {/*                        alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920"*/}
                {/*                        height="1080" className="img-fluid"/>*/}
                {/*                    <div className={PressContentStyle.blogimg_hover}>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </a>*/}
                {/*        </Link>*/}
                {/*        <div className={PressContentStyle.blog_info}>*/}
                {/*            <Link href='/'>*/}
                {/*                <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                    <h2>Dine Review: Inferno Pizzeria</h2>*/}
                {/*                </a>*/}
                {/*            </Link>*/}
                {/*            <div className={PressContentStyle.blog_date}>April 30, 2021</div>*/}
                {/*            <p>Food enthusiasts have been fired up about brick ovens since the beginning of written*/}
                {/*                history. Did you know that sundried bricks are the first known manufactured*/}
                {/*                material?</p>*/}
                {/*            <div className={PressContentStyle.meta_box}>*/}
                {/*                <img alt='Author' width='42' height='42'*/}
                {/*                     src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`}/>*/}
                {/*                <span>By Admin</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*    <div className={'blog_inner'}>
                    <div className={'blog_inner_main'}>
                        <Link href='/'>
                            <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
                                <div className={PressContentStyle.blog_image}>
                                    <img src={`https://blog.marraforni.com/wp/wp-content/uploads/2020/12/Cover.png`}
                                         alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920"
                                         height="1080" className="img-fluid"/>
                                    <div className={PressContentStyle.blogimg_hover}>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <div className={PressContentStyle.blog_info}>
                            <Link href='/'>
                                <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
                                    <h2>Union Market’s New Pizzeria Opens With Crispy Neo-Neapolitan Pies</h2>
                                </a>
                            </Link>
                            <div className={PressContentStyle.blog_date}>April 30, 2021</div>
                            <p>Food enthusiasts have been fired up about brick ovens since the beginning of written
                                history. Did you know that sundried bricks are the first known manufactured
                                material?</p>
                            <div className={PressContentStyle.meta_box}>
                                <img alt='Author' width='42' height='42'
                                     src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`}/>
                                <span>By Admin</span>
                            </div>
                        </div>
                    </div>
                </div>*/}
                {/*<div className={'blog_inner'}>*/}
                {/*    <div className={'blog_inner_main'}>*/}
                {/*        <Link href='/'>*/}
                {/*            <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                <div className={PressContentStyle.blog_image}>*/}
                {/*                    <img*/}
                {/*                        src={`https://blog.marraforni.com/wp/wp-content/uploads/2020/11/Almost-Done-Both-POST-1-e1605804671396.png`}*/}
                {/*                        alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920"*/}
                {/*                        height="1080" className="img-fluid"/>*/}
                {/*                    <div className={PressContentStyle.blogimg_hover}>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </a>*/}
                {/*        </Link>*/}
                {/*        <div className={PressContentStyle.blog_info}>*/}
                {/*            <Link href='/'>*/}
                {/*                <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                    <h2>PBR: The People’s Pizza of Richmond</h2>*/}
                {/*                </a>*/}
                {/*            </Link>*/}
                {/*            <div className={PressContentStyle.blog_date}>April 30, 2021</div>*/}
                {/*            <p>Food enthusiasts have been fired up about brick ovens since the beginning of written*/}
                {/*                history. Did you know that sundried bricks are the first known manufactured*/}
                {/*                material?</p>*/}
                {/*            <div className={PressContentStyle.meta_box}>*/}
                {/*                <img alt='Author' width='42' height='42'*/}
                {/*                     src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`}/>*/}
                {/*                <span>By Admin</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={'blog_inner'}>*/}
                {/*    <div className={'blog_inner_main'}>*/}
                {/*        <Link href='/'>*/}
                {/*            <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                <div className={PressContentStyle.blog_image}>*/}
                {/*                    <img*/}
                {/*                        src={`https://blog.marraforni.com/wp/wp-content/uploads/2020/12/lamb-blog-13-scaled.jpg`}*/}
                {/*                        alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920"*/}
                {/*                        height="1080" className="img-fluid"/>*/}
                {/*                    <div className={PressContentStyle.blogimg_hover}>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </a>*/}
                {/*        </Link>*/}
                {/*        <div className={PressContentStyle.blog_info}>*/}
                {/*            <Link href='/'>*/}
                {/*                <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                    <h2>The new Radicci Italian Bistro in Hayden serves up family-friendly,*/}
                {/*                        Italian-style cuisine</h2>*/}
                {/*                </a>*/}
                {/*            </Link>*/}
                {/*            <div className={PressContentStyle.blog_date}>April 30, 2021</div>*/}
                {/*            <p>Food enthusiasts have been fired up about brick ovens since the beginning of written*/}
                {/*                history. Did you know that sundried bricks are the first known manufactured*/}
                {/*                material?</p>*/}
                {/*            <div className={PressContentStyle.meta_box}>*/}
                {/*                <img alt='Author' width='42' height='42'*/}
                {/*                     src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`}/>*/}
                {/*                <span>By Admin</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={'blog_inner'}>*/}
                {/*    <div className={'blog_inner_main'}>*/}
                {/*        <Link href='/'>*/}
                {/*            <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                <div className={PressContentStyle.blog_image}>*/}
                {/*                    <img src={`https://blog.marraforni.com/wp/wp-content/uploads/2020/11/DBNP165G2.png`}*/}
                {/*                         alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920"*/}
                {/*                         height="1080" className="img-fluid"/>*/}
                {/*                    <div className={PressContentStyle.blogimg_hover}>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </a>*/}
                {/*        </Link>*/}
                {/*        <div className={PressContentStyle.blog_info}>*/}
                {/*            <Link href='/'>*/}
                {/*                <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                    <h2>Hunting for the perfect calzone in the Tacoma area</h2>*/}
                {/*                </a>*/}
                {/*            </Link>*/}
                {/*            <div className={PressContentStyle.blog_date}>April 30, 2021</div>*/}
                {/*            <p>Food enthusiasts have been fired up about brick ovens since the beginning of written*/}
                {/*                history. Did you know that sundried bricks are the first known manufactured*/}
                {/*                material?</p>*/}
                {/*            <div className={PressContentStyle.meta_box}>*/}
                {/*                <img alt='Author' width='42' height='42'*/}
                {/*                     src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`}/>*/}
                {/*                <span>By Admin</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={'blog_inner'}>*/}
                {/*    <div className={'blog_inner_main'}>*/}
                {/*        <Link href='/'>*/}
                {/*            <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                <div className={PressContentStyle.blog_image}>*/}
                {/*                    <img*/}
                {/*                        src={`https://blog.marraforni.com/wp/wp-content/uploads/2020/09/Ali-Haider-Blog-Post.jpg`}*/}
                {/*                        alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920"*/}
                {/*                        height="1080" className="img-fluid"/>*/}
                {/*                    <div className={PressContentStyle.blogimg_hover}>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </a>*/}
                {/*        </Link>*/}
                {/*        <div className={PressContentStyle.blog_info}>*/}
                {/*            <Link href='/'>*/}
                {/*                <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                    <h2>Is the Federal Taphouse in Camp Hill an improvement over Appalachian Brewing*/}
                {/*                        Company?: review</h2>*/}
                {/*                </a>*/}
                {/*            </Link>*/}
                {/*            <div className={PressContentStyle.blog_date}>April 30, 2021</div>*/}
                {/*            <p>Food enthusiasts have been fired up about brick ovens since the beginning of written*/}
                {/*                history. Did you know that sundried bricks are the first known manufactured*/}
                {/*                material?</p>*/}
                {/*            <div className={PressContentStyle.meta_box}>*/}
                {/*                <img alt='Author' width='42' height='42'*/}
                {/*                     src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`}/>*/}
                {/*                <span>By Admin</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={'blog_inner'}>*/}
                {/*    <div className={'blog_inner_main'}>*/}
                {/*        <Link href='/'>*/}
                {/*            <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                <div className={PressContentStyle.blog_image}>*/}
                {/*                    <img*/}
                {/*                        src={`https://blog.marraforni.com/wp/wp-content/uploads/2020/10/salad-1-scaled.jpg`}*/}
                {/*                        alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920"*/}
                {/*                        height="1080" className="img-fluid"/>*/}
                {/*                    <div className={PressContentStyle.blogimg_hover}>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </a>*/}
                {/*        </Link>*/}
                {/*        <div className={PressContentStyle.blog_info}>*/}
                {/*            <Link href='/'>*/}
                {/*                <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                    <h2>Hunting for the perfect calzone in the Tacoma area</h2>*/}
                {/*                </a>*/}
                {/*            </Link>*/}
                {/*            <div className={PressContentStyle.blog_date}>April 30, 2021</div>*/}
                {/*            <p>Food enthusiasts have been fired up about brick ovens since the beginning of written*/}
                {/*                history. Did you know that sundried bricks are the first known manufactured*/}
                {/*                material?</p>*/}
                {/*            <div className={PressContentStyle.meta_box}>*/}
                {/*                <img alt='Author' width='42' height='42'*/}
                {/*                     src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`}/>*/}
                {/*                <span>By Admin</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={'blog_inner'}>*/}
                {/*    <div className={'blog_inner_main'}>*/}
                {/*        <Link href='/'>*/}
                {/*            <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                <div className={PressContentStyle.blog_image}>*/}
                {/*                    <img*/}
                {/*                        src={`https://blog.marraforni.com/wp/wp-content/uploads/2020/10/Enzo-Highlight-Final-Master.png`}*/}
                {/*                        alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920"*/}
                {/*                        height="1080" className="img-fluid"/>*/}
                {/*                    <div className={PressContentStyle.blogimg_hover}>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </a>*/}
                {/*        </Link>*/}
                {/*        <div className={PressContentStyle.blog_info}>*/}
                {/*            <Link href='/'>*/}
                {/*                <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                    <h2>Pieology opens secret research restaurant aimed at outcooking build-your-own*/}
                {/*                        pizza rivals</h2>*/}
                {/*                </a>*/}
                {/*            </Link>*/}
                {/*            <div className={PressContentStyle.blog_date}>April 30, 2021</div>*/}
                {/*            <p>Food enthusiasts have been fired up about brick ovens since the beginning of written*/}
                {/*                history. Did you know that sundried bricks are the first known manufactured*/}
                {/*                material?</p>*/}
                {/*            <div className={PressContentStyle.meta_box}>*/}
                {/*                <img alt='Author' width='42' height='42'*/}
                {/*                     src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`}/>*/}
                {/*                <span>By Admin</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={'blog_inner'}>*/}
                {/*    <div className={'blog_inner_main'}>*/}
                {/*        <Link href='/'>*/}
                {/*            <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                <div className={PressContentStyle.blog_image}>*/}
                {/*                    <img*/}
                {/*                        src={`https://blog.marraforni.com/wp/wp-content/uploads/2021/04/Marra-Stone-min.jpg`}*/}
                {/*                        alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920"*/}
                {/*                        height="1080" className="img-fluid"/>*/}
                {/*                    <div className={PressContentStyle.blogimg_hover}>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </a>*/}
                {/*        </Link>*/}
                {/*        <div className={PressContentStyle.blog_info}>*/}
                {/*            <Link href='/'>*/}
                {/*                <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                    <h2>Pizzeria Paradiso Hyattsville to open July 8</h2>*/}
                {/*                </a>*/}
                {/*            </Link>*/}
                {/*            <div className={PressContentStyle.blog_date}>April 30, 2021</div>*/}
                {/*            <p>Food enthusiasts have been fired up about brick ovens since the beginning of written*/}
                {/*                history. Did you know that sundried bricks are the first known manufactured*/}
                {/*                material?</p>*/}
                {/*            <div className={PressContentStyle.meta_box}>*/}
                {/*                <img alt='Author' width='42' height='42'*/}
                {/*                     src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`}/>*/}
                {/*                <span>By Admin</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={'blog_inner'}>*/}
                {/*    <div className={'blog_inner_main'}>*/}
                {/*        <Link href='/'>*/}
                {/*            <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                <div className={PressContentStyle.blog_image}>*/}
                {/*                    <img*/}
                {/*                        src={`https://blog.marraforni.com/wp/wp-content/uploads/2020/07/Screen-Shot-2020-07-21-at-8.50.56-AM.jpg`}*/}
                {/*                        alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920"*/}
                {/*                        height="1080" className="img-fluid"/>*/}
                {/*                    <div className={PressContentStyle.blogimg_hover}>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </a>*/}
                {/*        </Link>*/}
                {/*        <div className={PressContentStyle.blog_info}>*/}
                {/*            <Link href='/'>*/}
                {/*                <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                    <h2>Local restaurateurs Rosario Spagnolo and Antonio Martino score with their latest*/}
                {/*                        venture Maestro Cucina </h2>*/}
                {/*                </a>*/}
                {/*            </Link>*/}
                {/*            <div className={PressContentStyle.blog_date}>April 30, 2021</div>*/}
                {/*            <p>Food enthusiasts have been fired up about brick ovens since the beginning of written*/}
                {/*                history. Did you know that sundried bricks are the first known manufactured*/}
                {/*                material?</p>*/}
                {/*            <div className={PressContentStyle.meta_box}>*/}
                {/*                <img alt='Author' width='42' height='42'*/}
                {/*                     src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`}/>*/}
                {/*                <span>By Admin</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={'blog_inner'}>*/}
                {/*    <div className={'blog_inner_main'}>*/}
                {/*        <Link href='/'>*/}
                {/*            <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                <div className={PressContentStyle.blog_image}>*/}
                {/*                    <img*/}
                {/*                        src={`https://blog.marraforni.com/wp/wp-content/uploads/2020/08/37842DA3-D185-4FD0-AA9D-DB8F0F8181C7-scaled-e1598036034569.jpeg`}*/}
                {/*                        alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920"*/}
                {/*                        height="1080" className="img-fluid"/>*/}
                {/*                    <div className={PressContentStyle.blogimg_hover}>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </a>*/}
                {/*        </Link>*/}
                {/*        <div className={PressContentStyle.blog_info}>*/}
                {/*            <Link href='/'>*/}
                {/*                <a title='5 Ways MarraStone Revolutionizes The Brick Oven'>*/}
                {/*                    <h2>Mia’s Italian Kitchen Opens</h2>*/}
                {/*                </a>*/}
                {/*            </Link>*/}
                {/*            <div className={PressContentStyle.blog_date}>April 30, 2021</div>*/}
                {/*            <p>Food enthusiasts have been fired up about brick ovens since the beginning of written*/}
                {/*                history. Did you know that sundried bricks are the first known manufactured*/}
                {/*                material?</p>*/}
                {/*            <div className={PressContentStyle.meta_box}>*/}
                {/*                <img alt='Author' width='42' height='42'*/}
                {/*                     src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`}/>*/}
                {/*                <span>By Admin</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            {/*<ul className={PressContentStyle.pagination}>*/}
            {/*    <li>*/}
            {/*        <button className={PressContentStyle.activepagination}>1</button>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <button>2</button>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <button>3</button>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <button>4</button>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <button>5</button>*/}
            {/*    </li>*/}
            {/*</ul>*/}
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

// export default PressContent