import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import TopBannerSlider from './TopBannerSlider/TopBannerSlider'
import VideoSlider from './VideoSlider/VideoSlider'

const PressMain = (props) => {
  return(
    <>
      <Header />
      <TopBannerSlider />
      <VideoSlider />
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/r0-q0YIHxO4?controls=0&rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
      <div style={{height:"50px"}}></div>
      <Footer />
    </>
   )

 }

export default PressMain