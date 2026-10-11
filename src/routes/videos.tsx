import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, PageHero, RelatedPages } from "@/components/layout/site-shell";
import { VideoCard } from "@/components/video-card";
import { company } from "@/lib/content/company";
import { millVideos, youtubeChannel } from "@/lib/content/videos";

export const Route = createFileRoute("/videos")({
  component: VideosPage,
  head: () => ({
    meta: [
      { title: "Mill videos | ABM Trading Corporation" },
      {
        name: "description",
        content:
          "Watch ABM Trading Corporation leather films from the official YouTube channel — cow crust, goat, wet blue splits and finished articles from Bangladesh.",
      },
    ],
  }),
});

function VideosPage() {
  return (
    <main>
      <PageHero
        kicker="Videos"
        title="Leather on camera, from the same table we ship."
        lede={`${millVideos.length} public films from the ABM Trading Corporation YouTube channel. Watch them here — no leave for a third-party feed.`}
        crumbs={[{ label: "Videos" }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-sm text-muted">
          Channel:{" "}
          <a className="text-saddle hover:underline" href={youtubeChannel} target="_blank" rel="noreferrer">
            ABM Trading Corporation on YouTube
          </a>
          . LinkedIn has company posts and product lines, not embeddable films —{" "}
          <a className="text-saddle hover:underline" href={company.social.linkedin} target="_blank" rel="noreferrer">
            open the company page
          </a>
          .
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 sm:grid-cols-2">
        {millVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </section>

      <RelatedPages
        items={[
          { to: "/products", label: "Leather articles", text: "Match a film to a stocked article." },
          { to: "/gallery", label: "Gallery", text: "Still photography from the mill and table." },
          { to: "/contact", label: "Contact", text: "Send the brief after you watch." },
        ]}
      />
      <CtaBand />
    </main>
  );
}
