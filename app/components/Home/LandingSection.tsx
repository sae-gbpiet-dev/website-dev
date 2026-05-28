import Image from "next/image";
import React from "react";

import { getGoogleDriveImageUrl } from "@/app/gallery/galleryData";

const heroImages = {
  atv: "/assets/images/atv.jpeg",
  bajaAction: getGoogleDriveImageUrl("1nnAtYBv9coiWxR82DCc8wWgghk7Koe-W"),
  bajaVehicle: getGoogleDriveImageUrl("1V2ul0slyebDjXBXxPSno-mW8sd0bIxKk"),
  bajaPit: getGoogleDriveImageUrl("1A4Ch91B5L36N-m9XUecs9uPS2ZsYWuDa"),
};

function LandingSection() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col gap-6 py-8 text-white lg:flex-row lg:items-stretch">
      <div className="flex flex-1 flex-col gap-4 sm:gap-5 lg:w-1/2">
        <div className="space-y-3">
          <div className="flex min-h-24 items-center justify-end rounded-tl-[4rem] bg-brand-blue/50 px-5 py-6 sm:min-h-28 sm:px-8">
            <h1  className="font-heading page-header-title stroke-text relative text-center text-md md:text-2xl lg:text-4xl font-extrabold tracking-[0.25em] text-transparent">
              WE ARE
            </h1>
          </div>
          <div className="flex min-h-24 items-center justify-end bg-brand-gold/50 px-5 py-6 sm:min-h-28 sm:px-8">
            <h1  className="font-heading page-header-title stroke-text relative text-center text-md md:text-2xl lg:text-4xl font-extrabold tracking-[0.25em] text-transparent">
              SAE GBPIET
            </h1>
          </div>
          <div className="flex min-h-32 flex-col items-center justify-center gap-3 bg-brand-blue/50 px-5 py-6 text-center sm:min-h-36 sm:px-8 lg:items-start lg:text-left">
            <p className="font-heading text-lg text-brand-gold sm:text-2xl">
              Innovating Today. Engineering Tomorrow.
            </p>
            <p className="max-w-2xl font-sans text-base leading-7 sm:text-lg">
              Empowering students through innovation, teamwork, and real-world
              engineering experiences.
            </p>
          </div>
        </div>

        <div className="relative min-h-56 flex-1 overflow-hidden bg-brand-blue/90">
          <Image
            src={heroImages.atv}
            alt="SAE GBPIET ATV vehicle"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />
        </div>
      </div>

      <div className="grid min-h-72 flex-1 grid-cols-2 grid-rows-2 gap-3 overflow-visible rounded-tr-[3rem] bg-transparent lg:w-1/2">
        {[
          {
            src: heroImages.bajaAction,
            alt: "SAE GBPIET ATV in BAJA competition action",
            className: "row-span-2",
          },
          {
            src: heroImages.bajaVehicle,
            alt: "SAE GBPIET BAJA vehicle close-up",
            className: "",
          },
          {
            src: heroImages.bajaPit,
            alt: "SAE GBPIET team working around the BAJA vehicle",
            className: "",
          },
        ].map((image) => (
          <div
            key={image.src}
            className={`relative overflow-hidden rounded-tl-[2rem] rounded-br-[2rem] ${image.className}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default LandingSection;
