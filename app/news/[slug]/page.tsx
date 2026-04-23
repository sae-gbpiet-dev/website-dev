import type {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {PortableText, type PortableTextComponents} from '@portabletext/react'
import {notFound} from 'next/navigation'

import {
  formatNewsDate,
  getNewsBySlug,
  getNewsBySlugOrThrow,
  getNewsPrimaryAction,
  getNewsSlugs,
} from '@/lib/news'
import {urlFor} from '@/sanity/lib/image'

type NewsDetailPageProps = {
  params: Promise<{slug: string}>
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({children}) => <p className="text-base leading-8 text-zinc-200">{children}</p>,
    h2: ({children}) => <h2 className="font-heading text-2xl leading-tight text-white">{children}</h2>,
    h3: ({children}) => <h3 className="font-heading text-xl leading-tight text-white">{children}</h3>,
    blockquote: ({children}) => (
      <blockquote className="border-l-4 border-brand-gold pl-4 italic text-zinc-200">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({children}) => <ul className="list-disc space-y-2 pl-6 text-zinc-200">{children}</ul>,
    number: ({children}) => <ol className="list-decimal space-y-2 pl-6 text-zinc-200">{children}</ol>,
  },
  marks: {
    link: ({children, value}) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noreferrer"
        className="text-brand-gold underline underline-offset-4"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({value}) => {
      if (!value?.asset) {
        return null
      }

      return (
        <div className="overflow-hidden rounded-tl-3xl rounded-br-3xl">
          <img
            src={urlFor(value).width(1200).height(700).fit('crop').url()}
            alt={value.alt || ''}
            className="h-auto w-full object-cover"
          />
        </div>
      )
    },
  },
}

export async function generateStaticParams() {
  const slugs = await getNewsSlugs()
  return slugs.map((slug) => ({slug}))
}

export async function generateMetadata({params}: NewsDetailPageProps): Promise<Metadata> {
  const {slug} = await params
  const item = await getNewsBySlug(slug)

  if (!item) {
    return {
      title: 'News Not Found',
    }
  }

  return {
    title: item.title,
    description: item.excerpt,
  }
}

export default async function NewsDetailPage({params}: NewsDetailPageProps) {
  const {slug} = await params
  const item = await getNewsBySlugOrThrow(slug)
  const action = getNewsPrimaryAction(item)
  const heroImageUrl = item.heroImage?.asset
    ? urlFor(item.heroImage).width(1600).height(900).fit('crop').url()
    : null

  if (item.kind === 'recruitment' && !item.applicationUrl && !item.body?.length) {
    notFound()
  }

  return (
    <div className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <article className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <Link
          href="/news"
          className="w-fit text-sm font-medium tracking-[0.2em] text-brand-gold transition-opacity hover:opacity-80"
        >
          BACK TO NEWS
        </Link>

        <header className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-tl-xl rounded-br-xl border border-brand-gold/70 px-4 py-2 text-xs font-heading text-brand-gold">
              {item.kind === 'recruitment' ? 'RECRUITMENT' : 'NEWS'}
            </span>
            <span className="text-sm text-zinc-300">{formatNewsDate(item.publishedAt)}</span>
          </div>

          <div className="space-y-3">
            <h1 className="font-heading text-3xl leading-tight text-white sm:text-4xl">
              {item.title}
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">{item.excerpt}</p>
          </div>
        </header>

        {heroImageUrl ? (
          <div className="overflow-hidden rounded-tl-4xl rounded-br-4xl border border-white/10 bg-zinc-900">
            <Image
              src={heroImageUrl}
              alt={item.heroImage?.alt || item.title}
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        ) : null}

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div className="space-y-6 rounded-tl-4xl rounded-br-4xl border border-white/10 bg-zinc-950/40 p-5 sm:p-8">
            {item.kind === 'recruitment' ? (
              <div className="space-y-5">
                <h2 className="font-heading text-2xl text-white">Recruitment Form</h2>
                <p className="text-base leading-8 text-zinc-200">
                  Use the application button to open the recruitment form for this opportunity.
                </p>
                {item.body?.length ? (
                  <div className="space-y-5">
                    <PortableText value={item.body} components={portableTextComponents} />
                  </div>
                ) : null}
              </div>
            ) : item.body?.length ? (
              <div className="space-y-5">
                <PortableText value={item.body} components={portableTextComponents} />
              </div>
            ) : (
              <p className="text-base leading-8 text-zinc-200">Content coming soon.</p>
            )}
          </div>

          <aside className="space-y-4 rounded-tl-4xl rounded-br-4xl border border-white/10 bg-brand-blue p-5 sm:p-6">
            <h2 className="font-heading text-xl text-white">
              {item.kind === 'recruitment' ? 'Apply Now' : 'Resources'}
            </h2>

            {item.kind === 'recruitment' ? (
              <a
                href={action.href}
                target={action.isExternal ? '_blank' : undefined}
                rel={action.isExternal ? 'noreferrer' : undefined}
                className="block rounded-tl-xl rounded-br-xl bg-brand-gold px-4 py-3 text-center font-heading text-sm text-black transition-all duration-500 hover:bg-brand-dark hover:text-white"
              >
                APPLY
              </a>
            ) : null}

            {item.downloadUrl ? (
              <a
                href={item.downloadUrl}
                target="_blank"
                rel="noreferrer"
                className="block rounded-tl-xl rounded-br-xl border border-brand-gold bg-brand-gold px-4 py-3 text-center font-heading text-sm text-black transition-all duration-500 hover:bg-brand-dark hover:text-white"
              >
                DOWNLOAD DOCUMENT
              </a>
            ) : (
              <p className="text-sm leading-6 text-zinc-200">No downloadable document attached yet.</p>
            )}
          </aside>
        </section>
      </article>
    </div>
  )
}
