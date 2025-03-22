import { validation } from "sanity";

// schemas/post.js
export const post = {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation : Rule => Rule.required()
      },
      {
        name: 'meta_title',
        title: 'meta title',
        type: 'string',
        validation : Rule => Rule.required()
      },
      {
        name: 'publishdate',
        title: 'publish date',
        type: 'date',
        validation : Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        validation : Rule => Rule.required(),
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        validation : Rule => Rule.required(),
        of: [{ type: 'block' }, {type : 'image'}],
      },
      {
        name: 'videoFile',
        title: 'Video File',
        type: 'file',
        options: {
          accept: 'video/*', // Accepts all video file types (e.g., .mp4, .mov)
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'thumbnail',
        title: 'Thumbnail',
        type: 'image',
        validation : Rule => Rule.required()
      },
    ],
  };