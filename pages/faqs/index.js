import React from 'react'
import Head from '../../components/common/Head'
import Faq from "../../components/Faq_Page/faq";


const Faqs = () => {
    return (
        <>
            <Head
                title='FAQ - MarraForni'
                description='Have A Question?'
                canonical='faqs'
            />
            <Faq/>
        </>
    )
}
export default Faqs