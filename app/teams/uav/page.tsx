import Image from "next/image";

import PageHeader from "@/app/components/PageHeader";
import { UAVTeamMemberCard } from "@/app/components/Team/TeamMemberCards";
import {
  getGoogleDrivePreviewUrl,
  teamVideos,
  uavMembers,
} from "@/app/data/teamData";
import { galleryPhotos } from "@/app/gallery/galleryData";

const uavVideos = teamVideos.filter((video) => video.group === "uav");
const uavPhotos = galleryPhotos
  .filter((photo) => photo.category === "uav")
  .slice(0, 6);

function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <PageHeader title="UAV" />

      <div className="flex w-full flex-col items-center justify-center space-y-12 px-4 py-6 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-4 text-center text-white">
          <p className="font-heading text-xs uppercase tracking-[0.35em] text-brand-gold">
            Aerial Systems
          </p>
          <h1 className="text-2xl font-heading sm:text-4xl">
            Designing and testing practical flight projects.
          </h1>
          <p className="text-sm leading-7 text-zinc-300 sm:text-base">
            The UAV group works on flight fundamentals, hands-on testing,
            systems integration, and event demonstrations that turn aerospace
            curiosity into working prototypes.
          </p>
        </div>

        <div className="flex w-full max-w-7xl flex-col overflow-hidden lg:min-h-[28rem] lg:flex-row">
          <div className="flex w-full items-center bg-brand-gold p-6 text-brand-dark sm:p-8 lg:w-1/2">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl">From Launch To Learning</h2>
              <p className="leading-7">
                Water Rocket and UAV activities give the team a direct path from
                classroom ideas to flight testing, iteration, and public
                demonstrations.
              </p>
            </div>
          </div>
          <div className="grid w-full gap-4 bg-brand-blue p-6 sm:p-8 lg:w-1/2 lg:p-10">
            {uavPhotos.slice(0, 2).map((photo) => (
              <div
                key={photo.id}
                className="relative min-h-56 overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] bg-zinc-900"
              >
                {photo.imageUrl && (
                  <Image
                    src={photo.imageUrl}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <section className="grid w-full max-w-7xl gap-6 lg:grid-cols-2">
          {uavVideos.map((video) => (
            <div key={video.title} className="flex flex-col gap-4 text-center">
              <h2 className="font-heading text-xl">{video.title}</h2>
              <div className="aspect-video overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] border border-brand-gold bg-black shadow-xl">
                <iframe
                  title={video.title}
                  src={getGoogleDrivePreviewUrl(video.videoUrl)}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
          ))}
        </section>

        <div className="space-y-3">
          <h2 className="font-heading text-2xl text-center">TEAM MEMBERS</h2>
          <p className="text-center text-zinc-300">Meet the UAV team</p>
        </div>
        <div className="grid w-full max-w-7xl lg:grid-cols-6 grid-cols-2 justify-items-center gap-4 sm:gap-8">
          {uavMembers.map((member) => (
            <UAVTeamMemberCard
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
            A glimpse into launch days, demos, and flight-focused team moments.
          </p>

          <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {uavPhotos.map((photo) => (
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
