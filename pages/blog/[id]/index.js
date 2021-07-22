import React, {useEffect, useState} from 'react'
import BlogSingleMain from '../../../components/BlogSingle'
import Head from '../../../components/common/Head'
import {useRouter} from "next/router";
import axios from "axios";
import {API_HOST} from '../../../env'

const BlogSingle = (props) => {
  const router = useRouter()
  const {id} = router.query
  const [data, setData] = useState({})
    console.log(data)
  useEffect(() => {
    axios.get(`${API_HOST}blog/getBlogDetailsByUniqueURL?alias=false&blogUrl=` + id, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((res) => {
        if (res.status) {
            setData(res.data)
        }
    }).catch((error) => {
    })
}, [id])

    return(
			<>
      <Head
        title={data && data.title}
        description={data && data.blogDescription}
        keywords = {data && data.metaKeyword}
        image = {data && data.bannerImageUrl}
        imageAlt = {data && data.altTag}
      />
      <BlogSingleMain />
    </>
    )

}

export default BlogSingle
