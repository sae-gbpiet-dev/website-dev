import Link from "next/link";
import React from "react";
import { FaArrowRight, FaIndianRupeeSign, FaUsers, FaCarSide } from "react-icons/fa6";
import { PiDroneFill } from "react-icons/pi";

import PageHeader from "../components/PageHeader";
import {
  formatFundraisingCurrency,
  getFundraisingItems,
  getFundraisingProgress,
  getFundraisingStatusLabel,
  getFundraisingTeamLabel,
  type FundraisingItem,
} from "@/lib/fundraising";

function FundraisingVehicleIcon({ team }: { team: FundraisingItem["team"] }) {
  if (team === "atv") {
    return <FaCarSide className="text-lg" />;
  }

  if (team === "uav") {
    return <PiDroneFill className="text-lg" />;
  }

  return <FaIndianRupeeSign className="text-lg" />;
}

function getAccentClasses(team: FundraisingItem["team"]) {
  if (team === "atv") {
    return {
      panel: "bg-brand-gold text-brand-dark",
      text: "text-brand-gold",
      bar: "bg-brand-gold",
      marker: "border-brand-gold text-brand-gold",
      soft: "bg-brand-gold/10 border-brand-gold/30",
      hover: "hover:border-brand-gold hover:text-brand-gold",
      glow: "bg-[radial-gradient(circle_at_12%_18%,rgba(245,158,11,0.22),transparent_30%),linear-gradient(90deg,rgba(16,16,18,0.78),rgba(16,16,18,0.94)_42%,rgba(16,16,18,0.8))]",
    };
  }

  if (team === "uav") {
    return {
      panel: "bg-brand-blue text-white",
      text: "text-brand-blue",
      bar: "bg-brand-blue",
      marker: "border-brand-blue text-brand-blue",
      soft: "bg-brand-blue/10 border-brand-blue/30",
      hover: "hover:border-brand-blue hover:text-brand-blue",
      glow: "bg-[radial-gradient(circle_at_12%_18%,rgba(21,101,169,0.28),transparent_30%),linear-gradient(90deg,rgba(16,16,18,0.78),rgba(16,16,18,0.94)_42%,rgba(16,16,18,0.8))]",
    };
  }

  return {
    panel: "bg-zinc-800 text-white",
    text: "text-white",
    bar: "bg-white",
    marker: "border-white text-white",
    soft: "bg-white/5 border-white/20",
    hover: "hover:border-white hover:text-white",
    glow: "bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.14),transparent_30%),linear-gradient(90deg,rgba(16,16,18,0.78),rgba(16,16,18,0.94)_42%,rgba(16,16,18,0.8))]",
  };
}

