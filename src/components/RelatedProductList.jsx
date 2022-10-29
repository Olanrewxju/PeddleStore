import React from 'react'
import RelatedProduct from './RelatedProduct';
import classes from './RelatedProductList.module.css'
import blueChanel from '../Assets/icons/bluechanel.svg';
import cocoChanel from '../Assets/icons/cocochanel.svg';
import yslPerfume from '../Assets/icons/ysl.svg';
import versace from '../Assets/icons/versace.svg';

function RelatedProductList() {
    const relatedProducts = [
      {
        id: 1,
        name: 'Blue Chanel',
        image: blueChanel,
        discountedPrice: 'N82,500.00',
        price: 'N50,026.00',
        badge:'20% off',
      },
      {
        id: 2,
        name: 'Versace Eros (Limited Edition',
        image: versace,
        price: 'N100,000.00',
        badge:'New',
      },
      {
        id: 3,
        name: 'Coco Chanel',
        image: cocoChanel,
        // discountedPrice: 'N1,400.00',
       price: 'N51,170.00',
       badge: 'Old',
      },
      {
        id: 4,
        name: 'YSL Perfume',
        image: yslPerfume,
        discountedPrice: 'N71,200.00',
        price: 'N41,960.00',
        badge:'25% off',
      }
    ]

    const relatedProductList = relatedProducts.map(product => <RelatedProduct product={product} />);

  return (
    <div className={classes.product_container}>
      {relatedProductList}
    </div>
  )
}

export default RelatedProductList