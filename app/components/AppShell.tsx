"use client";

import React from "react";
import { usePathname } from "next/navigation";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ClubTimelineDrawer from "./ClubTimelineDrawer";

interface AppShellProps {
  children: React.ReactNode;
}

function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const isStudioRoute = pathname.startsWith("/studio");
  const showClubTimelineDrawer =
    pathname === "/teams" ||
    pathname === "/teams/atv" ||
    pathname === "/teams/uav";

  if (isStudioRoute) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <div className="relative min-h-screen">
      <div aria-hidden="true" className="site-background" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        {showClubTimelineDrawer ? <ClubTimelineDrawer /> : null}
        <main className="grow pt-24 sm:pt-28 lg:pt-32">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default AppShell;
