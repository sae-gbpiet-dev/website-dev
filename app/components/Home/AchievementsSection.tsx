import React from "react";

const achievements = [
  "Secured Rank 1 in Uttarakhand and Delhi NCR (Virtual Event).",
  "Achieved Rank 3 in Sales Presentation at SAE BAJA 2019.",
  "Secured Rank 1 in Sledge Pull Event at ATVC 2019.",
  "Achieved Rank 1 in Sales Presentation at ATVC 2019.",
  "Ranked 47 out of 283 teams in SAE BAJA 2019 (Virtual Event).",
  "Secured Rank 57 in SAE mBAJA 2024 (Virtual Event).",
  "Achieved Rank 7 in Sales Event at SAE mBAJA 2024 (Virtual Event).",
  "Ranked 45 in the Preliminary Round of SAE eBAJA 2025 (Virtual Event).",
  "Secured Rank 9 in Design Finals at eBAJA 2025 (Physical Event).",
  "Achieved Rank 23 in Sales Event at eBAJA 2025 (Static Event).",
  "Ranked 40 in the Virtual Dynamic Simulation Event at eBAJA 2025.",
  "Honoured with the Fair Play Award among all participating teams at ATVC 2025.",
  "Secured Rank 3 in Media Round at ATVC 2025.",
  "Became the First Team from Northern India to develop a 4WD Electric ATV.",
  "Achieved Rank 33 in Preliminary Round of SAE eBAJA 2026 (Virtual Event).",
  "Secured a place among the Top 16 teams in the Manufacturing Excellence Event at SAE eBAJA 2026 (Physical Round).",
];

function AchievementsSection() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-10 overflow-hidden py-12 sm:gap-12 sm:py-16">
      <div className="w-full">
        <h1 className="text-center font-heading text-2xl text-white sm:text-3xl">
          OUR ACHIEVEMENTS
        </h1>
      </div>

      <div className="achievements-carousel w-screen max-w-none">
        <div className="achievements-carousel-track flex w-max py-8">
          {[0, 1].map((groupIndex) => (
            <div
              aria-hidden={groupIndex === 1}
              className="flex gap-5 px-3 sm:gap-7 sm:px-5"
              key={groupIndex}
            >
              {achievements.map((achievement, index) => (
                <article
                  key={`${achievement}-${groupIndex}`}
                  className={`achievement-card flex min-h-56 w-[18rem] shrink-0 flex-col justify-between rounded-tl-[2.25rem] rounded-br-[2.25rem] p-6 sm:w-[22rem] ${
                    index % 2 === 0
                      ? "achievement-card-gold text-brand-dark"
                      : "achievement-card-blue text-white"
                  }`}
                >
                  <span className="font-heading text-base opacity-80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-8 text-base leading-7 sm:text-lg">
                    {achievement}
                  </p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AchievementsSection;
