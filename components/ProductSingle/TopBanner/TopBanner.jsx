import Link from 'next/link';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import TopBannerStyle from './TopBanner.module.css';

/**
* @author
* @function TopBanner
**/

const TopBanner = (props) => {
    const { categoryName, imageUrl } = props.data;
  return(
    <section className={TopBannerStyle.section_outer} style={{backgroundImage:`url(${props.data.bannerImage}`}}>
      <ScrollAnimation animateIn="zoomIn" animateOnce={true} duration={1}>  
        <div className={TopBannerStyle.title_box}>
            {props.data.productCategory}<br />
          <Link href="/contact">
            <a className="mf_btn" title="Request a Demo">Request a Demo</a>
          </Link>
        </div>
      </ScrollAnimation>
    </section>
   )
  }


export default TopBanner