import { resolve } from "node:path";
import type { LocaleObject } from "@nuxtjs/i18n";

import CONFIG from "./app/content/config.json";

const locales = CONFIG.locales as LocaleObject[];

export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },

  modules: ["@nuxt/ui", "@nuxtjs/i18n", "@nuxt/content", "nuxt-svgo", "@nuxthub/core"],
  icon: {
    mode: "svg",
    customCollections: [{ dir: "app/assets/icons", prefix: "local" }]
  },
  fonts: {
    experimental: { processCSSVariables: true }
  },
  colorMode: {
    classSuffix: "",
    disableTransition: true
  },
  i18n: {
    locales,
    restructureDir: false,
    strategy: "no_prefix",
    defaultLocale: "en-US",
    detectBrowserLanguage: {
      useCookie: true
    }
  },
  content: {
    ignores: ["translations.json"],
    defaultLocale: "en-US",
    sources: {
      content: {
        driver: "fs",
        base: resolve(__dirname, "app/content")
      }
    }
  }
});
