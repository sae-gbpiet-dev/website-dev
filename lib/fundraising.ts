import {cache} from 'react'
import {groq} from 'next-sanity'
import {notFound} from 'next/navigation'
import type {PortableTextBlock} from 'sanity'

import {client} from '@/sanity/lib/client'

export type FundraisingTeam = 'atv' | 'uav' | 'general'
export type FundraisingStatus = 'active' | 'paused' | 'completed'

export interface FundraisingImage {
  alt?: string
  asset?: {
    _ref?: string
    _type?: 'reference'
  }
}

export interface FundraisingMilestone {
  amount: number
  title: string
  description: string
}

export interface FundraisingItem {
  _id: string
  title: string
  slug: string
  team: FundraisingTeam
  status: FundraisingStatus
  shortDescription: string
  intro: string
  raised: number
  goal: number
  supportersCount?: number
  ctaLabel?: string
  ctaUrl?: string
  coverImage?: FundraisingImage
  localCoverImage?: string
  milestones: FundraisingMilestone[]
}

export interface FundraisingDetail extends FundraisingItem {
  body?: PortableTextBlock[]
}

const previousFundraiser: FundraisingDetail = {
  _id: 'previous-atv-baja-2027',
  title: 'Fund our ATV for BAJA 2027',
  slug: 'fund-our-atv-for-baja-2027',
  team: 'atv',
  status: 'active',
  shortDescription: 'This is a test fundraiser',
  intro: 'This is the test intro',
  raised: 10000,
  goal: 500000,
  supportersCount: 20,
  ctaLabel: 'Support This Fundraiser',
  ctaUrl: '/contact',
  localCoverImage: '/assets/images/atv.jpeg',
  milestones: [
    {
      amount: 10000,
      title: 'You gave us tires',
      description: 'You gave us tires',
    },
  ],
  body: [
    {
      _key: 'previous-content-block',
      _type: 'block',
      children: [{_key: 'previous-content-span', _type: 'span', marks: [], text: 'this is test content'}],
      markDefs: [],
      style: 'normal',
    },
  ],
}

const fundraisingListQuery = groq`
  *[_type == "fundraiser"] | order(status asc, _createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    team,
    status,
    shortDescription,
    intro,
    raised,
    goal,
    supportersCount,
    ctaLabel,
    ctaUrl,
    coverImage {
      alt,
      asset
    },
    milestones[] | order(amount asc) {
      amount,
      title,
      description
    }
  }
`

const fundraisingBySlugQuery = groq`
  *[_type == "fundraiser" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    team,
    status,
    shortDescription,
    intro,
    raised,
    goal,
    supportersCount,
    ctaLabel,
    ctaUrl,
    coverImage {
      alt,
      asset
    },
    milestones[] | order(amount asc) {
      amount,
      title,
      description
    },
    body
  }
`

const fundraisingSlugsQuery = groq`
  *[_type == "fundraiser" && defined(slug.current)][].slug.current
`

export const getFundraisingItems = cache(async (): Promise<FundraisingItem[]> => {
  try {
    const items = await client.fetch(fundraisingListQuery)
    return items.length ? items : [previousFundraiser]
  } catch {
    return [previousFundraiser]
  }
})

export const getFundraisingSlugs = cache(async (): Promise<string[]> => {
  try {
    const slugs = await client.fetch(fundraisingSlugsQuery)
    return slugs.length ? slugs : [previousFundraiser.slug]
  } catch {
    return [previousFundraiser.slug]
  }
})

export const getFundraisingBySlug = cache(async (slug: string): Promise<FundraisingDetail | null> => {
  try {
    const item = await client.fetch(fundraisingBySlugQuery, {slug})
    return item || (slug === previousFundraiser.slug ? previousFundraiser : null)
  } catch {
    return slug === previousFundraiser.slug ? previousFundraiser : null
  }
})

export async function getFundraisingBySlugOrThrow(slug: string): Promise<FundraisingDetail> {
  const item = await getFundraisingBySlug(slug)

  if (!item) {
    notFound()
  }

  return item
}

export function formatFundraisingCurrency(amount: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function getFundraisingProgress(raised: number, goal: number) {
  if (goal <= 0) {
    return 0
  }

  return Math.min((raised / goal) * 100, 100)
}

export function getFundraisingTeamLabel(team: FundraisingTeam) {
  if (team === 'atv') {
    return 'ATV'
  }

  if (team === 'uav') {
    return 'UAV'
  }

  return 'GENERAL'
}

export function getFundraisingStatusLabel(status: FundraisingStatus) {
  if (status === 'paused') {
    return 'Paused'
  }

  if (status === 'completed') {
    return 'Completed'
  }

  return 'Active'
}
