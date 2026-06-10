import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://dklawyer.top",
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.startsWith("https://dklawyer.top/admin"),
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
});
