import {cache} from 'react'
import {groq} from 'next-sanity'
import {notFound} from 'next/navigation'
import type {PortableTextBlock} from 'sanity'

import {client} from '@/sanity/lib/client'

export type NewsKind = 'article' | 'recruitment'

export interface NewsImage {
  alt?: string
  asset?: {
    _ref?: string
    _type?: 'reference'
  }
}

export interface NewsItem {
  _id: string
  title: string
  slug: string
  kind: NewsKind
  excerpt: string
  publishedAt: string
  downloadUrl?: string
  applicationUrl?: string
  heroImage?: NewsImage
}

export interface NewsDetail extends NewsItem {
  body?: PortableTextBlock[]
}

const newsListQuery = groq`
  *[_type == "news"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    kind,
    excerpt,
    publishedAt,
    downloadUrl,
    applicationUrl,
    heroImage {
      alt,
      asset
    }
  }
`

const newsBySlugQuery = groq`
  *[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    kind,
    excerpt,
    publishedAt,
    downloadUrl,
    applicationUrl,
    heroImage {
      alt,
      asset
    },
    body
  }
`

const slugsQuery = groq`
  *[_type == "news" && defined(slug.current)][].slug.current
`

export const getNewsItems = cache(async (): Promise<NewsItem[]> => {
  return client.fetch(newsListQuery)
})

export const getNewsSlugs = cache(async (): Promise<string[]> => {
  return client.fetch(slugsQuery)
})

export const getNewsBySlug = cache(async (slug: string): Promise<NewsDetail | null> => {
  return client.fetch(newsBySlugQuery, {slug})
})

export async function getNewsBySlugOrThrow(slug: string): Promise<NewsDetail> {
  const item = await getNewsBySlug(slug)

  if (!item) {
    notFound()
  }

  return item
}

export function formatNewsDate(dateString: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(dateString))
}

export function getNewsPrimaryAction(item: Pick<NewsItem, 'kind' | 'slug' | 'applicationUrl'>) {
  if (item.kind === 'recruitment') {
    return {
      label: 'APPLY',
      href: item.applicationUrl || `/news/${item.slug}`,
      isExternal: Boolean(item.applicationUrl),
    }
  }

  return {
    label: 'OPEN',
    href: `/news/${item.slug}`,
    isExternal: false,
  }
}
