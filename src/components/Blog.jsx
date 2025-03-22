// /src/app/page.js
'use client'
import { useState, useCallback } from 'react';
import { Button, BuyMeCoffee, Cover, Post, PostGrid, Section, SocialNetworks, Title } from '../../components';

import { urlFor } from '../sanity/lib/image'; // Import urlFor
import Head from 'next/head';





export default  function Blog({ initialPosts, getmoreposts, total }) {
  
    const [posts, setPosts] = useState(initialPosts);
    const [loadedamount, setLoadedamount] = useState(4); // Initial load amount
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true); // Track if there are more posts to load
    const showloadbutton = total > loadedamount
  
    // Use `useCallback` to memoize the `handleLoadMore` function
    const handleLoadMore = useCallback(async () => {
      if (loading || !hasMore) return; // Prevent multiple calls
  
      setLoading(true);
      try {
        // Call the Server Action to fetch more posts
        const newPosts = await getmoreposts(loadedamount, loadedamount + 4);
        if (newPosts.length === 0) {
          setHasMore(false); // No more posts to load
        } else {
          setLoadedamount(loadedamount + 4);
          setPosts((prevPosts) => [...prevPosts, ...newPosts]); // Use functional update
        }
      } catch (error) {
        console.error('Error fetching more posts:', error);
      } finally {
        setLoading(false);
      }
    }, [loading, hasMore, loadedamount, getmoreposts]);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <Head>
        <title>
          My Blog
        </title>
      </Head>
      <Section>
        <Cover title="ملخص <br> المباريات" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>الملخصات</Title>
        <PostGrid>
          {posts.map((post) => {
            // Transform the thumbnail object into a URL
            const imageUrl = post.thumbnail ? urlFor(post.thumbnail).url() : null;

            return (
              <Post
                key={post._id}
                title={post.title}
                slug={post.slug}
                imageUrl={imageUrl} // Pass the image URL as a plain string
                video={post.video}
                content={post.content}
              />
            );
          })}
        </PostGrid>
        {showloadbutton && (
        <div style={{ 
          display: 'flex',
          justifyContent: 'center'
         }}>
          <Button
          disabled={loading}
          onClick={handleLoadMore}
          >
            أظهر المزيد

          </Button>

        </div>
        )}
      </Section>
    </div>
  );
}