import React from "react";

function WhatDrivesUsSection() {
  const cards = ["OUR VISION", "OUR CLAIM", "OUR SUCCESS"];

  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-8 py-12 sm:gap-10 sm:py-16">
      <div className="w-full">
        <h1 className="text-center font-heading text-2xl text-white sm:text-3xl">
          WHAT DRIVES US
        </h1>
      </div>
      <div className="grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((title) => (
          <div
            key={title}
            className="overflow-hidden rounded-tl-[4rem] bg-brand-gold pt-4 pl-4 sm:pt-5 sm:pl-5"
          >
            <div className="flex justify-end pr-4 sm:pr-5">
              <h2 className="font-heading text-sm text-brand-dark sm:text-base">
                {title}
              </h2>
            </div>
            <div className="mt-4 min-h-64 rounded-tl-[4rem] bg-brand-blue sm:min-h-72" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatDrivesUsSection;
