import Image from "next/image";

import PageHeader from "@/app/components/PageHeader";
import { ATVTeamMemberCard } from "@/app/components/Team/TeamMemberCards";
import { galleryPhotos } from "@/app/gallery/galleryData";
import {
  getGoogleDrivePreviewUrl,
  teamVideos,
  tsrMembers,
} from "@/app/data/teamData";

const tsrVideos = teamVideos.filter((video) => video.group === "tsr");
const atvPhotos = galleryPhotos
  .filter((photo) => photo.category === "atv")
  .slice(0, 6);

function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <PageHeader title="ATV" />

      <div className="flex w-full flex-col items-center justify-center space-y-12 px-4 py-6 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-4 text-center text-white">
          <p className="font-heading text-xs uppercase tracking-[0.35em] text-brand-gold">
            Team Savitar Racing
          </p>
          <h1 className="text-2xl font-heading sm:text-4xl">
            Building, testing, and racing the club ATV platform.
          </h1>
          <p className="text-sm leading-7 text-zinc-300 sm:text-base">
            TSR brings together vehicle dynamics, steering, fabrication,
            management, drivers, and competition operations for the SAE BAJA
            season.
          </p>
        </div>

        <div className="flex w-full max-w-7xl flex-col overflow-hidden lg:h-[35rem] lg:flex-row">
          <div className="flex w-full items-center bg-brand-gold p-6 text-brand-dark sm:p-8 lg:h-full lg:w-1/2">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl">Built For BAJA</h2>
              <p className="leading-7">
                The ATV team works through design reviews, CAD, fabrication,
                tuning, driver practice, and competition readiness with each
                season focused on closing the gap between prototype and podium.
              </p>
            </div>
          </div>
          <div className="w-full bg-brand-blue p-6 sm:p-8 lg:h-full lg:w-1/2 lg:p-10">
            <h2 className="text-center text-lg font-heading sm:text-xl">
              MEET THE ATV
            </h2>

            <div className="flex w-full items-center justify-center pt-6">
              <iframe
                title="Baja SAE Buggy"
                src="https://sketchfab.com/models/de0a08f773fe43e1b442d01ef5dfa670/embed"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                allowFullScreen
                className="h-[320px] w-full rounded-xl shadow-lg sm:h-[420px] md:h-[500px] lg:h-full lg:min-h-[420px]"
              />
            </div>
          </div>
        </div>

        {tsrVideos.map((video) => (
          <section
            key={video.title}
            className="flex w-full max-w-7xl flex-col items-center gap-6 text-center"
          >
            <h2 className="stroke-text relative max-w-full px-6 text-center font-heading text-sm font-extrabold tracking-[0.12em] text-transparent sm:text-lg sm:tracking-[0.18em] md:text-2xl md:tracking-[0.22em] lg:text-4xl lg:tracking-[0.25em]">
              {video.title}
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] border border-brand-gold bg-black shadow-xl lg:w-4/5">
              <iframe
                title={video.title}
                src={getGoogleDrivePreviewUrl(video.videoUrl)}
                allow="autoplay; fullscreen"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </section>
        ))}

        <div className="space-y-3">
          <h2 className="font-heading text-2xl text-center">TEAM MEMBERS</h2>
          <p className="text-center text-zinc-300">Meet Team Savitar Racing</p>
        </div>
        <div className="grid w-full max-w-7xl grid-cols-2 lg:grid-cols-6 justify-items-center gap-6 sm:gap-8 lg:gap-10">
          {tsrMembers.map((member) => (
            <ATVTeamMemberCard
              key={`${member.email}-${member.name}`}
              member={member}
            />
          ))}
        </div>

        <div className="flex w-full max-w-7xl flex-col items-center justify-center space-y-6">
          <h2 className="text-center font-heading text-3xl sm:text-4xl">
            Take a peek
          </h2>
          <p className="text-center text-sm leading-7 text-zinc-300 sm:text-base">
            A glimpse into BAJA competition frames and the ATV team in motion.
          </p>

          <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {atvPhotos.map((photo) => (
              <div
                key={photo.id}
                className="relative aspect-[4/3] overflow-hidden rounded-tl-[2rem] rounded-br-[2rem] bg-zinc-900"
              >
                {photo.imageUrl && (
                  <Image
                    src={photo.imageUrl}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
