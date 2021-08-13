import React from 'react'
import Head from '../../components/common/Head'
import TechSupportPage from "../../components/TechSupport_Page/TechSupport";

const TechSupport = ()=>{
    return(
        <>
            <Head
                title='Tech Support - MarraForni'
                description='MARRA FORNI Tech Support Page'
                canonical='tech-support'
            />
            <TechSupportPage />
        </>
    )
}
export default TechSupport