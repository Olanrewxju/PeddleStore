import React from 'react'
import classes from './DisplayProduct.module.css'
import Fav from '../Assets/icons/fav_icon.svg'
import displayPic from '../Assets/icons/displayproduct_icons/chanel_perfume.svg' 
import prdPic1 from '../Assets/icons/displayproduct_icons/prdPic1.svg'
import prdPic2 from '../Assets/icons/displayproduct_icons/prdPic2.svg'
import prdPic3 from '../Assets/icons/displayproduct_icons/prdPic3.svg'
import prdPic4 from '../Assets/icons/displayproduct_icons/prdPic4.svg'
import discount from '../Assets/icons/displayproduct_icons/discount.svg'
// import Button from './Button'
import heart from '../Assets/icons/cart_pics/heart.svg'

function DisplayProduct() {
  return (
    <div className={classes.product_and_details}>
        <div className={classes.product_picture}>
            <div className={classes.picture_container}>
                <div className={classes.pic_and_badge}>
                    <img className={classes.displayPic} src={displayPic} />
                    <img className={classes.discount_badge} src={discount}/>
                </div>
                <div className={classes.prdPictures}>
                    <img className={classes.prdPic} src={prdPic1} />
                    <img className={classes.prdPic} src={prdPic2} />
                    <img className={classes.prdPic} src={prdPic3} />
                    <img className={classes.prdPic} src={prdPic4} />
                </div>
            </div>
        </div>
        <div className={classes.product_details}>
            <p className={classes.product_name}>Channel Parfume</p>
            <img src={Fav}/>
            <div className={classes.product_cost}>
                <p>NGN35,500.00</p>
                <p>NGN22,264.00</p>
            </div>
            <p className={classes.product_descr}>A classic perfume never goes out of style. This is our<br/> most premium collection of perfumes. With a very <br/> uniques smell, be sure to turn heads wherever you go.</p>
            <div className={classes.button}>
                <select className={classes.select}>
                    <option value="">Select Size</option>
                </select>
                <div className={classes.flex_buttons}>
                    <div className={classes.button_design2}>
                        ADD TO CART
                    </div>
                    <div  className={classes.button_design3}>
                        <img src={heart} alt="" />
                    </div>
                </div>
                <p className={classes.category_tag}><span className={classes.category}>Category</span>: Women, Perfume, Smell<br /><span className={classes.category}>Tags</span>: Modern Design</p>
            </div>
        </div>
    </div>
  )
}

export default DisplayProduct