import React from 'react'
import cl from 'classnames'
import styles from './index.module.scss'
import PortableTextRenderer from '@/PortableTextRenderer'
const Content = ({
    body, 
    className
}) => {
  return (
    
      <div className={cl(className, styles.content)}>
             <PortableTextRenderer content={body} />
        </div>
    
  )
}

export default Content
