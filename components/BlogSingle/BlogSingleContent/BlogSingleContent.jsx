import React, {useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import {faFacebookF, faLinkedinIn, faPinterestP, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import BlogSingleContentStyle from './BlogSingleContent.module.css'
import Link from 'next/link';

const BlogSingleContent = (props) => {
    const {title, bannerImageUrl, blogData, metaKeyword, altTag, createdBy, renderedHtmlPreview,tags,blogDescription} = props.data;
    return (
        <>
            <div className={BlogSingleContentStyle.feature_image}>
                <img alt={altTag} src={bannerImageUrl} className='img-fluid' style={{objectFit:'cover',height:'500px'}}/>
            </div>
            <div className={BlogSingleContentStyle.title_box}>
                <h2>{title}</h2>
                <div className={BlogSingleContentStyle.meta_info}>
                    <span>April 30, 2021</span> <span>|</span> <span>{createdBy}</span>
                </div>
            </div>
            <div className={BlogSingleContentStyle.content_box}>
                <div dangerouslySetInnerHTML={{__html: blogData && blogData.length && blogData.map(val => { return val })}}></div>
                {/*<p>{blogData}</p>*/}
            </div>
            <div className={BlogSingleContentStyle.social_box}>
                <Row>
                    <Col sm={6}>
                        <div className={BlogSingleContentStyle.tags_outer}>
                            <h6>Tags: </h6>
                            <div className={BlogSingleContentStyle.alltags}>
                                <Link href="/"><a title='Brick Oven'><u>{tags}</u>, </a></Link>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className={BlogSingleContentStyle.social_outer}>
                            <Link href="https://www.facebook.com/marraforni">
                                <a target="_blank" rel="noopener" title="Facebook"><span><FontAwesomeIcon
                                    icon={faFacebookF}/></span></a>
                            </Link>
                            <Link href="https://twitter.com/MarraForni">
                                <a target="_blank" rel="noopener" title="Twitter"><span><FontAwesomeIcon
                                    icon={faTwitter}/></span></a>
                            </Link>
                            <Link href="https://www.linkedin.com/company/marraforni/">
                                <a target="_blank" rel="noopener" title="Linkedin"><span><FontAwesomeIcon
                                    icon={faLinkedinIn}/></span></a>
                            </Link>
                            <Link href="https://www.pinterest.com/marraforni/">
                                <a target="_blank" rel="noopener" title="Pinterest"><span><FontAwesomeIcon
                                    icon={faPinterestP}/></span></a>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}


export default BlogSingleContent