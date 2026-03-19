import { error } from "@sveltejs/kit";
import { posts, getPostById, estimateReadingMinutes } from "$lib/blog/posts";
import { authors, getAuthorById } from "$lib/blog/authors";

export const load = async ({ params }) => {
  console.log("Loading blog post:", params.id);
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
    .filter((p) => p !== post && p.id !== post.id)
    .map((p) => ({
      ...p,
      coverUrl: p.cover ? getImgUrl(p.cover) : "",
    }))
    .slice(0, 3);

  // Зареждане на авторите
  const postAuthors = (post.authorIds || [])
    .map((id) => getAuthorById(id))
    .filter(Boolean);

  console.log("Returning data for post:", post.id);
  return {
    post,
    coverUrl,
    imageUrls,
    readingMin: estimateReadingMinutes(post),
    related,
    postAuthors,
  };
};
