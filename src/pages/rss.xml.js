import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { metadata } from "../consts";
import { config } from "../consts";

export async function GET(context) {
  const posts = (await getCollection("blog", ({ data }) => data.draft !== true))
    .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

  return rss({
    title: "邓律师 — 知识产权与民商事争议解决",
    description: "专注于知识产权、民商事争议解决与公司法律事务的专业法律文章。",
    site: new URL(config.base, context.site),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `${config.base}/blog/${post.id}/`,
      categories: post.data.tag,
    })),
    customData: `<language>zh-CN</language>`,
  });
}
