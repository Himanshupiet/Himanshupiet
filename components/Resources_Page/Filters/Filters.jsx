import React, {useState, useEffect} from 'react'
import FilterStyle from './Filters.module.css'

const Filters = (props) => {
  const{
      product,
      filterProduct,
      resourceList,
      handleSelect,
      blogSelect,
      setBlogSelect,
      caseStudySelect,
      setCaseStudySelect,
  } = props
  const[ productFilter, setProductFilter ] = useState([])
  const [filterOpen, setFilterOpen] = useState({
    ProductOpen: true,
    ResourcesOpen: true,
    OtherinfoOpen: true,
    LanguageOpen: true
  });

  useEffect(() => {
    setProductFilter(product)
  },[product])

  useEffect(() => {
    if(blogSelect){
       props.getAllBlogForResource(filterProduct)
    }
  },[blogSelect])

  useEffect(() => {
    if(caseStudySelect){
       props.getAllCaseStudy(filterProduct)
    }
  },[caseStudySelect])

  const unique = (array, propertyName) => {
    return array.filter((e, i) => array.findIndex(a => a[propertyName] === e[propertyName]) === i);
  }

  const selectBlogWithCat = () => {
    setBlogSelect(!blogSelect)
  }

 const selectCaseStudyWithCat = () => {
     setCaseStudySelect(!caseStudySelect)
  }

  return(
    <div className={FilterStyle.filter_outer}>
      <h3>Filters</h3>
      <ul className={FilterStyle.filters_main}>
        <li 
          className={FilterStyle.filters} 
          onClick={() => {
            setFilterOpen((preValues)=>{
              return {...preValues, ProductOpen: !filterOpen.ProductOpen}
            })
          }}
        >
          Products <span><i className={filterOpen.ProductOpen ? "bx bxs-chevron-down" : "bx bxs-chevron-up"}></i></span>
        </li>
        <div className={`${FilterStyle.filter_option} ${filterOpen.ProductOpen ? FilterStyle.openFilterOption : ''}`}>
          <ul>
            {
              productFilter.map((types, idx) => {
                return (
                  types.cat.map((cat, index) => {
                    return (
                      <li key={index}>
                        <label>
                          <input
                            onChange={(e) =>{
                              types.cat[index] = {...types.cat[index],checked:!cat.checked}
                              handleSelect(e, types.id, cat, idx, index)
                            }}
                            type='checkbox'
                            value={cat.id} />
                            {cat.name}
                        </label>
                      </li>
                    )
                  })
                )
              })
            }
          </ul>
        </div>
        <li 
          className={FilterStyle.filters} 
          onClick={() => {
            setFilterOpen((preValues)=>{
              return {...preValues, ResourcesOpen: !filterOpen.ResourcesOpen}
            })
          }}
        >
          Resources <span><i className={filterOpen.ResourcesOpen ? "bx bxs-chevron-down" : "bx bxs-chevron-up"}></i></span>
        </li>
        <div className={`${FilterStyle.filter_option} ${filterOpen.ResourcesOpen ? FilterStyle.openFilterOption : ''}`}>
          <ul>
              { resourceList && resourceList.length ?
                  unique(resourceList, 'productType').map((item, i) => {
                    return (
                      <li key={i}>
                        <label>
                            <input type='checkbox' value='Spec Sheets' />
                            {item.productType}
                        </label>
                      </li>
                    )
                  })
              :null}
          </ul>
        </div>
        <li 
          className={FilterStyle.filters} 
          onClick={() => {
            setFilterOpen((preValues)=>{
              return {...preValues, OtherinfoOpen: !filterOpen.OtherinfoOpen}
            })
          }}
        >
          Other Information <span><i className={filterOpen.OtherinfoOpen ? "bx bxs-chevron-down" : "bx bxs-chevron-up"}></i></span>
        </li>
        <div className={`${FilterStyle.filter_option} ${filterOpen.OtherinfoOpen ? FilterStyle.openFilterOption : ''}`}>
          <ul>
            <li>
              <label><input type='checkbox' value='Video' />Video</label>
            </li>
            <li>
              <label>
                  <input
                      type='checkbox'
                      value='Blog'
                      onClick={selectBlogWithCat}
                      checked={blogSelect}
                  />Blog</label>
            </li>
            <li>
              <label>
                  <input
                      type='checkbox'
                      value='Case Study'
                      onClick={selectCaseStudyWithCat}
                      checked={caseStudySelect}
                  />Case Study</label>
            </li>
          </ul>
        </div>
      </ul>
    </div>
   )
  }


export default Filters