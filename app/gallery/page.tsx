import PageHeader from "../components/PageHeader";
import GalleryMasonryGrid from "../components/Gallery/GalleryMasonryGrid";
import { galleryPhotos, gallerySections } from "./galleryData";

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
            Hover over any image to reveal when it was captured, where it
            happened, and the small story behind the frame. Update the entries
            in <code>galleryData.ts</code> to swap in real photos and event
            details.
          </p>
          <div className="w-full rounded-tl-[3rem] rounded-br-[3rem] bg-brand-blue px-6 py-8 text-white shadow-lg sm:px-8 sm:py-10">
            <p className="mx-auto max-w-3xl text-sm leading-7 text-white/90 sm:text-base">
              The gallery follows the same simple brand language as the rest of
              the site, with a subtle motion layer to make each frame feel a
              little more tactile without pulling focus away from the content.
            </p>
          </div>
        </div>

        <GalleryMasonryGrid photos={galleryPhotos} sections={gallerySections} />
      </div>
    </section>
  );
}

export default Page;
