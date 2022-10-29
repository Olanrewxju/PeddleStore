import React from 'react'
import classes from './Button.module.css'

function Button({text, darkMode}) {
  return (
    <div className={ darkMode ? `${classes.buttonDark}` : `${classes.buttonLight}`}>
        <p>{text}</p>
    </div>
  )
}

export default Button