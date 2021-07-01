import React from 'react'
import BlogMain from '../../components/Blog_Page'
import Head from '../../components/common/Head'

const blog = (props) => {
    return (
        <>
            <Head
                // title='Marra Forni Blog | Marra Froni | Secret For Great Authentic Italian Food'
                // description='Marra Forni Blog | Marra Froni | Secret For Great Authentic Italian Food'
                title='The Future of Banking with the Growth of Technology'
                description="The Future of Banking with the Growth of Technology. Banks vs. Fintech. Banks' Responses to
                Fintech. Tech companies in the banking space will be the biggest threat to traditional banking."
                keywords='The Future of Banking,Technology, Banks vs. Fintech, Banking'
      />
			<BlogMain />
    </>
    )

}

export default blog
