import React from 'react'
import BlogMain from '../../components/Blog_Page'
import Head from '../../components/common/Head'

const blog = (props) => {
    return (
        <>
            <Head
               title='Marra Forni Blog | Marra Froni | Secret For Great Authentic Italian Food'
               description=''
               canonical='blog'
            />
            <BlogMain />
        </>
    )

}

export default blog
