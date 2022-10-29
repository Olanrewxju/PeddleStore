import React from 'react'
import classes from './MainCart.module.css'
import cartFour from '../Assets/icons/cart_pics/cart_four.svg'
import cartFive from '../Assets/icons/cart_pics/cart_five.svg'
import visa from '../Assets/icons/cart_pics/visa.svg'
import masterCard from '../Assets/icons/cart_pics/mastercard.svg'
import paypal from '../Assets/icons/cart_pics/paypal.svg'
import eclipse from '../Assets/icons/cart_pics/ellipse.svg'
import eclipsetwo from '../Assets/icons/cart_pics/ellipsetwo.svg'
import Delete from '../Assets/icons/cart_pics/delete.svg'


function MainCart() {
  return (
    <div className={classes.cart_div}>
        <div className={classes.column_one}>
            <div className={classes.subcolumn_one}>
                <img className={classes.prdppic_size} src={cartFour}/>
                <div>
                    <p className={classes.style_prd_name}>Channel Parfume</p>
                    <p  className={classes.style_floral_text}>Floral Smell</p>
                    <div className={classes.subcolumn_one_prices}>
                        <p className={classes.style_price_one}>NGN35,500.00</p>
                        <p className={classes.style_price_two}>NGN22,264.00</p>
                    </div>
                    <div>
                        <p>Q-ty <span className={classes.style_sign}>  +</span> 00 <span className={classes.style_sign}>-</span> <span><img src={Delete} alt="" /></span></p>
                    </div>
                </div>
            </div>
            <div className={classes.subcolumn_one}>
                <img className={classes.prdppic_size} src={cartFive}/>
                <div>
                    <p className={classes.style_prd_name}>Channel Parfume</p>
                    <p  className={classes.style_floral_text}>Floral Smell</p>
                    <div className={classes.subcolumn_one_prices}>
                        <p className={classes.style_price_one}>NGN35,500.00</p>
                        <p className={classes.style_price_two}>NGN22,264.00</p>
                    </div>
                    <div>
                        <p>Q-ty <span className={classes.style_sign}>  +</span> 00 <span className={classes.style_sign}>-</span> <span><img src={Delete} alt="" /></span></p>
                    </div>
                </div>
            </div>
            <div className={classes.cart_total}>
                <p>Sub Total</p>
                <p>NGN 37,288.00</p>
            </div>
        </div>
        <div className={classes.column_two}>
            <div className={classes.delivery}>
                <div className={classes.free}>
                    <img src={eclipse} alt="" />
                    <p>Free delivery</p>
                    <p>15-20 business days</p>
                </div>
                <div className={classes.dhl}>
                    <img className={classes.eclipseone} src={eclipse} alt="" />
                        <img className={classes.eclipsetwo} src={eclipsetwo} alt="" />
                    <p>DHL delivery</p>
                    <p>15-7 business days</p>
                </div>
            </div>
            <div className={classes.card_details}>
                <div className={classes.card_types}>
                    <img src={masterCard}/>
                    <img src={visa} />
                    <img src={paypal}/>
                </div>
                <div className={classes.card_number}>
                    <p className={classes.style_month_cvv}>XXXX XXXXX XXXX XXXXXX</p>
                </div>
                <div className={classes.card_date_cvv}>
                    <div className={classes.card_date}>
                        <p className={classes.style_month_cvv}>MM/YY</p>
                    </div>
                    <div className={classes.card_cvv}>
                        <p className={classes.style_month_cvv}>CVC</p>
                    </div>
                </div>
                <div className={classes.card_pay}><p className={classes.style_pay}>PAY NGN 37,288.00</p></div>
                <p className={classes.discount}>Add discount code</p>
            </div>
        </div>
    </div>
  )
}

export default MainCart