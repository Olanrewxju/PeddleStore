import React from 'react'
import classes from './Navigation.module.css'
import searchIcon from '../../../Assets/icons/search-icon.svg'
import userIcon from '../../../Assets/icons/user-icon.svg'
import cartIcon from '../../../Assets/icons/cart-icon.svg'
import {useNavigate} from 'react-router-dom'

function Navigation() {

  let navigate = useNavigate()
  return (
    <div className={classes.site_header}>
      <div className={classes.site_banner} onClick={() => {navigate('/')}}>Peddle</div>
      <div className={classes.site_nav}>
          <span>Home</span>
          <span>Shop</span>
          <span>Women</span>
          <span>Girl</span>
          <span>Lookbook</span>
      </div>
      <div className={classes.nav_icon}>
        <div><img src={searchIcon}/></div>
        <div><img src={cartIcon}/></div>
        <div><img src={userIcon}/></div>
      </div>
    </div>
  )
}

export default Navigation