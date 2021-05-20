import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import Timelines from './Timelines/Timelines'
import OurTeam from './OurTeam/OurTeam'

const AboutUsMain = (props) => {
  return(
    <>
      <Header />
      <Timelines />
      <OurTeam />
      <Footer />
    </>
   )

 }

export default AboutUsMain