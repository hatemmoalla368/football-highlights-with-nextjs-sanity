import React from 'react'
import cl from 'classnames'
import styles from './index.module.scss'
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from 'next/link'
const Article = ({
    children, 
    className,
    backUrl
}) => {
  return (
    
      <article className={cl(className, styles.article)}>
        <Link legacyBehavior href={backUrl}>
        <a className={styles.articleBack}>
        <AiOutlineArrowLeft />

        </a>
        </Link>
        <div className={styles.articleContent}>
        {children}
        </div>
        </article>
    
  )
}

export default Article
