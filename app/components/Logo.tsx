import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href="/"
      className="flex h-14 w-20 shrink-0 items-center justify-center overflow-visible sm:h-16 sm:w-24"
      aria-label="SAE GBPIET home"
    >
      <Image
        src="/sae-logo.png"
        alt="SAE GBPIET"
        width={1000}
        height={1000}
        unoptimized
        priority
        className="h-full w-full scale-150 object-contain"
        sizes="(min-width: 640px) 6rem, 5rem"
      />
    </Link>
  );
}

export default Logo;
