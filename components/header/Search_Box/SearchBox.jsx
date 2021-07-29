import React from 'react'
import SearchBoxStyle from './SearchBox.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const HeaderSearchBox = ({setIsOpenSearchBox}) => {
  return(
    <div className={SearchBoxStyle.header_search_box}>
      <div className={SearchBoxStyle.header_search_bar}>
        <span className={SearchBoxStyle.search_icon}><FontAwesomeIcon icon={faSearch} /></span>
        <div className={SearchBoxStyle.input_search}><input type="search" placeholder="Search Blog and Products" /></div>
        <span className={SearchBoxStyle.close_icon} onClick={() => {setIsOpenSearchBox(false)}}><FontAwesomeIcon icon={faTimes} /></span>
      </div>
      <div className={SearchBoxStyle.search_result}>
        <Link href="/">
          <a title="">kyuhkghkh hgjuy</a>
        </Link>
        <Link href="/">
          <a title="">kyuhkghkh hgjuy</a>
        </Link>
        <Link href="/">
          <a title="">kyuhkghkh hgjuy</a>
        </Link>
        <Link href="/">
          <a title="">kyuhkghkh hgjuy</a>
        </Link>
        <Link href="/">
          <a title="">kyuhkghkh hgjuy</a>
        </Link>
        <Link href="/">
          <a title="">kyuhkghkh hgjuy</a>
        </Link>
      </div>
    </div>
   )
  }


export default HeaderSearchBox