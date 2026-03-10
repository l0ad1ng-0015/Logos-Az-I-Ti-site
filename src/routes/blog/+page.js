import { posts, estimateReadingMinutes } from "$lib/blog/posts";

export const load = async () => {
  // снимки (като при ресурсите)
  const imgs = import.meta.glob("/src/lib/blog/images/*", {
    eager: true,
    as: "url",
  });

  const getImgUrl = (filename) => {
    const entry = Object.entries(imgs).find(([path]) =>
      path.endsWith(filename),
    );
    return entry ? entry[1] : "";
  };

  const items = [...posts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((p) => ({
      ...p,
      coverUrl: p.cover ? getImgUrl(p.cover) : "",
      readingMin: estimateReadingMinutes(p),
    }));

  // тагове за филтъра
  const tagsSet = new Set();
  items.forEach((p) => (p.keywords || []).forEach((k) => tagsSet.add(k)));
  const allTags = Array.from(tagsSet).sort((a, b) => a.localeCompare(b, "bg"));

  return { items, allTags };
};
