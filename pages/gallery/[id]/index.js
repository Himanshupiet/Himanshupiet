import React from 'react'
import Head from '../../../components/common/Head'
import RestaurentMain from '../../../components/RestaurentSingle'

const RestaurentSingle = (props) => {
  return(
    <>
      <Head
        title='Pizzeria Vetri - MarraForni'
        description='Pizzeria Vetri - MarraForni'
      />
      <RestaurentMain />
    </>
   )

 }

export default RestaurentSingle