import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href="/"
      className="flex h-20 w-28 shrink-0 items-center justify-center overflow-visible sm:h-24 sm:w-36"
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
        sizes="(min-width: 640px) 9rem, 7rem"
      />
    </Link>
  );
}

export default Logo;
