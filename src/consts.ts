/**
 * Site configuration for 邓律师 (dklawyer.top)
 */
export const metadata = {
  title: "邓律师 — 知识产权与民商事争议解决",
  description:
    "专注于知识产权、民商事争议解决与公司法律事务，提供专业法律分析与案件代理服务。",
  keywords: "律师, 知识产权, 民商事诉讼, 公司法, 争议解决, 法律分析",
  robots: "index, follow",
  author: "邓律师",
  image: "/images/site-image.jpg",
  type: "website" as const,
};

export const config = {
  url: "https://dklawyer.top",
  base: "",
  postsPerPage: 6,
};

export const analytics = {
  plausible: {
    domain: "",
    apiHost: "",
  },
  google: {
    id: "",
  },
};

export const locale = {
  default: "zh-CN",
  date: {
    locale: "zh-CN",
    options: {
      year: "numeric",
      month: "long",
      day: "numeric",
    } as Intl.DateTimeFormatOptions,
  },
};
