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

// Fetch initial posts at runtime
export async function getServerSideProps() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const url = `${baseUrl}/api/post?offset=0&limit=${LOAD_MORE_STEP}`;
  console.log('Fetching from:', url);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('data of initial posts', data);
    return {
      props: {
        initialPosts: data.posts,
        total: data.total,
      },
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        initialPosts: [],
        total: 0,
      },
    };
  }
}

export const metadata = {
  title: 'ملخص المباريات',
};

export default function Home({ initialPosts, total }) {
  console.log('all posts', initialPosts);
  return (
    <Blog
      initialPosts={initialPosts}
      getmoreposts={getmoreposts}
      total={total} // Pass the Server Action as a prop
    />
  );
}