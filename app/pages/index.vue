<template>
  <HomeHero v-bind="data?.hero" />
  <TechStacks v-if="data?.techStacks" v-bind="data.techStacks" />
  <Features v-if="data?.features" v-bind="data.features" />
  <Services v-if="data?.services" v-bind="data.services" />
  <Testimonials v-if="data?.testimonials" v-bind="data.testimonials" />
  <FAQ v-if="data?.faq" v-bind="data.faq" />
  <CTA v-if="data?.cta" v-bind="data.cta" />
</template>

<script setup lang="ts">
import NavBar from "~/components/sections/navbar/NavBar.vue";
import Footer from "~/components/sections/footer/Footer.vue";

import HomeHero from "~/components/pages/homepage/HomeHero.vue";
import TechStacks from "~/components/pages/homepage/TechStacks.vue";
import Features from "~/components/pages/homepage/Features.vue";
import Services from "~/components/pages/homepage/Services.vue";
import Testimonials from "~/components/pages/homepage/Testimonials.vue";
import CTA from "~/components/pages/homepage/CTA.vue";
import FAQ from "~/components/pages/homepage/FAQ.vue";

definePageMeta({ layout: "default" });

const loadData = (locale: string) => {
  return queryContent("/homepage").where({ _locale: locale }).findOne();
};

const { locale } = useI18n();
const { data } = useAsyncData(`/${locale}`, () => loadData(locale.value), {
  watch: [locale]
});
</script>
