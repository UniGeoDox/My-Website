import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

function toInt(value: string | null, fallback: number) {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : fallback;
}

function toTime(d: unknown): number {
  if (d instanceof Date) return d.getTime();
  if (typeof d === "string") {
    const t = new Date(d).getTime();
    return Number.isFinite(t) ? t : 0;
  }
  return 0;
}

export const GET: APIRoute = async ({ url }) => {
  const page = Math.max(1, toInt(url.searchParams.get("page"), 1));
  const limit = Math.min(Math.max(1, toInt(url.searchParams.get("limit"), 10)), 50);

  const posts = await getCollection("blog");

  const published = posts
    .filter((p) => !p.data.draft)
    .sort((a, b) => toTime(b.data.date) - toTime(a.data.date));

  const mapped = published.map((p) => ({
    title: p.data.title ?? p.slug,
    date: p.data.date ?? null,
    summary: p.data.summary ?? "",
    cover: p.data.cover ?? null,
    url: `/blog/${p.slug}/`,
  }));

  const start = (page - 1) * limit;
  const end = start + limit;

  return new Response(
    JSON.stringify({
      page,
      limit,
      total: mapped.length,
      hasMore: end < mapped.length,
      items: mapped.slice(start, end),
    }),
    { headers: { "Content-Type": "application/json" } }
  );
};
