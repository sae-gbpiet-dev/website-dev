import PageHeader from "@/app/components/PageHeader";
import React from "react";
import { UAVTeamMemberCard } from "@/app/components/Team/TeamMemberCards";

function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <PageHeader title="UAV" />

      <div className="flex w-full flex-col items-center justify-center space-y-12 px-4 py-6 sm:px-6 lg:space-y-16 lg:px-8">
        <h1 className="text-center text-base lg:text-xl">
          Some text about UAV page or something else{" "}
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

            <div className="flex w-full items-center justify-center pt-6"></div>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="font-heading text-2xl text-center">TEAM MEMBERS</h1>
          <p className="text-lg text-center">meet our team</p>
        </div>
        <div className="grid w-full max-w-7xl grid-cols-[repeat(auto-fit,minmax(176px,1fr))] justify-items-center gap-6 sm:gap-8">
          <UAVTeamMemberCard />

          <UAVTeamMemberCard />

          <UAVTeamMemberCard />
          <UAVTeamMemberCard />
          <UAVTeamMemberCard />

          <UAVTeamMemberCard />

          <UAVTeamMemberCard />
          <UAVTeamMemberCard />
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
