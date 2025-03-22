// /src/app/api/morepost/route.js
import { client } from '@/sanity/lib/client';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const start = parseInt(searchParams.get('start')) || 0;
  const end = parseInt(searchParams.get('end')) || 4;

  const postsQuery = `*[_type == "post"] | order(publishdate desc) [${start}...${end}] {
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

  const posts = await client.fetch(postsQuery);

  return Response.json({ posts });
}