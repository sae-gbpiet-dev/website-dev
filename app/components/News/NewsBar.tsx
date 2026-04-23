import React from "react";
import { IoCalendar } from "react-icons/io5";
import { MdDownload } from "react-icons/md";
import Link from "next/link";

interface NewsBarProps {
  date: string;
  title: string;
  subtitle: string;
  actionLabel?: string;
  openHref?: string;
  openExternal?: boolean;
  downloadHref?: string;
}

function NewsBar({
  date,
  title,
  subtitle,
  actionLabel = "OPEN",
  openHref,
  openExternal = false,
  downloadHref,
}: NewsBarProps) {
  const actionClassName =
    "rounded-tl-xl rounded-br-xl bg-brand-gold px-3 py-2 font-heading text-xs text-black transition-all duration-500 hover:border-2 hover:border-brand-gold hover:bg-brand-dark hover:text-white";

  return (
    <article className="flex w-full flex-col gap-4 rounded-tl-4xl rounded-br-4xl bg-brand-blue p-4 text-white shadow-md transition-transform duration-500 hover:scale-[1.02] sm:p-5 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
      <div className="flex w-fit min-w-[10.5rem] items-center justify-center rounded-tl-2xl rounded-br-2xl bg-brand-gold px-4 py-3">
        <h2 className="flex items-center justify-center gap-2 text-center font-heading text-[0.7rem] text-black sm:text-xs">
          <IoCalendar size={18} />
          {date}
        </h2>
      </div>

      <div className="min-w-0 flex-1 space-y-2">
        <h3 className="font-heading text-base leading-snug sm:text-lg">{title}</h3>
        <p className="text-xs leading-relaxed sm:text-sm">{subtitle}</p>
      </div>

      <div className="flex flex-wrap items-center gap-3 self-start lg:self-end">
        {openExternal ? (
          <a
            href={openHref ?? "#"}
            target="_blank"
            rel="noreferrer"
            className={actionClassName}
          >
            {actionLabel}
          </a>
        ) : (
          <Link href={openHref ?? "#"} className={actionClassName}>
            {actionLabel}
          </Link>
        )}

        {downloadHref ? (
          <a
            href={downloadHref}
            aria-label={`Download ${title}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-tl-xl rounded-br-xl bg-brand-gold px-2 py-2 text-sm text-black transition-all duration-500 hover:border-2 hover:border-brand-gold hover:bg-brand-dark hover:text-white"
          >
            <MdDownload size={20} />
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default NewsBar;
