import PageHeader from "../components/PageHeader";
import GalleryMasonryGrid from "../components/Gallery/GalleryMasonryGrid";
import { galleryPhotos, gallerySections } from "./galleryData";
import { getGoogleDrivePreviewUrl, teamVideos } from "../data/teamData";

function Page() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full flex-col gap-10 sm:gap-12">
        <PageHeader title="GALLERY" />

        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-5 text-center text-white">
          <p className="font-heading text-xs uppercase tracking-[0.35em] text-brand-gold">
            Workshop To Trackside
          </p>
          <h2 className="text-3xl font-heading sm:text-4xl">
            Moments built by the team, captured in motion.
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
            Explore inductions, workshops, competitions, launches, and team
            events from the SAE GBPIET calendar.
          </p>
          <div className="w-full rounded-tl-[3rem] rounded-br-[3rem] bg-brand-blue px-6 py-8 text-white shadow-lg sm:px-8 sm:py-10">
            <p className="mx-auto max-w-3xl text-sm leading-7 text-white/90 sm:text-base">
              Hover over a frame to see the event, season, venue, and a short
              note about what was happening behind the shot.
            </p>
          </div>
        </div>

        <GalleryMasonryGrid photos={galleryPhotos} sections={gallerySections} />

        <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pb-10 sm:px-6 lg:px-8">
          <div className="space-y-3 text-center text-white">
            <p className="font-heading text-xs uppercase tracking-[0.35em] text-brand-gold">
              Video Archive
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl">
              Team films and event reels.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {teamVideos.map((video) => (
              <article key={video.title} className="flex flex-col gap-3">
                <h3 className="font-heading text-lg text-white">
                  {video.title}
                </h3>
                <div className="aspect-video overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] border border-brand-gold bg-black shadow-xl">
                  <iframe
                    title={video.title}
                    src={getGoogleDrivePreviewUrl(video.videoUrl)}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Page;
