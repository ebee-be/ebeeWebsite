<template>
  <ServicesHero v-if="data?.hero" v-bind="data?.hero" />
  <template v-if="data?.services" v-for="(service, idx) in data.services">
    <ServiceListRight v-if="service.isRightSection" v-bind="service" />
    <ServiceListLeft v-else v-bind="service" />
  </template>
</template>

<script setup lang="ts">
import ServicesHero from "@/components/pages/services/ServicesHero.vue";
import ServiceListLeft from "@/components/pages/services/ServiceListLeft.vue";
import ServiceListRight from "@/components/pages/services/ServiceListRight.vue";

definePageMeta({ layout: "default" });

const loadData = (locale: string) => {
  return queryContent("/services").where({ _locale: locale }).findOne();
};

const { locale } = useI18n();
const { data } = useAsyncData(`/${locale}`, () => loadData(locale.value), {
  watch: [locale]
});
</script>
