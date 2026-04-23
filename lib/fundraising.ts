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
  milestones: FundraisingMilestone[]
}

export interface FundraisingDetail extends FundraisingItem {
  body?: PortableTextBlock[]
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
  return client.fetch(fundraisingListQuery)
})

export const getFundraisingSlugs = cache(async (): Promise<string[]> => {
  return client.fetch(fundraisingSlugsQuery)
})

export const getFundraisingBySlug = cache(async (slug: string): Promise<FundraisingDetail | null> => {
  return client.fetch(fundraisingBySlugQuery, {slug})
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
