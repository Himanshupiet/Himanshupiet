import React, {useState} from 'react'
import FilterStyle from './Filters.module.css'

const Filters = (props) => {
  const [filterOpen, setFilterOpen] = useState({
    ProductOpen: false,
    ResourcesOpen: false,
    OtherinfoOpen: false,
    LanguageOpen: false
  });

  const handleFilterOpen = () => {
    console.log('hello')
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
            <li>
              <label><input type='checkbox' value='Rotator Series' />Rotator Series</label>
            </li>
            <li>
              <label><input type='checkbox' value='Neapolitan Series' />Neapolitan Series</label>
            </li>
            <li>
              <label><input type='checkbox' value='ELECTRO Series' />ELECTRO Series</label>
            </li>
            <li>
              <label><input type='checkbox' value='MS Series' />MS Series</label>
            </li>
            <li>
              <label><input type='checkbox' value='Mobile Series' />Mobile Series</label>
            </li>
            <li>
              <label><input type='checkbox' value='Direct Ventilation System' />Direct Ventilation System</label>
            </li>
            <li>
              <label><input type='checkbox' value='Refrigerated Prep Table' />Refrigerated Prep Table</label>
            </li>
            <li>
              <label><input type='checkbox' value='Refrigerated Condiment Rail' />Refrigerated Condiment Rail</label>
            </li>
            <li>
              <label><input type='checkbox' value='Dough Mixers' />Dough Mixers</label>
            </li>
            <li>
              <label><input type='checkbox' value='Flylwheel Slicer' />Flylwheel Slicer</label>
            </li>
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
            <li>
              <label><input type='checkbox' value='Spec Sheets' />Spec Sheets</label>
            </li>
            <li>
              <label><input type='checkbox' value='CAD Drawings' />CAD Drawings</label>
            </li>
            <li>
              <label><input type='checkbox' value='Revit Files' />Revit Files</label>
            </li>
            <li>
              <label><input type='checkbox' value='User Manual' />User Manual</label>
            </li>
            <li>
              <label><input type='checkbox' value='Brochure' />Brochure</label>
            </li>
            <li>
              <label><input type='checkbox' value='Service Manual' />Service Manual</label>
            </li>
            <li>
              <label><input type='checkbox' value='Installation Manual' />Installation Manual</label>
            </li>
            <li>
              <label><input type='checkbox' value='Quick Star Guide' />Quick Star Guide</label>
            </li>
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
              <label><input type='checkbox' value='Blog' />Blog</label>
            </li>
            <li>
              <label><input type='checkbox' value='Case Study' />Case Study</label>
            </li>
          </ul>
        </div>
        <li 
          className={FilterStyle.filters} 
          onClick={() => {
            setFilterOpen((preValues)=>{
              return {...preValues, LanguageOpen: !filterOpen.LanguageOpen}
            })
          }}
        >
          Language <span><i className={filterOpen.LanguageOpen ? "bx bxs-chevron-down" : "bx bxs-chevron-up"}></i></span>
        </li>
        <div className={`${FilterStyle.filter_option} ${filterOpen.LanguageOpen ? FilterStyle.openFilterOption : ''}`}>
          <ul>
            <li>
              <label><input type='checkbox' value='English' />English</label>
            </li>
            <li>
              <label><input type='checkbox' value='Spanish' />Spanish</label>
            </li>
            <li>
              <label><input type='checkbox' value='French' />French</label>
            </li>
          </ul>
        </div>
      </ul>
    </div>
   )
  }


export default Filters