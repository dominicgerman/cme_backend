import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Audio track',
  name: 'audio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'composer',
      title: 'Composer',
      type: 'string',
    }),
    defineField({
      name: 'audioFile',
      title: 'Audio file',
      type: 'file',
      options: {
        accept: 'audio/*',
      },
    }),
  ],
})
