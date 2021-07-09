import React from 'react'
import Head from '../../components/common/Head'
import ErrorPage from "../../components/404_Page/Error";


const MyCustom404Page = () => {
    return (
        <>
            <Head
                title='FAQ - MarraForni'
                description='MARRA FORNI FAQ'
            />
            <ErrorPage/>
        </>
    )
}
export default MyCustom404Page