import React from 'react'
import DescriptionReview from '../components/DescriptionReview'
import Navigation from '../components/shared/Navigation/Navigation'
import Footer from '../components/shared/Footer/Footer'
import RelatedProductList from '../components/RelatedProductList'
import DisplayProduct from '../components/DisplayProduct'

function Home() {
  const myStyle = {
    width: '95%',
    margin: '0 auto',
  }
  return (
    <div>
        <Navigation />
        <div style={myStyle}>
          <DisplayProduct/>
          <DescriptionReview/>
          <RelatedProductList />
        </div>
        <Footer />
    </div>
  )
}

export default Home