import React from 'react'
import cl from 'classnames'
import styles from './index.module.scss'
import ScreenEgg from '../ScreenEgg'
const BuyMeCoffee = ({
    
    className
}) => {
  return (
    <ScreenEgg type="right">
      <div className={cl(className, styles.buyCoffee)}>
        <a
        href='mailto:hatemmoalla368@gmail.com'
        target='_blank'
        className={styles.buyCoffeeButton}
        rel='noreferrer'
        >
            Email Me

        </a>
        <h3>Call me : +216 24 021 594</h3>
        </div>
        </ScreenEgg>
  )
}

export default BuyMeCoffee
