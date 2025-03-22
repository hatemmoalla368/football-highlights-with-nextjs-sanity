import React from 'react'
import cl from 'classnames'
import styles from './index.module.scss'
const Button = ({
    children, 
    className,
    onClick,
    disabled
}) => {
  return (
    
      <button
      onClick={onClick}
      disabled={disabled}
       className={cl(className, styles.button)}>
        {children}
        </button>
    
  )
}

export default Button
