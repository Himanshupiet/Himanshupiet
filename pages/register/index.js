import React from 'react'
import Head from '../../components/common/Head'
import Register from "../../components/Register_Page/register";

const register = ()=>{
    return(
        <>
            <Head
                title='Register - MarraForni'
                description='MARRA FORNI Register Page'
            />
            <Register />
        </>
    )
}
export default register