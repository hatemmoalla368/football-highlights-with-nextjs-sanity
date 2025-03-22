import Onepost from '@/components/Onepost';
import { client } from '@/sanity/lib/client';

// Fetch post data based on slug
async function fetchPostBySlug(slug) {
  const query = `*[_type == "post" && slug.current == '${slug}'][0] {
    _id,
    publishdate,
    title,
    slug,
    content,
     videoFile {
      asset-> {
        url
      }
    },
    thumbnail {
      asset-> {
        url
      }
    }
  }`;
  const post = await client.fetch(query);
  return post;
}

// Generate dynamic metadata
export async function generateMetadata({ params }) {
  const post = await fetchPostBySlug(params.slug);

  return {
    title: post.meta_title, // Dynamically set the title
  };
}

// Page component
export default async function Page({ params }) {
  const post = await fetchPostBySlug(params.slug);

  return (
    <div>
      
      <Onepost post={post} />
    </div>
  );
}