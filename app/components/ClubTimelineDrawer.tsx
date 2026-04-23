"use client";

import React, { useEffect, useState } from "react";
import {
  FaArrowTrendUp,
  FaFlagCheckered,
  FaGear,
  FaTrophy,
} from "react-icons/fa6";
import { PiDroneFill } from "react-icons/pi";

const timelineItems = [
  {
    year: "2022",
    title: "Club Build Cycle Reset",
    description:
      "The team refreshed its build process with clearer planning, design reviews, and better role coordination.",
    icon: FaGear,
  },
  {
    year: "2023",
    title: "ATV And UAV Tracks Grew",
    description:
      "Both verticals matured with deeper hands-on work across fabrication, systems integration, and testing.",
    icon: FaArrowTrendUp,
  },
  {
    year: "2024",
    title: "Stronger Competition Push",
    description:
      "The club sharpened its focus on reliability, presentation, and readiness for external opportunities.",
    icon: FaFlagCheckered,
  },
  {
    year: "Now",
    title: "Building Toward The Next Leap",
    description:
      "The current phase is about fundraising, execution discipline, and carrying lessons into stronger outcomes.",
    icon: FaTrophy,
  },
];

const challengeItems = [
  {
    title: "Funding Consistency",
    description:
      "Major components, travel, and testing still depend on timely sponsorship and structured fundraising.",
    icon: FaArrowTrendUp,
  },
  {
    title: "ATV Build Readiness",
    description:
      "Suspension, drivetrain, and fabrication timelines need tight coordination to stay competition ready.",
    icon: FaGear,
  },
  {
    title: "UAV Integration",
    description:
      "Airframe, electronics, payload, and flight testing all need to land together without bottlenecks.",
    icon: PiDroneFill,
  },
];

function ClubTimelineDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] hidden lg:block">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`pointer-events-auto absolute top-1/2 right-0 flex min-h-[8.5rem] -translate-y-1/2 translate-x-0 items-center  border border-white/20 bg-brand-gold/90 px-4 py-5 text-brand-dark shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-x-1 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
        aria-label="Open timeline and challenges panel"
      >
        <span className="[writing-mode:vertical-rl] rotate-180 font-heading text-xs uppercase tracking-[0.28em]">
          Timeline & Challenges
        </span>
      </button>

      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className={`absolute inset-0 bg-brand-dark/45 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-label="Close timeline and challenges overlay"
      />

      <div
        className={`pointer-events-auto absolute inset-y-0 right-0 h-screen w-[26rem] max-w-[calc(100vw-3rem)]  border-l border-white/20 bg-brand-gold/88 text-brand-dark shadow-[0_24px_60px_rgba(0,0,0,0.34)] backdrop-blur-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col overflow-hidden ">
          <div className="border-b border-brand-dark/10 bg-white/20 px-6 py-6 backdrop-blur-sm">
            <h2 className="font-heading text-base uppercase tracking-[0.2em]">
              Timeline & Challenges
            </h2>
            <p className="mt-2 text-sm leading-6 text-brand-dark/80">
              A quick look at where the club has come from and what it is actively solving.
            </p>
          </div>

          <div className="flex-1 space-y-8 overflow-y-auto px-6 py-6">
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-sm uppercase tracking-[0.2em]">
                  Timeline
                </h3>
                <span className="text-xs uppercase tracking-[0.2em] text-brand-dark/60">
                  Club Journey
                </span>
              </div>

              <div className="relative space-y-5 pl-6">
                <div className="absolute top-2 bottom-2 left-2 w-[2px] bg-brand-dark/15" />
                {timelineItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article key={`${item.year}-${item.title}`} className="relative">
                      <div className="absolute top-1 left-[-1.45rem] flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue text-white">
                        <Icon className="text-xs" />
                      </div>
                      <div className="rounded-tl-[1.5rem] rounded-br-[1.5rem] border border-white/35 bg-white/35 px-4 py-4 backdrop-blur-sm">
                        <p className="text-[0.7rem] font-heading uppercase tracking-[0.24em] text-brand-blue">
                          {item.year}
                        </p>
                        <h4 className="mt-2 font-heading text-sm">{item.title}</h4>
                        <p className="mt-2 text-sm leading-6 text-brand-dark/80">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-sm uppercase tracking-[0.2em]">
                  Challenges
                </h3>
                <span className="text-xs uppercase tracking-[0.2em] text-brand-dark/60">
                  Current Focus
                </span>
              </div>

              <div className="space-y-3">
                {challengeItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-tl-[1.5rem] rounded-br-[1.5rem] border border-white/10 bg-brand-dark/92 px-4 py-4 text-white backdrop-blur-sm"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-tl-xl rounded-br-xl bg-brand-blue text-white">
                          <Icon />
                        </div>
                        <div>
                          <h4 className="font-heading text-sm text-brand-gold">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-sm leading-6 text-white/80">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClubTimelineDrawer;
