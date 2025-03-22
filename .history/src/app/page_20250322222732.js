// /src/app/page.js
import Blog from '../components/Blog';
import { client } from '@/sanity/lib/client';

const LOAD_MORE_STEP = 4;

// Server Action to fetch more posts
async function getmoreposts(start, end) {
  'use server'; // Mark this function as a Server Action

  const postsQuery = `*[_type == "post"] | order(publishdate desc) [${start}...${end}] {
    _id,
    publishdate,
    title,
    slug,
    content,
    video{
      asset-> {
        playbackId,
        assetId,
        filename,
      }
    }
    thumbnail {
      asset-> {
        url
      }
    }
  }`;

  const posts = await client.fetch(postsQuery);
  return posts;
}

// Fetch initial posts
// Fetch initial posts directly from Sanity
const getinitialposts = async () => {
  const postsQuery = `*[_type == "post"] | order(publishdate desc) [0...${LOAD_MORE_STEP}] {
    _id,
    publishdate,
    title,
    slug,
    content,
    video{
      asset-> {
        playbackId,
        assetId,
        filename,
      }
    },
    thumbnail {
      asset-> {
        url
      }
    }
  }`;

  try {
    const posts = await client.fetch(postsQuery);
    return { posts, total: posts.length }; // Return the posts and total
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { posts: [], total: 0 }; // Return an empty array and total in case of error
  }
};

export const metadata = {
  title: 'ملخص المباريات',
};

export default async function Home() {
  const initial = await getinitialposts();
  const initialPosts = initial.posts;
  const total = initial.total;

  console.log('all posts', initialPosts);
  return (
    <Blog
      initialPosts={initialPosts}
      getmoreposts={getmoreposts}
      total={total} // Pass the Server Action as a prop
    />
  );
}