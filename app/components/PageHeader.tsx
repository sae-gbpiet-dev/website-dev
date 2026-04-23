import React from "react";

interface PageHeaderProps {
  title: string;
}

function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="page-header-reveal flex w-full items-center justify-center gap-3 px-4 sm:gap-6 sm:px-6 lg:gap-12 lg:px-8">
      <div className="page-header-line page-header-line-left h-10 flex-1 border-t-[6px] border-b-[6px] border-brand-blue sm:h-12 sm:border-t-8 sm:border-b-8"></div>
      <div className="page-header-title-wrap flex h-10 items-center justify-center font-heading text-white sm:h-12">
        <h1
          data-text={title}
          className="page-header-title stroke-text relative text-center text-md md:text-2xl lg:text-4xl font-extrabold tracking-[0.25em] text-transparent"
        >
          {title}
        </h1>
      </div>
      <div className="page-header-line page-header-line-right h-10 flex-1 border-t-[6px] border-b-[6px] border-brand-gold sm:h-12 sm:border-t-8 sm:border-b-8"></div>
    </div>
  );
}

export default PageHeader;
