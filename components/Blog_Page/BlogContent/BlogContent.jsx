import React from 'react'
import BlogContentStyle from './BlogContent.module.css' 

const BlogContent = (props) => {
  return(
    <>
      <div className="card border-0">
        <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-img-1.jpg`}
            className={BlogContentStyle.blog_img}
        />
        <div className={`${BlogContentStyle.blog_content} card-body p-4 border`}>
            <h2 className={`${BlogContentStyle.card_title} card-title`}>What Your Browser Says
                About You</h2>
            <span className={BlogContentStyle.sub_heading}>29 September 2016 | By Admin</span>
            <p className="card-text mt-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo....
            </p>
            <a href="/blog/5-ways-marrastone-revolutionizes-the-brick-oven" className={`${BlogContentStyle.blog_btn} btn text-white rounded-0`}>
                Read More
            </a>
        </div>
    </div>
    <div className="card border-0 mt-4">
        <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-img-2.jpg`}
            className={BlogContentStyle.blog_img}
        />
        <div className={`${BlogContentStyle.blog_content} card-body p-4 border`}>
            <h2 className={`${BlogContentStyle.card_title} card-title`}>What Your Browser Says
                About You</h2>
            <span className={BlogContentStyle.sub_heading}>29 September 2016 | By Admin</span>
            <p className="card-text mt-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo....
            </p>
            <a href="#" className={`${BlogContentStyle.blog_btn} btn text-white rounded-0`}>
                Read More
            </a>
        </div>
    </div>
    <div className="card border-0 mt-4">
        <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-img-3.jpg`}
            className={BlogContentStyle.blog_img}
        />
        <div className={`${BlogContentStyle.blog_content} card-body p-4 border`}>
            <h2 className={`${BlogContentStyle.card_title} card-title`}>What Your Browser Says
                About You</h2>
            <span className={BlogContentStyle.sub_heading}>29 September 2016 | By Admin</span>
            <p className="card-text mt-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo....
            </p>
            <a href="#" className={`${BlogContentStyle.blog_btn} btn text-white rounded-0`}>
                Read More
            </a>
        </div>
    </div>
    <div className="pagination d-flex justify-content-between mt-4">
        <div className={BlogContentStyle.pagination_icon}>
            <a href='#'>
                <i className="fa fa-arrow-left pr-3"></i>
                Previous Page
            </a>
        </div>
        <div className={BlogContentStyle.pagination_number}>
          <span>
              <a href="#">1</a>
          </span>
          <span>2</span>
          <span>3</span>
        </div>
        <div className={BlogContentStyle.pagination_icon}>
          <a href="#">
              Next Page
              <i className="fa fa-arrow-right pl-3"></i>
          </a>
        </div>
    </div>
    </>
   )
  }


export default BlogContent