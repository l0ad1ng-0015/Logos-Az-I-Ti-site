import { error } from "@sveltejs/kit";
import { posts, getPostById, estimateReadingMinutes } from "$lib/blog/posts";
import { authors, getAuthorById } from "$lib/blog/authors";

export const load = async ({ params }) => {
  const post = getPostById(params.id);
  if (!post) throw error(404, "Статията не е намерена");

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

  const coverUrl = post.cover ? getImgUrl(post.cover) : "";
  const imageUrls = (post.images || [])
    .map((f) => ({ filename: f, url: getImgUrl(f) }))
    .filter((x) => x.url);

  // Още статии (по общи тагове)
  const related = posts
    .filter((p) => p.id !== post.id)
    .map((p) => {
      const a = new Set(post.keywords || []);
      const b = new Set(p.keywords || []);
      const common = [...a].filter((x) => b.has(x)).length;
      return { ...p, common, coverUrl: p.cover ? getImgUrl(p.cover) : "" };
    })
    .filter((p) => p.common > 0)
    .sort((x, y) => y.common - x.common)
    .slice(0, 3);

  // Зареждане на авторите
  const postAuthors = (post.authorIds || []).map(id => getAuthorById(id)).filter(Boolean);

  return {
    post,
    coverUrl,
    imageUrls,
    readingMin: estimateReadingMinutes(post),
    related,
    postAuthors,
  };
};
