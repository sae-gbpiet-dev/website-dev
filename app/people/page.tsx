import PageHeader from "../components/PageHeader";
import {
  ATVTeamMemberCard,
  UAVTeamMemberCard,
} from "../components/Team/TeamMemberCards";
import {
  leadershipMembers,
  mediaMembers,
  teamMembers,
  tsrMembers,
  uavMembers,
} from "../data/teamData";

const peopleSections = [
  {
    title: "Leadership",
    description:
      "Club and subsystem leads guiding the season across TSR, UAV, media, and operations.",
    members: leadershipMembers,
    variant: "atv",
  },
  {
    title: "Team Savitar Racing",
    description:
      "The ATV crew handling vehicle dynamics, fabrication, driving, management, and competition work.",
    members: tsrMembers,
    variant: "atv",
  },
  {
    title: "UAV",
    description:
      "The aerial systems group working on flight, payload, testing, and hands-on aerospace projects.",
    members: uavMembers,
    variant: "uav",
  },
  {
    title: "Media",
    description:
      "The people documenting the build season, competitions, workshops, and public presence of the club.",
    members: mediaMembers,
    variant: "atv",
  },
] as const;

function Page() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10">
        <PageHeader title="OUR PEOPLE" />

        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 text-center text-white">
          <p className="font-heading text-xs uppercase tracking-[0.35em] text-brand-gold">
            The Build Crew
          </p>
          <h1 className="text-3xl font-heading sm:text-4xl">
            {teamMembers.length} members across TSR, UAV, and media.
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
            Meet the students turning designs, workshops, tests, and competition
            pressure into a working engineering season.
          </p>
        </div>

        <div className="flex w-full flex-col gap-14">
          {peopleSections.map((section) => (
            <section key={section.title} className="flex w-full flex-col gap-6">
              <div className="flex flex-col gap-3 text-center text-white">
                <h2 className="font-heading text-2xl">{section.title}</h2>
                <p className="mx-auto max-w-3xl text-sm leading-7 text-zinc-300">
                  {section.description}
                </p>
              </div>

              <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(192px,1fr))] justify-items-center gap-6 sm:gap-8">
                {section.members.map((member) =>
                  section.variant === "uav" ? (
                    <UAVTeamMemberCard
                      key={`${section.title}-${member.email}-${member.name}`}
                      member={member}
                    />
                  ) : (
                    <ATVTeamMemberCard
                      key={`${section.title}-${member.email}-${member.name}`}
                      member={member}
                    />
                  ),
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Page;
