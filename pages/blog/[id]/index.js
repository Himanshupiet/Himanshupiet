import React, {useEffect, useState} from 'react'
import BlogSingleMain from '../../../components/BlogSingle'
import Head from '../../../components/common/Head'
import {useRouter} from "next/router";
import axios from "axios";
import {API_HOST} from '../../../env'
import Loader from "../../../components/Loading/loading";

const BlogSingle = (props) => {
  const router = useRouter()
  const {id} = router.query
  const [data, setData] = useState({})
  const [loading, setLoader] = useState(false)
  useEffect(() => {
    setLoader(true)
    axios.get(`${API_HOST}blog/getBlogDetailsByUniqueURL?alias=false&blogUrl=` + id, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((res) => {
        console.log(res,'gggg')
        if (res.status) {
            setData(res.data)
        }
        setLoader(false)
    }).catch((error) => {
      setLoader(false)
    })
  }, [id])

    return(
	<>
      <Head
        title={data && data.title}
        description={data && data.blogDescription}
        keywords = {data && data.metaKeyword}
        image = {data && data.bannerWebpImageUrl}
        imageAlt = {data && data.altTag}
      />
       <Loader data={loading}/>
      <BlogSingleMain />
    </>
    )

}

export default BlogSingle
