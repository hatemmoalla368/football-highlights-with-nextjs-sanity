import React from 'react'
import cl from 'classnames'
import styles from './index.module.scss'
const Cover = ({
    title,
    className
}) => {
  return (
    
      <div className={cl(className, styles.cover)}>
        <h1
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: title }}
        />
        </div>
    
  )
}

export default Cover