async function page() {
  const fundraisingItems = await getFundraisingItems();

  return (
    <div className="flex flex-col items-center px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader title="FUNDRAISING" />

      <div className="flex w-full max-w-6xl flex-col items-center gap-10 py-10 sm:gap-12 sm:py-12">
        <section className="flex w-full max-w-4xl flex-col items-center gap-6 text-center">
          <p className="max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
            Our fundraising efforts are crucial in supporting our teams' journeys to
            success. Each fundraiser is dedicated to a specific team and their unique goals, whether it's developing cutting-edge technology, covering
            travel expenses, or funding essential resources.
          </p>

          <div className="w-full rounded-tl-[3rem] rounded-br-[3rem] bg-brand-blue px-6 py-8 text-white shadow-lg sm:px-8 sm:py-10">
            <p className="mx-auto max-w-3xl text-sm leading-7 text-white/90 sm:text-base">
              Click any fundraiser to open its full page with milestone details,
              updated amounts, and contribute whatever you can.
            </p>
          </div>
        </section>

        {fundraisingItems.length ? (
          <section className="grid w-full max-w-6xl gap-8">
            {fundraisingItems.map((item) => {
              const progress = getFundraisingProgress(item.raised, item.goal);
              const clampedProgress = Math.min(Math.max(progress, 0), 100);
              const progressBadgeAlignment =
                clampedProgress < 8
                  ? "translate-x-0"
                  : clampedProgress > 92
                    ? "-translate-x-full"
                    : "-translate-x-1/2";
              const accent = getAccentClasses(item.team);

              return (
                <article
                  key={item._id}
                  className="relative overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] border border-white/10 bg-brand-dark shadow-[0_24px_70px_rgba(0,0,0,0.38)]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.075)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.075)_75%),linear-gradient(45deg,rgba(255,255,255,0.075)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.075)_75%)] bg-[length:34px_34px] bg-[position:0_0,17px_17px] opacity-55" />
                  <div className={`absolute inset-0 ${accent.glow}`} />
                  <div className={`relative px-6 py-6 sm:px-8 sm:py-7 ${accent.panel}`}>
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                      <div className="max-w-3xl space-y-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-tl-xl rounded-br-xl border border-current/25 px-3 py-2 text-xs font-heading uppercase tracking-[0.24em]">
                            {getFundraisingTeamLabel(item.team)}
                          </span>
                          <span className="text-xs uppercase tracking-[0.24em] opacity-80">
                            {getFundraisingStatusLabel(item.status)}
                          </span>
                        </div>
                        <h2 className="font-heading text-2xl sm:text-3xl">
                          {item.title}
                        </h2>
                        <p className="text-sm leading-7 sm:text-base">
                          {item.shortDescription}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-left sm:min-w-[19rem]">
                        <div className="rounded-tl-2xl rounded-br-2xl border border-current/15 bg-black/10 px-4 py-4">
                          <p className="text-xs uppercase tracking-[0.24em] opacity-75">
                            Raised
                          </p>
                          <p className="mt-2 text-lg font-semibold sm:text-xl">
                            {formatFundraisingCurrency(item.raised)}
                          </p>
                        </div>
                        <div className="rounded-tl-2xl rounded-br-2xl border border-current/15 bg-black/10 px-4 py-4">
                          <p className="text-xs uppercase tracking-[0.24em] opacity-75">
                            Goal
                          </p>
                          <p className="mt-2 text-lg font-semibold sm:text-xl">
                            {formatFundraisingCurrency(item.goal)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative space-y-8 px-6 py-6 sm:px-8 sm:py-8">
                    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between gap-4">
                          <p className="font-heading text-sm uppercase tracking-[0.24em] text-white">
                            Progress Tracker
                          </p>
                          <p className={`font-heading text-sm ${accent.text}`}>
                            {Math.round(progress)}%
                          </p>
                        </div>

                        <div className="rounded-tl-[2rem] rounded-br-[2rem] border border-white/10 bg-black/25 px-4 py-5 shadow-inner shadow-white/5 backdrop-blur-sm sm:px-5">
                          <div className="flex items-center justify-end gap-4 text-[0.65rem] uppercase tracking-[0.18em] text-white/45">
                            <span>{formatFundraisingCurrency(item.goal)}</span>
                          </div>

                          <div className="relative mt-8 pb-12">
                            <div className="relative">
                              <div className="relative h-6 rounded-full border border-white/10 bg-white/8 shadow-inner shadow-black/30">
                                <div className="absolute inset-y-0 left-0 w-full rounded-full bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_18px,transparent_18px,transparent_36px)]" />
                                <div
                                  className={`relative h-full rounded-full ${accent.bar} transition-all duration-700`}
                                  style={{ width: `${clampedProgress}%` }}
                                />

                                {item.milestones.map((milestone) => {
                                  const milestonePosition = Math.min(
                                    Math.max((milestone.amount / Math.max(item.goal, 1)) * 100, 0),
                                    100,
                                  );
                                  const isReached = item.raised >= milestone.amount;

                                  return (
                                    <div
                                      key={`${item._id}-marker-${milestone.amount}`}
                                      className="absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                                      style={{ left: `${milestonePosition}%` }}
                                    >
                                      <div
                                        className={`h-6 w-6 rounded-full border-2 shadow-[0_0_0_5px_rgba(16,16,18,0.95)] ${
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
                                  );
                                })}
                              </div>

                              <div
                                className="pointer-events-none absolute top-1/2 z-20 -translate-y-[calc(100%+0.6rem)] transition-all duration-700"
                                style={{ left: `${clampedProgress}%` }}
                              >
                                <div className={`rounded-tl-xl rounded-br-xl border bg-brand-dark px-3 py-2 text-[0.65rem] font-heading uppercase tracking-[0.18em] shadow-lg shadow-black/25 ${progressBadgeAlignment} ${accent.marker}`}>
                                  {formatFundraisingCurrency(item.raised)}
                                </div>
                                <div className={`h-5 w-[2px] ${accent.bar}`} />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                          {item.milestones.map((milestone, index) => {
                            const isReached = item.raised >= milestone.amount;
                            const isCurrent =
                              !isReached &&
                              (index === 0 || item.raised >= item.milestones[index - 1].amount);

                            return (
                              <div
                                key={`${item._id}-chip-${milestone.amount}`}
                                className={`group relative overflow-hidden rounded-tl-2xl rounded-br-2xl border px-3 py-4 text-center text-xs shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 ${
                                  isReached
                                    ? `${accent.soft} text-white shadow-[0_10px_24px_rgba(0,0,0,0.22)]`
                                    : isCurrent
                                      ? `border-white/25 bg-white/10 text-white`
                                      : "border-white/10 bg-black/20 text-white/55"
                                }`}
                              >
                                <div className="absolute inset-x-0 top-0 h-1 bg-white/10">
                                  <div className={`h-full ${isReached || isCurrent ? accent.bar : "bg-white/20"}`} />
                                </div>
                                <p className={`font-heading text-[0.62rem] uppercase tracking-[0.2em] ${isReached || isCurrent ? accent.text : "text-white/35"}`}>
                                  {isReached
                                    ? `Reached at ${formatFundraisingCurrency(milestone.amount)}`
                                    : isCurrent
                                      ? `Next target ${formatFundraisingCurrency(milestone.amount)}`
                                      : `Locked at ${formatFundraisingCurrency(milestone.amount)}`}
                                </p>
                                <p className="mt-2 font-medium">{milestone.title}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <aside className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                        <div className="rounded-tl-[2rem] rounded-br-[2rem] border border-white/10 bg-black/25 px-5 py-5 text-white shadow-inner shadow-white/5 backdrop-blur-sm">
                          <div className="flex items-center gap-3">
                            <div className={`rounded-tl-xl rounded-br-xl border px-3 py-3 ${accent.soft} ${accent.text}`}>
                              <FaIndianRupeeSign />
                            </div>
                            <div>
                              <p className="text-xs uppercase tracking-[0.22em] text-white/60">
                                Remaining
                              </p>
                              <p className="mt-1 font-heading text-lg">
                                {formatFundraisingCurrency(Math.max(item.goal - item.raised, 0))}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-tl-[2rem] rounded-br-[2rem] border border-white/10 bg-black/25 px-5 py-5 text-white shadow-inner shadow-white/5 backdrop-blur-sm">
                          <div className="flex items-center gap-3">
                            <div className={`rounded-tl-xl rounded-br-xl border px-3 py-3 ${accent.soft} ${accent.text}`}>
                              <FaUsers />
                            </div>
                            <div>
                              <p className="text-xs uppercase tracking-[0.22em] text-white/60">
                                Supporters
                              </p>
                              <p className="mt-1 font-heading text-lg">
                                {item.supportersCount || 0}
                              </p>
                            </div>
                          </div>
                        </div>
                      </aside>
                    </div>

                    <div className="flex flex-col gap-5 rounded-tl-[2rem] rounded-br-[2rem] border border-white/10 bg-black/25 p-5 shadow-inner shadow-white/5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
                      <div className="max-w-3xl">
                        <p className={`font-heading text-[0.65rem] uppercase tracking-[0.28em] ${accent.text}`}>
                          Why this run matters
                        </p>
                        <p className="mt-3 text-sm leading-7 text-zinc-200">
                          {item.intro}
                        </p>
                      </div>
                      <Link
                        href={`/fundraising/${item.slug}`}
                        className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 ${accent.hover}`}
                      >
                        View Fundraiser
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        ) : (
          <section className="w-full max-w-4xl rounded-tl-[3rem] rounded-br-[3rem] border border-white/10 bg-brand-dark px-6 py-10 text-center text-white shadow-[0_20px_45px_rgba(0,0,0,0.25)] sm:px-8">
            <h2 className="font-heading text-2xl">No Fundraisers Published Yet</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
              Add fundraiser entries in Sanity Studio to make them appear here.
              Each entry can control the tracker, milestones, CTA link, and the
              full fundraiser detail page.
            </p>
          </section>
        )}
      </div>
    </div>
  );
}

export default page;
