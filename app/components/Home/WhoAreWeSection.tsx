import React from "react";

const identityCards = [
  {
    title: "Innovation",
    description:
      "We don't wait for the 'right' answer. If something hasn't been tried before, that's usually reason enough to try it, sketch it, test it, and see if it holds up.",
    className: "bg-brand-gold text-brand-dark",
  },
  {
    title: "Teamwork",
    description:
      "Nobody builds an ATV alone. This is a group of students who show up on weekends, disagree about design choices, and somehow still end up with a working vehicle by competition day.",
    className: "bg-brand-blue text-white",
  },
  {
    title: "Technical Excellence",
    description:
      "We learn by breaking things and fixing them. Welding, wiring, machining, testing: the classroom teaches the theory, but the workshop is where it actually clicks.",
    className: "bg-brand-blue text-white",
  },
  {
    title: "Leadership & Growth",
    description:
      "Everyone starts somewhere, usually holding a wrench. A year or two in, that same person is running a subsystem. That's kind of how this team works.",
    className: "bg-brand-gold text-brand-dark",
  },
];

function WhoAreWeSection() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-6 py-12 sm:gap-8 sm:py-16">
      <div className="w-full">
        <h1 className="text-center font-heading text-2xl text-white sm:text-3xl">
          WHO ARE WE
        </h1>
      </div>

      <div className="grid w-full gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        {identityCards.slice(0, 2).map((card) => (
          <article
            key={card.title}
            className={`flex min-h-44 flex-col justify-center gap-4 rounded-tl-[2rem] rounded-br-[2rem] p-6 ${card.className}`}
          >
            <h2 className="font-heading text-xl sm:text-2xl">{card.title}</h2>
            <p className="max-w-2xl text-base leading-7 sm:text-lg">
              {card.description}
            </p>
          </article>
        ))}
      </div>

      <div className="grid w-full gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        {identityCards.slice(2).map((card) => (
          <article
            key={card.title}
            className={`flex min-h-44 flex-col justify-center gap-4 rounded-tl-[2rem] rounded-br-[2rem] p-6 ${card.className}`}
          >
            <h2 className="font-heading text-xl sm:text-2xl">{card.title}</h2>
            <p className="max-w-2xl text-base leading-7 sm:text-lg">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhoAreWeSection;
