import articlesData from "@/data/writing.json";
import { fileURLToPath } from "url";
import { dirname } from "path";

export function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

const filename = fileURLToPath(import.meta.url)
console.log(filename)

const _curdir = dirname(filename)
console.log(_curdir)

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  return <h1>Writing {slug}</h1>;
}
