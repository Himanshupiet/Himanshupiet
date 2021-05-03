import React from 'react'
import Head from '../../components/common/Head'
import GalleryMain from '../../components/Gallery_Page'

const gallery = (props) => {
  return(
    <>
      <Head
        title='Clients & Partner Gallery - MarraForni'
        description='Marra Forni is built for the people who believe in us and use our brick ovens and other Marra Forni products daily to feed thousands of hungry mouths around'
      />
      <GalleryMain />
    </>
   )

 }

export default gallery