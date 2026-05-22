import { getBlogPosts } from "@/writing/utils";

export const baseUrl = "https://kofi-kusi.me";
export const dynamic = "force-static";

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/writing/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ["", "/writing"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
