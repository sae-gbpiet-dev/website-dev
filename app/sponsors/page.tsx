import Image from "next/image";
import Link from "next/link";
import React from "react";

import PageHeader from "../components/PageHeader";

const sponsorLogos = [
  {
    name: "Arc Global",
    image: "/assets/sponsors/arc-global.png",
  },
  {
    name: "Elara Capital",
    image: "/assets/sponsors/elara-capital.png",
  },
  {
    name: "Flux Motors",
    image: "/assets/sponsors/flux-motors.png",
  },
];

const sponsorshipHighlights = [
  {
    title: "Workshop To Competition",
    description:
      "Your support helps us move from design and fabrication to testing, transport, and competition readiness.",
  },
  {
    title: "Student-Led Engineering",
    description:
      "Every contribution backs hands-on learning in design, manufacturing, vehicle systems, and teamwork.",
  },
  {
    title: "Shared Visibility",
    description:
      "We highlight our sponsors across vehicles, team materials, events, and digital channels where relevant.",
  },
];

function page() {
  return (
    <div className="flex flex-col items-center px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader title="OUR SPONSORS" />

      <div className="flex w-full max-w-6xl flex-col items-center gap-10 py-10 sm:gap-12 sm:py-12">
        <section className="flex w-full max-w-4xl flex-col items-center gap-6 text-center">
          <p className="max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
            The work we do is powered by the people and organizations that
            believe in student-led engineering. Our sponsors help turn ideas
            into tested machines, competition experiences, and real-world
            learning.
          </p>

          <div className="w-full rounded-tl-[3rem] rounded-br-[3rem] bg-brand-blue px-6 py-8 text-white shadow-lg sm:px-8 sm:py-10">
            <h2 className="font-heading text-xl sm:text-2xl">
              Partner With SAE GBPIET
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/90 sm:text-base">
              We are grateful to every sponsor who supports our ATV and UAV
              programs. Whether through funding, materials, technical guidance,
              or services, your partnership helps our team build better and aim
              higher.
            </p>
          </div>
        </section>

        <section className="flex w-full max-w-5xl flex-col gap-6">
          <div className="text-center">
            <h2 className="font-heading text-2xl text-white sm:text-3xl">
              Sponsor Showcase
            </h2>
            <p className="mt-3 text-sm text-white/75 sm:text-base">
              Our partners support student-led engineering, competition
              readiness, and hands-on technical growth.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
            {sponsorLogos.map((sponsor) => (
              <div
                key={sponsor.name}
                className="group flex aspect-[5/3] items-center justify-center rounded-tl-[2rem] rounded-br-[2rem] border border-white/10 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:border-brand-gold hover:shadow-[0_24px_60px_rgba(245,158,11,0.18)]"
              >
                <Image
                  src={sponsor.image}
                  alt={`${sponsor.name} logo`}
                  width={512}
                  height={512}
                  className="max-h-24 w-auto max-w-full object-contain transition duration-300 group-hover:scale-105"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="grid w-full max-w-5xl gap-5 md:grid-cols-3">
          {sponsorshipHighlights.map((item) => (
            <article
              key={item.title}
              className="rounded-tl-[2.5rem] rounded-br-[2.5rem] border border-white/10 bg-brand-dark px-6 py-7 text-white shadow-md"
            >
              <h3 className="font-heading text-lg text-brand-gold">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/80">
                {item.description}
              </p>
            </article>
          ))}
        </section>

        <section className="flex w-full max-w-4xl flex-col items-center gap-5 rounded-tl-[3rem] rounded-br-[3rem] bg-brand-gold px-6 py-8 text-center text-brand-dark sm:px-8 sm:py-10">
          <h2 className="font-heading text-xl sm:text-2xl">
            Interested In Sponsoring Us?
          </h2>
          <p className="max-w-2xl text-sm leading-7 sm:text-base">
            We would love to discuss how your organization can support the team
            in a way that is meaningful for both sides.
          </p>
          <Link
            href="/contact"
            className="rounded-tl-2xl rounded-br-2xl border border-brand-dark bg-brand-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-transparent hover:text-brand-dark sm:text-base"
          >
            Contact the Team
          </Link>
        </section>
      </div>
    </div>
  );
}

export default page;
