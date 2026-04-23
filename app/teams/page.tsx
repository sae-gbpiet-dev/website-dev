import Image from "next/image";
import Link from "next/link";
import React from "react";
import PageHeader from "../components/PageHeader";

const teamCards = [
  {
    title: "ATV",
    href: "/teams/atv",
    image: "/assets/images/atv.jpeg",
    alt: "SAE ATV team preview",
  },
  {
    title: "UAV",
    href: "/teams/uav",
    image: "/assets/images/atv-team-member-placeholder.png",
    alt: "SAE UAV team preview",
  },
];

function page() {
  return (
    <div className="flex min-h-screen flex-col items-center py-8">
      <PageHeader title="OUR TEAMS" />

      <div className="flex w-full flex-col items-center px-4">
        <h1 className="p-6 text-center">
          We have some of the best UAV and ATV teams under our hood
        </h1>

        <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 py-12 sm:gap-10 sm:py-16">
          <div className="grid w-full max-w-4xl gap-5 sm:grid-cols-2">
            {teamCards.map((team) => (
              <article
                key={team.title}
                className="group relative h-80 overflow-hidden rounded-tl-[4rem] bg-brand-gold p-4 sm:h-96 sm:p-5"
              >
                <h2 className="absolute right-4 top-4 z-20 font-heading text-sm text-brand-dark transition-colors duration-300 group-hover:text-white sm:right-5 sm:top-5 sm:text-base">
                  {team.title}
                </h2>

                <div className="absolute bottom-0 left-4 right-0 top-16 overflow-hidden rounded-tl-[4rem] bg-brand-blue transition-all duration-500 ease-out group-hover:left-0 group-hover:right-0 group-hover:top-0">
                  <Image
                    src={team.image}
                    alt={team.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 flex translate-y-6 justify-center p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <Link
                      href={team.href}
                      className="rounded-tl-2xl rounded-br-2xl border border-white/80 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-brand-dark hover:text-brand-gold"
                    >
                      See more
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default page;
