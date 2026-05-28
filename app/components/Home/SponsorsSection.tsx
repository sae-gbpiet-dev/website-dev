import Image from "next/image";
import Link from "next/link";
import React from "react";

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

function SponsorsSection() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 py-12 sm:gap-10 sm:py-16">
      <div className="space-y-4 text-white">
        <h1 className="text-center font-heading text-3xl sm:text-4xl">
          PARTNER WITH SAE GBPIET
        </h1>
      </div>
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex min-h-36 w-full max-w-4xl items-center justify-center rounded-tl-4xl rounded-br-4xl bg-brand-blue px-6 py-8 text-center font-sans text-base leading-7 text-white sm:text-xl">
          Partner with SAE GBPIET and support the next generation of engineers.
          Your sponsorship helps us participate in competitions, develop
          innovative projects, organise technical events, and create impactful
          learning experiences.
        </div>

        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {sponsorLogos.map((sponsor) => (
            <div
              key={sponsor.name}
              className="group flex aspect-[5/3] items-center justify-center rounded-tl-[2rem] rounded-br-[2rem] border border-white/10 bg-white p-6 shadow-[0_18px_45px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-2 hover:border-brand-gold hover:shadow-[0_24px_60px_rgba(245,158,11,0.18)]"
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

        <div>
          <Link
            href="/sponsors"
            className="cursor-pointer rounded-br-4xl rounded-bl-4xl border-2 bg-brand-gold px-6 py-3 font-heading text-base text-brand-dark transition-all duration-500 hover:border-brand-gold hover:bg-black hover:text-white sm:text-lg"
          >
            Become a Sponsor
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SponsorsSection;
