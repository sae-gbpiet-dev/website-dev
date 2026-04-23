"use client";

import Image from "next/image";
import type { MouseEvent, RefObject } from "react";
import { useRef } from "react";

import type { GalleryPhoto, GallerySection } from "@/app/gallery/galleryData";

interface GalleryMasonryGridProps {
  photos: GalleryPhoto[];
  sections: GallerySection[];
}

const cardHeights = [
  "min-h-[18rem]",
  "min-h-[25rem]",
  "min-h-[21rem]",
  "min-h-[28rem]",
  "min-h-[19rem]",
  "min-h-[24rem]",
];

const getCategoryCopy = (
  category: GalleryPhoto["category"],
  sections: GallerySection[],
) => sections.find((section) => section.id === category);

const getCardHeight = (index: number) => cardHeights[index % cardHeights.length];

function updateTilt(
  event: MouseEvent<HTMLDivElement>,
  cardRef: RefObject<HTMLDivElement | null>,
) {
  const card = cardRef.current;

  if (!card) {
    return;
  }

  const rect = card.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = -(y - centerY) / 22;
  const rotateY = (x - centerX) / 22;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
}

function resetTilt(cardRef: RefObject<HTMLDivElement | null>) {
  const card = cardRef.current;

  if (!card) {
    return;
  }

  card.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0)";
}

function GalleryCard({
  photo,
  category,
  index,
}: {
  photo: GalleryPhoto;
  category?: GallerySection;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className="mb-5 break-inside-avoid perspective-[1200px] xl:mb-6"
      onMouseMove={(event) => updateTilt(event, cardRef)}
      onMouseLeave={() => resetTilt(cardRef)}
    >
      <article
        ref={cardRef}
        className="group relative overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] border border-white/10 bg-zinc-900 shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition-transform duration-200 ease-out"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(21,101,169,0.14),transparent_42%)] pointer-events-none" />

        <div className={`relative ${getCardHeight(index)}`}>
          {photo.imageUrl ? (
            <Image
              src={photo.imageUrl}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.35),transparent_38%),linear-gradient(145deg,rgba(21,101,169,0.95),rgba(34,34,34,0.92)_58%,rgba(245,158,11,0.6))]" />
          )}

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/85" />
          <div className="absolute top-0 left-0 h-2 w-full bg-[repeating-linear-gradient(45deg,black_0px,black_6px,white_6px,white_12px)] opacity-25" />

          <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[0.65rem] font-heading uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            {category?.title || photo.category}
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <div className="translate-y-0 transition duration-500 md:translate-y-14 md:group-hover:translate-y-0 md:group-focus-within:translate-y-0">
              <div className="space-y-2">
                <p className="text-[0.7rem] font-heading uppercase tracking-[0.24em] text-brand-gold">
                  {photo.eventName}
                </p>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {photo.title}
                </h3>
              </div>

              <div className="mt-4 grid gap-2 border-t border-white/15 pt-4 text-sm text-zinc-200 opacity-100 transition duration-500 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
                <p>
                  <span className="font-heading text-[0.65rem] uppercase tracking-[0.2em] text-brand-gold">
                    Date
                  </span>{" "}
                  {photo.capturedAt}
                </p>
                <p>
                  <span className="font-heading text-[0.65rem] uppercase tracking-[0.2em] text-brand-gold">
                    Venue
                  </span>{" "}
                  {photo.location}
                </p>
                <p className="max-w-[28rem] leading-6 text-zinc-100/90">
                  {photo.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

function GalleryMasonryGrid({ photos, sections }: GalleryMasonryGridProps) {
  return (
    <div className="mx-auto w-full max-w-6xl columns-1 gap-5 px-4 pb-10 sm:columns-2 sm:px-6 lg:columns-3 lg:px-8 xl:gap-6">
      {photos.map((photo, index) => {
        const category = getCategoryCopy(photo.category, sections);

        return (
          <GalleryCard
            key={photo.id}
            photo={photo}
            category={category}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default GalleryMasonryGrid;
