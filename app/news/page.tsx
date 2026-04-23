import React from "react";
import PageHeader from "../components/PageHeader";
import NewsBar from "../components/News/NewsBar";
import { formatNewsDate, getNewsItems, getNewsPrimaryAction } from "@/lib/news";

async function page() {
  const newsItems = await getNewsItems();

  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader title="NEWS" />

      <section className="flex flex-1 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:gap-8">
          {newsItems.map((item) => {
            const action = getNewsPrimaryAction(item);

            return (
              <NewsBar
                key={item._id}
                date={formatNewsDate(item.publishedAt)}
                title={item.title}
                subtitle={item.excerpt}
                actionLabel={action.label}
                openHref={action.href}
                openExternal={action.isExternal}
                downloadHref={item.downloadUrl}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default page;
