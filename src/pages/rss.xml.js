import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("blog"))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: "邓珂律师 — 争议解决与公司法实务",
    description: "专注于民商事诉讼、合同纠纷、公司法务的专业法律文章。",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`,
      author: post.data.author,
      categories: post.data.tags,
    })),
    customData: `<language>zh-CN</language>`,
  });
}
