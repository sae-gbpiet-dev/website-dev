import Image from "next/image";
import React from "react";

import { featuredGalleryImages } from "@/app/gallery/galleryData";

function WhatDrivesUsSection() {
  const cards = [
    {
      title: "OUR VISION",
      description:
        "To create a culture of innovation and practical engineering where students transform ideas into impactful solutions and become future industry leaders.",
      detail:
        "We want this to be the place where students stop just studying engineering and start doing it. An idea scribbled on a whiteboard should be able to become a working prototype and eventually, a machine you can actually drive. That's the shift we're chasing: from curiosity to competence, one build at a time.",
      image: featuredGalleryImages.catalyst,
      alt: "SAE GBPIET students during Catalyst event",
      frameClassName: "bg-brand-gold",
      titleClassName: "text-brand-dark group-hover:text-white",
    },
    {
      title: "OUR MISSION",
      description:
        "To empower students through workshops, projects, competitions, and teamwork while building technical and leadership excellence.",
      detail:
        "We throw students into real problems on purpose. Workshops, design reviews, fabrication marathons, competitions that don't go as planned: it's not always comfortable, but it's how people actually learn to build, lead, and troubleshoot under pressure.",
      image: featuredGalleryImages.workshop,
      alt: "SAE GBPIET workshop session",
      frameClassName: "bg-brand-blue",
      titleClassName: "text-white group-hover:text-white",
    },
    {
      title: "OUR IMPACT",
      description:
        "Measured through innovation, real-world experience, collaborative growth, and the achievements of every member of SAE GBPIET.",
      detail:
        "The trophies are nice, but they're not really the point. The real impact is the student who walked in not knowing how to use a lathe and walked out running a subsystem. Every competition is just proof of how far that kind of growth can go.",
      image: featuredGalleryImages.baja,
      alt: "SAE GBPIET BAJA competition team",
      frameClassName: "bg-brand-gold",
      titleClassName: "text-brand-dark group-hover:text-white",
    },
  ];

  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-8 py-12 sm:gap-10 sm:py-16">
      <div className="w-full">
        <h1 className="text-center font-heading text-2xl text-white sm:text-3xl">
          WHAT DRIVES US
        </h1>
      </div>
      <div className="grid w-full gap-5 lg:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.title}
            className={`group relative h-[28rem] overflow-hidden rounded-tl-[4rem] p-4 shadow-[0_18px_45px_rgba(0,0,0,0.22)] sm:h-[30rem] sm:p-5 ${card.frameClassName}`}
          >
            <h2
              className={`absolute top-4 right-4 z-30 max-w-[75%] text-right font-heading text-sm drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] transition-colors duration-300 sm:top-5 sm:right-5 sm:text-base ${card.titleClassName}`}
            >
              {card.title}
            </h2>

            <div className="absolute top-16 right-0 bottom-0 left-4 overflow-hidden rounded-tl-[4rem] bg-brand-blue transition-all duration-500 ease-out group-hover:top-0 group-hover:right-0 group-hover:left-0 group-focus-within:top-0 group-focus-within:right-0 group-focus-within:left-0">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/5 transition duration-500 group-hover:from-black/95 group-hover:via-black/65 group-hover:to-black/35 group-focus-within:from-black/95 group-focus-within:via-black/65 group-focus-within:to-black/35" />

              <div className="absolute inset-x-0 bottom-0 flex translate-y-0 flex-col gap-4 p-6 text-white opacity-100 transition-all duration-500 sm:translate-y-14 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-within:translate-y-0 sm:group-focus-within:opacity-100">
                <p className="text-sm leading-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] sm:text-base">
                  {card.description}
                </p>
                <div className="h-px w-16 bg-brand-gold" />
                <p className="text-xs leading-6 text-white/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] sm:text-sm">
                  {card.detail}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhatDrivesUsSection;
