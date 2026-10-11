import type { MillVideo } from "@/lib/content/videos";

export function VideoCard({ video }: { video: MillVideo }) {
  return (
    <article className="overflow-hidden rounded-lg bg-paper shadow-[var(--shadow-border)]">
      <div className="aspect-video bg-ink">
        <iframe
          title={video.title}
          className="size-full"
          src={`https://www.youtube-nocookie.com/embed/${video.id}`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-muted">
          <span>{video.article}</span>
          <span aria-hidden>·</span>
          <span>{video.year}</span>
          <span aria-hidden>·</span>
          <span>{video.duration}</span>
        </div>
        <h3 className="mt-2 font-display text-xl font-semibold text-ink">{video.title}</h3>
        <p className="mt-2 text-sm text-muted">{video.summary}</p>
      </div>
    </article>
  );
}
