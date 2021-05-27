import React, {useEffect, useState} from 'react'

import Header from '../header/header'
import Footer from '../footer/footer'
import Filters from './Filters/Filters'
import FiltersResult from './FiltersResult/FiltersResult'

import ResourceStyle from './index.module.css'
import { Container, Row, Col } from 'react-bootstrap'

import { PRODUCT_DATA } from './product'

const Resources_main = (props) => {
  const[ allProduct, setAllProduct ] = useState([])
  const[ filterProduct, setFilterProduct ] = useState([])
  const[ searchProduct, setSearchProduct ] = useState([])
  const[ newArr, setNewArr ] = useState([])

  useEffect(() => {
    setFilterProduct(PRODUCT_DATA)
    setSearchProduct(PRODUCT_DATA)
    setAllProduct(PRODUCT_DATA.map(val => {
        return {
          ...val,
          cat: val.cat.map(item => {
            return {...item, checked: false}
          })
        }
      })
    )
  },[])

  const handleSelect = (e, typeId, cat, idx, index) => {
    const { value } = e.target
    let productData = [...newArr]
    let filterType =
      allProduct &&
      allProduct.length &&
      allProduct.find(val => val.id == typeId )
    if(allProduct[idx].cat[index].checked) {
      if (newArr.length) {
        let notRepeatProductArr =
          newArr &&
          newArr.length &&
          newArr.find(item => item.id == typeId)
        if (!notRepeatProductArr) {
          let notRepeatCatArr =
            filterType &&
            filterType.cat &&
            filterType.cat.length &&
            filterType.cat.filter(val => val.id == value)
          filterType = {
            ...filterType,
            cat: notRepeatCatArr
          }
          productData.push(filterType)
          setNewArr(productData)
          setFilterProduct(productData)
          setSearchProduct(productData)
        } else {
          productData.map(val => {
            if (val.id == typeId) {
              val.cat.push(cat)
            }
          })
          setNewArr(productData)
          setFilterProduct(productData)
          setSearchProduct(productData)
        }

      } else {
        let notRepeatCatArr =
          filterType &&
          filterType.cat &&
          filterType.cat.length &&
          filterType.cat.filter(val => val.id == value)
        filterType = {...filterType, cat: notRepeatCatArr}
        productData.push(filterType)
        setNewArr(productData)
        setFilterProduct(productData)
        setSearchProduct(productData)
      }
    }else{
      let productArr = productData.map(val => {
        if(val.id == typeId){
          return {
            ...val,
            cat:val &&
              val.cat &&
              val.cat.length &&
              val.cat.filter(item => item.id != cat.id)
          }
        }else{
          return val
        }
      })
      productArr = productArr.filter(val => val.cat.length)
      if(productArr.length > 1){
        setFilterProduct(productArr)
        setSearchProduct(productArr)
        setNewArr(productArr)
      }else if( productArr && productArr.length && productArr[0].cat && productArr[0].cat.length > 1) {
        setFilterProduct(productArr)
        setSearchProduct(productArr)
        setNewArr(productArr)
      }else{
        if(productArr && productArr.length &&  productArr[0].cat && productArr[0].cat.length){
          setFilterProduct(productArr)
          setSearchProduct(productArr)
          setNewArr(productArr)
        }else{
          setFilterProduct(allProduct)
          setSearchProduct(allProduct)
          setNewArr([])
        }
      }
    }
  }

  const handleSearch = (value) => {
    let filterProductArr = searchProduct
    if(value){
      let filterSearch = [...filterProductArr]
      let SearchProductArr = filterSearch.map(val => {
        let catArr = []
        if(val && val.cat && val.cat.length){
          val.cat.forEach((item, index)=>{
            if(item.name.toLowerCase().includes(value.toLowerCase()) || item.catDescription.toLowerCase().includes(value.toLowerCase())){
              catArr.push(item)
            }
          })
        }
        return {
          ...val,
          cat: catArr
        }
      })
      setFilterProduct(SearchProductArr)
    }
    else{
      let isCatChecked = false
      allProduct &&
      allProduct.length &&
      allProduct.map((value,index)=>{
        value &&
        value.cat &&
        value.cat.length &&
        value.cat.map((value,index)=>{
          if(value.checked){
            isCatChecked = true
          }
        })
      })

      if(isCatChecked){
        setFilterProduct(filterProductArr)
      }
      else{
        setFilterProduct(allProduct)
      }
    }
  }

  return(
    <>
      <Header />
      <div style={{
        height:'300px',
        backgroundImage:`url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/resource_banner.png)`,
        backgroundRepeat:'no-repeat',
        backgroundAttachment:'fixed',
        backgroundSize:'cover',
        backgroundPosition: 'center'
      }}/>
      <section className={ResourceStyle.section_outer}>
        <Container fluid>
          <Row>
            <Col lg={1}></Col>
            <Col lg={10}>
              <Row>
                <Col md={3}>
                  <Filters
                    product={ allProduct }
                    handleSelect = { handleSelect }
                  />
                </Col>
                <Col md={9}>
                  <FiltersResult
                    product={ filterProduct }
                    handleSearch = { handleSearch }
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
   )

 }

export default Resources_main