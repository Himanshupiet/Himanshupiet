import React from 'react'
import Head from '../../components/common/Head'
import ThankYou from '../../components/ThankYou/ThankYou'


const ThankYouPage = (props) => {
    return(
        <>
            <Head
                title='Thank you - MarraForni'
                description='Thank you for your interest!'
            />
            <ThankYou />
        </>
    )

}

export default ThankYouPage