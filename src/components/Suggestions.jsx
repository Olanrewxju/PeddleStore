import React from 'react'
import classes from './Suggestions.module.css'
import heart from '../Assets/icons/cart_pics/heart.svg'


function Suggestions({product}) {
  return (
    <div className={classes.suggestion_div}>
      <div className={classes.each_sugg_div}>
          <div className={classes.suggestion_badge}>{product.badge}</div>
          <img className={classes.suggestion_image} src={product.image}/>
          <img className={classes.heart} src={heart}/>
          
      <div className={classes.suggestion_desc}>
          <p className={classes.suggestion_name}>{product.name}</p>
          <p className={classes.suggestion_price}>{product.price}</p>
      </div>
      </div>
    </div>
  )
}

export default Suggestions