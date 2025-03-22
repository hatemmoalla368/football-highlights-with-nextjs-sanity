import React from 'react'
import MuxPlayer from '@mux/mux-player-react'

import { Article, Content, Title } from '../../components'
import styles from './styles.module.scss'
import { format } from 'date-fns'
const Onepost = ({post}) => {
    console.log('one post', post)
    const date = format(new Date(post.publishdate), 'dd MMM yyy')
  return (
    <Article backUrl='/' className={styles.post}>
    <Title className={styles.postTitle}>
        {post.title}
    </Title>
    <p style={{ marginBottom: '4em' }} className={styles.postDate}>{date}</p>
        <Content body={post.content}/>
        {post.videoFile?.asset?.url && (
          <div>
            <h2>Video</h2>
            <video controls width="100%">
            <source src={post.videoFile.asset.url} type="video/mp4" />
  <source src={post.videoFile.asset.url} type="video/webm" />
  <source src={post.videoFile.asset.url} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
    </Article>
  )
}

export default Onepost
