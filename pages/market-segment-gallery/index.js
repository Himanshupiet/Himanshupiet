import React from 'react'
import Head from '../../components/common/Head'
import MarketSegmentGalleryMain from '../../components/MarketSegmentGallery_Page'

const MarketSegmentGallery = (props) => {
  return(
    <>
      <Head
        title='Market Segment Gallery - MarraForni'
        description='Marra Forni is built for the people who believe in us and use our brick ovens and other Marra Forni products daily to feed thousands of hungry mouths around'
        canonical='market-segment-gallery'
      />
      <MarketSegmentGalleryMain />
    </>
   )

 }

export default MarketSegmentGallery