import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'genericPage',
  title: 'Generic Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
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
      name: 'content',
      title: 'Page Content',
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
      name: 'parentRoute',
      type: 'string',
      title: 'Parent Route',
      options: {
        list: [
          {title: 'About', value: 'about'},
          {title: 'Listen', value: 'listen'},
          {title: 'Support', value: 'support'},
        ],
      },
    }),
  ],
})
