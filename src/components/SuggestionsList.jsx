import React from 'react'
import classes from './SuggestionsList.module.css'
import Suggestions from './Suggestions';
import cartOne from '../Assets/icons/cart_pics/cart_one.svg'
import cartTwo from '../Assets/icons/cart_pics/cart_two.svg'
import cartThree from '../Assets/icons/cart_pics/cart_three.svg'


function SuggestionsList() {
    const suggestedProducts = [
      {
        id: 1,
        name: 'Baggy Jeans with Bralette',
        image: cartOne,
        price: 'NGN15,500.00',
        badge:'New',
      },
      {
        id: 2,
        name: 'Blue Jumpsuit',
        image: cartTwo,
        price: 'NGN35,500.00',
        badge:'25% OFF',
      },
      {
        id: 3,
        name: 'Nike Black Hightop Converse',
        image: cartThree,
        price: 'NGN85,000.00',
        badge:'25% OFF',
      },
    ]

    const suggestedProductList = suggestedProducts.map(product => <Suggestions product={product} />);

  return (
    <div>
      <p className={classes.like}>You might also like</p>
      <div className={classes.suggestion_container}>
        {suggestedProductList}
      </div>
    </div>
  )
}

export default SuggestionsList