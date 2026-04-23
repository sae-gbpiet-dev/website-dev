import {defineArrayMember, defineField, defineType} from 'sanity'

export const fundraiserType = defineType({
  name: 'fundraiser',
  title: 'Fundraiser',
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
      name: 'team',
      title: 'Team',
      type: 'string',
      options: {
        list: [
          {title: 'ATV', value: 'atv'},
          {title: 'UAV', value: 'uav'},
          {title: 'General', value: 'general'},
        ],
        layout: 'radio',
      },
      initialValue: 'general',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Active', value: 'active'},
          {title: 'Paused', value: 'paused'},
          {title: 'Completed', value: 'completed'},
        ],
        layout: 'radio',
      },
      initialValue: 'active',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(240),
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(420),
    }),
    defineField({
      name: 'raised',
      title: 'Amount Raised',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'goal',
      title: 'Goal Amount',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'supportersCount',
      title: 'Supporters Count',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Label',
      type: 'string',
      initialValue: 'Support This Fundraiser',
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: 'ctaUrl',
      title: 'CTA URL',
      type: 'url',
      description: 'External payment, form, or sponsorship link.',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
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
    defineField({
      name: 'milestones',
      title: 'Milestones',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'amount',
              title: 'Amount',
              type: 'number',
              validation: (Rule) => Rule.required().min(0),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required().max(80),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required().max(220),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              amount: 'amount',
            },
            prepare({title, amount}) {
              return {
                title,
                subtitle: typeof amount === 'number' ? `Milestone: Rs ${amount}` : 'Milestone',
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Detail Content',
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
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      team: 'team',
      status: 'status',
      raised: 'raised',
      goal: 'goal',
    },
    prepare({title, media, team, status, raised, goal}) {
      const teamLabel = typeof team === 'string' ? team.toUpperCase() : 'GENERAL'
      const statusLabel = typeof status === 'string' ? status.toUpperCase() : 'ACTIVE'
      const progress =
        typeof raised === 'number' && typeof goal === 'number' && goal > 0
          ? `${Math.round((raised / goal) * 100)}%`
          : '0%'

      return {
        title,
        subtitle: `${teamLabel} • ${statusLabel} • ${progress}`,
        media,
      }
    },
  },
})
