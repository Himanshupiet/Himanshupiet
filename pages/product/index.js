import React from 'react'

import Head from '../../components/common/Head'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Products from '../../components/Product_page/Products'


const Product = (props) => {
  return(
    <>
      <Head
          title='Products - MarraForni'
          description='Marra Forni offers a one-stop-shop for restaurant oven and oven equipment and appliances and other foodservice businesses. Our innovative solutions range from'
      />
      <Header />
        <div style={{
            height:'610px',
            backgroundImage:`url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/Choose-Your-Model-Banner.png)`,
            backgroundRepeat:'no-repeat',
            backgroundAttachment:'fixed',
            backgroundSize:'cover'
        }}/>
        <Products />
        <Footer />
    </>
   )
 }
export default Product