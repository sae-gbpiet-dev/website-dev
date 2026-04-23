import React from "react";

function LandingSection() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col gap-6 py-8 text-white lg:flex-row lg:items-stretch">
      <div className="flex flex-1 flex-col gap-4 sm:gap-5 lg:w-1/2">
        <div className="space-y-3">
          <div className="flex min-h-24 items-center justify-end rounded-tl-[4rem] bg-brand-blue/50 px-5 py-6 sm:min-h-28 sm:px-8">
            <h1 className="text-right font-heading text-3xl sm:text-4xl lg:text-5xl">
              WE ARE
            </h1>
          </div>
          <div className="flex min-h-24 items-center justify-end bg-brand-gold/50 px-5 py-6 sm:min-h-28 sm:px-8">
            <h1 className="text-right font-heading text-3xl sm:text-4xl lg:text-5xl">
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

        <div className="min-h-56 flex-1 bg-brand-blue/90" />
      </div>

      <div className="min-h-72 flex-1 rounded-tr-[3rem]  bg-white/95 lg:w-1/2" />
    </section>
  );
}

export default LandingSection;
