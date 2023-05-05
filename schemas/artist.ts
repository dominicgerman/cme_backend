import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'artistLink',
      type: 'url',
      title: 'Artist Link',
    }),
    defineField({
      title: 'Role',
      name: 'role',
      type: 'string',
      options: {
        list: [
          {title: 'Singer', value: 'singer'},
          {title: 'Composer', value: 'composer'},
        ],
      },
    }),
  ],
})
