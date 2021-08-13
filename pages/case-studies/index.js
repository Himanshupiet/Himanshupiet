import React from 'react'
import Head from '../../components/common/Head'
import CaseStudiesPage from "../../components/CaseStudies_Page/casestudies";



const CaseStudies = () => {
    return (
        <>
            <Head
                title='Case Studies - MarraForni'
                description='Choosing The Right Commercial Brick Oven…Marra Forni is the premier and fastest-growing manufacturer of brick oven cooking solutions to the global commercial'
                canonical='case-studies'
            />
            <CaseStudiesPage/>
        </>
    )
}
export default CaseStudies