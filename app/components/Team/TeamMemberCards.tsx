"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent, RefObject } from "react";
import { useRef } from "react";
import { CgMail } from "react-icons/cg";
import { FaGear, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { PiDroneFill } from "react-icons/pi";

import type { TeamMember } from "@/app/data/teamData";
import { getGoogleDriveImageUrl } from "@/app/data/teamData";

type CardVariant = "atv" | "uav";

interface TeamMemberCardProps {
  variant: CardVariant;
  member: TeamMember;
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

function normalizeUrl(url: string) {
  const trimmedUrl = url.trim();

  if (!trimmedUrl) {
    return "";
  }

  if (trimmedUrl.includes("@") && !trimmedUrl.startsWith("http")) {
    return `mailto:${trimmedUrl}`;
  }

  if (trimmedUrl.startsWith("http://") || trimmedUrl.startsWith("https://")) {
    return trimmedUrl;
  }

  return `https://${trimmedUrl}`;
}

function TeamMemberCard({ variant, member }: TeamMemberCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const WatermarkIcon = variant === "atv" ? FaGear : PiDroneFill;
  const imageUrl = getGoogleDriveImageUrl(member.profileImage);
  const socialLinks = [
    {
      href: normalizeUrl(member.instagram),
      label: `${member.name} on Instagram`,
      icon: FaInstagram,
    },
    {
      href: normalizeUrl(member.linkedin),
      label: `${member.name} on LinkedIn`,
      icon: FaLinkedin,
    },
    {
      href: normalizeUrl(member.email),
      label: `Email ${member.name}`,
      icon: CgMail,
    },
  ].filter((link) => link.href);

  return (
    <div
      className="perspective-[1000px]"
      onMouseMove={(event) => updateTilt(event, cardRef)}
      onMouseLeave={() => resetTilt(cardRef)}
    >
      <div
        ref={cardRef}
        className="h-64 w-48 rounded-tl-2xl rounded-br-2xl bg-gradient-to-br from-zinc-900 to-black p-[2px] shadow-xl transition-all duration-200 ease-out"
      >
        <div className="relative h-full w-full overflow-hidden rounded-tl-2xl rounded-br-2xl border border-yellow-500/30 bg-zinc-800 p-2">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,120,255,0.15),transparent_60%)]" />
          <div className="absolute top-0 left-0 h-2 w-full bg-[repeating-linear-gradient(45deg,black_0px,black_6px,white_6px,white_12px)] opacity-30" />
          <WatermarkIcon className="absolute right-2 bottom-2 text-5xl text-white/5" />

          <div className="flex gap-2 p-2">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-tl-xl rounded-br-xl bg-zinc-950">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={`${member.name} profile photo`}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-brand-blue text-2xl font-heading text-white">
                  {member.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
              )}
            </div>

            <div className="flex flex-col justify-between space-y-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="rounded-tl-md rounded-br-md border bg-zinc-900 p-2 shadow-md transition-all duration-300 hover:bg-blue-500 hover:text-white"
                >
                  <Icon className="text-lg" />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-2 px-2 pb-2">
            <h1 className="rounded-md border-l-4 border-yellow-500 bg-zinc-900 px-2 py-1 text-xs uppercase tracking-wide">
              {member.name}
            </h1>

            <h2 className="rounded-md border-l-4 border-blue-500 bg-zinc-900 px-2 py-1 text-[11px] uppercase tracking-wider text-gray-300">
              {member.designation}
            </h2>
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_70%,rgba(255,255,0,0.08)_100%)]" />
        </div>
      </div>
    </div>
  );
}

export function ATVTeamMemberCard({ member }: { member: TeamMember }) {
  return <TeamMemberCard variant="atv" member={member} />;
}

export function UAVTeamMemberCard({ member }: { member: TeamMember }) {
  return <TeamMemberCard variant="uav" member={member} />;
}
