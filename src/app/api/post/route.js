// /src/app/api/post/route.js
import { client } from '@/sanity/lib/client';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const offset = parseInt(searchParams.get('offset')) || 0;
  const limit = parseInt(searchParams.get('limit')) || 4;

  const postsQuery = `*[_type == "post"] | order(publishdate desc) [${offset}...${offset + limit}] {
    _id,
    publishdate,
    title,
    slug,
    content,
    video {
      asset-> {
        playbackId
      }
    },
    thumbnail {
      asset-> {
        url
      }
    }
  }`;
  const totalQuery = `count(*[_type == "post"])`;

  const posts = await client.fetch(postsQuery);
  const total = await client.fetch(totalQuery);

  return Response.json({ posts, total });
}