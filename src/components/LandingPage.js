import React from 'react'
import Footer from './Footer'
import FooterWOProducts from './FooterWOProducts'
import Header from './Header'


function LandingPage({children,woproducts}) {
  return (
    <>
      <Header />
      {children}
      {woproducts ? <FooterWOProducts /> : <Footer />}
    </>
  )
}

export default LandingPage
