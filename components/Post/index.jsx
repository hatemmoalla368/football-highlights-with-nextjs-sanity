// /src/components/Post.js
import React from 'react';
import cl from 'classnames';
import styles from './index.module.scss';
import Link from 'next/link';
import Title from '../Title';
import Image from 'next/image';
import PortableTextRenderer from '@/PortableTextRenderer';

const Post = ({
  className,
  imageUrl, // Accept imageUrl instead of thumbnail
  slug,
  title,
  videoUrl,
  content,
}) => {
  return (
    <Link
      legacyBehavior
      href={`/posts/${encodeURIComponent(slug.current)}`}
    >
      <a className={cl(className, styles.postLink)}>
        <div className={styles.post}>
          <Title type="small" className={styles.postTitle}>
            {title}
          </Title>
          <div className={styles.postContent}>
            <div className={styles.postImage}>
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={title || 'Post thumbnail'}
                  width={100}
                  height={100}
                  
                />
              ) : (
                <div className={styles.postPlaceholder}>No Thumbnail</div>
              )}
            </div>
            <article className={styles.postDescription}>
  {content && <PortableTextRenderer content={content} />}
</article>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Post;