import React from 'react'
import classes from './Sponsor.module.css'

function Sponsor({image}) {
  return (
    <div className={classes.sponsor_icon}>
        <img src={image}></img>
    </div>
  )
}

export default Sponsor