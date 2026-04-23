import React from "react";
import PageHeader from "../components/PageHeader";

function page() {
  return (
    <div className="flex flex-col items-center space-y-8">
      <PageHeader title="OUR PEOPLE" />

      <h1 className="text-center text-lg">
        Some text about the people in the club
      </h1>

      <div className="flex w-full flex-col items-center justify-center ">
        <div className="text-center space-y-6 w-full flex flex-col items-center justify-center">
          <h1 className="text-2xl font-heading">FACULTY</h1>
          <p>Some text about the faculty stuff</p>

          <div className="h-96 w-2/3 bg-white flex justify-center items-center">
            faculty carousel
          </div>
          <div className="p-10 space-y-8 w-full flex flex-col items-center justify-center">
            <h1 className=" font-heading text-center text-xl">
              Meet our faculties
            </h1>
            <div className="grid w-2/3 grid-cols-3 gap-8 place-items-center">
              <div className="w-full overflow-hidden rounded-tl-[4rem] bg-brand-gold pt-4 pl-4 sm:pt-5 sm:pl-5">
                <div className="flex justify-end pr-4 sm:pr-5 ">
                  <h2 className="font-heading text-sm text-brand-dark sm:text-base">
                    Dr. Name 1
                  </h2>
                </div>
                <div className="mt-4 h-72 w-full z-10  transition-all duration-500 rounded-tl-[4rem] bg-brand-blue sm:h-96 lg:h-[20rem]" />
              </div>
              <div className="w-full overflow-hidden rounded-tl-[4rem] bg-brand-gold pt-4 pl-4 sm:pt-5 sm:pl-5">
                <div className="flex justify-end pr-4 sm:pr-5 ">
                  <h2 className="font-heading text-sm text-brand-dark sm:text-base">
                    Mr. name 2
                  </h2>
                </div>
                <div className="mt-4 h-72 w-full z-10  transition-all duration-500 rounded-tl-[4rem] bg-brand-blue sm:h-96 lg:h-[20rem]" />
              </div>
              <div className="w-full overflow-hidden rounded-tl-[4rem] bg-brand-gold pt-4 pl-4 sm:pt-5 sm:pl-5">
                <div className="flex justify-end pr-4 sm:pr-5 ">
                  <h2 className="font-heading text-sm text-brand-dark sm:text-base">
                    Mr. Name 3
                  </h2>
                </div>
                <div className="mt-4 h-72 w-full z-10  transition-all duration-500 rounded-tl-[4rem] bg-brand-blue sm:h-96 lg:h-[20rem]" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center space-y-6 w-full flex flex-col items-center justify-center">
          <h1 className="text-2xl font-heading">MEMBERS</h1>
          <p>Some text about the members</p>

          <div className="h-96 w-2/3 bg-white flex justify-center items-center">
            members carousel
          </div>
          <div className="p-10 space-y-8 w-full flex flex-col items-center justify-center">
            <h1 className=" font-heading text-center text-xl">
              Meet our members
            </h1>
            <div className="grid w-2/3 grid-cols-3 gap-8 place-items-center">
              <div className="w-full overflow-hidden rounded-tl-[4rem] bg-brand-gold pt-4 pl-4 sm:pt-5 sm:pl-5">
                <div className="flex justify-end pr-4 sm:pr-5 ">
                  <h2 className="font-heading text-sm text-brand-dark sm:text-base">
                    Dr. Name 1
                  </h2>
                </div>
                <div className="mt-4 h-72 w-full z-10  transition-all duration-500 rounded-tl-[4rem] bg-brand-blue sm:h-96 lg:h-[20rem]" />
              </div>
              <div className="w-full overflow-hidden rounded-tl-[4rem] bg-brand-gold pt-4 pl-4 sm:pt-5 sm:pl-5">
                <div className="flex justify-end pr-4 sm:pr-5 ">
                  <h2 className="font-heading text-sm text-brand-dark sm:text-base">
                    Mr. name 2
                  </h2>
                </div>
                <div className="mt-4 h-72 w-full z-10  transition-all duration-500 rounded-tl-[4rem] bg-brand-blue sm:h-96 lg:h-[20rem]" />
              </div>
              <div className="w-full overflow-hidden rounded-tl-[4rem] bg-brand-gold pt-4 pl-4 sm:pt-5 sm:pl-5">
                <div className="flex justify-end pr-4 sm:pr-5 ">
                  <h2 className="font-heading text-sm text-brand-dark sm:text-base">
                    Mr. Name 3
                  </h2>
                </div>
                <div className="mt-4 h-72 w-full z-10  transition-all duration-500 rounded-tl-[4rem] bg-brand-blue sm:h-96 lg:h-[20rem]" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6 w-full flex flex-col items-center justify-center">
          <h1 className="text-2xl font-heading">ALUMNI</h1>
          <p>Some text about the alumni</p>

          <div className="h-96 w-2/3 bg-white flex justify-center items-center">
            alumni carousel
          </div>
          <div className="p-10 space-y-8 w-full flex flex-col items-center justify-center">
            <h1 className=" font-heading text-center text-xl">
              Meet our alumni
            </h1>
            <div className="grid w-2/3 grid-cols-3 gap-8 place-items-center">
              <div className="w-full overflow-hidden rounded-tl-[4rem] bg-brand-gold pt-4 pl-4 sm:pt-5 sm:pl-5">
                <div className="flex justify-end pr-4 sm:pr-5 ">
                  <h2 className="font-heading text-sm text-brand-dark sm:text-base">
                    Dr. Name 1
                  </h2>
                </div>
                <div className="mt-4 h-72 w-full z-10  transition-all duration-500 rounded-tl-[4rem] bg-brand-blue sm:h-96 lg:h-[20rem]" />
              </div>
              <div className="w-full overflow-hidden rounded-tl-[4rem] bg-brand-gold pt-4 pl-4 sm:pt-5 sm:pl-5">
                <div className="flex justify-end pr-4 sm:pr-5 ">
                  <h2 className="font-heading text-sm text-brand-dark sm:text-base">
                    Mr. name 2
                  </h2>
                </div>
                <div className="mt-4 h-72 w-full z-10  transition-all duration-500 rounded-tl-[4rem] bg-brand-blue sm:h-96 lg:h-[20rem]" />
              </div>
              <div className="w-full overflow-hidden rounded-tl-[4rem] bg-brand-gold pt-4 pl-4 sm:pt-5 sm:pl-5">
                <div className="flex justify-end pr-4 sm:pr-5 ">
                  <h2 className="font-heading text-sm text-brand-dark sm:text-base">
                    Mr. Name 3
                  </h2>
                </div>
                <div className="mt-4 h-72 w-full z-10  transition-all duration-500 rounded-tl-[4rem] bg-brand-blue sm:h-96 lg:h-[20rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
