import Link from "next/link";
import React from "react";

function ContributeSection() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 py-12 sm:gap-10 sm:py-16">
      <div className="space-y-4 text-white">
        <h1 className="text-center font-heading text-3xl sm:text-4xl">
          READY TO BUILD THE FUTURE?
        </h1>
        <h2 className="text-center font-sans text-lg sm:text-2xl">
          Join the Journey
        </h2>
      </div>
      <div className="flex w-full flex-col items-center gap-5">
        <div className="flex min-h-36 w-full max-w-4xl items-center justify-center rounded-tl-4xl rounded-br-4xl bg-brand-blue px-6 py-8 text-center font-sans text-base leading-7 text-white sm:text-xl">
          Become a part of SAE GBPIET and contribute through innovation,
          collaboration, sponsorship, mentorship, and engineering excellence.
          Together, we create opportunities, build impactful projects, and shape
          the engineers of tomorrow.
        </div>

        <div className="flex w-full max-w-4xl justify-center sm:justify-end">
          <Link
            href="/contact"
            className="cursor-pointer rounded-tr-4xl rounded-bl-4xl border-2 bg-brand-gold px-6 py-3 font-heading text-base text-brand-dark transition-all duration-500 hover:border-brand-gold hover:bg-black hover:text-white sm:text-lg"
          >
            Join Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContributeSection;
