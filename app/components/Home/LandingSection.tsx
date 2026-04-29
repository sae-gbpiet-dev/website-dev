import Image from "next/image";
import React from "react";

import { featuredGalleryImages } from "@/app/gallery/galleryData";

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
          <div className="flex min-h-28 items-center justify-center bg-brand-blue/50 px-5 py-6 text-center sm:min-h-32 sm:px-8 lg:text-left">
            <p className="max-w-2xl font-sans text-base leading-7 sm:text-lg">
              This is some text about SAE, something catchy and eye-catching that
              introduces the team and sets the tone for the rest of the page.
            </p>
          </div>
        </div>

        <div className="relative min-h-56 flex-1 overflow-hidden bg-brand-blue/90">
          <Image
            src={featuredGalleryImages.baja}
            alt="SAE GBPIET ATV team at BAJA 2025-26"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />
        </div>
      </div>

      <div className="grid min-h-72 flex-1 grid-cols-2 grid-rows-2 gap-3 overflow-hidden rounded-tr-[3rem] bg-white/10 p-3 lg:w-1/2">
        {[
          {
            src: featuredGalleryImages.induction,
            alt: "SAE GBPIET induction event 2025-26",
            className: "row-span-2",
          },
          {
            src: featuredGalleryImages.cadathon,
            alt: "SolidWorks workshop and Cadathon 2025-26",
            className: "",
          },
          {
            src: featuredGalleryImages.waterRocket,
            alt: "Water Rocket 3.0 event 2025-26",
            className: "",
          },
        ].map((image) => (
          <div
            key={image.src}
            className={`relative overflow-hidden rounded-tl-[2rem] rounded-br-[2rem] bg-brand-dark ${image.className}`}
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
