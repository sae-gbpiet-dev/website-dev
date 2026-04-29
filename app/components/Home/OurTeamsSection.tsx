import Image from "next/image";
import Link from "next/link";

import { featuredGalleryImages } from "@/app/gallery/galleryData";

const teamCards = [
  {
    title: "ATV",
    href: "/teams/atv",
    image: featuredGalleryImages.baja,
    alt: "SAE ATV team preview",
  },
  {
    title: "UAV",
    href: "/teams/uav",
    image: featuredGalleryImages.waterRocket,
    alt: "SAE UAV team preview",
  },
];

function OurTeamsSection() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-8 py-12 sm:gap-10 sm:py-16">
      <div className="w-full">
        <h1 className="text-center font-heading text-2xl text-white sm:text-3xl">
          OUR TEAMS
        </h1>
      </div>

      <div className="grid w-full max-w-4xl gap-5 sm:grid-cols-2">
        {teamCards.map((team) => (
          <Link
            key={team.title}
            href={team.href}
            className="group relative block h-80 overflow-hidden rounded-tl-[4rem] bg-brand-gold p-4 sm:h-96 sm:p-5"
          >
            <h2 className="absolute top-4 right-4 z-20 font-heading text-sm text-brand-dark transition-colors duration-300 group-hover:text-white sm:top-5 sm:right-5 sm:text-base">
              {team.title}
            </h2>

            <div className="absolute top-16 right-0 bottom-0 left-4 overflow-hidden rounded-tl-[4rem] bg-brand-blue transition-all duration-500 ease-out group-hover:top-0 group-hover:right-0 group-hover:left-0 group-focus-visible:top-0 group-focus-visible:right-0 group-focus-visible:left-0">
              <Image
                src={team.image}
                alt={team.alt}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex translate-y-0 justify-center p-6 opacity-100 transition-all duration-500 sm:translate-y-6 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-visible:translate-y-0 sm:group-focus-visible:opacity-100">
                <span className="rounded-tl-2xl rounded-br-2xl border border-white/80 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm transition group-hover:bg-brand-dark group-hover:text-brand-gold">
                  See more
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default OurTeamsSection;
