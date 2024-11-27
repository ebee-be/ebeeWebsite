<template>
  <ConfigProvider>
    <TooltipProvider>
      <NuxtRouteAnnouncer />
      <NuxtLoadingIndicator />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </TooltipProvider>
  </ConfigProvider>
</template>

<script setup lang="ts">
import "~/assets/css/global.css";

import Lenis from "lenis";
import config from "@/content/config.json";
import { ConfigProvider, TooltipProvider } from "radix-vue";

const appConfig = useAppConfig();
appConfig.ui.colors = Object.freeze({ ...appConfig.ui.colors, ...config.ui.colors });

useHead({
  htmlAttrs: {
    // TODO: Experiment with **scroll-pt-16**
    class: "scrollbar-hide lenis lenis-smooth"
  }
});

onMounted(() => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
});
</script>
