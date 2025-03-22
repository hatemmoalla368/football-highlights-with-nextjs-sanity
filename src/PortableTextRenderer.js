// /src/components/PortableTextRenderer.js
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image'; // Helper function to generate image URLs

// Define custom components for different types of content
const components = {
  // Block types (e.g., paragraphs, headings)
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  // Marks (e.g., bold, italic, links)
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
  // Custom types (e.g., images)
  types: {
    image: ({ value }) => (
      <div style={{ position: 'relative', width: '100%', height: '400px' }}>
        <Image
          src={urlFor(value).url()}
          alt={value.alt || 'Image'}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    ),
  },
};

export default function PortableTextRenderer({ content }) {
  return <PortableText value={content} components={components} />;
}