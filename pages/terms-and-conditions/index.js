import React from 'react'
import Head from '../../components/common/Head'
import TermsAndConditionsMain from '../../components/TermsAndConditions'

const TermsAndConditions = (props) => {
  return(
    <>
      <Head
        title='Terms and Conditions - MarraForni'
        description='MARRA FORNI Terms and Conditions'
        canonical='terms-and-conditions'
      />
      <TermsAndConditionsMain />
    </>
   )

 }

export default TermsAndConditions