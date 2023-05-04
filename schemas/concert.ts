import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'concert',
  title: 'Concert',
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
      name: 'description',
      title: 'Description',
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
      title: 'Performance #1',
      name: 'performance1',
      type: 'object',
      fields: [
        defineField({name: 'dateTime', type: 'string', title: 'Date + Time'}),
        defineField({name: 'venue', type: 'string', title: 'Venue name'}),
        defineField({name: 'ticketsLink', type: 'string', title: 'Tickets Link'}),
      ],
    }),
    defineField({
      title: 'Performance #2',
      name: 'performance2',
      type: 'object',
      fields: [
        defineField({name: 'dateTime', type: 'string', title: 'Date + Time'}),
        defineField({name: 'venue', type: 'string', title: 'Venue name'}),
        defineField({name: 'ticketsLink', type: 'string', title: 'Tickets Link'}),
      ],
    }),
  ],
})
