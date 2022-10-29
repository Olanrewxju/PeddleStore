import React from 'react'
import classes from './RelatedProduct.module.css'

function RelatedProduct({product}) {
  return (
      <div className={classes.perfume_container}>
        <div className={classes.perfume}>
            <div className={classes.badge}>{product.badge}</div>
            <img className={classes.image_ppt} src={product.image}/>
          <div>
              <p className={classes.perfume_name}>{product.name}</p>
              <p className={classes.discountedPrice}>{product.discountedPrice}</p>
              <p className={classes.price}>{product.price}</p>
          </div>
        </div>
    </div>
  )
}

export default RelatedProduct