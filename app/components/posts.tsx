import Link from "next/link";
import { formatDate, getBlogPosts } from "@/writing/utils";

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <div>
      
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 group"
            href={`/writing/${post.slug}`}
          >
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:underline">
                {post.metadata.title}
              </p>
              <p className="text-neutral-600 text-sm dark:text-neutral-400 tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
          </Link>
        ))}
    </div>
  );
}
