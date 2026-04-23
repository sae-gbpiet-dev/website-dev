import PageHeader from "@/app/components/PageHeader";
import React from "react";
import { ATVTeamMemberCard } from "@/app/components/Team/TeamMemberCards";

function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <PageHeader title="ATV" />

      <div className="flex w-full flex-col items-center justify-center space-y-12 px-4 py-6 sm:px-6 lg:space-y-16 lg:px-8">
        <h1 className="text-center text-base lg:text-xl">
          Some text about ATV page or something else{" "}
        </h1>

        <div className="flex w-full max-w-7xl flex-col overflow-hidden lg:h-[35rem] lg:flex-row">
          <div className="w-full bg-brand-gold p-6 sm:p-8 lg:h-full lg:w-1/2">
            <h1 className="text-center">
              We at SAE Gbpiet have a dedicated team towards competing in the
              SAE BAJA Summit with each year closing the gap towards victory
            </h1>
          </div>
          <div className="w-full bg-brand-blue p-6 sm:p-8 lg:h-full lg:w-1/2 lg:p-10">
            <h1 className="text-center text-lg font-heading sm:text-xl">
              MEET THE ATV
            </h1>

            <div className="flex w-full items-center justify-center pt-6">
              <iframe
                title="Baja SAE Buggy"
                src="https://sketchfab.com/models/de0a08f773fe43e1b442d01ef5dfa670/embed"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                allowFullScreen
                className="h-[320px] w-full rounded-xl shadow-lg sm:h-[420px] md:h-[500px] lg:h-full lg:min-h-[420px]"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-7xl flex-col items-center space-y-6 overflow-hidden p-3 text-center">
          <h2 className="stroke-text relative max-w-full px-6 text-center font-heading text-sm font-extrabold tracking-[0.12em] text-transparent sm:text-lg sm:tracking-[0.18em] md:text-2xl md:tracking-[0.22em] lg:text-4xl lg:tracking-[0.25em]">
            TEAM SAVITAR RACING
          </h2>
          <p>Here is some text about TSR</p>
          <div className="flex h-72 w-full items-center justify-center border-2 border-brand-gold bg-white text-brand-dark sm:h-80 md:h-96 lg:w-2/3">
            That video about TSR intro
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="font-heading text-2xl text-center">TEAM MEMBERS</h1>
          <p className="text-lg text-center">meet our team</p>
        </div>
        <div className="grid w-full max-w-7xl grid-cols-[repeat(auto-fit,minmax(176px,1fr))] justify-items-center gap-6 sm:gap-8 lg:gap-10">
          <ATVTeamMemberCard />

          <ATVTeamMemberCard />

          <ATVTeamMemberCard />
          <ATVTeamMemberCard />
          <ATVTeamMemberCard />

          <ATVTeamMemberCard />

          <ATVTeamMemberCard />
          <ATVTeamMemberCard />
        </div>

        <div className="flex w-full max-w-7xl flex-col items-center justify-center space-y-6">
          <h1 className="text-center font-heading text-3xl sm:text-4xl">
            Take a peak
          </h1>
          <h1 className="text-center text-base md:text-md">
            A glimpse into our garage and other areas of work
          </h1>

          <div className="flex h-72 w-full items-center justify-center bg-white text-black sm:h-80 md:h-96 lg:w-4/5">
            carousel of images and videos of our work and garage and other stuff
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
