import AchievementsSection from "./components/Home/AchievementsSection";
import ContactSection from "./components/Home/ContactSection";
import ContributeSection from "./components/Home/ContributeSection";
import LandingSection from "./components/Home/LandingSection";
import OurTeamsSection from "./components/Home/OurTeamsSection";
import SponsorsSection from "./components/Home/SponsorsSection";
import WhatDrivesUsSection from "./components/Home/WhatDrivesUsSection";
import WhoAreWeSection from "./components/Home/WhoAreWeSection";

export default function HomePage() {
  return (
    <div className="space-y-12 px-4 py-6 text-foreground sm:space-y-16 sm:px-6 lg:space-y-20 lg:px-8">
      <LandingSection/>
      <WhoAreWeSection/>
      <WhatDrivesUsSection/>
      <OurTeamsSection/>
      <AchievementsSection/>
      <ContributeSection/>
      <SponsorsSection/>
      <ContactSection/>
    </div>
  );
}
