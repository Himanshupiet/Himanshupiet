import React, {useEffect, useState} from 'react'

import Header from '../header/header'
import Footer from '../footer/footer'
import Filters from './Filters/Filters'
import FiltersResult from './FiltersResult/FiltersResult'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as productActions from '../../actions/product'
import {withRouter} from "next/router";

import ResourceStyle from './index.module.css'
import { Container, Row, Col } from 'react-bootstrap'


const Resources_main = (props) => {
  const[ allProduct, setAllProduct ] = useState([])
  const[ filterProduct, setFilterProduct ] = useState([])
  const[ searchProduct, setSearchProduct ] = useState([])
  const[ searchBlog, setSearchBlog ] = useState([])
  const[ searchCaseStudy, setSearchCaseStudy ] = useState([])
  const[ newArr, setNewArr ] = useState([])

  const[ resourceList, setResourceList ] = useState([])
  const[ resourceFList, setResourceFList ] = useState([])
  const[ blogList, setBlogList ] = useState([])
  const[ allCaseStudyList, setAllCaseStudyList ] = useState([])

  const[ blogSelect, setBlogSelect ] = useState(false)
  const[ caseStudySelect, setCaseStudySelect ] = useState(false)

  const[ subCatList, setSubCatList ] = useState([])

  useEffect(() => {
    props.productActions.getAllProduct()
      getAllResourceData()
      getAllBlogForResource([])
      getAllCaseStudy([])
      getSubCategory()
  },[])

  useEffect(() => {
     if(!blogSelect){
       getAllBlogForResource([])
     }
  },[blogSelect])

  useEffect(() => {
     if(!caseStudySelect){
       getAllCaseStudy([])
     }
  },[caseStudySelect])

  useEffect(() => {
    if(props &&
      props.product &&
      props.product.product &&
      props.product.product.length){
      let newProduct = props.product.product.map(item => {
        return {
          ...item,
          cat:item && item.categoryList && item.categoryList.length && item.categoryList.map(cat => {
             return{
               ...cat,
               name: cat.categoryName,
               image: cat.imageUrl,
               catDescription: cat.categoryDescription,
               subcat: cat.subCategoryList
               
             }
          })
        }
      })
      setFilterProduct(newProduct)
      setSearchProduct(newProduct)
      setAllProduct(newProduct.map(val => {
          return {
            ...val,
            cat: val.cat.map(item => {
              return {...item, checked: false}
            })
          }
        })
      )
    }
  }, [props.product])

  const getSubCategory = () => {
      props.productActions.getSubCategory().then(res => {
          setSubCatList(
              res && res.length && res.map(v => {
                return{name:v, active:false}
               })
          )
      })
  }

  const getAllResourceData = (data) => {
      props.productActions.getAllResourceData(data).then(res => {
          let getGData = Object.entries(res)
          let gList = getGData.map(val => {
              return {
                  name: val && val[0],
                  cat: Object.entries(val && val[1]).map(s => {
                      return{
                          name: s[0],
                          subCat:Object.entries(s && s[1]).map((v,i) => {
                              return {
                                        name: v[0],
                                        sCat: v[1].map(vvv => {return {...vvv,name:vvv.name+v[0]}}),
                                        sNewCat:v[1].map(vvv => {return {...vvv,name:vvv.name+v[0]}}),
                                        active:i+1 == 1 ? true : false
                                      }
                          })
                      }
                  })
              }
          })
          let checkList = gList.map(v => {
              return{
                  ...v,
                  checked: false
              }
          })
         setResourceList(checkList)
         setResourceFList(checkList)
      })
  }

  const getAllBlogForResource = (data) => {
      props.productActions.getAllBlogForResource(data).then(res => {
        setBlogList(res)
        setSearchBlog(res)
      })
  }

 const getAllCaseStudy = (data) => {
      props.productActions.getAllCaseStudy(data).then(res => {
        setAllCaseStudyList(res)
        setSearchCaseStudy(res)
      })
  }

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
          if(blogSelect){
              getAllBlogForResource(productData)
          }
          if(caseStudySelect){
              getAllCaseStudy(productData)
          }
        } else {
          productData.map(val => {
            if (val.id == typeId) {
              val.cat.push(cat)
            }
          })
          setNewArr(productData)
          setFilterProduct(productData)
          setSearchProduct(productData)
          if(blogSelect){
              getAllBlogForResource(productData)
          }
          if(caseStudySelect){
              getAllCaseStudy(productData)
          }
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
        if(blogSelect){
            getAllBlogForResource(productData)
        }
        if(caseStudySelect){
            getAllCaseStudy(productData)
        }
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
        if(blogSelect){
            getAllBlogForResource(productArr)
        }
        if(caseStudySelect){
          getAllCaseStudy(productArr)
        }
      }else if( productArr && productArr.length && productArr[0].cat && productArr[0].cat.length > 1) {
        setFilterProduct(productArr)
        setSearchProduct(productArr)
        setNewArr(productArr)
        if(blogSelect){
            getAllBlogForResource(productArr)
        }
        if(caseStudySelect){
           getAllCaseStudy(productArr)
        }
      }else{
        if(productArr && productArr.length &&  productArr[0].cat && productArr[0].cat.length){
          setFilterProduct(productArr)
          setSearchProduct(productArr)
          setNewArr(productArr)
          if(blogSelect){
              getAllBlogForResource(productArr)
          }
          if(caseStudySelect){
             getAllCaseStudy(productArr)
          }
        }else{
          setFilterProduct(allProduct)
          setSearchProduct(allProduct)
          setNewArr([])
          if(blogSelect){
              getAllBlogForResource(allProduct)
          }
          if(caseStudySelect){
              getAllCaseStudy(allProduct)
          }
        }
      }
    }
  }

  const handleSearch = (value) => {
    let filterProductArr = searchProduct
    let filterBlogArr = searchBlog
    let filterCaseStudyArr = searchCaseStudy

    if(value){
      let filterSearch = [...filterProductArr]
      let blogSearch = [...filterBlogArr]
      let caseStudySearch = [...filterCaseStudyArr]

      let caseStudyArr = []
      let blogArr = []
      //product filter
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
      //blog filter
      blogSearch.forEach(blog => {
          if(blog.title.toLowerCase().includes(value.toLowerCase()) || blog.blogDescription.toLowerCase().includes(value.toLowerCase())){
              blogArr.push(blog)
          }
      })
      //case study filter
      caseStudySearch.forEach(caseStudy => {
          if(caseStudy.title.toLowerCase().includes(value.toLowerCase()) || caseStudy.description.toLowerCase().includes(value.toLowerCase())){
              caseStudyArr.push(caseStudy)
          }
      })
      setFilterProduct(SearchProductArr)
      setBlogList(blogArr)
      setAllCaseStudyList(caseStudyArr)
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

  const handleResourceSelect = (e, item, i) => {
      let fList = []
      fList = resourceList.map(v => {
          if (v.name == item.name) {
              return {
                  ...v,
                  checked: !v.checked,
                  filter: v.checked
              }
          } else {
              return {
                  ...v,
                  filter: !v.checked
              }
          }
      })
      setResourceList(fList)
      setResourceFList(fList)
  }

  const selectCat = (item) => {
      let fList = subCatList.map(v => {
          if(v.name == item.name){
              return{
                  ...v,
                  active:!v.active
              }
          }else{
              return{
                  ...v
              }
          }
      })
      setSubCatList(fList)
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
                    filterProduct={ filterProduct }
                    resourceList={ resourceList }
                    handleSelect={ handleSelect }
                    blogSelect={blogSelect}
                    setBlogSelect={setBlogSelect}
                    caseStudySelect={caseStudySelect}
                    setCaseStudySelect={setCaseStudySelect}
                    getAllBlogForResource={ getAllBlogForResource }
                    getAllCaseStudy={ getAllCaseStudy }
                    handleResourceSelect={ handleResourceSelect }
                    subCatList={ subCatList }
                    selectCat={ selectCat }
                  />
                </Col>
                <Col md={9}>
                  <FiltersResult
                    product={ filterProduct }
                    resourceList={
                        resourceFList &&
                        resourceFList.length &&
                        resourceFList.find(v => v.filter == false) ?
                            resourceFList.filter(val => val.filter == false)
                            :
                            resourceFList.filter(val => val.checked == false)
                    }
                    blogList={ blogList }
                    allCaseStudyList={ allCaseStudyList }
                    handleSearch={ handleSearch }
                    subCatList={ subCatList }
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

const mapStateToProps = ({product}) => {
  return {product}
}

const mapDispatchToProps = dispatch => {
  return {
    productActions: bindActionCreators(productActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Resources_main))