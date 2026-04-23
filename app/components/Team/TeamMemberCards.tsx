"use client";

import Image from "next/image";
import type { MouseEvent, RefObject } from "react";
import { useRef } from "react";
import { CgMail } from "react-icons/cg";
import { FaGear, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { PiDroneFill } from "react-icons/pi";

type CardVariant = "atv" | "uav";

interface TeamMemberCardProps {
  variant: CardVariant;
}

function updateTilt(
  event: MouseEvent<HTMLDivElement>,
  cardRef: RefObject<HTMLDivElement | null>,
) {
  const card = cardRef.current;

  if (!card) {
    return;
  }

  const rect = card.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = -(y - centerY) / 10;
  const rotateY = (x - centerX) / 10;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
}

function resetTilt(cardRef: RefObject<HTMLDivElement | null>) {
  const card = cardRef.current;

  if (!card) {
    return;
  }

  card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
}

function TeamMemberCard({ variant }: TeamMemberCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const WatermarkIcon = variant === "atv" ? FaGear : PiDroneFill;

  return (
    <div
      className="perspective-[1000px]"
      onMouseMove={(event) => updateTilt(event, cardRef)}
      onMouseLeave={() => resetTilt(cardRef)}
    >
      <div
        ref={cardRef}
        className="h-56 w-44 rounded-tl-2xl rounded-br-2xl bg-gradient-to-br from-zinc-900 to-black p-[2px] shadow-xl transition-all duration-200 ease-out"
      >
        <div className="relative h-full w-full overflow-hidden rounded-tl-2xl rounded-br-2xl border border-yellow-500/30 bg-zinc-800 p-2">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,120,255,0.15),transparent_60%)]" />
          <div className="absolute top-0 left-0 h-2 w-full bg-[repeating-linear-gradient(45deg,black_0px,black_6px,white_6px,white_12px)] opacity-30" />
          <WatermarkIcon className="absolute right-2 bottom-2 text-5xl text-white/5" />

          <div className="flex gap-2 p-2">
            <Image
              src="/assets/images/atv-team-member-placeholder.png"
              alt="team member"
              width={110}
              height={110}
              className="rounded-tl-xl rounded-br-xl object-cover"
            />

            <div className="flex flex-col justify-between space-y-2">
              {[FaInstagram, FaLinkedin, CgMail].map((Icon, index) => (
                <div
                  key={index}
                  className="cursor-pointer rounded-tl-md rounded-br-md border bg-zinc-900 p-2 shadow-md transition-all duration-300 hover:bg-blue-500 hover:text-white"
                >
                  <Icon className="text-lg" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2 px-2 pb-2">
            <h1 className="rounded-md border-l-4 border-yellow-500 bg-zinc-900 px-2 py-1 text-xs uppercase tracking-wide">
              Mr. Full Name
            </h1>

            <h2 className="rounded-md border-l-4 border-blue-500 bg-zinc-900 px-2 py-1 text-[11px] uppercase tracking-wider text-gray-300">
              Designation
            </h2>
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_70%,rgba(255,255,0,0.08)_100%)]" />
        </div>
      </div>
    </div>
  );
}

export function ATVTeamMemberCard() {
  return <TeamMemberCard variant="atv" />;
}

export function UAVTeamMemberCard() {
  return <TeamMemberCard variant="uav" />;
}
