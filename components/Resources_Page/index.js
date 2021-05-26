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
  const[ newArr, setNewArr ] = useState([])

  useEffect(() => {
    setFilterProduct(PRODUCT_DATA)
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

        } else {

          productData.map(val => {
            if (val.id == typeId) {
              val.cat.push(cat)
            }
          })
          setNewArr(productData)
          setFilterProduct(productData)
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