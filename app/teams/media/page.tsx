import Image from "next/image";

import PageHeader from "@/app/components/PageHeader";
import { MEDIATeamMemberCard} from "@/app/components/Team/TeamMemberCards";
import { galleryPhotos } from "@/app/gallery/galleryData";
import {
  getGoogleDrivePreviewUrl,
  teamVideos,
  mediaMembers,
} from "@/app/data/teamData";

const mediaVideos = teamVideos.filter((video) => video.group === "media");
const mediaPhotos = galleryPhotos
  .filter((photo) => photo.category === "media")
  .slice(0, 6);

function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <PageHeader title="MEDIA" />

      <div className="flex w-full flex-col items-center justify-center space-y-12 px-4 py-6 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-4 text-center text-white">
          <p className="font-heading text-xs uppercase tracking-[0.35em] text-brand-gold">
            Media Team
          </p>
          <h1 className="text-2xl font-heading sm:text-4xl">
            From high-octane events, the Media Team captures the essence of SAE's projects and competitions.
          </h1>
          <p className="text-sm leading-7 text-zinc-300 sm:text-base">
            Capturing the spirit of innovation and speed, the Media Club shapes SAE's visual identity through striking photography, cinematic videography, and compelling promotional designs.
          </p>
        </div>

        <div className="flex w-full max-w-7xl flex-col overflow-hidden lg:h-[35rem] lg:flex-row">
          <div className="flex w-full items-center bg-brand-gold p-6 text-brand-dark sm:p-8 lg:h-full lg:w-1/2">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl">CREATION AND CREATIVITY</h2>
              <p className="leading-7">
                The Media Team works through design reviews, photography, videography,
                and promotional design to capture the essence of SAE's projects and competitions.
              </p>
            </div>
          </div>
           <div className="grid w-full gap-4 bg-brand-blue p-6 sm:p-8 lg:w-1/2 lg:p-10">
                      {mediaPhotos.slice(0, 2).map((photo) => (
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
                 {mediaVideos.map((video) => (
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
                 <p className="text-center text-zinc-300">Meet the MEDIA team</p>
               </div>
               <div className="grid w-full max-w-7xl lg:grid-cols-6 grid-cols-2 justify-items-center gap-4 sm:gap-8">
                 {mediaMembers.map((member) => (
                   <MEDIATeamMemberCard
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
                   A glimpse into behind-the-scenes moments, high-energy edits, and the media team in action.
                 </p>
       
                 <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                   {mediaPhotos.map((photo) => (
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
