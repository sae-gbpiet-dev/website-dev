import {defineArrayMember, defineField, defineType} from 'sanity'

export const newsType = defineType({
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'kind',
      title: 'News Type',
      type: 'string',
      initialValue: 'article',
      options: {
        list: [
          {title: 'Article', value: 'article'},
          {title: 'Recruitment', value: 'recruitment'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(220),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'Upload JPG, PNG, GIF, TIFF, or SVG. iPhone HEIC photos should be converted before upload.',
      options: {
        hotspot: true,
        accept: 'image/jpeg,image/png,image/gif,image/tiff,image/svg+xml,.jpg,.jpeg,.png,.gif,.tif,.tiff,.svg',
      },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [
        defineArrayMember({type: 'block'}),
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
            accept: 'image/jpeg,image/png,image/gif,image/tiff,image/svg+xml,.jpg,.jpeg,.png,.gif,.tif,.tiff,.svg',
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'downloadUrl',
      title: 'Download Document URL',
      description: 'Use a direct Google Drive download link if you want the file to download immediately.',
      type: 'url',
    }),
    defineField({
      name: 'applicationUrl',
      title: 'Recruitment Form URL',
      description: 'Used only for recruitment entries.',
      type: 'url',
      hidden: ({document}) => document?.kind !== 'recruitment',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.kind === 'recruitment' && !value) {
            return 'Recruitment entries require an application form URL'
          }

          return true
        }),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'excerpt',
      media: 'heroImage',
      kind: 'kind',
    },
    prepare({title, subtitle, media, kind}) {
      return {
        title,
        subtitle: kind === 'recruitment' ? `Recruitment: ${subtitle}` : subtitle,
        media,
      }
    },
  },
})
