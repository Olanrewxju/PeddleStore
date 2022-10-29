import React from 'react'
import MainCart from '../components/MainCart'
import Footer from '../components/shared/Footer/Footer'
import Navigation from '../components/shared/Navigation/Navigation'
import SuggestionsList from '../components/SuggestionsList'

function Cart() {
  const myStyle = {
    width: '95%',
    margin: '0 auto',
  }
  return (
    <div>
      <Navigation/>
      <div style={myStyle}>
        <MainCart/>
        <SuggestionsList/>
      </div>
        <Footer/>
    </div>
  )
}

export default Cart