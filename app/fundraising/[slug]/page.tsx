import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {PortableText, type PortableTextComponents} from "@portabletext/react";
import { FaArrowUpRightFromSquare, FaCarSide, FaIndianRupeeSign, FaUsers } from "react-icons/fa6";
import { PiDroneFill } from "react-icons/pi";

import {
  formatFundraisingCurrency,
  getFundraisingBySlug,
  getFundraisingBySlugOrThrow,
  getFundraisingProgress,
  getFundraisingSlugs,
  getFundraisingStatusLabel,
  getFundraisingTeamLabel,
} from "@/lib/fundraising";
import {urlFor} from "@/sanity/lib/image";

type FundraisingDetailPageProps = {
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

function getAccentClasses(team: "atv" | "uav" | "general") {
  if (team === "atv") {
    return {
      text: "text-brand-gold",
      panel: "bg-brand-gold text-brand-dark",
      bar: "bg-brand-gold",
      marker: "border-brand-gold text-brand-gold",
      chip: "border-brand-gold/40 bg-brand-gold/10",
      cta: "bg-brand-gold text-black hover:bg-brand-dark hover:text-white",
    };
  }

  if (team === "uav") {
    return {
      text: "text-brand-blue",
      panel: "bg-brand-blue text-white",
      bar: "bg-brand-blue",
      marker: "border-brand-blue text-brand-blue",
      chip: "border-brand-blue/40 bg-brand-blue/10",
      cta: "border border-white/30 bg-white text-brand-blue hover:bg-brand-dark hover:text-white",
    };
  }

  return {
    text: "text-white",
    panel: "bg-zinc-800 text-white",
    bar: "bg-white",
    marker: "border-white text-white",
    chip: "border-white/15 bg-white/5",
    cta: "bg-white text-brand-dark hover:bg-brand-dark hover:text-white",
  };
}

function VehicleIcon({team}: {team: "atv" | "uav" | "general"}) {
  if (team === "atv") {
    return <FaCarSide className="text-lg" />
  }

  if (team === "uav") {
    return <PiDroneFill className="text-lg" />
  }

  return <FaIndianRupeeSign className="text-lg" />
}

export async function generateStaticParams() {
  const slugs = await getFundraisingSlugs()
  return slugs.map((slug) => ({slug}))
}

export async function generateMetadata({params}: FundraisingDetailPageProps): Promise<Metadata> {
  const {slug} = await params
  const item = await getFundraisingBySlug(slug)

  if (!item) {
    return {
      title: 'Fundraiser Not Found',
    }
  }

  return {
    title: item.title,
    description: item.shortDescription,
  }
}

export default async function FundraisingDetailPage({params}: FundraisingDetailPageProps) {
  const {slug} = await params
  const item = await getFundraisingBySlugOrThrow(slug)
  const progress = getFundraisingProgress(item.raised, item.goal)
  const clampedProgress = Math.min(Math.max(progress, 0), 100)
  const progressBadgeAlignment =
    clampedProgress < 8
      ? "translate-x-0"
      : clampedProgress > 92
        ? "-translate-x-full"
        : "-translate-x-1/2"
  const accent = getAccentClasses(item.team)
  const heroImageUrl = item.coverImage?.asset
    ? urlFor(item.coverImage).width(1600).height(900).fit('crop').url()
    : null

  return (
    <div className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <article className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <Link
          href="/fundraising"
          className={`w-fit text-sm font-medium tracking-[0.2em] transition-opacity hover:opacity-80 ${accent.text}`}
        >
          BACK TO FUNDRAISING
        </Link>

        <header className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`rounded-tl-xl rounded-br-xl border px-4 py-2 text-xs font-heading ${accent.marker}`}>
              {getFundraisingTeamLabel(item.team)}
            </span>
            <span className="text-sm text-zinc-300">{getFundraisingStatusLabel(item.status)}</span>
          </div>

          <div className="space-y-3">
            <h1 className="font-heading text-3xl leading-tight text-white sm:text-4xl">
              {item.title}
            </h1>
            <p className="max-w-4xl text-sm leading-7 text-zinc-300 sm:text-base">
              {item.shortDescription}
            </p>
          </div>
        </header>

        {heroImageUrl ? (
          <div className="overflow-hidden rounded-tl-4xl rounded-br-4xl border border-white/10 bg-zinc-900">
            <Image
              src={heroImageUrl}
              alt={item.coverImage?.alt || item.title}
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        ) : null}

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div className="space-y-6 rounded-tl-4xl rounded-br-4xl border border-white/10 bg-zinc-950/40 p-5 sm:p-8">
            <div className={`rounded-tl-[2rem] rounded-br-[2rem] px-5 py-5 sm:px-6 sm:py-6 ${accent.panel}`}>
              <p className="text-xs uppercase tracking-[0.24em] opacity-80">Campaign Overview</p>
              <p className="mt-3 text-sm leading-7 sm:text-base">{item.intro}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <p className="font-heading text-sm uppercase tracking-[0.24em] text-white">
                  Progress Tracker
                </p>
                <p className={`font-heading text-sm ${accent.text}`}>{Math.round(progress)}%</p>
              </div>

              <div className="rounded-tl-[2rem] rounded-br-[2rem] border border-white/10 bg-white/[0.03] px-4 py-5 sm:px-5">
                <div className="flex items-center justify-end gap-4 text-[0.65rem] uppercase tracking-[0.18em] text-white/45">
                  <span>{formatFundraisingCurrency(item.goal)}</span>
                </div>

                <div className="relative mt-8 pb-12">
                  <div className="relative">
                    <div className="relative h-5 rounded-full border border-white/10 bg-white/8 shadow-inner shadow-black/30">
                      <div className="absolute inset-y-0 left-0 w-full rounded-full bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_18px,transparent_18px,transparent_36px)]" />
                      <div
                        className={`relative h-full rounded-full ${accent.bar} transition-all duration-700`}
                        style={{width: `${clampedProgress}%`}}
                      />

                      {item.milestones.map((milestone) => {
                        const milestonePosition = Math.min(
                          Math.max((milestone.amount / Math.max(item.goal, 1)) * 100, 0),
                          100,
                        )
                        const isReached = item.raised >= milestone.amount

                        return (
                          <div
                            key={`${item._id}-marker-${milestone.amount}`}
                            className="absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                            style={{left: `${milestonePosition}%`}}
                          >
                            <div
                              className={`h-5 w-5 rounded-full border-2 shadow-[0_0_0_5px_rgba(16,16,18,0.95)] ${
                                isReached
                                  ? `${accent.bar} border-transparent`
                                  : `bg-brand-dark ${accent.marker}`
                              }`}
                            />
                            <div className="absolute top-8 left-1/2 hidden w-36 -translate-x-1/2 text-center sm:block">
                              <p className={`font-heading text-[0.58rem] uppercase leading-4 tracking-[0.16em] ${
                                isReached ? accent.text : "text-white/45"
                              }`}>
                                {isReached ? "Unlocked" : "Target"}
                              </p>
                              <p className="mt-1 text-[0.62rem] uppercase leading-4 tracking-[0.14em] text-white/65">
                                {formatFundraisingCurrency(milestone.amount)}
                              </p>
                              <p className="mt-1 line-clamp-2 text-[0.68rem] leading-4 text-white/75">
                                {milestone.title}
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    <div
                      className="pointer-events-none absolute top-1/2 z-20 -translate-y-[calc(100%+0.6rem)] transition-all duration-700"
                      style={{left: `${clampedProgress}%`}}
                    >
                      <div className={`flex items-center gap-2 rounded-tl-2xl rounded-br-2xl border bg-brand-dark px-3 py-2 text-[0.65rem] font-heading uppercase tracking-[0.18em] shadow-lg shadow-black/25 ${progressBadgeAlignment} ${accent.marker}`}>
                        <VehicleIcon team={item.team} />
                        <span>{formatFundraisingCurrency(item.raised)}</span>
                      </div>
                      <div className={`h-5 w-[2px] ${accent.bar}`} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {item.milestones.map((milestone, index) => {
                  const isReached = item.raised >= milestone.amount
                  const isCurrent =
                    !isReached && (index === 0 || item.raised >= item.milestones[index - 1].amount)

                  return (
                    <div
                      key={`${item._id}-${milestone.amount}`}
                      className={`rounded-tl-[2rem] rounded-br-[2rem] border px-5 py-5 text-white ${
                        isReached
                          ? accent.chip
                          : isCurrent
                            ? 'border-white/30 bg-white/8'
                            : 'border-white/10 bg-white/5'
                      }`}
                    >
                      <p className={`font-heading text-xs uppercase tracking-[0.24em] ${accent.text}`}>
                        {formatFundraisingCurrency(milestone.amount)}
                      </p>
                      <h3 className="mt-3 font-heading text-lg">{milestone.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/80">{milestone.description}</p>
                      <p className="mt-4 text-xs uppercase tracking-[0.22em] text-white/60">
                        {isReached ? 'Reached' : isCurrent ? 'Current Target' : 'Upcoming'}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            {item.body?.length ? (
              <div className="space-y-5">
                <PortableText value={item.body} components={portableTextComponents} />
              </div>
            ) : (
              <p className="text-base leading-8 text-zinc-200">
                Add detailed fundraiser content in the admin panel to show the full story here.
              </p>
            )}
          </div>

          <aside className="space-y-4 rounded-tl-4xl rounded-br-4xl border border-white/10 bg-brand-blue p-5 sm:p-6">
            <h2 className="font-heading text-xl text-white">Campaign Snapshot</h2>

            <div className="rounded-tl-2xl rounded-br-2xl bg-black/15 px-4 py-4 text-white">
              <p className="text-xs uppercase tracking-[0.22em] text-white/70">Raised</p>
              <p className="mt-2 font-heading text-2xl">{formatFundraisingCurrency(item.raised)}</p>
            </div>

            <div className="rounded-tl-2xl rounded-br-2xl bg-black/15 px-4 py-4 text-white">
              <p className="text-xs uppercase tracking-[0.22em] text-white/70">Goal</p>
              <p className="mt-2 font-heading text-2xl">{formatFundraisingCurrency(item.goal)}</p>
            </div>

            <div className="rounded-tl-2xl rounded-br-2xl bg-black/15 px-4 py-4 text-white">
              <div className="flex items-center gap-3">
                <FaUsers />
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/70">Supporters</p>
                  <p className="mt-1 font-heading text-xl">{item.supportersCount || 0}</p>
                </div>
              </div>
            </div>

            {item.ctaUrl ? (
              <a
                href={item.ctaUrl}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-center gap-2 rounded-tl-xl rounded-br-xl px-4 py-3 text-center font-heading text-sm transition-all duration-500 ${accent.cta}`}
              >
                {item.ctaLabel || 'Support This Fundraiser'}
                <FaArrowUpRightFromSquare />
              </a>
            ) : (
              <p className="text-sm leading-6 text-zinc-200">
                Add a CTA URL in the admin panel to show a support button here.
              </p>
            )}
          </aside>
        </section>
      </article>
    </div>
  )
}
