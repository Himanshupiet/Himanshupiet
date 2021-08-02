import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

import SearchBoxStyle from './SearchBox.module.css'
import axios from 'axios'

import {API_HOST} from "../../../env";

const HeaderSearchBox = (props) => {
  const wrapperRef = useRef(null)
  const { setIsOpenSearchBox } = props
  const[ searchText, setSearchText] = useState([])
  const[ queryParams, setQueryParams] = useState('')


    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpenSearchBox(false),
                setSearchText([])
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        };
    }, [wrapperRef]);

  useEffect(() => {
      if(queryParams)
      axios({
          url: `${API_HOST}search/searchDataInElasticSearch?from=0&query=${queryParams}&size=10`,
          headers: {
              'Content-Type': 'application/json'
          },
          data: {},
          method: 'get'
      })
          .then(response =>{
              setSearchText(response && response.data && response.data.hits)
          })
          .catch(error => {
              return error
          })
  },[queryParams])

  const handleSearch = (e) => {
      setQueryParams(e.target.value)
  }

  const toggleSearch = () =>{
        setIsOpenSearchBox(false),
        setSearchText([])
  }

  return(
    <div className={SearchBoxStyle.header_search_box} ref={wrapperRef}>
      <div className={SearchBoxStyle.header_search_bar}>
        <span className={SearchBoxStyle.search_icon}><FontAwesomeIcon icon={faSearch} /></span>
        <div className={SearchBoxStyle.input_search}>
            <input type="search" placeholder="Search Blog and Products" onChange={(e) => handleSearch(e)}/>
        </div>
        <span
            className={SearchBoxStyle.close_icon}
            onClick={() => toggleSearch()}>
            <FontAwesomeIcon icon={faTimes} />
        </span>
      </div>

          {
              searchText &&
              searchText.hits ?
                      <div className={SearchBoxStyle.search_result}>
                          { searchText.hits.length ?
                            searchText.hits.map((item, i) => {
                              return (
                                  <Link
                                      href={
                                                item &&
                                                item.sourceAsMap &&
                                                item.sourceAsMap.productName ?
                                                '/product' :
                                                ( item.index == 'blog_index' ) ?
                                                    `/blog/${item.sourceAsMap.uniqueUrl}` :
                                                ( item.index == 'product_index' ) ?
                                                    `/product/${item.sourceAsMap.title}`
                                                    :
                                                    '/'
                                            }
                                      key={i}>
                                      <a title={item.sourceAsMap.productName || item.sourceAsMap.title}>{item.sourceAsMap.productName || item.sourceAsMap.title.substr(0, 100)}</a>
                                  </Link>
                              )
                            })
                           : <div style={{marginLeft:'14px'}}>No result found</div>
                          }
                      </div>
                  : null
          }
    </div>
   )
  }

export default HeaderSearchBox