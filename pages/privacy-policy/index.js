import React from 'react'
import Head from '../../components/common/Head'
import PrivacyPolicyMain from '../../components/PrivacyPolicy'

const PrivacyPolicy = (props) => {
  return(
    <>
      <Head
        title='Privacy Policy - MarraForni'
        description='MARRA FORNI PRIVACY POLICY'
        canonical='privacy-policy'
      />
      <PrivacyPolicyMain />
    </>
   )

 }

export default PrivacyPolicy