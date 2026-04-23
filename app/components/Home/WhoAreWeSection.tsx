import React from "react";

function WhoAreWeSection() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-6 py-12 sm:gap-8 sm:py-16">
      <div className="w-full">
        <h1 className="text-center font-heading text-2xl text-white sm:text-3xl">
          WHO ARE WE
        </h1>
      </div>

      <div className="grid w-full gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="min-h-44 rounded-tl-[2rem] rounded-br-[2rem] bg-brand-gold p-6 text-brand-dark">
          hello
        </div>
        <div className="min-h-44  rounded-tl-[2rem] rounded-br-[2rem]  bg-brand-blue p-6 text-white">
          hello
        </div>
      </div>

      <div className="grid w-full gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="min-h-44  rounded-tl-[2rem] rounded-br-[2rem]  bg-brand-blue p-6 text-white">
          hello
        </div>
        <div className="min-h-44 rounded-tl-[2rem] rounded-br-[2rem] bg-brand-gold p-6 text-brand-dark">
          hello
        </div>
      </div>
    </section>
  );
}

export default WhoAreWeSection;
